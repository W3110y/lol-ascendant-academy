import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { glossaryData } from "@/data/glossary";

export const TermOfTheDay = () => {
  // Get a consistent "random" term based on the day
  const termOfTheDay = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    const index = dayOfYear % glossaryData.length;
    return glossaryData[index];
  }, []);

  return (
    <Card className="border-accent/20 bg-gradient-to-br from-accent/5 via-background to-primary/5 overflow-hidden relative group">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <Badge variant="outline" className="border-accent/40 text-accent text-xs">
                <BookOpen className="w-3 h-3 mr-1" />
                Término del Día
              </Badge>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {termOfTheDay.term}
        </h3>
        
        <p className="text-muted-foreground mb-3">
          {termOfTheDay.definition}
        </p>
        
        {termOfTheDay.example && (
          <div className="bg-muted/50 rounded-lg p-3 mb-4 border border-border/50">
            <p className="text-sm text-muted-foreground">
              <span className="text-accent font-medium">💡 Ejemplo:</span> {termOfTheDay.example}
            </p>
          </div>
        )}

        <Link to="/glosario">
          <Button variant="outline" size="sm" className="group/btn border-accent/30 hover:border-accent hover:bg-accent/10">
            Ver Glosario Completo
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TermOfTheDay;
