import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Lock, Search, FileText, Video, Image } from "lucide-react";
import { toast } from "sonner";

interface Material {
  id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  topic: string;
  content_type: string;
  required_xp: number;
  views: number;
}

const Materials = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [userXp, setUserXp] = useState(0);

  useEffect(() => {
    loadMaterials();
    loadUserXp();
  }, []);

  const loadMaterials = async () => {
    try {
      const { data, error } = await supabase
        .from("materials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMaterials(data || []);
    } catch (error: any) {
      toast.error("Gagal memuat materi");
    } finally {
      setLoading(false);
    }
  };

  const loadUserXp = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("xp")
        .eq("id", user.id)
        .single();

      if (error) throw error;
      setUserXp(data?.xp || 0);
    } catch (error: any) {
      console.error(error);
    }
  };

  const filteredMaterials = materials.filter(
    (m) =>
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.topic.toLowerCase().includes(search.toLowerCase())
  );

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="w-6 h-6 text-destructive" />;
      case "video":
        return <Video className="w-6 h-6 text-primary" />;
      case "image":
        return <Image className="w-6 h-6 text-accent" />;
      default:
        return <FileText className="w-6 h-6 text-muted-foreground" />;
    }
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
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
            Materi Pelajaran
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Total XP kamu:{" "}
            <span className="font-bold text-primary">{userXp} XP</span>
          </p>

          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Cari materi berdasarkan judul, mata pelajaran, atau topik..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {filteredMaterials.length === 0 ? (
          <Card className="p-12 text-center">
            <BookOpen className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
            <p className="text-2xl font-bold mb-2">Materi Tidak Ditemukan</p>
            <p className="text-xl text-muted-foreground">
              Belum ada materi yang sesuai dengan pencarianmu.
            </p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => {
              const isLocked = material.required_xp > userXp;

              return (
                <Card
                  key={material.id}
                  className="hover:shadow-card-hover transition-all relative flex flex-col"
                >
                  {isLocked && (
                    <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                      <div className="text-center p-4">
                        <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                        <p className="font-bold text-lg">Terkunci</p>
                        <p className="text-muted-foreground">
                          Butuh {material.required_xp} XP untuk membuka
                        </p>
                      </div>
                    </div>
                  )}

                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                    <div className="p-3 rounded-full bg-secondary">
                      {getContentTypeIcon(material.content_type)}
                    </div>
                    <Badge variant="secondary">{material.subject}</Badge>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-3">
                    <CardTitle className="text-xl font-bold line-clamp-2">
                      {material.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {material.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Kelas {material.class}</Badge>
                      <Badge variant="outline">{material.topic}</Badge>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm text-muted-foreground">
                      {material.views} views
                    </span>
                    <Button
                      variant={isLocked ? "outline" : "hero"}
                      disabled={isLocked}
                      className="font-bold"
                    >
                      {isLocked ? "Terkunci" : "Lihat Materi"}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;