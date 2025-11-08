import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  const [class10Players, setClass10Players] = useState<Player[]>([]);
  const [class11Players, setClass11Players] = useState<Player[]>([]);
  const [class12Players, setClass12Players] = useState<Player[]>([]);
  const [userClass, setUserClass] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("class")
          .eq("id", user.id)
          .single();
        if (profile) setUserClass(profile.class);
      }

      const fetchGlobal = supabase
        .from("profiles")
        .select("*")
        .order("xp", { ascending: false })
        .limit(50);

      const fetchClass10 = supabase
        .from("profiles")
        .select("*")
        .eq("class", "10")
        .order("xp", { ascending: false })
        .limit(50);

      const fetchClass11 = supabase
        .from("profiles")
        .select("*")
        .eq("class", "11")
        .order("xp", { ascending: false })
        .limit(50);

      const fetchClass12 = supabase
        .from("profiles")
        .select("*")
        .eq("class", "12")
        .order("xp", { ascending: false })
        .limit(50);

      const [
        globalResult,
        class10Result,
        class11Result,
        class12Result,
      ] = await Promise.all([
        fetchGlobal,
        fetchClass10,
        fetchClass11,
        fetchClass12,
      ]);

      if (globalResult.error) throw globalResult.error;
      setGlobalPlayers(globalResult.data || []);

      if (class10Result.error) throw class10Result.error;
      setClass10Players(class10Result.data || []);

      if (class11Result.error) throw class11Result.error;
      setClass11Players(class11Result.data || []);

      if (class12Result.error) throw class12Result.error;
      setClass12Players(class12Result.data || []);
    } catch (error: any) {
      toast.error("Gagal memuat leaderboard");
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-8 h-8 text-accent" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-500" />;
      case 3:
        return <Award className="w-8 h-8 text-amber-700" />;
      default:
        return (
          <span className="text-xl font-bold text-muted-foreground w-8 h-8 flex items-center justify-center">
            {rank}
          </span>
        );
    }
  };

  const PlayerRow = ({ player, rank }: { player: Player; rank: number }) => {
    const winRate =
      player.total_battles > 0
        ? ((player.wins / player.total_battles) * 100).toFixed(1)
        : "0";

    return (
      <div
        className={`flex items-center p-4 rounded-lg bg-card border ${
          rank <= 3
            ? "bg-gradient-card shadow-sm border-primary/20"
            : "border-transparent"
        } transition-all`}
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 text-center flex-shrink-0">
            {getRankIcon(rank)}
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">{player.username}</p>
            <p className="text-sm text-muted-foreground">Kelas {player.class}</p>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-3 gap-4 text-sm w-52 text-center">
          <div>
            <Badge variant="secondary" className="font-semibold">
              Level {player.level}
            </Badge>
          </div>
          <div>
            <p className="font-bold text-primary text-lg">{player.xp}</p>
            <p className="text-xs text-muted-foreground">XP</p>
          </div>
          <div>
            <p className="font-bold text-success text-lg">{winRate}%</p>
            <p className="text-xs text-muted-foreground">Win Rate</p>
          </div>
        </div>
        <div className="sm:hidden text-center ml-4">
          <p className="font-bold text-primary text-lg">{player.xp}</p>
          <p className="text-xs text-muted-foreground">XP</p>
        </div>
      </div>
    );
  };

  const renderPlayerList = (players: Player[]) => {
    if (players.length === 0) {
      return (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">
              Belum ada data untuk leaderboard ini
            </p>
          </CardContent>
        </Card>
      );
    }
    return (
      <div className="space-y-3">
        {players.map((player, index) => (
          <PlayerRow key={player.id} player={player} rank={index + 1} />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Lihat ranking pemain terbaik di EduBattle
          </p>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto py-2 md:h-10">
            <TabsTrigger value="global">🌍 Global</TabsTrigger>
            <TabsTrigger value="10">
              Kelas 10 {userClass === "10" && "(Anda)"}
            </TabsTrigger>
            <TabsTrigger value="11">
              Kelas 11 {userClass === "11" && "(Anda)"}
            </TabsTrigger>
            <TabsTrigger value="12">
              Kelas 12 {userClass === "12" && "(Anda)"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            {renderPlayerList(globalPlayers)}
          </TabsContent>
          <TabsContent value="10">
            {renderPlayerList(class10Players)}
          </TabsContent>
          <TabsContent value="11">
            {renderPlayerList(class11Players)}
          </TabsContent>
          <TabsContent value="12">
            {renderPlayerList(class12Players)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;