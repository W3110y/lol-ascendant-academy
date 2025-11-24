import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-banner.jpg";
import { BookOpen, Users, TrendingUp, Star, Award, Sparkles } from "lucide-react";
import { championsData } from "@/data/champions";

const Index = () => {
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

  // Learning phases
  const learningPhases = [
    {
      phase: "Fase 1",
      title: "Primeros Pasos",
      description: "Lo esencial para empezar",
      icon: "🎮",
      color: "border-lol-blue/30 hover:border-lol-blue bg-lol-blue/5",
      modules: [
        { title: "Conceptos Básicos", link: "/fundamentos/conceptos-basicos", icon: BookOpen },
        { title: "Tu Primera Partida", link: "/fundamentos/primera-partida", icon: Star },
        { title: "Encuentra tu Campeón", link: "/quiz-campeones", icon: Users },
      ]
    },
    {
      phase: "Fase 2",
      title: "Conviértete en Invocador",
      description: "Profundiza en el juego",
      icon: "⚔️",
      color: "border-lol-gold/30 hover:border-lol-gold bg-lol-gold/5",
      modules: [
        { title: "Todos los Campeones", link: "/campeones", icon: Users },
        { title: "Entender los Roles", link: "/roles", icon: TrendingUp },
        { title: "Glosario de Términos", link: "/glosario", icon: BookOpen },
      ]
    },
    {
      phase: "Fase 3",
      title: "Domina la Grieta",
      description: "Conceptos avanzados",
      icon: "🏆",
      color: "border-accent/30 hover:border-accent bg-accent/5",
      modules: [
        { title: "Visión y Control", link: "/conceptos-intermedios/vision", icon: TrendingUp },
        { title: "Objetivos Neutrales", link: "/conceptos-intermedios/objetivos-neutrales", icon: Star },
        { title: "Ver Todo", link: "/conceptos-intermedios", icon: Award },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26, 31, 58, 0.85), rgba(26, 31, 58, 0.95)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/40 text-lg px-5 py-2 animate-fade-in">
              <Sparkles className="w-5 h-5 mr-2 inline" />
              Tu Academia de la Grieta
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.1s' }}>
              ¿Eres nuevo en League of Legends?
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Empieza aquí. Guías paso a paso, campeones fáciles y todo lo que necesitas para dominar la Grieta del Invocador.
            </p>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Un camino de aprendizaje por fases diseñado para llevarte desde cero hasta convertirte en un invocador competente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/fundamentos/primera-partida">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 shadow-lg hover-scale">
                  <Award className="w-5 h-5 mr-2" />
                  ¡Empieza tu Aventura Aquí!
                </Button>
              </Link>
              <Link to="/quiz-campeones">
                <Button size="lg" variant="outline" className="border-accent/40 text-primary-foreground hover:bg-accent/10 font-semibold text-lg px-10">
                  <Users className="w-5 h-5 mr-2" />
                  Encuentra tu Estilo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Phases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Tu Camino de Aprendizaje
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sigue estas fases para convertirte en un maestro de la Grieta del Invocador
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {learningPhases.map((phase, index) => (
            <Card key={index} className={`transition-all hover:shadow-xl hover:-translate-y-1 ${phase.color}`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-5xl">{phase.icon}</div>
                  <div>
                    <Badge variant="outline" className="mb-2 border-accent/40">{phase.phase}</Badge>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {phase.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {phase.modules.map((module, idx) => (
                  <Link key={idx} to={module.link}>
                    <Button variant="ghost" className="w-full justify-start text-left hover:bg-accent/10 group">
                      <module.icon className="w-5 h-5 mr-3 text-accent group-hover:scale-110 transition-transform" />
                      <span className="flex-1">{module.title}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </Button>
                  </Link>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
                  <Link to={`/campeones/${championOfWeek.name.toLowerCase()}`}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Ver Guía Completa →
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center bg-muted rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏆</div>
                    <p className="text-muted-foreground">Imagen del campeón</p>
                  </div>
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
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-hero text-primary-foreground border-0 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl mb-4">
              🎮 Empieza tu Viaje como Invocador
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              No importa si nunca has jugado un MOBA antes. Nuestras guías te llevarán paso a paso 
              desde lo más básico hasta convertirte en un jugador competente. ¡Únete a millones de 
              invocadores en todo el mundo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fundamentos">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Comenzar con los Fundamentos
                </Button>
              </Link>
              <Link to="/recursos">
                <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                  <Users className="w-5 h-5 mr-2" />
                  Únete a la Comunidad
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
