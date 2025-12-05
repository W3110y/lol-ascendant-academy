import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Eye, 
  Gem, 
  Clock, 
  Swords, 
  Sparkles, 
  TrendingUp,
  Brain,
  Target,
  Trophy,
  ChevronRight,
  Users,
  Zap,
  Shield,
  BookOpen
} from "lucide-react";

const ConceptosIntermedios = () => {
  const modules = [
    {
      title: "Visión y Wards",
      description: "Aprende la importancia de la visión, dónde colocar wards y cómo controlar el mapa",
      icon: Eye,
      link: "/conceptos-intermedios/vision",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Objetivos Neutrales",
      description: "Dragones, Heraldo de la Grieta y Barón Nashor: cuándo y cómo capturarlos",
      icon: Gem,
      link: "/conceptos-intermedios/objetivos-neutrales",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Fases de la Partida",
      description: "Early, Mid y Late game: qué hacer en cada fase y cómo adaptarte",
      icon: Clock,
      link: "/conceptos-intermedios/fases-partida",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "Peleas de Equipo",
      description: "Posicionamiento, prioridades y cómo ganar teamfights según tu rol",
      icon: Swords,
      link: "/conceptos-intermedios/teamfights",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
  ];

  const features = [
    {
      icon: Brain,
      title: "Pensamiento Estratégico",
      description: "Aprende a tomar mejores decisiones en tiempo real"
    },
    {
      icon: Target,
      title: "Control de Objetivos",
      description: "Domina los objetivos que definen las partidas"
    },
    {
      icon: Users,
      title: "Coordinación",
      description: "Mejora tu comunicación y trabajo en equipo"
    },
    {
      icon: TrendingUp,
      title: "Progresión",
      description: "Sube de nivel tu gameplay de forma consistente"
    }
  ];

  const skills = [
    { name: "Control de visión", level: 85 },
    { name: "Macro gameplay", level: 75 },
    { name: "Toma de decisiones", level: 80 },
    { name: "Trabajo en equipo", level: 90 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 px-4 py-2 text-sm bg-accent/10 text-accent border-accent/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                Nivel Intermedio
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
                Conceptos Intermedios
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Lleva tu juego al siguiente nivel con estos conceptos esenciales que te convertirán en un mejor invocador
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#modules">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Ver Módulos
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/fundamentos">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Repasar Fundamentos
                  </Link>
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
                <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
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
        {/* Introduction */}
        <ScrollAnimation animation="fade-up">
          <Card className="mb-16 overflow-hidden border-accent/20">
            <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-2xl">¿Por qué aprender estos conceptos?</CardTitle>
                  <CardDescription>El siguiente paso en tu evolución como jugador</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Una vez que dominas los fundamentos básicos, estos conceptos intermedios te ayudarán a 
                    entender el juego a un nivel más profundo. Aprenderás a controlar el mapa, tomar objetivos 
                    en el momento correcto y coordinar con tu equipo para ganar peleas decisivas.
                  </p>
                  <p className="text-muted-foreground">
                    Cada módulo está diseñado para darte herramientas prácticas que puedes aplicar 
                    inmediatamente en tus partidas.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground mb-3">Habilidades que desarrollarás:</h4>
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-accent font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Learning Modules */}
        <section id="modules" className="mb-16 scroll-mt-24">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-10">
              <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
                <BookOpen className="w-4 h-4 mr-2" />
                4 Módulos
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Módulos de Aprendizaje</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cada módulo cubre un aspecto crucial del juego intermedio
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
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
                        Aprender
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Info Card */}
        <ScrollAnimation animation="fade-up">
          <Card className="mb-16 bg-gradient-to-br from-accent via-accent/90 to-primary text-primary-foreground border-0 overflow-hidden relative max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl flex items-center gap-3">
                <Sparkles className="w-8 h-8" />
                Domina estos conceptos
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Estos conceptos intermedios son fundamentales para mejorar tu nivel de juego. 
                Una vez que domines los fundamentos básicos, estos temas te ayudarán a tomar 
                mejores decisiones, coordinar con tu equipo y ganar más partidas. ¡Tómate tu tiempo 
                para aprender cada uno!
              </p>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation animation="fade-up">
          <section className="text-center py-16 px-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border/50">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas repasar lo básico?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Si algún concepto te resulta confuso, no dudes en volver a los fundamentos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/fundamentos">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Ver Fundamentos
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/roles">
                  <Shield className="w-5 h-5 mr-2" />
                  Guía de Roles
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

export default ConceptosIntermedios;
