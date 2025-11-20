import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BarChart3, Youtube, Users, BookOpen } from "lucide-react";

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

  const ResourceCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: typeof resources.statistics }) => (
    <Card className="border-lol-blue/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Icon className="h-6 w-6 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg bg-card-foreground/5 hover:bg-card-foreground/10 transition-colors border border-border group"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Recursos y Herramientas
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Las mejores páginas web, creadores de contenido y comunidades para mejorar tu juego.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <ResourceCard icon={BarChart3} title="Páginas de Estadísticas" items={resources.statistics} />
          <ResourceCard icon={Youtube} title="Creadores de Contenido" items={resources.creators} />
          <ResourceCard icon={BookOpen} title="Recursos Oficiales" items={resources.official} />
          <ResourceCard icon={Users} title="Comunidades" items={resources.communities} />
        </div>
      </section>
    </div>
  );
};

export default Recursos;
