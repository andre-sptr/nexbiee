import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Swords, Trophy, Clock } from "lucide-react";
import { toast } from "sonner";

const GameRoom = () => {
  const [searching, setSearching] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const startMatchmaking = () => {
    setSearching(true);
    toast.info("Mencari lawan...");
    
    // Simulate matchmaking
    setTimeout(() => {
      setSearching(false);
      setGameStarted(true);
      toast.success("Lawan ditemukan! Game dimulai!");
    }, 3000);
  };

  if (gameStarted) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-gradient-card">
            <div className="text-center mb-8">
              <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-gaming">
                BATTLE MODE: KUIS MATEMATIKA
              </Badge>
              <div className="flex justify-between items-center max-w-xl mx-auto">
                <div>
                  <p className="font-bold">Kamu</p>
                  <p className="text-2xl font-bold text-primary">0</p>
                </div>
                <Swords className="w-12 h-12 text-accent" />
                <div>
                  <p className="font-bold">Lawan</p>
                  <p className="text-2xl font-bold text-destructive">0</p>
                </div>
              </div>
            </div>

            <Card className="p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Soal 1/10</h3>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-bold">30</span>
                </div>
              </div>
              <p className="text-lg mb-6">Berapa hasil dari 15 × 8 = ?</p>
              <div className="grid grid-cols-2 gap-4">
                {["120", "130", "110", "140"].map((answer, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="lg"
                    className="h-16 text-lg hover:bg-primary hover:text-primary-foreground"
                  >
                    {answer}
                  </Button>
                ))}
              </div>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>Jawab dengan cepat dan tepat untuk mendapatkan poin lebih banyak!</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="p-8 text-center">
          <Swords className="w-20 h-20 text-accent mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">
            Battle Mode
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Pilih jenis battle dan temukan lawan!
          </p>

          <div className="grid gap-4 mb-8">
            <Card className="p-6 hover:shadow-card-hover transition-all cursor-pointer border-2 hover:border-primary">
              <h3 className="text-xl font-bold mb-2">🧮 Kuis Matematika</h3>
              <p className="text-muted-foreground">Adu kecepatan hitung matematika</p>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all cursor-pointer border-2 hover:border-primary">
              <h3 className="text-xl font-bold mb-2">🧠 Logika & Penalaran</h3>
              <p className="text-muted-foreground">Uji kemampuan logika dan problem solving</p>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all cursor-pointer border-2 hover:border-primary">
              <h3 className="text-xl font-bold mb-2">📚 Kuis Umum</h3>
              <p className="text-muted-foreground">Pertanyaan dari berbagai mata pelajaran</p>
            </Card>
          </div>

          <Button
            variant="gaming"
            size="lg"
            className="w-full text-lg py-6"
            onClick={startMatchmaking}
            disabled={searching}
          >
            {searching ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                Mencari Lawan...
              </>
            ) : (
              <>
                <Trophy className="w-5 h-5 mr-2" />
                Mulai Cari Lawan
              </>
            )}
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default GameRoom;
