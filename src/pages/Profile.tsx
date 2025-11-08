import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  const winRate =
    profile && profile.total_battles > 0
      ? ((profile.wins / profile.total_battles) * 100).toFixed(1)
      : "0";

  const xpForNextLevel = (profile?.xp || 0) % 100;
  const xpPerBattle =
    profile && profile.total_battles > 0
      ? Math.round(profile.xp / profile.total_battles)
      : 0;
  const nextLevel = (profile?.level || 0) + 1;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Dashboard
          </Button>
        </div>

        <Card className="p-6 md:p-8 mb-6 bg-gradient-card shadow-card-hover">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center text-white text-5xl font-bold shadow-lg flex-shrink-0">
              {profile?.username.charAt(0).toUpperCase()}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{profile?.username}</h1>
              <p className="text-2xl text-muted-foreground mb-4">
                {profile?.full_name}
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                <Badge className="px-4 py-2 text-base bg-gradient-hero shadow-md">
                  Level {profile?.level}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  Kelas {profile?.class}
                </Badge>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 text-lg text-muted-foreground font-medium">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>{profile?.xp} XP Total</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
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
                Kemenangan
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
                Kekalahan
              </CardTitle>
              <BookOpen className="w-5 h-5 text-destructive" />
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{profile?.losses}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Statistik Performa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">Win Rate</span>
                <span className="text-3xl font-bold text-success">
                  {winRate}%
                </span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-lg text-muted-foreground">
                  XP per Battle
                </span>
                <span className="text-3xl font-bold">{xpPerBattle}</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-lg text-muted-foreground">
                  Progress ke Level {nextLevel}
                </span>
                <span className="text-2xl font-bold text-accent">
                  {xpForNextLevel} / 100 XP
                </span>
              </div>
              <Progress value={xpForNextLevel} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;