import { ReactNode } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { glossaryData } from "@/data/glossary";

interface GlossaryTermProps {
  term: string;
  children?: ReactNode;
}

const GlossaryTerm = ({ term, children }: GlossaryTermProps) => {
  const glossaryEntry = glossaryData.find(
    (item) => item.term.toLowerCase() === term.toLowerCase()
  );

  if (!glossaryEntry) {
    return <span>{children || term}</span>;
  }

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <span className="underline decoration-dotted decoration-lol-blue cursor-help text-lol-blue">
          {children || term}
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 border-lol-blue/30">
        <div className="space-y-2">
          <h4 className="font-bold text-lol-gold">{glossaryEntry.term}</h4>
          <p className="text-sm text-foreground">{glossaryEntry.definition}</p>
          {glossaryEntry.example && (
            <p className="text-xs text-muted-foreground italic">
              💡 {glossaryEntry.example}
            </p>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default GlossaryTerm;
