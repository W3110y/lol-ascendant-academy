import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { championsData, Champion } from "@/data/champions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GitCompare, Swords, Shield, Zap, Users } from "lucide-react";
import { useDDragonUrls } from "@/hooks/useDDragon";
import { normalizeChampionId } from "@/lib/ddragon";

const ChampionComparison = () => {
  const [champion1, setChampion1] = useState<Champion | null>(null);
  const [champion2, setChampion2] = useState<Champion | null>(null);
  const { getChampionSquare, version } = useDDragonUrls();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "text-green-500";
      case "Media": return "text-yellow-500";
      case "Difícil": return "text-red-500";
      default: return "text-foreground";
    }
  };

  const ComparisonRow = ({ label, value1, value2, icon }: { label: string; value1: string | number; value2: string | number; icon?: React.ReactNode }) => (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-border/40">
      <div className="text-right text-sm font-medium">{value1}</div>
      <div className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
        {icon}
        {label}
      </div>
      <div className="text-left text-sm font-medium">{value2}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Comparador de Campeones
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compara dos campeones lado a lado para descubrir sus diferencias y similitudes
            </p>
          </div>

          {/* Champion Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Campeón 1</CardTitle>
                <CardDescription>Selecciona el primer campeón</CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(id) => setChampion1(championsData.find(c => c.id === id) || null)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Elige un campeón..." />
                  </SelectTrigger>
                  <SelectContent>
                    {championsData.map((champ) => (
                      <SelectItem key={champ.id} value={champ.id}>
                        {champ.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {champion1 && (
                  <div className="mt-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/30">
                      {version ? (
                        <img 
                          src={getChampionSquare(normalizeChampionId(champion1.id)) || '/placeholder.svg'}
                          alt={champion1.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                          <span className="text-4xl">{champion1.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{champion1.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{champion1.title}</p>
                    <div className="flex gap-2 justify-center">
                      {champion1.role.map((r) => (
                        <Badge key={r} variant="secondary">{r}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campeón 2</CardTitle>
                <CardDescription>Selecciona el segundo campeón</CardDescription>
              </CardHeader>
              <CardContent>
                <Select onValueChange={(id) => setChampion2(championsData.find(c => c.id === id) || null)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Elige un campeón..." />
                  </SelectTrigger>
                  <SelectContent>
                    {championsData.map((champ) => (
                      <SelectItem key={champ.id} value={champ.id}>
                        {champ.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {champion2 && (
                  <div className="mt-6 text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-accent/30">
                      {version ? (
                        <img 
                          src={getChampionSquare(normalizeChampionId(champion2.id)) || '/placeholder.svg'}
                          alt={champion2.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                          <span className="text-4xl">{champion2.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{champion2.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{champion2.title}</p>
                    <div className="flex gap-2 justify-center">
                      {champion2.role.map((r) => (
                        <Badge key={r} variant="secondary">{r}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          {champion1 && champion2 ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitCompare className="w-5 h-5" />
                  Comparación Detallada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <ComparisonRow 
                    label="Dificultad" 
                    value1={champion1.difficulty} 
                    value2={champion2.difficulty}
                    icon={<Zap className="w-4 h-4" />}
                  />
                  <ComparisonRow 
                    label="Roles" 
                    value1={champion1.role.join(", ")} 
                    value2={champion2.role.join(", ")}
                    icon={<Users className="w-4 h-4" />}
                  />
                  <ComparisonRow 
                    label="Tipo de Daño" 
                    value1={champion1.damageType} 
                    value2={champion2.damageType}
                    icon={<Swords className="w-4 h-4" />}
                  />
                  <ComparisonRow 
                    label="Habilidades" 
                    value1="5" 
                    value2="5"
                    icon={<Shield className="w-4 h-4" />}
                  />
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-center">Consejos de {champion1.name}</h4>
                    <ul className="space-y-2">
                      {champion1.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-accent">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-center">Consejos de {champion2.name}</h4>
                    <ul className="space-y-2">
                      {champion2.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-accent">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h4 className="font-semibold mb-2">Recomendación</h4>
                  <p className="text-sm text-muted-foreground">
                    {champion1.difficulty === "Fácil" && champion2.difficulty !== "Fácil"
                      ? `${champion1.name} es más fácil de aprender para principiantes.`
                      : champion2.difficulty === "Fácil" && champion1.difficulty !== "Fácil"
                      ? `${champion2.name} es más fácil de aprender para principiantes.`
                      : "Ambos campeones requieren un nivel similar de habilidad."}
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="py-12 text-center">
                <GitCompare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">
                  Selecciona dos campeones arriba para comparar sus características
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChampionComparison;