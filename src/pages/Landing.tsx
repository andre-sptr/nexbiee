import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, BookOpen, Swords, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-[90vh] items-center py-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent drop-shadow-sm">
              Belajar Sambil Bermain
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              Platform edukasi interaktif dengan battle game yang seru! Kumpulkan
              XP, naik level, dan unlock materi pelajaran baru.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="text-lg px-10 py-7">
                <Link to="/auth">Mulai Sekarang</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-7">
                <Link to="/auth">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fitur Unggulan Kami
            </h2>
            <p className="text-xl text-muted-foreground">
              Semua yang kamu butuhkan untuk pengalaman belajar yang seru dan
              kompetitif.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/20 rounded-full mb-4">
                  <Swords className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Battle Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Tantang teman untuk battle edukatif dengan kuis, logika, dan
                matematika.
              </CardContent>
            </Card>

            <Card className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/20 rounded-full mb-4">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Materi Lengkap
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Akses ribuan materi pelajaran dari berbagai mata pelajaran dan
                topik.
              </CardContent>
            </Card>

            <Card className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-success/20 rounded-full mb-4">
                  <Trophy className="w-10 h-10 text-success" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Sistem Level & XP
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Kumpulkan XP dari setiap kemenangan dan naik level untuk unlock
                reward.
              </CardContent>
            </Card>

            <Card className="hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/20 rounded-full mb-4">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Bersaing dengan pemain lain dan lihat ranking global serta per
                kelas.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Memulai Petualangan Belajar?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Gabung sekarang dan rasakan pengalaman belajar yang berbeda!
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="text-lg px-10 py-7 font-bold"
          >
            <Link to="/auth">Daftar Gratis</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;