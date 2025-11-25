import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Sword, Shield, Zap, TrendingUp } from "lucide-react";

interface MapZone {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  position: { top: string; left: string };
  size: { width: string; height: string };
}

const mapZones: MapZone[] = [
  {
    id: "top-lane",
    name: "Top Lane",
    description: "La línea superior. Suele ser un duelo 1v1 entre luchadores o tanques. Controla esta zona para acceder al Heraldo de la Grieta.",
    icon: <Sword className="h-4 w-4" />,
    position: { top: "15%", left: "65%" },
    size: { width: "25%", height: "15%" }
  },
  {
    id: "mid-lane",
    name: "Mid Lane",
    description: "La línea del medio. El mago o asesino aquí puede rotar fácilmente a todas las líneas. Es el centro estratégico del mapa.",
    icon: <Zap className="h-4 w-4" />,
    position: { top: "45%", left: "45%" },
    size: { width: "15%", height: "15%" }
  },
  {
    id: "bot-lane",
    name: "Bot Lane",
    description: "La línea inferior. Aquí juegan el ADC y el Soporte juntos. Controla esta zona para acceder al Dragón.",
    icon: <TrendingUp className="h-4 w-4" />,
    position: { top: "70%", left: "20%" },
    size: { width: "25%", height: "15%" }
  },
  {
    id: "blue-jungle",
    name: "Jungla Azul",
    description: "La jungla del equipo azul. Contiene el buff azul (maná y reducción de cooldown) y otros campamentos neutrales.",
    icon: <Shield className="h-4 w-4" />,
    position: { top: "30%", left: "25%" },
    size: { width: "15%", height: "20%" }
  },
  {
    id: "red-jungle",
    name: "Jungla Roja",
    description: "La jungla del equipo rojo. Contiene el buff rojo (daño adicional y ralentización) y otros campamentos neutrales.",
    icon: <Shield className="h-4 w-4" />,
    position: { top: "55%", left: "65%" },
    size: { width: "15%", height: "20%" }
  },
  {
    id: "dragon-pit",
    name: "Foso del Dragón",
    description: "Aquí aparece el Dragón cada 5 minutos. Matar dragones otorga buffs permanentes al equipo. El 4º dragón otorga el Alma del Dragón.",
    icon: <Zap className="h-4 w-4" />,
    position: { top: "60%", left: "45%" },
    size: { width: "12%", height: "12%" }
  },
  {
    id: "baron-pit",
    name: "Foso del Barón",
    description: "El Barón Nashor aparece aquí a los 20 minutos. Es el buff más poderoso del juego y puede decidir partidas.",
    icon: <Sword className="h-4 w-4" />,
    position: { top: "25%", left: "45%" },
    size: { width: "12%", height: "12%" }
  },
  {
    id: "river",
    name: "Río",
    description: "El río divide el mapa. Aquí se disputan los objetivos neutrales y es clave para el control de visión.",
    icon: <TrendingUp className="h-4 w-4" />,
    position: { top: "42%", left: "35%" },
    size: { width: "30%", height: "8%" }
  }
];

const InteractiveMap = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  return (
    <Card className="border-lol-blue/30">
      <CardHeader>
        <CardTitle className="text-2xl">Mapa Interactivo: La Grieta del Invocador</CardTitle>
        <CardDescription>Pasa el ratón sobre las zonas para aprender sobre cada área del mapa</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20 overflow-hidden" style={{ paddingBottom: "75%" }}>
          {/* Map Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
          
          {/* Diagonal line representing the river */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" className="opacity-30">
              <line x1="35%" y1="0%" x2="65%" y2="100%" stroke="currentColor" strokeWidth="3" className="text-lol-blue" />
            </svg>
          </div>

          {/* Interactive Zones */}
          {mapZones.map((zone) => (
            <HoverCard key={zone.id} openDelay={100}>
              <HoverCardTrigger asChild>
                <button
                  className={`absolute rounded-lg border-2 transition-all duration-200 ${
                    selectedZone === zone.id
                      ? "bg-lol-blue/30 border-lol-blue scale-105 z-10"
                      : "bg-accent/10 border-accent/30 hover:bg-accent/20 hover:border-accent/50 hover:scale-105"
                  }`}
                  style={{
                    top: zone.position.top,
                    left: zone.position.left,
                    width: zone.size.width,
                    height: zone.size.height
                  }}
                  onClick={() => setSelectedZone(zone.id === selectedZone ? null : zone.id)}
                >
                  <div className="flex flex-col items-center justify-center h-full gap-1 p-2">
                    <div className="text-accent">{zone.icon}</div>
                    <span className="text-xs font-semibold text-center hidden sm:block">{zone.name}</span>
                  </div>
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80" side="top">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {zone.icon}
                      {zone.name}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{zone.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}

          {/* Base indicators */}
          <div className="absolute top-[8%] left-[15%] w-12 h-12 rounded-full bg-blue-500/30 border-2 border-blue-500 flex items-center justify-center">
            <span className="text-xs font-bold">Base</span>
          </div>
          <div className="absolute bottom-[8%] right-[15%] w-12 h-12 rounded-full bg-red-500/30 border-2 border-red-500 flex items-center justify-center">
            <span className="text-xs font-bold">Base</span>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/5 border border-accent/20">
            <Sword className="h-4 w-4 text-accent" />
            <span className="text-xs">Líneas</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/5 border border-accent/20">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-xs">Jungla</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/5 border border-accent/20">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-xs">Objetivos</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/5 border border-accent/20">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-xs">Control</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveMap;
