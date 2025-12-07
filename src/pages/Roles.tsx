import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Video, Shield, Sword, Target, Users, Sparkles, ChevronRight, Zap, Map, Crown } from "lucide-react";
import { useScrollAnimation, ScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Roles = () => {

  const roles = [
    {
      name: "Top Laner",
      lane: "Calle Superior",
      icon: Sword,
      color: "from-orange-500 to-red-600",
      description: "El luchador solitario del equipo",
      responsibilities: [
        "Controlar la calle superior y farmear eficientemente",
        "Ser un iniciador o tanque en peleas de equipo",
        "Presionar la calle y atraer atención enemiga",
        "Proteger o destruir la torreta superior",
      ],
      championTypes: "Tanques, Luchadores, Dividepuentes",
      tips: "Aprende a gestionar las oleadas de súbditos y a cuándo teleportarte para ayudar al equipo",
      video: "https://www.youtube.com/embed/WQg4fFQ7OlM",
    },
    {
      name: "Jungla",
      lane: "La Jungla",
      icon: Map,
      color: "from-green-500 to-emerald-600",
      description: "El estratega del mapa",
      responsibilities: [
        "Farmear los campamentos de monstruos neutrales",
        "Realizar 'ganks' (emboscadas) en las calles para ayudar a tu equipo",
        "Controlar objetivos épicos como el Dragón y el Heraldo del Rift",
        "Proporcionar visión y controlar el mapa",
      ],
      championTypes: "Asesinos, Tanques, Controladores",
      tips: "La jungla es el rol más complejo para principiantes. Aprende las rutas de farmeo básicas primero",
      video: "https://www.youtube.com/embed/Vw0pYBJxQCU",
    },
    {
      name: "Mid Laner",
      lane: "Calle Central",
      icon: Sparkles,
      color: "from-purple-500 to-violet-600",
      description: "El carrilero con alto potencial de daño",
      responsibilities: [
        "Dominar la calle central y conseguir ventaja",
        "Rotar a otras calles para ayudar (roaming)",
        "Infligir daño masivo en peleas de equipo",
        "Controlar el río y ayudar con objetivos",
      ],
      championTypes: "Magos, Asesinos, Controladores",
      tips: "La posición central te permite influir en todo el mapa. Usa esta ventaja para ayudar a tus compañeros",
      video: "https://www.youtube.com/embed/B-z2SQWyxAY",
    },
    {
      name: "ADC (Tirador)",
      lane: "Calle Inferior",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      description: "El cañón de cristal del equipo",
      responsibilities: [
        "Farmear para conseguir objetos potentes",
        "Infligir daño constante en peleas de equipo",
        "Destruir torretas y objetivos rápidamente",
        "Posicionarte de forma segura en las peleas",
      ],
      championTypes: "Tiradores (Marksmen)",
      tips: "Eres frágil pero poderoso. Aprende a posicionarte detrás de tu equipo y a farmear eficientemente",
      video: "https://www.youtube.com/embed/yiWLw0vTCfU",
    },
    {
      name: "Soporte",
      lane: "Calle Inferior",
      icon: Shield,
      color: "from-yellow-500 to-amber-600",
      description: "El protector y facilitador de jugadas",
      responsibilities: [
        "Proteger y ayudar al ADC en la fase de líneas",
        "Proporcionar visión con guardianes (wards)",
        "Iniciar peleas o proteger al equipo según el tipo de soporte",
        "Controlar objetivos y el mapa con visión",
      ],
      championTypes: "Encantadores, Tanques, Magos",
      tips: "No necesitas farmear súbditos. Tu oro viene de los objetos de soporte y ayudar al equipo",
      video: "https://www.youtube.com/embed/mvfFjccfXkI",
    },
  ];

  const features = [
    {
      icon: Users,
      title: "5 Roles Únicos",
      description: "Cada rol tiene responsabilidades y estilos de juego completamente diferentes"
    },
    {
      icon: Zap,
      title: "Sinergias de Equipo",
      description: "Aprende cómo cada rol complementa a los demás para ganar partidas"
    },
    {
      icon: Crown,
      title: "Encuentra tu Estilo",
      description: "Descubre qué rol se adapta mejor a tu forma de jugar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        
        <ScrollAnimation>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Trabajo en Equipo</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Roles y Líneas
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Descubre los 5 roles esenciales de League of Legends. Cada rol tiene responsabilidades 
                únicas y requiere diferentes habilidades para dominar.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="#roles">
                    Explorar Roles
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/campeones">Ver Campeones</Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-background/50 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <main id="roles" className="container mx-auto px-4 py-16">
        {/* Roles Grid */}
        <div className="space-y-12">
          {roles.map((role, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="border-border/50 hover:border-accent/40 transition-all duration-300 overflow-hidden group">
                <CardHeader className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${role.color} opacity-10 group-hover:opacity-15 transition-opacity`} />
                  <div className="relative flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-lg`}>
                      <role.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl">{role.name}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {role.lane} • {role.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color}`} />
                          Responsabilidades
                        </h3>
                        <ul className="space-y-2">
                          {role.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                              <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color}`} />
                          Tipos de Campeones
                        </h3>
                        <p className="text-muted-foreground">{role.championTypes}</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <h3 className="text-sm font-semibold mb-2 text-accent">💡 Consejo Principal</h3>
                        <p className="text-muted-foreground text-sm italic">{role.tips}</p>
                      </div>
                    </div>
                    
                    <div>
                      {role.video && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Video className="w-5 h-5 text-accent" />
                            Video Guía del Rol
                          </h3>
                          <AspectRatio ratio={16 / 9}>
                            <iframe
                              src={role.video}
                              className="w-full h-full rounded-lg border border-border/50"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </AspectRatio>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section - Finding Your Role */}
        <ScrollAnimation delay={200}>
          <section className="mt-20 relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-accent" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
            
            <div className="relative z-10 px-8 py-16 md:py-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-8">
                  🎮 Encuentra tu Rol Ideal
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <p className="text-primary-foreground">
                      <strong>¿Te gusta el combate directo?</strong> <span className="opacity-90">→ Top Laner</span>
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <p className="text-primary-foreground">
                      <strong>¿Prefieres la estrategia?</strong> <span className="opacity-90">→ Jungla</span>
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <p className="text-primary-foreground">
                      <strong>¿Quieres alto impacto?</strong> <span className="opacity-90">→ Mid Laner</span>
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                    <p className="text-primary-foreground">
                      <strong>¿Te gusta el daño sostenido?</strong> <span className="opacity-90">→ ADC</span>
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm md:col-span-2 md:max-w-md md:mx-auto">
                    <p className="text-primary-foreground text-center">
                      <strong>¿Disfrutas ayudando?</strong> <span className="opacity-90">→ Soporte</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="shadow-lg" asChild>
                    <Link to="/herramientas/quiz">
                      Hacer el Quiz de Campeones
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-primary-foreground hover:bg-white/10" asChild>
                    <Link to="/campeones">Explorar Campeones</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Roles;
