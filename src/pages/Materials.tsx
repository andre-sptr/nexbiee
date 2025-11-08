import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Lock, Search } from "lucide-react";
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
      const { data: { user } } = await supabase.auth.getUser();
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
        return "📄";
      case "video":
        return "🎥";
      case "image":
        return "🖼️";
      default:
        return "📝";
    }
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
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Materi Pelajaran
          </h1>
          <p className="text-muted-foreground mb-6">
            Total XP kamu: <span className="font-bold text-primary">{userXp}</span>
          </p>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Cari materi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredMaterials.length === 0 ? (
          <Card className="p-12 text-center">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">Belum ada materi tersedia</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material) => {
              const isLocked = material.required_xp > userXp;

              return (
                <Card
                  key={material.id}
                  className="p-6 hover:shadow-card-hover transition-all relative"
                >
                  {isLocked && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                      <div className="text-center">
                        <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="font-bold">Butuh {material.required_xp} XP</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{getContentTypeIcon(material.content_type)}</span>
                    <Badge variant="secondary">{material.subject}</Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {material.description}
                  </p>

                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">Kelas {material.class}</Badge>
                    <Badge variant="outline">{material.topic}</Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      👁️ {material.views} views
                    </span>
                    <Button variant={isLocked ? "outline" : "hero"} disabled={isLocked}>
                      Lihat
                    </Button>
                  </div>
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
