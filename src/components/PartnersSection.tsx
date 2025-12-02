import { Gamepad2, Video, MessageCircle, Trophy, Globe, Zap } from "lucide-react";

interface Partner {
  name: string;
  icon: React.ReactNode;
}

const partners: Partner[] = [
  { name: "Riot Games", icon: <Gamepad2 className="w-8 h-8" /> },
  { name: "Twitch", icon: <Video className="w-8 h-8" /> },
  { name: "Discord", icon: <MessageCircle className="w-8 h-8" /> },
  { name: "LoL Esports", icon: <Trophy className="w-8 h-8" /> },
  { name: "Leaguepedia", icon: <Globe className="w-8 h-8" /> },
  { name: "OP.GG", icon: <Zap className="w-8 h-8" /> },
];

export const PartnersSection = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
          Información basada en recursos oficiales de
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 text-muted-foreground/60 hover:text-accent transition-colors cursor-default group"
            >
              <div className="group-hover:scale-110 transition-transform">
                {partner.icon}
              </div>
              <span className="font-semibold text-lg hidden sm:inline">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
