import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Swords, Trophy, Clock, Brain, BookCopy, Loader2, X, RefreshCw, Home } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { RealtimeChannel } from "@supabase/supabase-js";
import { getQuestionBank, type Question } from "@/lib/questionBank";

interface Battle {
  id: string;
  player1_id: string;
  player2_id: string;
  game_type: string;
  player1_score: number;
  player2_score: number;
  winner_id: string | null;
  status: string;
  questions: number[] | null; 
  opponent_username?: string;
}

const GAME_TIME_LIMIT = 30;
const TOTAL_QUESTIONS = 5;

const GameRoom = () => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeBattle, setActiveBattle] = useState<Battle | null>(null);
  const [battleChannel, setBattleChannel] = useState<RealtimeChannel | null>(null);
  const [opponentUsername, setOpponentUsername] = useState("Lawan");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME_LIMIT);
  const [gameOver, setGameOver] = useState(false);
  const [answerLocked, setAnswerLocked] = useState(false);

  // =================================================================
  // PERBAIKAN 1: 'forceEndGame' (Untuk Player 2)
  // Dipanggil HANYA saat Player 2 menerima broadcast 'game_over'
  // =================================================================
  const forceEndGame = useCallback((payload: {
    player1_score: number;
    player2_score: number;
    winner_id: string | null;
  }) => {
    setGameOver((isAlreadyOver) => {
      if (isAlreadyOver) return true; 

      setPlayer1Score(payload.player1_score);
      setPlayer2Score(payload.player2_score);
      
      if (payload.winner_id === null) {
        toast.info("Hasil Seri! Lawan telah selesai.");
      } else if (payload.winner_id === currentUser?.id) {
        toast.success("Kamu Menang! Lawan telah selesai.");
      } else {
        toast.error("Kamu Kalah! Lawan telah selesai.");
      }
      
      return true;
    });
  }, [currentUser?.id]);

  // =================================================================
  // PERBAIKAN 2: 'endGame' (HANYA UNTUK PLAYER 1)
  // Fungsi ini HANYA boleh dipanggil oleh Player 1 (host)
  // =================================================================
  const endGame = useCallback(async (p1Score: number, p2Score: number) => {
    if (gameOver) return; 
    setGameOver(true);
    
    const isPlayer1 = activeBattle?.player1_id === currentUser?.id;
    
    if (!isPlayer1) return; 

    const finalUserScore = p1Score;
    const finalOpponentScore = p2Score;

    let winner_id = null;
    if (finalUserScore > finalOpponentScore) {
      winner_id = currentUser?.id;
      toast.success("Kamu Menang!");
    } else if (finalUserScore < finalOpponentScore) {
      winner_id = activeBattle?.player2_id;
      toast.error("Kamu Kalah...");
    } else {
      toast.info("Hasil Seri!");
    }

    if (battleChannel) {
      await battleChannel.send({
        type: "broadcast",
        event: "game_over",
        payload: {
          player1_score: p1Score,
          player2_score: p2Score,
          winner_id: winner_id,
        },
      });
    }

    // 1. Update tabel battle (seperti sebelumnya)
    const { error: battleUpdateError } = await supabase
      .from("battles")
      .update({
        player1_score: p1Score,
        player2_score: p2Score,
        winner_id: winner_id,
        status: "completed",
        completed_at: new Date().toISOString(),
      })
      .eq("id", activeBattle!.id);
      
    if (battleUpdateError) {
      toast.error("Gagal menyimpan hasil battle: " + battleUpdateError.message);
    } else {
      // 2. PANGGIL FUNGSI RPC BARU
      // Panggil fungsi di server untuk menghitung XP dan statistik
      const { error: rpcError } = await supabase.rpc('handle_battle_completion', {
        battle_id_input: activeBattle!.id
      });
      
      if (rpcError) {
        toast.error("Gagal memproses XP: " + rpcError.message);
      } else {
        toast.success("XP dan statistik diperbarui!");
      }
    }
      
  }, [currentUser, activeBattle, gameOver, battleChannel]);

  const handleBattleFound = useCallback(async (battle: Battle) => {
    setSearching((currentSearchingState) => {
      if (!currentSearchingState && !battle.id) {
        return false;
      }
      toast.success("Lawan ditemukan! Game dimulai!");
      const questionBank = getQuestionBank(battle.game_type);
      const questionIndices = battle.questions || [];
      const gameQuestions = questionIndices.map(index => questionBank[index]);
      
      setQuestions(gameQuestions);
      setActiveBattle(battle);
      setPlayer1Score(battle.player1_score || 0);
      setPlayer2Score(battle.player2_score || 0);
      setCurrentQuestionIndex(0);
      setTimeLeft(GAME_TIME_LIMIT);
      setGameOver(false);
      setAnswerLocked(false);
      setGameStarted(true);
      return false;
    });
  }, []);

  useEffect(() => {
    const setupUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Kamu harus login untuk bermain");
        navigate("/auth");
        return;
      }
      setCurrentUser(user);
    };
    setupUser();
  }, [navigate]);

  // =================================================================
  // PERBAIKAN 3: Listener Realtime
  // 'game_over' sekarang hanya memanggil 'forceEndGame' jika kita BUKAN Player 1
  // =================================================================
  useEffect(() => {
    if (!currentUser) return;

    const userChannel = supabase
      .channel(`user-battles-${currentUser.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "battles",
          filter: `player1_id=eq.${currentUser.id}`,
        },
        (payload) => {
          handleBattleFound(payload.new as Battle);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "battles",
          filter: `player2_id=eq.${currentUser.id}`,
        },
        (payload) => {
          handleBattleFound(payload.new as Battle);
        }
      )
      .subscribe();
      
    let specificBattleChannel: RealtimeChannel | null = null;
    if (activeBattle) {
      specificBattleChannel = supabase
        .channel(`battle-${activeBattle.id}`)
        .on("broadcast", { event: "correct_answer" }, (payload) => {
          if (payload.player === "player1") {
            setPlayer1Score((prev) => prev + 1);
          } else if (payload.player === "player2") {
            setPlayer2Score((prev) => prev + 1);
          }
        })
        .on("broadcast", { event: "game_over" }, ({ payload }) => {
          // Hanya panggil forceEndGame jika kita BUKAN Player 1
          if (activeBattle?.player1_id !== currentUser.id) {
            forceEndGame(payload); 
          }
        })
        .subscribe();
      setBattleChannel(specificBattleChannel);
    }

    return () => {
      supabase.removeChannel(userChannel);
      if (specificBattleChannel) {
        supabase.removeChannel(specificBattleChannel);
      }
    };
  }, [currentUser, activeBattle, handleBattleFound, forceEndGame]);

  useEffect(() => {
    if (searching || !currentUser) return;
    const cleanupQueue = async () => {
      await supabase
        .from("matchmaking_queue")
        .delete()
        .eq("user_id", currentUser.id);
    };
    cleanupQueue();
    return () => {
      if (currentUser) {
        supabase
          .from("matchmaking_queue")
          .delete()
          .eq("user_id", currentUser.id);
      }
    };
  }, [searching, currentUser]);

  useEffect(() => {
    if (!activeBattle || !currentUser) return;
    const opponentId =
      activeBattle.player1_id === currentUser.id
        ? activeBattle.player2_id
        : activeBattle.player1_id;
    const fetchOpponent = async () => {
      const { data } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", opponentId)
        .single();
      if (data) setOpponentUsername(data.username);
    };
    fetchOpponent();
  }, [activeBattle, currentUser]);

  // =================================================================
  // PERBAIKAN 4: 'handleNextQuestion'
  // Sekarang hanya Player 1 yang memanggil endGame. Player 2 hanya menunggu.
  // =================================================================
  const handleNextQuestion = useCallback(() => {
    if (gameOver) return;
    
    setAnswerLocked(false);
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex >= questions.length) {
      // Soal habis
      const isPlayer1 = activeBattle?.player1_id === currentUser?.id;
      
      // HANYA Player 1 yang boleh memanggil endGame
      if (isPlayer1) {
        // Panggil endGame dengan skor saat ini
        endGame(player1Score, player2Score);
      } else {
        // Player 2 hanya set state-nya sendiri dan menunggu P1 broadcast
        setGameOver(true);
        toast.info("Kamu telah selesai. Menunggu hasil...");
      }
    } else {
      // Lanjut ke soal berikutnya
      setCurrentQuestionIndex(nextQuestionIndex);
      setTimeLeft(GAME_TIME_LIMIT);
    }
  }, [currentQuestionIndex, questions.length, player1Score, player2Score, endGame, gameOver, activeBattle, currentUser]);

  useEffect(() => {
    if (!gameStarted || gameOver || answerLocked) return;
    if (timeLeft <= 0) {
      handleNextQuestion();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [gameStarted, gameOver, answerLocked, timeLeft, handleNextQuestion]);

  const handleAnswerClick = async (answer: string) => {
    if (answerLocked || gameOver || !currentUser || !activeBattle || !battleChannel) return;

    setAnswerLocked(true);
    const isCorrect = questions[currentQuestionIndex].correctAnswer === answer;
    
    if (isCorrect) {
      toast.success("Jawaban Benar!");
      
      const isPlayer1 = activeBattle.player1_id === currentUser.id;
      const playerKey = isPlayer1 ? "player1" : "player2";

      if (isPlayer1) {
        setPlayer1Score((prev) => prev + 1);
      } else {
        setPlayer2Score((prev) => prev + 1);
      }

      await battleChannel.send({
        type: "broadcast",
        event: "correct_answer",
        player: playerKey,
      });
    } else {
      toast.error("Jawaban Salah!");
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const startMatchmaking = async () => {
    if (!selectedGame || !currentUser) {
      toast.error("Pilih game dan pastikan kamu login!");
      return;
    }
    setSearching(true);

    try {
      const { data: opponents, error } = await supabase
        .from("matchmaking_queue")
        .select("*")
        .eq("game_type", selectedGame)
        .eq("status", "waiting")
        .not("user_id", "eq", currentUser.id)
        .limit(1);
      if (error) throw error;
      const opponent = opponents && opponents.length > 0 ? opponents[0] : null;

      if (opponent) {
        const questionBank = getQuestionBank(selectedGame);
        const questionIndices = Array.from(Array(questionBank.length).keys())
          .sort(() => 0.5 - Math.random())
          .slice(0, TOTAL_QUESTIONS);

        const { data: newBattle, error: battleError } = await supabase
          .from("battles")
          .insert({
            player1_id: opponent.user_id,
            player2_id: currentUser.id,
            game_type: selectedGame,
            status: "in_progress",
            player1_score: 0,
            player2_score: 0,
            questions: questionIndices,
          })
          .select()
          .single();
        if (battleError) throw battleError;
        
        await supabase
          .from("matchmaking_queue")
          .delete()
          .eq("id", opponent.id);
      } else {
        await supabase
          .from("matchmaking_queue")
          .delete()
          .eq("user_id", currentUser.id);
        const { error: insertError } = await supabase
          .from("matchmaking_queue")
          .insert({
            user_id: currentUser.id,
            game_type: selectedGame,
            status: "waiting",
          });
        if (insertError) throw insertError;
        toast.info(`Mencari lawan untuk ${selectedGame}...`);
      }
    } catch (error: any) {
      toast.error("Terjadi kesalahan matchmaking: " + error.message);
      setSearching(false);
    }
  };

  const cancelSearch = async () => {
    if (!currentUser) return;
    setSearching(false); 
    toast.info("Pencarian dibatalkan");
  };

  const gameTypes = [
    { name: "Kuis Matematika", description: "Adu kecepatan hitung matematika", icon: <Brain className="w-8 h-8 text-primary" /> },
    { name: "Logika & Penalaran", description: "Uji kemampuan logika dan problem solving", icon: <Brain className="w-8 h-8 text-accent" /> },
    { name: "Kuis Umum", description: "Pertanyaan dari berbagai mata pelajaran", icon: <BookCopy className="w-8 h-8 text-success" /> },
  ];
  
  // =================================================================
  // RENDER LOGIC (JSX)
  // =================================================================

  if (gameStarted && !gameOver) {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-16 h-16 text-primary animate-spin" />
        </div>
      );
    }

    const isPlayer1 = activeBattle?.player1_id === currentUser?.id;
    const myScore = isPlayer1 ? player1Score : player2Score;
    const opponentScore = isPlayer1 ? player2Score : player1Score;

    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-card shadow-lg">
            <CardHeader className="items-center text-center">
              <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-gaming shadow-md font-bold">
                BATTLE MODE: {selectedGame?.toUpperCase() || activeBattle?.game_type.toUpperCase()}
              </Badge>
              <div className="flex justify-between items-center w-full max-w-xl mx-auto pt-4">
                <div className="text-center">
                  <p className="font-bold text-lg">Kamu</p>
                  <p className="text-4xl font-bold text-primary">{myScore}</p>
                </div>
                <Swords className="w-12 h-12 text-accent" />
                <div className="text-center">
                  <p className="font-bold text-lg">{opponentUsername}</p>
                  <p className="text-4xl font-bold text-destructive">{opponentScore}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-2xl font-bold">
                    Soal {currentQuestionIndex + 1}/{questions.length}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xl font-bold text-accent">
                    <Clock className="w-6 h-6" />
                    <span>{timeLeft}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl md:text-3xl font-medium mb-8 text-center min-h-[100px]">
                    {currentQuestion.question}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {currentQuestion.answers.map((answer, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="lg"
                        disabled={answerLocked || gameOver}
                        onClick={() => handleAnswerClick(answer)}
                        className={cn(
                          "h-20 text-2xl font-semibold transition-all",
                          answerLocked && answer === currentQuestion.correctAnswer && "bg-success text-success-foreground",
                          answerLocked && answer !== currentQuestion.correctAnswer && "bg-destructive text-destructive-foreground opacity-60"
                        )}
                      >
                        {answer}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (gameOver) {
    const isPlayer1 = activeBattle?.player1_id === currentUser?.id;
    const myScore = isPlayer1 ? player1Score : player2Score;
    const opponentScore = isPlayer1 ? player2Score : player1Score;
    
    let resultMessage = "Hasil Seri!";
    if (myScore > opponentScore) resultMessage = "Kamu Menang!";
    if (myScore < opponentScore) resultMessage = "Kamu Kalah...";

    return (
      <div className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
        <div className="container mx-auto max-w-md">
          <Card className="shadow-lg text-center">
            <CardHeader>
              <Trophy className="w-20 h-20 text-accent mx-auto mb-6" />
              <CardTitle className="text-4xl font-bold mb-4">
                Game Selesai!
              </CardTitle>
              <CardDescription className="text-2xl text-foreground font-bold">
                {resultMessage}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around items-center text-center my-8">
                <div>
                  <p className="font-bold text-lg">Kamu</p>
                  <p className="text-5xl font-bold text-primary">{myScore}</p>
                </div>
                <Swords className="w-10 h-10 text-muted-foreground" />
                <div>
                  <p className="font-bold text-lg">{opponentUsername}</p>
                  <p className="text-5xl font-bold text-destructive">{opponentScore}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button
                variant="gaming"
                size="lg"
                className="w-full text-lg py-7 font-bold"
                onClick={() => {
                  setGameOver(false);
                  setGameStarted(false);
                  setSelectedGame(null);
                  setActiveBattle(null);
                }}
              >
                <RefreshCw className="w-5 h-5 mr-3" />
                Main Lagi
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full text-lg py-7"
                onClick={() => navigate("/dashboard")}
              >
                <Home className="w-5 h-5 mr-3" />
                Kembali ke Dashboard
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex items-center justify-center">
      <div className="container mx-auto max-w-2xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center items-center">
            <Swords className="w-20 h-20 text-accent mb-6" />
            <CardTitle className="text-4xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">
              Battle Mode
            </CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              {searching
                ? "Sedang mencari lawan..."
                : "Pilih jenis battle dan temukan lawan!"}
            </CardDescription>
          </CardHeader>

          {!searching && (
            <CardContent className="grid gap-4 mb-4">
              {gameTypes.map((game) => (
                <Card
                  key={game.name}
                  onClick={() => setSelectedGame(game.name)}
                  className={cn(
                    "p-6 hover:shadow-card-hover transition-all cursor-pointer border-2",
                    selectedGame === game.name
                      ? "border-primary shadow-card-hover scale-[1.03]"
                      : "hover:border-primary/50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    {game.icon}
                    <div>
                      <h3 className="text-xl font-bold mb-1">{game.name}</h3>
                      <p className="text-muted-foreground">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </CardContent>
          )}

          {searching && (
            <CardContent className="flex flex-col items-center justify-center h-64">
              <Loader2 className="w-24 h-24 text-primary animate-spin" />
              <p className="text-xl text-muted-foreground mt-6">
                Mencari lawan untuk {selectedGame}...
              </p>
            </CardContent>
          )}

          <CardFooter>
            {!searching ? (
              <Button
                variant="gaming"
                size="lg"
                className="w-full text-lg py-7 font-bold"
                onClick={startMatchmaking}
                disabled={!selectedGame}
              >
                <Trophy className="w-5 h-5 mr-3" />
                {selectedGame
                  ? `Cari Lawan - ${selectedGame}`
                  : "Pilih Jenis Game"}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                className="w-full text-lg py-7 font-bold"
                onClick={cancelSearch}
              >
                <X className="w-5 h-5 mr-3" />
                Batal Mencari
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GameRoom;