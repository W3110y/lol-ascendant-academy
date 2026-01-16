import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Gamepad2, 
  Map, 
  Calculator, 
  GitCompare, 
  Route as RouteIcon,
  Brain,
  Target,
  Lightbulb,
  Sparkles,
  ChevronRight,
  Star,
  Zap,
  Users,
  Search
} from "lucide-react";

const tools = [
  {
    title: "Simulador de Decisiones",
    description: "Practica la toma de decisiones en situaciones reales de partida. Mejora tu instinto de juego.",
    icon: Brain,
    link: "/herramientas/simulador",
    gradient: "from-purple-500 to-pink-500",
    badge: "Popular"
  },
  {
    title: "Mapa de Wards",
    description: "Aprende las ubicaciones estratégicas para colocar wards y dominar la visión del mapa.",
    icon: Map,
    link: "/herramientas/ward-map",
    gradient: "from-blue-500 to-cyan-500",
    badge: null
  },
  {
    title: "Calculadora de Builds",
    description: "Experimenta con diferentes combinaciones de objetos y entiende sus sinergias.",
    icon: Calculator,
    link: "/herramientas/build-calculator",
    gradient: "from-amber-500 to-orange-500",
    badge: null
  },
  {
    title: "Comparador de Campeones",
    description: "Compara estadísticas y habilidades entre campeones para entender mejor los matchups.",
    icon: GitCompare,
    link: "/herramientas/comparar-campeones",
    gradient: "from-green-500 to-emerald-500",
    badge: "Nuevo"
  },
  {
    title: "Rutas de Jungla",
    description: "Descubre las rutas óptimas para el jungla y maximiza tu eficiencia en el early game.",
    icon: RouteIcon,
    link: "/herramientas/rutas-jungla",
    gradient: "from-red-500 to-rose-500",
    badge: null
  },
  {
    title: "Buscar Invocador",
    description: "Busca el perfil de cualquier jugador y descubre sus estadísticas, rango y campeones favoritos.",
    icon: Search,
    link: "/herramientas/buscar-invocador",
    gradient: "from-cyan-500 to-blue-500",
    badge: "Nuevo"
  },
  {
    title: "Quiz de Campeones",
    description: "Encuentra tu campeón ideal respondiendo preguntas sobre tu estilo de juego preferido.",
    icon: Gamepad2,
    link: "/quiz-campeones",
    gradient: "from-indigo-500 to-violet-500",
    badge: null
  }
];

const features = [
  {
    icon: Target,
    title: "Práctica Interactiva",
    description: "Aprende haciendo con simuladores y herramientas que replican situaciones reales del juego."
  },
  {
    icon: Lightbulb,
    title: "Feedback Instantáneo",
    description: "Recibe explicaciones detalladas sobre cada decisión para entender el porqué detrás de cada acción."
  },
  {
    icon: Zap,
    title: "Mejora Rápida",
    description: "Herramientas diseñadas para acelerar tu curva de aprendizaje de forma efectiva."
  }
];

const Herramientas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Herramientas Interactivas</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Aprende Jugando
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Herramientas interactivas diseñadas para que practiques y mejores sin necesidad de estar en partida. 
                Aprende a tu ritmo con feedback instantáneo.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Herramientas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Gratuitas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Práctica</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 group">
                  <Link to="/herramientas/simulador">
                    Probar Simulador
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/quiz-campeones">
                    <Gamepad2 className="mr-2 w-5 h-5" />
                    Quiz de Campeones
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué usar nuestras herramientas?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diseñadas específicamente para principiantes que quieren mejorar sin la presión de una partida real.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <ScrollAnimation key={feature.title} animation="fade-up" delay={index * 100}>
                <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todas las Herramientas
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explora nuestra colección completa de herramientas interactivas para mejorar tu juego.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <ScrollAnimation key={tool.title} animation="fade-up" delay={index * 100}>
                <Link to={tool.link} className="block group">
                  <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-xl group-hover:shadow-primary/5">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-lg`}>
                          <tool.icon className="w-6 h-6 text-white" />
                        </div>
                        {tool.badge && (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            tool.badge === "Popular" 
                              ? "bg-primary/10 text-primary" 
                              : "bg-green-500/10 text-green-500"
                          }`}>
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explorar herramienta
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="scale">
            <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Recomendado</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Nuevo en League of Legends?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Antes de usar las herramientas, asegúrate de dominar los fundamentos del juego. 
                  Nuestras guías te prepararán para aprovechar al máximo cada herramienta.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="px-8">
                    <Link to="/fundamentos">
                      <Users className="mr-2 w-5 h-5" />
                      Ver Fundamentos
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="px-8">
                    <Link to="/campeones">
                      Explorar Campeones
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Herramientas;
