import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      const { data: { user } } = await supabase.auth.getUser();
      
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
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            EduBattle
          </h1>
          <div className="flex gap-2">
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Card */}
        <Card className="p-6 mb-8 bg-gradient-card">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Selamat Datang, {profile?.username}!
              </h2>
              <p className="text-muted-foreground">Kelas {profile?.class}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-6 h-6 text-accent" />
                <span className="text-2xl font-bold">Level {profile?.level}</span>
              </div>
              <p className="text-sm text-muted-foreground">{profile?.xp} XP</p>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="text-center">
              <Swords className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">{profile?.total_battles}</p>
              <p className="text-muted-foreground">Total Battle</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <Trophy className="w-8 h-8 text-success mx-auto mb-2" />
              <p className="text-3xl font-bold">{profile?.wins}</p>
              <p className="text-muted-foreground">Menang</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-3xl font-bold">{profile?.losses}</p>
              <p className="text-muted-foreground">Kalah</p>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/game" className="block">
            <Card className="p-6 hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer">
              <Swords className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Battle Mode</h3>
              <p className="text-muted-foreground mb-4">
                Cari lawan dan mulai battle!
              </p>
              <Button variant="gaming" className="w-full">
                Mulai Battle
              </Button>
            </Card>
          </Link>

          <Link to="/materi" className="block">
            <Card className="p-6 hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Materi Pelajaran</h3>
              <p className="text-muted-foreground mb-4">
                Akses materi pembelajaran
              </p>
              <Button variant="hero" className="w-full">
                Lihat Materi
              </Button>
            </Card>
          </Link>

          <Link to="/leaderboard" className="block">
            <Card className="p-6 hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer">
              <Trophy className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-bold mb-2">Leaderboard</h3>
              <p className="text-muted-foreground mb-4">
                Lihat ranking pemain
              </p>
              <Button variant="success" className="w-full">
                Lihat Ranking
              </Button>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
