import { useState } from "react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Eye, Clock, Shield } from "lucide-react";

interface WardSpot {
  id: string;
  name: string;
  description: string;
  priority: "high" | "medium" | "low";
  phase: ("early" | "mid" | "late")[];
  position: { top: string; left: string };
}

const wardSpots: WardSpot[] = [
  {
    id: "river-bush-top",
    name: "Arbusto del Río Superior",
    description: "Visión crucial para detectar ganks del jungla hacia top lane. Permite al top laner jugar más agresivo con seguridad.",
    priority: "high",
    phase: ["early", "mid"],
    position: { top: "28%", left: "48%" }
  },
  {
    id: "river-bush-bot",
    name: "Arbusto del Río Inferior",
    description: "Visión esencial para bot lane. Detecta ganks y rotaciones del jungla o mid laner. Uno de los wards más importantes del early game.",
    priority: "high",
    phase: ["early", "mid"],
    position: { top: "62%", left: "42%" }
  },
  {
    id: "dragon-entrance-blue",
    name: "Entrada al Dragón (Azul)",
    description: "Permite ver cuando el equipo enemigo se acerca al Dragón desde su jungla. Crítico para disputar el objetivo a tiempo.",
    priority: "high",
    phase: ["early", "mid", "late"],
    position: { top: "58%", left: "52%" }
  },
  {
    id: "dragon-entrance-red",
    name: "Entrada al Dragón (Rojo)",
    description: "Vista desde el otro lado del Dragón. Útil cuando tu equipo tiene control del área para detectar flanqueos.",
    priority: "medium",
    phase: ["mid", "late"],
    position: { top: "64%", left: "48%" }
  },
  {
    id: "baron-entrance-top",
    name: "Entrada al Barón Superior",
    description: "Visión clave en late game. Permite ver si el enemigo intenta hacer Barón y coordinar una respuesta.",
    priority: "high",
    phase: ["mid", "late"],
    position: { top: "28%", left: "42%" }
  },
  {
    id: "baron-entrance-bot",
    name: "Entrada al Barón Inferior",
    description: "Segundo acceso al foso del Barón. Esencial para tener visión completa del área en late game.",
    priority: "high",
    phase: ["late"],
    position: { top: "32%", left: "48%" }
  },
  {
    id: "blue-buff-enemy",
    name: "Buff Azul Enemigo",
    description: "Permite rastrear al jungla enemigo y potencialmente robarle el buff. Información valiosa para invadirs.",
    priority: "medium",
    phase: ["early", "mid"],
    position: { top: "22%", left: "72%" }
  },
  {
    id: "red-buff-enemy",
    name: "Buff Rojo Enemigo",
    description: "Similar al buff azul, permite trackear la ruta del jungla enemigo y coordinar invansiones.",
    priority: "medium",
    phase: ["early", "mid"],
    position: { top: "68%", left: "22%" }
  },
  {
    id: "tri-bush-bot",
    name: "Arbusto Triangular Bot",
    description: "Protege a bot lane de ganks desde detrás. Especialmente importante cuando pusheas la línea.",
    priority: "high",
    phase: ["early", "mid"],
    position: { top: "76%", left: "28%" }
  },
  {
    id: "tri-bush-top",
    name: "Arbusto Triangular Top",
    description: "Protege top lane de ganks por detrás. Útil para ver teleports enemigos también.",
    priority: "medium",
    phase: ["early", "mid"],
    position: { top: "18%", left: "62%" }
  },
  {
    id: "pixel-brush-bot",
    name: "Arbusto Pixel Bot",
    description: "Pequeño arbusto cerca de la línea. Excelente para control cercano y evitar ganks sorpresa.",
    priority: "medium",
    phase: ["early"],
    position: { top: "72%", left: "35%" }
  },
  {
    id: "pixel-brush-top",
    name: "Arbusto Pixel Top",
    description: "Controla el lado de top lane. Útil para ver movimientos del jungla enemigo temprano.",
    priority: "low",
    phase: ["early"],
    position: { top: "22%", left: "55%" }
  }
];

