import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import mapImage from "@/assets/map-fundamentals.jpg";
import { 
  BookOpen, 
  Gamepad2, 
  Sparkles, 
  Map, 
  Swords, 
  Coins, 
  Store, 
  Target,
  Trophy,
  ArrowRight,
  Users,
  Zap,
  Shield,
  ChevronRight
} from "lucide-react";

const Fundamentos = () => {
  const modules = [
    {
      title: "Tu Primera Partida",
      description: "Descarga, instalación y tu primer partido paso a paso",
      icon: Gamepad2,
      link: "/fundamentos/primera-partida",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Conceptos Básicos",
      description: "Súbditos, farmeo, oro, tienda, buffs y estructuras del mapa",
      icon: BookOpen,
      link: "/fundamentos/conceptos-basicos",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const features = [
    {
      icon: Map,
      title: "Mapa Interactivo",
      description: "Aprende cada zona de la Grieta del Invocador"
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "5v5 donde la cooperación es clave para ganar"
    },
    {
      icon: Zap,
      title: "Progresión",
      description: "Sube de nivel y hazte más fuerte durante la partida"
    },
    {
      icon: Shield,
      title: "Estrategia",
      description: "Cada decisión cuenta para la victoria final"
    }
  ];

  const concepts = [
    {
      title: "Súbditos (Minions)",
      description: "Los súbditos son soldaditos que avanzan automáticamente por las calles. Dar el último golpe (farmear) te da oro y experiencia.",
      icon: Swords,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Oro y Experiencia",
      description: "El oro se usa para comprar objetos que mejoran tu campeón. La experiencia te hace subir de nivel y mejorar tus habilidades.",
      icon: Coins,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "La Tienda",
      description: "Accede a la tienda para comprar objetos que aumentan tu poder, defensa, velocidad y más. Los objetos son cruciales para ganar.",
      icon: Store,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Objetivos",
      description: "Destruye torretas, inhibidores y finalmente el Nexo enemigo para ganar la partida. Trabaja en equipo para conseguirlo.",
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
                <BookOpen className="w-4 h-4 mr-2" />
                Guía para Principiantes
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Fundamentos del Juego
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Aprende los conceptos básicos que todo invocador debe dominar para comenzar su aventura en la Grieta del Invocador
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/fundamentos/primera-partida">
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    Empezar Tutorial
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#concepts">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Ver Conceptos
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Map Section */}
        <ScrollAnimation animation="fade-up">
          <Card className="mb-16 overflow-hidden border-accent/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Map className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">La Grieta del Invocador</CardTitle>
                  <CardDescription className="text-base">
                    El mapa donde todas las batallas tienen lugar
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <img 
                    src={mapImage} 
                    alt="Mapa de la Grieta del Invocador" 
                    className="rounded-lg w-full h-auto shadow-lg transition-transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Las Tres Calles
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">Top</Badge>
                        <span>Calle superior, generalmente para luchadores solitarios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">Mid</Badge>
                        <span>Calle central, para campeones con alto daño</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Badge variant="outline" className="mt-0.5">Bot</Badge>
                        <span>Calle inferior, donde van el tirador y el soporte</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <h3 className="text-xl font-semibold mb-3 text-accent flex items-center gap-2">
                      <Map className="w-5 h-5" />
                      La Jungla
                    </h3>
                    <p className="text-muted-foreground">
                      El área entre las calles llena de monstruos neutrales. El junglero ayuda a todas las calles 
                      y captura objetivos importantes como el Dragón y el Barón Nashor.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Learning Modules */}
        <section className="mb-16">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-10">
              <Badge className="mb-4 px-4 py-2 bg-accent/10 text-accent border-accent/20">
                <BookOpen className="w-4 h-4 mr-2" />
                Paso a Paso
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Módulos de Aprendizaje</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sigue estos módulos en orden para dominar los fundamentos del juego
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 150}>
                <Link to={module.link}>
                  <Card className="border-accent/20 hover:border-primary/60 transition-all hover:shadow-xl hover:-translate-y-1 h-full group">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-14 h-14 rounded-xl ${module.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <module.icon className={`w-7 h-7 ${module.color}`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">Módulo {index + 1}</Badge>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">{module.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base">{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Comenzar Módulo
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Key Concepts */}
        <section id="concepts" className="mb-16 scroll-mt-24">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-10">
              <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Esencial
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Conceptos Clave</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estos son los conceptos fundamentales que debes entender para mejorar en el juego
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="border-accent/20 hover:border-primary/40 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${concept.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <concept.icon className={`w-6 h-6 ${concept.color}`} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{concept.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{concept.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Game Objective */}
        <ScrollAnimation animation="fade-up">
          <Card className="mb-16 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground border-0 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Trophy className="w-8 h-8" />
                Objetivo del Juego
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                El objetivo principal es simple: <strong>destruir el Nexo enemigo</strong> antes de que destruyan el tuyo. 
                Para lograrlo, debes trabajar en equipo, farmear oro, comprar objetos, derrotar torretas, 
                capturar objetivos épicos y ganar peleas en equipo. ¡La comunicación y la estrategia son clave!
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation animation="fade-up">
          <section className="text-center py-16 px-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border/50">
            <h2 className="text-3xl font-bold mb-4">¿Listo para tu Primera Partida?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ahora que conoces los fundamentos, es hora de poner en práctica lo aprendido
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/fundamentos/primera-partida">
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Comenzar Tutorial
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/campeones">
                  <Users className="w-5 h-5 mr-2" />
                  Explorar Campeones
                </Link>
              </Button>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Fundamentos;
