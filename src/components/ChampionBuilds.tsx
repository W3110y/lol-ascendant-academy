import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Swords, Shield, Zap, Target } from "lucide-react";
import type { BuildOption } from "@/data/champions";

interface ChampionBuildsProps {
  championName: string;
  builds?: BuildOption[];
  defaultBuild: string[];
  runes: {
    primary: string;
    secondary: string;
  };
  summonerSpells?: string[];
}

const buildIcons: Record<string, React.ReactNode> = {
  'Estándar': <Package className="h-4 w-4" />,
  'Agresiva': <Swords className="h-4 w-4" />,
  'Defensiva': <Shield className="h-4 w-4" />,
  'AP': <Zap className="h-4 w-4" />,
  'Burst': <Target className="h-4 w-4" />,
};

const ChampionBuilds = ({ championName, builds, defaultBuild, runes, summonerSpells }: ChampionBuildsProps) => {
  // Si no hay builds alternativas, mostrar la build por defecto
  const displayBuilds: BuildOption[] = builds && builds.length > 0 
    ? builds 
    : [{
        name: 'Build Estándar',
        description: `La build más común y efectiva para ${championName}`,
        items: defaultBuild,
      }];

  return (
    <div className="space-y-6">
      {/* Builds Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {displayBuilds.map((build, index) => (
          <Card 
            key={index} 
            className={`border-lol-gold/30 ${build.situational ? 'opacity-80' : ''}`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  {buildIcons[build.name] || <Package className="h-4 w-4" />}
                  {build.name}
                </CardTitle>
                {build.situational && (
                  <Badge variant="outline" className="text-xs">
                    Situacional
                  </Badge>
                )}
              </div>
              <CardDescription>{build.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {build.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-lol-gold/20 text-lol-gold flex items-center justify-center text-sm font-bold">
                      {itemIndex + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Runes Section */}
      <Card className="border-accent/30">
        <CardHeader>
          <CardTitle>Runas Recomendadas</CardTitle>
          <CardDescription>Configuración óptima de runas para {championName}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">Runa Primaria</h4>
              <p className="text-foreground/90">{runes.primary}</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="font-semibold text-muted-foreground mb-2">Runa Secundaria</h4>
              <p className="text-foreground/90">{runes.secondary}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summoner Spells Section */}
      {summonerSpells && summonerSpells.length > 0 && (
        <Card className="border-blue-500/30">
          <CardHeader>
            <CardTitle>Hechizos de Invocador</CardTitle>
            <CardDescription>Los hechizos más efectivos para {championName}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {summonerSpells.map((spell, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm"
                >
                  {spell}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ChampionBuilds;
