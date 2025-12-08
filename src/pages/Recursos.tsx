import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ExternalLink, BarChart3, Youtube, Users, BookOpen, Sparkles, Target, Zap, ChevronRight } from "lucide-react";

const Recursos = () => {
  const resources = {
    statistics: [
      { name: "OP.GG", url: "https://www.op.gg", description: "Estadísticas de campeones, builds y análisis de partidas" },
      { name: "U.GG", url: "https://u.gg", description: "Builds actualizadas, tier lists y guías de campeones" },
      { name: "Lolalytics", url: "https://lolalytics.com", description: "Análisis profundo de estadísticas y win rates" },
      { name: "ProBuilds", url: "https://www.probuilds.net", description: "Builds y runas usadas por jugadores profesionales" },
    ],
    creators: [
      { name: "Skill Capped", url: "https://www.youtube.com/@skillcapped", description: "Guías educativas y consejos para mejorar" },
      { name: "Coach Curtis", url: "https://www.youtube.com/@CoachCurtis", description: "Coaching profesional para mid lane" },
      { name: "Virkayu", url: "https://www.youtube.com/@virkayu", description: "Guías completas de jungla" },
      { name: "xPetu", url: "https://www.youtube.com/@xPetu", description: "Especialista en Shen y top lane" },
      { name: "i0ki", url: "https://www.youtube.com/@i0ki", description: "Guías de support y contenido educativo" },
    ],
    official: [
      { name: "Página Oficial de LoL", url: "https://www.leagueoflegends.com", description: "Sitio web oficial con noticias y actualizaciones" },
      { name: "Notas de Parche", url: "https://www.leagueoflegends.com/es-es/news/tags/patch-notes", description: "Cambios y actualizaciones en cada parche" },
      { name: "Universe", url: "https://universe.leagueoflegends.com", description: "Lore y historias de los campeones" },
      { name: "Riot Support", url: "https://support.riotgames.com", description: "Centro de ayuda oficial de Riot Games" },
    ],
    communities: [
      { name: "r/summonerschool", url: "https://www.reddit.com/r/summonerschool", description: "Reddit dedicado a aprender y mejorar en LoL" },
      { name: "Discord de LoL Español", url: "https://discord.gg/lolespanol", description: "Comunidad hispanohablante de League of Legends" },
      { name: "r/leagueoflegends", url: "https://www.reddit.com/r/leagueoflegends", description: "Subreddit principal de League of Legends" },
    ],
  };

  const features = [
    {
      icon: BarChart3,
      title: "Estadísticas en Tiempo Real",
      description: "Accede a datos actualizados sobre campeones, builds y estrategias ganadoras"
    },
    {
      icon: Youtube,
      title: "Contenido Educativo",
      description: "Aprende de los mejores creadores especializados en diferentes roles"
    },
    {
      icon: BookOpen,
      title: "Recursos Oficiales",
      description: "Mantente al día con las últimas noticias y cambios del juego"
    },
    {
      icon: Users,
      title: "Comunidades Activas",
      description: "Conecta con otros jugadores y comparte tu experiencia"
    }
  ];

  const ResourceCard = ({ icon: Icon, title, items, delay }: { icon: any, title: string, items: typeof resources.statistics, delay: number }) => (
    <ScrollAnimation animation="fade-up" delay={delay}>
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 rounded-lg bg-accent/10">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg bg-background/50 hover:bg-accent/5 transition-all duration-300 border border-border/30 hover:border-accent/30 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors flex items-center gap-2">
                      {item.name}
                      <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        {/* Animated Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-pulse delay-500" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Recursos Externos</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Recursos y Herramientas
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Las mejores páginas web, creadores de contenido y comunidades para 
                <span className="text-foreground font-medium"> complementar tu aprendizaje</span> y mejorar tu juego.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-card/50 border border-border/30 hover:border-accent/30 transition-all duration-300">
                  <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <ResourceCard icon={BarChart3} title="Páginas de Estadísticas" items={resources.statistics} delay={0} />
          <ResourceCard icon={Youtube} title="Creadores de Contenido" items={resources.creators} delay={100} />
          <ResourceCard icon={BookOpen} title="Recursos Oficiales" items={resources.official} delay={200} />
          <ResourceCard icon={Users} title="Comunidades" items={resources.communities} delay={300} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Target className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">¿Listo para practicar?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pon en práctica lo que{" "}
                <span className="bg-gradient-gold bg-clip-text text-transparent">aprendas</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Usa nuestras herramientas interactivas para aplicar los conocimientos de estos recursos externos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/herramientas">
                    <Zap className="mr-2 h-5 w-5" />
                    Ver Herramientas
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/quiz-campeones">
                    Descubre tu Campeón
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recursos;
