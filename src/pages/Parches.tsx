import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { patchNotes, PatchChange } from "@/data/patches";
import { FileText, TrendingUp, TrendingDown, Zap, Sparkles } from "lucide-react";

const Parches = () => {
  const [selectedPatch, setSelectedPatch] = useState(patchNotes[0].version);

  const currentPatch = patchNotes.find(p => p.version === selectedPatch) || patchNotes[0];

  const getImpactIcon = (impact: PatchChange["impact"]) => {
    switch (impact) {
      case "Buff":
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "Nerf":
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      case "Ajuste":
        return <Zap className="w-4 h-4 text-yellow-500" />;
      case "Nuevo":
        return <Sparkles className="w-4 h-4 text-blue-500" />;
    }
  };

  const getImpactColor = (impact: PatchChange["impact"]) => {
    switch (impact) {
      case "Buff":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Nerf":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "Ajuste":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Nuevo":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    }
  };

  const getRelevanceColor = (relevance: PatchChange["beginnerRelevance"]) => {
    switch (relevance) {
      case "Alta":
        return "border-accent text-accent";
      case "Media":
        return "border-yellow-500 text-yellow-500";
      case "Baja":
        return "border-muted-foreground/50 text-muted-foreground";
    }
  };

  const categorizedChanges = currentPatch.changes.reduce((acc, change) => {
    if (!acc[change.category]) {
      acc[change.category] = [];
    }
    acc[change.category].push(change);
    return acc;
  }, {} as Record<string, PatchChange[]>);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Notas de Parche para Principiantes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cambios del parche explicados en lenguaje simple. Entiende qué significa cada cambio para ti.
            </p>
          </div>

          {/* Patch Selection */}
          <div className="mb-8">
            <Tabs value={selectedPatch} onValueChange={setSelectedPatch}>
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                {patchNotes.map((patch) => (
                  <TabsTrigger key={patch.version} value={patch.version}>
                    Parche {patch.version}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Patch Header */}
          <Card className="mb-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl">Parche {currentPatch.version}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {new Date(currentPatch.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardDescription>
                </div>
                <FileText className="w-12 h-12 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-3">Lo Más Importante de Este Parche:</h3>
              <ul className="space-y-2">
                {currentPatch.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Categorized Changes */}
          <div className="space-y-6">
            {Object.entries(categorizedChanges).map(([category, changes]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                  <CardDescription>{changes.length} cambios en esta categoría</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {changes.map((change, index) => (
                      <AccordionItem key={index} value={`${category}-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 flex-1 text-left">
                            {getImpactIcon(change.impact)}
                            <div className="flex-1">
                              <div className="font-semibold">{change.title}</div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {change.description}
                              </div>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                              <Badge className={getImpactColor(change.impact)}>
                                {change.impact}
                              </Badge>
                              <Badge variant="outline" className={getRelevanceColor(change.beginnerRelevance)}>
                                {change.beginnerRelevance}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-4 space-y-4">
                            <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <span className="text-accent">💡</span>
                                ¿Qué significa esto para ti?
                              </h4>
                              <p className="text-sm">{change.explanation}</p>
                            </div>

                            {change.affectedItems.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold mb-2">Afecta a:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {change.affectedItems.map((item) => (
                                    <Badge key={item} variant="secondary">
                                      {item}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <Card className="mt-8 bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle>¿Necesitas Más Ayuda?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• <strong>Relevancia Alta:</strong> Cambios que afectan directamente a principiantes</p>
              <p>• <strong>Relevancia Media:</strong> Cambios que pueden afectarte según tu progreso</p>
              <p>• <strong>Relevancia Baja:</strong> Cambios más técnicos para jugadores avanzados</p>
              <p className="pt-2 text-muted-foreground">
                Recuerda: No necesitas memorizar todos los cambios. Enfócate en los de relevancia alta y en los campeones que juegas.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Parches;