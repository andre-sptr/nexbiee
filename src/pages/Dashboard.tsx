import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Swords, BookOpen, LogOut, User } from "lucide-react";
import { toast } from "sonner";

interface Profile {
  username: string;
  full_name: string;
  class: string;
  level: number;
  xp: number;
  total_battles: number;
  wins: number;
  losses: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error: any) {
      toast.error("Gagal memuat profil");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    toast.success("Berhasil logout");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            EduBattle
          </h1>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="icon">
              <Link to="/profile">
                <User className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8 bg-gradient-card shadow-card-hover">
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="text-3xl font-bold">
                Selamat Datang, {profile?.username}!
              </CardTitle>
              <p className="text-xl text-muted-foreground pt-1">
                Kelas {profile?.class}
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="flex items-center gap-2 justify-end">
                <Trophy className="w-6 h-6 text-accent" />
                <span className="text-2xl font-bold">
                  Level {profile?.level}
                </span>
              </div>
              <p className="text-base text-muted-foreground text-right">
                {profile?.xp} XP
              </p>
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Battle
              </CardTitle>
              <Swords className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{profile?.total_battles}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Menang
              </CardTitle>
              <Trophy className="w-5 h-5 text-success" />
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{profile?.wins}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Kalah
              </CardTitle>
              <BookOpen className="w-5 h-5 text-destructive" />
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{profile?.losses}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/game" className="block">
            <Card className="hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full">
              <CardHeader>
                <Swords className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl font-bold">
                  Battle Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Cari lawan dan mulai battle!
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="gaming" className="w-full font-bold">
                  Mulai Battle
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link to="/materi" className="block">
            <Card className="hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold">
                  Materi Pelajaran
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Akses materi pembelajaran
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="hero" className="w-full font-bold">
                  Lihat Materi
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link to="/leaderboard" className="block">
            <Card className="hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full">
              <CardHeader>
                <Trophy className="w-12 h-12 text-success mb-4" />
                <CardTitle className="text-xl font-bold">
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">Lihat ranking pemain</p>
              </CardContent>
              <CardFooter>
                <Button variant="success" className="w-full font-bold">
                  Lihat Ranking
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;