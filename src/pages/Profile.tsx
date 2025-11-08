import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Swords, BookOpen, TrendingUp, ArrowLeft } from "lucide-react";
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

const Profile = () => {
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
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  const winRate = profile && profile.total_battles > 0
    ? ((profile.wins / profile.total_battles) * 100).toFixed(1)
    : "0";

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </Button>

        <Card className="p-8 mb-6 bg-gradient-card">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center text-white text-5xl font-bold">
              {profile?.username.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{profile?.username}</h1>
              <p className="text-xl text-muted-foreground mb-4">{profile?.full_name}</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="px-4 py-2 text-lg bg-gradient-hero">
                  Level {profile?.level}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-lg">
                  Kelas {profile?.class}
                </Badge>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>{profile?.xp} XP Total</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6 text-center">
            <Swords className="w-10 h-10 text-primary mx-auto mb-3" />
            <p className="text-4xl font-bold mb-2">{profile?.total_battles}</p>
            <p className="text-muted-foreground">Total Battle</p>
          </Card>

          <Card className="p-6 text-center">
            <Trophy className="w-10 h-10 text-success mx-auto mb-3" />
            <p className="text-4xl font-bold mb-2">{profile?.wins}</p>
            <p className="text-muted-foreground">Kemenangan</p>
          </Card>

          <Card className="p-6 text-center">
            <BookOpen className="w-10 h-10 text-destructive mx-auto mb-3" />
            <p className="text-4xl font-bold mb-2">{profile?.losses}</p>
            <p className="text-muted-foreground">Kekalahan</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Statistik</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Win Rate</span>
              <span className="text-2xl font-bold text-success">{winRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">XP per Battle</span>
              <span className="text-2xl font-bold">
                {profile && profile.total_battles > 0
                  ? Math.round(profile.xp / profile.total_battles)
                  : 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Progress ke Level {(profile?.level || 0) + 1}</span>
              <span className="text-2xl font-bold text-accent">
                {profile?.xp ? profile.xp % 100 : 0}/100 XP
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
