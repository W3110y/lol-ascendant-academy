import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { championsData } from "@/data/champions";

export const FreeRotation = () => {
  // Simular rotación gratuita semanal (en producción vendría de Riot API)
  const getFreeChampions = () => {
    return championsData
      .filter(c => c.difficulty === 'Fácil' || c.difficulty === 'Medio')
      .slice(0, 10);
  };

  const freeChampions = getFreeChampions();

  return (
    <section className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold text-foreground">Campeones Gratuitos Esta Semana</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prueba estos campeones sin necesidad de comprarlos. ¡La rotación cambia cada semana!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {freeChampions.map((champion) => (
            <Link key={champion.id} to={`/campeones/${champion.id}`}>
              <Card className="border-accent/20 hover:border-accent/60 transition-all hover:-translate-y-1 h-full">
                <CardContent className="p-4 text-center">
                  <div className="text-5xl mb-3">
                    {champion.role.includes('Top') && '⚔️'}
                    {champion.role.includes('Jungla') && '🌲'}
                    {champion.role.includes('Mid') && '✨'}
                    {champion.role.includes('ADC') && '🏹'}
                    {champion.role.includes('Soporte') && '💚'}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{champion.name}</h3>
                  <div className="flex flex-wrap gap-1 justify-center mb-2">
                    {champion.role.slice(0, 2).map((role) => (
                      <Badge key={role} variant="secondary" className="text-xs">
                        {role}
                      </Badge>
                    ))}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={
                      champion.difficulty === 'Fácil' 
                        ? 'border-green-500/40 text-green-600 dark:text-green-400 text-xs'
                        : 'border-yellow-500/40 text-yellow-600 dark:text-yellow-400 text-xs'
                    }
                  >
                    {champion.difficulty}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/campeones">
            <Button size="lg" variant="outline" className="border-accent/40 hover:bg-accent/10">
              Ver Todos los Campeones
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
