import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { glossaryData, GlossaryTerm } from "@/data/glossary";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

const Glosario = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryData.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by first letter
  const groupedTerms = filteredTerms.reduce((acc, item) => {
    const firstLetter = item.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  // Term of the day
  const termOfTheDay = useMemo(() => {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
    );
    const index = dayOfYear % glossaryData.length;
    return glossaryData[index];
  }, []);

  // Quick access letters
  const allLetters = [...new Set(glossaryData.map(item => item.term[0].toUpperCase()))].sort();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/40">
            <BookOpen className="w-4 h-4 mr-2" />
            La LoLpedia
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Glosario de League of Legends
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Todos los términos que necesitas conocer para entender el juego y comunicarte con tu equipo.
          </p>
          
          {/* Term of the Day Card */}
          <Card className="max-w-2xl mx-auto border-accent/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">Término del Día</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{termOfTheDay.term}</h3>
              <p className="text-muted-foreground">{termOfTheDay.definition}</p>
              {termOfTheDay.example && (
                <p className="text-sm text-muted-foreground mt-2 italic">
                  💡 {termOfTheDay.example}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Search & Quick Navigation */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar término... (ej: CS, Gank, Baron)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 text-lg h-14 border-accent/20 focus:border-accent"
              />
              {searchTerm && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setSearchTerm("")}
                >
                  Limpiar
                </Button>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {filteredTerms.length} términos encontrados
            </p>
          </div>

          {/* Quick letter navigation */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 p-4 bg-muted/30 rounded-xl">
            {allLetters.map((letter) => {
              const hasTerms = groupedTerms[letter];
              return (
                <a
                  key={letter}
                  href={hasTerms ? `#letter-${letter}` : undefined}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all ${
                    hasTerms
                      ? "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      : "bg-muted text-muted-foreground/50 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </a>
              );
            })}
          </div>
        </div>

        {/* Glossary */}
        <div className="max-w-4xl mx-auto">
          {sortedLetters.map((letter) => (
            <ScrollAnimation key={letter} animation="fade-up">
              <div id={`letter-${letter}`} className="mb-8 scroll-mt-24">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">{letter}</span>
                  </div>
                  <Badge variant="outline" className="border-accent/30">
                    {groupedTerms[letter].length} términos
                  </Badge>
                </div>
                
                <Accordion type="multiple" className="w-full space-y-2">
                  {groupedTerms[letter].map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${letter}-${index}`} 
                      className="border border-border/50 rounded-lg overflow-hidden bg-card/50"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 hover:no-underline">
                        <span className="font-semibold text-foreground">{item.term}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 space-y-3">
                        <p className="text-foreground">{item.definition}</p>
                        {item.example && (
                          <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                            <p className="text-sm text-muted-foreground">
                              <span className="text-accent font-medium">💡 Ejemplo:</span> {item.example}
                            </p>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollAnimation>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No se encontraron términos para "{searchTerm}"
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Limpiar búsqueda
              </Button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  ¿Listo para aplicar lo aprendido?
                </h3>
                <p className="text-muted-foreground">
                  Consulta nuestras guías para principiantes y empieza tu aventura.
                </p>
              </div>
              <Link to="/fundamentos">
                <Button className="bg-accent hover:bg-accent/90 group">
                  Ver Fundamentos
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Glosario;
