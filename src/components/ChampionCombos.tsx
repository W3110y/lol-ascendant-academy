import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight } from "lucide-react";
import type { Combo } from "@/data/champions";

interface ChampionCombosProps {
  championName: string;
  combos?: Combo[];
}

const difficultyColors = {
  'Básico': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Intermedio': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Avanzado': 'bg-red-500/20 text-red-300 border-red-500/30',
};

const keyColors: Record<string, string> = {
  'Q': 'bg-blue-600 border-blue-400',
  'W': 'bg-green-600 border-green-400',
  'E': 'bg-yellow-600 border-yellow-400',
  'R': 'bg-red-600 border-red-400',
  'Pasiva': 'bg-purple-600 border-purple-400',
  'Flash': 'bg-amber-500 border-amber-300',
  'AA': 'bg-gray-600 border-gray-400',
  'Ignite': 'bg-orange-600 border-orange-400',
};

const KeyBadge = ({ keyName }: { keyName: string }) => {
  const colorClass = keyColors[keyName] || 'bg-muted border-muted-foreground';
  
  return (
    <span className={`inline-flex items-center justify-center min-w-[2.5rem] px-2 py-1 rounded-md border-2 font-bold text-sm text-white shadow-lg ${colorClass}`}>
      {keyName}
    </span>
  );
};

const ComboSequence = ({ keys }: { keys: string[] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 my-3">
      {keys.map((key, index) => (
        <div key={index} className="flex items-center gap-2">
          <KeyBadge keyName={key} />
          {index < keys.length - 1 && (
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
};

const ChampionCombos = ({ championName, combos }: ChampionCombosProps) => {
  if (!combos || combos.length === 0) {
    return (
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-muted-foreground" />
            Combos Básicos
          </CardTitle>
          <CardDescription>Próximamente: secuencias de habilidades</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Estamos trabajando en añadir combos para {championName}.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-accent/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          Combos y Secuencias
        </CardTitle>
        <CardDescription>
          Aprende las combinaciones de habilidades más efectivas de {championName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {combos.map((combo, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-card-foreground/5 border border-border hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-foreground">{combo.name}</h4>
              <Badge className={difficultyColors[combo.difficulty]} variant="outline">
                {combo.difficulty}
              </Badge>
            </div>
            
            <ComboSequence keys={combo.keys} />
            
            <p className="text-sm text-muted-foreground mt-3">
              {combo.description}
            </p>
          </div>
        ))}
        
        <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border/50">
          <h4 className="font-semibold text-sm text-foreground mb-2">Leyenda de teclas:</h4>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="flex items-center gap-1"><KeyBadge keyName="AA" /> Auto-ataque</span>
            <span className="flex items-center gap-1"><KeyBadge keyName="Flash" /> Hechizo de invocador</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChampionCombos;
