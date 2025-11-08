import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Medal, Award } from "lucide-react";
import { toast } from "sonner";

interface Player {
  id: string;
  username: string;
  class: string;
  level: number;
  xp: number;
  wins: number;
  total_battles: number;
}

const Leaderboard = () => {
  const [globalPlayers, setGlobalPlayers] = useState<Player[]>([]);
  const [classPlayers, setClassPlayers] = useState<Player[]>([]);
  const [userClass, setUserClass] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      // Get user class
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("class")
          .eq("id", user.id)
          .single();
        
        if (profile) setUserClass(profile.class);
      }

      // Get global leaderboard
      const { data: global, error: globalError } = await supabase
        .from("profiles")
        .select("*")
        .order("xp", { ascending: false })
        .limit(50);

      if (globalError) throw globalError;
      setGlobalPlayers(global || []);

      // Get class leaderboard
      if (user) {
        const { data: classData, error: classError } = await supabase
          .from("profiles")
          .select("*")
          .eq("class", userClass)
          .order("xp", { ascending: false })
          .limit(50);

        if (classError) throw classError;
        setClassPlayers(classData || []);
      }
    } catch (error: any) {
      toast.error("Gagal memuat leaderboard");
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-accent" />;
      case 2:
        return <Medal className="w-6 h-6 text-muted-foreground" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-700" />;
      default:
        return <span className="font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const PlayerRow = ({ player, rank }: { player: Player; rank: number }) => {
    const winRate = player.total_battles > 0 
      ? ((player.wins / player.total_battles) * 100).toFixed(1) 
      : "0";

    return (
      <div
        className={`flex items-center justify-between p-4 rounded-lg ${
          rank <= 3 ? "bg-gradient-card shadow-card" : "bg-card"
        } hover:shadow-card-hover transition-all`}
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 text-center">{getRankIcon(rank)}</div>
          <div className="flex-1">
            <p className="font-bold">{player.username}</p>
            <p className="text-sm text-muted-foreground">Kelas {player.class}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="text-center">
            <p className="font-bold text-primary">{player.xp}</p>
            <p className="text-muted-foreground">XP</p>
          </div>
          <div className="text-center">
            <Badge variant="secondary">Level {player.level}</Badge>
          </div>
          <div className="text-center hidden sm:block">
            <p className="font-bold text-success">{winRate}%</p>
            <p className="text-muted-foreground">Win Rate</p>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className="text-muted-foreground">
            Lihat ranking pemain terbaik
          </p>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="global">🌍 Global</TabsTrigger>
            <TabsTrigger value="class">🏫 Kelas {userClass}</TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            <div className="space-y-3">
              {globalPlayers.map((player, index) => (
                <PlayerRow key={player.id} player={player} rank={index + 1} />
              ))}
              {globalPlayers.length === 0 && (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">Belum ada data</p>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="class">
            <div className="space-y-3">
              {classPlayers.map((player, index) => (
                <PlayerRow key={player.id} player={player} rank={index + 1} />
              ))}
              {classPlayers.length === 0 && (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">Belum ada data untuk kelas ini</p>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;
