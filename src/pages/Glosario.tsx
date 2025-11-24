import { useState } from "react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { glossaryData, GlossaryTerm } from "@/data/glossary";

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Glosario de League of Legends
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Todos los términos que necesitas conocer para entender el juego y comunicarte con tu equipo.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar término..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg h-12"
            />
          </div>
        </div>

        {/* Glossary */}
        <div className="max-w-5xl mx-auto">
          {sortedLetters.map((letter) => (
            <div key={letter} className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-lol-gold">{letter}</h2>
              <Accordion type="multiple" className="w-full">
                {groupedTerms[letter].map((item, index) => (
                  <AccordionItem key={index} value={`${letter}-${index}`} className="border-lol-blue/30">
                    <AccordionTrigger className="text-left hover:text-lol-blue">
                      <span className="font-semibold">{item.term}</span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-2 pt-2">
                      <p className="text-foreground">{item.definition}</p>
                      {item.example && (
                        <p className="text-sm text-muted-foreground italic">
                          💡 Ejemplo: {item.example}
                        </p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No se encontraron términos.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Glosario;