const MapaWards = () => {
  const [selectedPhase, setSelectedPhase] = useState<"all" | "early" | "mid" | "late">("all");
  const [hoveredWard, setHoveredWard] = useState<string | null>(null);

  const filteredWards = selectedPhase === "all" 
    ? wardSpots 
    : wardSpots.filter(ward => ward.phase.includes(selectedPhase as "early" | "mid" | "late"));

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/40 border-red-500 hover:bg-red-500/60";
      case "medium": return "bg-yellow-500/40 border-yellow-500 hover:bg-yellow-500/60";
      case "low": return "bg-green-500/40 border-green-500 hover:bg-green-500/60";
      default: return "bg-accent/40 border-accent";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high": return <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Alta</Badge>;
      case "medium": return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Media</Badge>;
      case "low": return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Baja</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Mapa de Visión: Dónde Wardear
            </h1>
            <p className="text-xl text-muted-foreground">
              Aprende los mejores lugares para colocar guardianes de visión según la fase del juego
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6 flex items-start gap-3">
                <Eye className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Control de Visión</h3>
                  <p className="text-sm text-muted-foreground">
                    Los wards revelan zonas del mapa, permitiendo ver movimientos enemigos y evitar emboscadas.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Duración y Límites</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada jugador puede colocar máximo 2 wards. Duran 90-150 segundos dependiendo del tipo.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex items-start gap-3">
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Negación de Visión</h3>
                  <p className="text-sm text-muted-foreground">
                    Usa guardianes de control (rosados) para eliminar wards enemigos y negar su visión.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <Card className="border-lol-blue/30">
            <CardHeader>
              <CardTitle>Mapa Interactivo de Visión</CardTitle>
              <CardDescription>Selecciona una fase del juego para ver los spots de visión recomendados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Phase Selector */}
              <Tabs value={selectedPhase} onValueChange={(v) => setSelectedPhase(v as typeof selectedPhase)}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">Todos</TabsTrigger>
                  <TabsTrigger value="early">Early Game</TabsTrigger>
                  <TabsTrigger value="mid">Mid Game</TabsTrigger>
                  <TabsTrigger value="late">Late Game</TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Map */}
              <div className="relative w-full bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg border border-accent/20 overflow-hidden" style={{ paddingBottom: "75%" }}>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
                
                {/* River indication */}
                <div className="absolute inset-0">
                  <svg width="100%" height="100%" className="opacity-20">
                    <line x1="35%" y1="0%" x2="65%" y2="100%" stroke="currentColor" strokeWidth="4" className="text-lol-blue" />
                  </svg>
                </div>

                {/* Ward Spots */}
                {filteredWards.map((ward) => (
                  <HoverCard key={ward.id} openDelay={0}>
                    <HoverCardTrigger asChild>
                      <button
                        className={`absolute w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${getPriorityColor(ward.priority)} ${
                          hoveredWard === ward.id ? "scale-150 z-20" : "scale-100 z-10"
                        }`}
                        style={{
                          top: ward.position.top,
                          left: ward.position.left,
                          transform: "translate(-50%, -50%)"
                        }}
                        onMouseEnter={() => setHoveredWard(ward.id)}
                        onMouseLeave={() => setHoveredWard(null)}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{ward.name}</h4>
                          {getPriorityBadge(ward.priority)}
                        </div>
                        <p className="text-sm text-muted-foreground">{ward.description}</p>
                        <div className="flex gap-1 flex-wrap">
                          {ward.phase.map(phase => (
                            <Badge key={phase} variant="outline" className="text-xs">
                              {phase === "early" ? "Early" : phase === "mid" ? "Mid" : "Late"}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}

                {/* Base indicators */}
                <div className="absolute top-[10%] left-[18%] w-10 h-10 rounded-full bg-blue-500/30 border-2 border-blue-500 flex items-center justify-center text-xs font-bold">
                  Azul
                </div>
                <div className="absolute bottom-[10%] right-[18%] w-10 h-10 rounded-full bg-red-500/30 border-2 border-red-500 flex items-center justify-center text-xs font-bold">
                  Rojo
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-500/40 border-2 border-red-500 flex items-center justify-center">
                    <Eye className="h-3 w-3" />
                  </div>
                  <span className="text-sm">Prioridad Alta</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/40 border-2 border-yellow-500 flex items-center justify-center">
                    <Eye className="h-3 w-3" />
                  </div>
                  <span className="text-sm">Prioridad Media</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500/40 border-2 border-green-500 flex items-center justify-center">
                    <Eye className="h-3 w-3" />
                  </div>
                  <span className="text-sm">Prioridad Baja</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips Section */}
          <Card className="border-accent/30">
            <CardHeader>
              <CardTitle>Consejos de Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Siempre lleva un ward de control (rosado) cuando salgas de base. Solo cuestan 75 oros.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Coloca wards ANTES de hacer objetivos como Dragón o Barón, no durante.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Los soportes no son los únicos responsables de wardear. Todo el equipo debe ayudar.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Limpia wards enemigos con wards de control o lente de escaneo para negar su visión.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Wardea el lado del mapa donde planeas jugar. Si vas a pushear top, wardea su jungla top.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MapaWards;
