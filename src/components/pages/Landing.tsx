import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, BookOpen, Swords, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Belajar Sambil Bermain
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Platform edukasi interaktif dengan battle game yang seru! Kumpulkan XP, naik level, dan unlock materi pelajaran baru.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/auth">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Mulai Sekarang
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <Swords className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Battle Mode</h3>
              <p className="text-muted-foreground">
                Tantang teman untuk battle edukatif dengan kuis, logika, dan matematika
              </p>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Materi Lengkap</h3>
              <p className="text-muted-foreground">
                Akses ribuan materi pelajaran dari berbagai mata pelajaran dan topik
              </p>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <Trophy className="w-12 h-12 text-success mb-4" />
              <h3 className="text-xl font-bold mb-2">Sistem Level</h3>
              <p className="text-muted-foreground">
                Kumpulkan XP dari setiap kemenangan dan naik level untuk unlock reward
              </p>
            </Card>

            <Card className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Leaderboard</h3>
              <p className="text-muted-foreground">
                Bersaing dengan pemain lain dan lihat ranking global serta per kelas
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Memulai Petualangan Belajar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Gabung sekarang dan rasakan pengalaman belajar yang berbeda!
          </p>
          <Link to="/auth">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Daftar Gratis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
