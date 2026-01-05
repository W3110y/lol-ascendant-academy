import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, TrendingUp, Star } from "lucide-react";
import { championsData } from "@/data/champions";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FreeRotation } from "@/components/FreeRotation";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { useDDragonUrls } from "@/hooks/useDDragon";
import { normalizeChampionId } from "@/lib/ddragon";

const Index = () => {
  const { getChampionSplash, version } = useDDragonUrls();
  
  const modules = [
    {
      title: "Fundamentos",
      description: "Aprende los conceptos básicos del juego, el mapa y cómo funciona todo",
      icon: "📚",
      link: "/fundamentos",
      color: "border-lol-blue/30 hover:border-lol-blue",
    },
    {
      title: "Campeones",
      description: "Descubre los mejores campeones para principiantes y sus habilidades",
      icon: "⚔️",
      link: "/campeones",
      color: "border-lol-gold/30 hover:border-lol-gold",
    },
    {
      title: "Roles",
      description: "Entiende los 5 roles del juego y encuentra el que mejor se adapta a ti",
      icon: "🎯",
      link: "/roles",
      color: "border-accent/30 hover:border-accent",
    },
  ];

  // Champion of the week (beginner-friendly)
  const championOfWeek = championsData.find(c => c.difficulty === "Fácil");

  // Most popular guides
  const popularGuides = [
    { title: "Tu Primera Partida", link: "/fundamentos/primera-partida", icon: BookOpen, views: "2.5k" },
    { title: "Conceptos Básicos", link: "/fundamentos/conceptos-basicos", icon: Star, views: "1.8k" },
    { title: "Visión y Wards", link: "/conceptos-intermedios/vision", icon: TrendingUp, views: "1.2k" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Partners Section */}
      <PartnersSection />
      
      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Popular Guides Section */}
      <section className="container mx-auto px-4 py-12 -mt-8">
        <Card className="border-accent/20 shadow-xl">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-accent" />
              <CardTitle className="text-2xl">Lo Más Popular Esta Semana</CardTitle>
            </div>
            <CardDescription>Las guías más visitadas por principiantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {popularGuides.map((guide, index) => (
                <Link key={index} to={guide.link}>
                  <Card className="border-accent/10 hover:border-accent/40 transition-all hover:shadow-md h-full">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <guide.icon className="w-8 h-8 text-accent flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{guide.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{guide.views} vistas</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Free Rotation */}
      <FreeRotation />

      {/* Champion of the Week */}
      {championOfWeek && (
        <section className="container mx-auto px-4 py-12">
          <Card className="border-accent/20 bg-gradient-card overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <Badge className="bg-accent/20 text-accent border-accent/40">Recomendado</Badge>
              </div>
              <CardTitle className="text-3xl">Campeón de la Semana para Principiantes</CardTitle>
              <CardDescription className="text-base">Perfecto para empezar tu aventura en LoL</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-4xl font-bold text-foreground mb-2">{championOfWeek.name}</h3>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline" className="border-accent/40">{championOfWeek.role[0]}</Badge>
                      <Badge variant="outline" className="border-green-500/40 text-green-600 dark:text-green-400">
                        {championOfWeek.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg">{championOfWeek.description}</p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-accent mb-2">¿Por qué es bueno para principiantes?</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ Mecánicas sencillas y fáciles de aprender</li>
                      <li>✓ Habilidades directas y predecibles</li>
                      <li>✓ Ideal para aprender los fundamentos del juego</li>
                    </ul>
                  </div>
                  <Link to={`/campeones/${championOfWeek.id}`}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Ver Guía Completa →
                    </Button>
                  </Link>
                </div>
                <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
                  {version ? (
                    <img 
                      src={getChampionSplash(normalizeChampionId(championOfWeek.id))} 
                      alt={championOfWeek.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center">
                      <span className="text-muted-foreground">Cargando...</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Quick Access / Most Searched Section */}
      <section className="container mx-auto px-4 py-12 bg-muted/30">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            Lo Más Buscado por Principiantes
          </h2>
          <p className="text-lg text-muted-foreground">
            Acceso rápido a las guías más útiles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <Link key={index} to={module.link}>
              <Card className={`h-full transition-all hover:shadow-xl hover:-translate-y-1 ${module.color}`}>
                <CardHeader>
                  <div className="text-5xl mb-3">{module.icon}</div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-accent hover:text-accent/80 group">
                    Explorar <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
