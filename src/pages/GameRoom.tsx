import { useState, useEffect } from "react";
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
import { Swords, Trophy, Clock, Brain, BookCopy, Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { RealtimeChannel } from "@supabase/supabase-js";

interface Battle {
  id: string;
  player1_id: string;
  player2_id: string;
  game_type: string;
  opponent_username?: string;
}

const GameRoom = () => {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeBattle, setActiveBattle] = useState<Battle | null>(null);
  const [opponentUsername, setOpponentUsername] = useState("Lawan");

  useEffect(() => {
    let battleChannel: RealtimeChannel | null = null;

    const setupListener = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Kamu harus login untuk bermain");
        navigate("/auth");
        return;
      }
      setCurrentUser(user);

      battleChannel = supabase
        .channel("battles_channel")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "battles",
            filter: `player1_id=eq.${user.id}`,
          },
          (payload) => handleBattleFound(payload.new as Battle)
        )
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "battles",
            filter: `player2_id=eq.${user.id}`,
          },
          (payload) => handleBattleFound(payload.new as Battle)
        )
        .subscribe();
    };

    setupListener();

    return () => {
      if (battleChannel) {
        supabase.removeChannel(battleChannel);
      }
      if (currentUser) {
        supabase
          .from("matchmaking_queue")
          .delete()
          .eq("user_id", currentUser.id);
      }
    };
  }, []);

  useEffect(() => {
    if (!activeBattle || !currentUser) return;

    const opponentId =
      activeBattle.player1_id === currentUser.id
        ? activeBattle.player2_id
        : activeBattle.player1_id;

    const fetchOpponent = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", opponentId)
        .single();

      if (data) {
        setOpponentUsername(data.username);
      }
    };

    fetchOpponent();
  }, [activeBattle, currentUser]);

  const handleBattleFound = async (battle: Battle) => {
    if (!searching) return;

    toast.success("Lawan ditemukan! Game dimulai!");
    setActiveBattle(battle);
    setSearching(false);
    setGameStarted(true);
    await supabase
      .from("matchmaking_queue")
      .delete()
      .eq("user_id", currentUser!.id);
  };

  const startMatchmaking = async () => {
    if (!selectedGame || !currentUser) {
      toast.error("Pilih game dan pastikan kamu login!");
      return;
    }

    setSearching(true);

    const { data: opponents, error } = await supabase
      .from("matchmaking_queue")
      .select("*")
      .eq("game_type", selectedGame)
      .eq("status", "waiting")
      .not("user_id", "eq", currentUser.id)
      .limit(1);

    if (error) {
      toast.error("Gagal mencari lawan: " + error.message);
      setSearching(false);
      return;
    }

    const opponent = opponents && opponents.length > 0 ? opponents[0] : null;

    if (opponent) {
      const { data: newBattle, error: battleError } = await supabase
        .from("battles")
        .insert({
          player1_id: opponent.user_id,
          player2_id: currentUser.id,
          game_type: selectedGame,
          status: "in_progress",
        })
        .select()
        .single();

      if (battleError) {
        toast.error("Gagal membuat battle");
        setSearching(false);
        return;
      }

      await supabase
        .from("matchmaking_queue")
        .delete()
        .eq("id", opponent.id);

      handleBattleFound(newBattle as Battle);
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

      if (insertError) {
        toast.error("Gagal masuk antrean");
        setSearching(false);
        return;
      }

      toast.info(`Mencari lawan untuk ${selectedGame}...`);
    }
  };

  const cancelSearch = async () => {
    if (!currentUser) return;
    setSearching(false);
    await supabase
      .from("matchmaking_queue")
      .delete()
      .eq("user_id", currentUser.id);
    toast.info("Pencarian dibatalkan");
  };

  const gameTypes = [
    {
      name: "Kuis Matematika",
      description: "Adu kecepatan hitung matematika",
      icon: <Brain className="w-8 h-8 text-primary" />,
    },
    {
      name: "Logika & Penalaran",
      description: "Uji kemampuan logika dan problem solving",
      icon: <Brain className="w-8 h-8 text-accent" />,
    },
    {
      name: "Kuis Umum",
      description: "Pertanyaan dari berbagai mata pelajaran",
      icon: <BookCopy className="w-8 h-8 text-success" />,
    },
  ];

  if (gameStarted) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-card shadow-lg">
            <CardHeader className="items-center text-center">
              <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-gaming shadow-md font-bold">
                BATTLE MODE: {selectedGame?.toUpperCase()}
              </Badge>
              <div className="flex justify-between items-center w-full max-w-xl mx-auto pt-4">
                <div className="text-center">
                  <p className="font-bold text-lg">Kamu</p>
                  <p className="text-4xl font-bold text-primary">0</p>
                </div>
                <Swords className="w-12 h-12 text-accent" />
                <div className="text-center">
                  <p className="font-bold text-lg">{opponentUsername}</p>
                  <p className="text-4xl font-bold text-destructive">0</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-2xl font-bold">
                    Soal 1/10
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xl font-bold text-accent">
                    <Clock className="w-6 h-6" />
                    <span>30</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl md:text-3xl font-medium mb-8 text-center">
                    Berapa hasil dari 15 × 8 = ?
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {["120", "130", "110", "140"].map((answer, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="lg"
                        className="h-20 text-2xl font-semibold hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground transition-all"
                      >
                        {answer}
                      </Button>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <p className="text-center text-sm text-muted-foreground mx-auto">
                    Jawab dengan cepat dan tepat untuk mendapatkan poin lebih
                    banyak!
                  </p>
                </CardFooter>
              </Card>
            </CardContent>
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