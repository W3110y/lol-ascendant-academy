import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, MapPin } from "lucide-react";

interface ChampionLoreProps {
  name: string;
  lore?: string;
  region?: string;
  description: string;
}

const regionColors: Record<string, string> = {
  'Demacia': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Noxus': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Freljord': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Ionia': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Piltover': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Zaun': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Shurima': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Targon': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Islas de la Sombra': 'bg-emerald-900/20 text-emerald-300 border-emerald-900/30',
  'Aguas Estancadas': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  'El Vacío': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'Bandle': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Ixtal': 'bg-lime-500/20 text-lime-300 border-lime-500/30',
};

const ChampionLore = ({ name, lore, region, description }: ChampionLoreProps) => {
  return (
    <Card className="border-accent/30 bg-gradient-to-br from-card to-accent/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-accent" />
            <CardTitle>Lore en un Minuto</CardTitle>
          </div>
          {region && (
            <Badge className={`flex items-center gap-1 ${regionColors[region] || 'bg-muted text-muted-foreground'}`}>
              <MapPin className="h-3 w-3" />
              {region}
            </Badge>
          )}
        </div>
        <CardDescription>La historia de {name} en Runeterra</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {lore ? (
          <p className="text-foreground/90 leading-relaxed italic border-l-4 border-accent/50 pl-4">
            "{lore}"
          </p>
        ) : (
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        
        {region && (
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Origen:</span> {name} proviene de {region}, 
              una de las regiones más emblemáticas de Runeterra.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ChampionLore;
