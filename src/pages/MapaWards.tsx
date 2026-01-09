import { useState } from "react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Eye, Clock, Shield, Sword, Heart, Crosshair, Trees, Wand2 } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Role = "all" | "top" | "jungle" | "mid" | "adc" | "support";
type Phase = "all" | "early" | "mid" | "late";

interface WardSpot {
  id: string;
  name: string;
  description: string;
  priority: "high" | "medium" | "low";
  phase: ("early" | "mid" | "late")[];
  roles: ("top" | "jungle" | "mid" | "adc" | "support")[];
  position: { top: string; left: string };
  tip?: string;
}

const wardSpots: WardSpot[] = [
  // River Wards
  {
    id: "river-bush-top",
    name: "Arbusto del Río Superior",
    description: "Visión crucial para detectar ganks del jungla hacia top lane.",
    priority: "high",
    phase: ["early", "mid"],
    roles: ["top", "jungle"],
    position: { top: "28%", left: "48%" },
    tip: "Colócalo antes del minuto 3 para detectar el primer gank."
  },
  {
    id: "river-bush-bot",
    name: "Arbusto del Río Inferior",
    description: "Visión esencial para bot lane. Detecta ganks y rotaciones.",
    priority: "high",
    phase: ["early", "mid"],
    roles: ["adc", "support", "jungle"],
    position: { top: "62%", left: "42%" },
    tip: "El support debe priorizar este ward en los primeros minutos."
  },
  // Dragon Area
  {
    id: "dragon-pit",
    name: "Foso del Dragón",
    description: "Visión directa sobre el Dragón para controlar cuándo lo hacen.",
    priority: "high",
    phase: ["early", "mid", "late"],
    roles: ["jungle", "support"],
    position: { top: "60%", left: "45%" },
    tip: "Ward de control aquí cuando prepares el objetivo."
  },
  {
    id: "dragon-entrance-blue",
    name: "Entrada al Dragón (Azul)",
    description: "Ve cuando el equipo enemigo se acerca al Dragón desde su jungla.",
    priority: "high",
    phase: ["early", "mid", "late"],
    roles: ["jungle", "support", "mid"],
    position: { top: "56%", left: "52%" },
    tip: "Permite emboscar al equipo enemigo si intentan el objetivo."
  },
  {
    id: "dragon-entrance-red",
    name: "Entrada al Dragón (Rojo)",
    description: "Vista desde el otro lado del Dragón para detectar flanqueos.",
    priority: "medium",
    phase: ["mid", "late"],
    roles: ["support", "jungle"],
    position: { top: "66%", left: "40%" },
    tip: "Útil cuando tu equipo tiene control del área."
  },
  // Baron Area
  {
    id: "baron-pit",
    name: "Foso del Barón",
    description: "Visión directa del Barón Nashor. Crucial en late game.",
    priority: "high",
    phase: ["mid", "late"],
    roles: ["jungle", "support"],
    position: { top: "30%", left: "45%" },
    tip: "Siempre ten un ward de control aquí después del minuto 20."
  },
  {
    id: "baron-entrance-top",
    name: "Entrada al Barón Superior",
    description: "Visión clave para ver si el enemigo intenta hacer Barón.",
    priority: "high",
    phase: ["mid", "late"],
    roles: ["top", "jungle", "support"],
    position: { top: "26%", left: "40%" },
    tip: "Coordina con tu equipo para wardear antes de acercarte."
  },
  {
    id: "baron-entrance-bot",
    name: "Entrada al Barón Inferior",
    description: "Segundo acceso al foso del Barón desde el río.",
    priority: "high",
    phase: ["late"],
    roles: ["jungle", "support", "mid"],
    position: { top: "35%", left: "50%" },
    tip: "Esencial para tener visión completa del área."
  },
  // Jungle Wards - Blue Side
  {
    id: "blue-buff-ally",
    name: "Buff Azul Aliado",
    description: "Protege tu buff azul de invades enemigos.",
    priority: "medium",
    phase: ["early", "mid"],
    roles: ["jungle", "mid"],
    position: { top: "72%", left: "25%" },
    tip: "Importante si el jungla enemigo es agresivo."
  },
  {
    id: "blue-buff-enemy",
    name: "Buff Azul Enemigo",
    description: "Permite rastrear al jungla enemigo y robar su buff.",
    priority: "medium",
    phase: ["early", "mid"],
    roles: ["jungle", "mid", "support"],
    position: { top: "22%", left: "72%" },
    tip: "Ward agresivo para equipos que quieren invadear."
  },
  {
    id: "gromp-ally",
    name: "Gromp Aliado",
    description: "Detecta invades hacia tu lado azul de la jungla.",
    priority: "low",
    phase: ["early"],
    roles: ["jungle"],
    position: { top: "68%", left: "18%" },
    tip: "Útil contra junglas que les gusta invadear temprano."
  },
  // Jungle Wards - Red Side
  {
    id: "red-buff-ally",
    name: "Buff Rojo Aliado",
    description: "Protege tu buff rojo de robos enemigos.",
    priority: "medium",
    phase: ["early", "mid"],
    roles: ["jungle", "adc"],
    position: { top: "78%", left: "70%" },
    tip: "El ADC puede ayudar a wardear esta zona."
  },
  {
    id: "red-buff-enemy",
    name: "Buff Rojo Enemigo",
    description: "Trackea la ruta del jungla enemigo y coordina invasiones.",
    priority: "medium",
    phase: ["early", "mid"],
    roles: ["jungle", "top", "support"],
    position: { top: "18%", left: "28%" },
    tip: "Información valiosa para saber dónde está el jungla."
  },
  {
    id: "raptors-enemy",
    name: "Rapaces Enemigos",
    description: "Uno de los mejores wards para trackear al jungla enemigo.",
    priority: "high",
    phase: ["early", "mid"],
    roles: ["jungle", "mid", "support"],
    position: { top: "25%", left: "60%" },
    tip: "El jungla pasa frecuentemente por aquí."
  },
  // Tri-bushes
  {
    id: "tri-bush-bot",
    name: "Arbusto Triangular Bot",
    description: "Protege a bot lane de ganks desde detrás de la torre.",
    priority: "high",
    phase: ["early", "mid"],
    roles: ["adc", "support"],
    position: { top: "78%", left: "32%" },
    tip: "Esencial cuando pusheas la línea agresivamente."
  },
  {
    id: "tri-bush-top",
    name: "Arbusto Triangular Top",
    description: "Protege top lane de ganks por detrás y teleports.",
    priority: "medium",
    phase: ["early", "mid"],
    roles: ["top"],
    position: { top: "18%", left: "65%" },
    tip: "Wardea aquí si juegas del lado azul."
  },
  // Pixel Brushes
  {
    id: "pixel-brush-bot",
    name: "Arbusto Pixel Bot",
    description: "Control cercano de la línea para evitar ganks sorpresa.",
    priority: "medium",
    phase: ["early"],
    roles: ["adc", "support"],
    position: { top: "72%", left: "38%" },
    tip: "Ward temporal mientras esperas tu ward principal."
  },
  {
    id: "pixel-brush-top",
    name: "Arbusto Pixel Top",
    description: "Controla el lado de top lane en early game.",
    priority: "low",
    phase: ["early"],
    roles: ["top"],
    position: { top: "24%", left: "52%" },
    tip: "Alerta temprana de ganks del jungla."
  },
  // Mid Lane Wards
  {
    id: "mid-brush-top",
    name: "Arbusto Mid Superior",
    description: "Cubre ganks desde la jungla superior hacia mid.",
    priority: "high",
    phase: ["early", "mid"],
    roles: ["mid"],
    position: { top: "38%", left: "45%" },
    tip: "Alterna entre este ward y el inferior."
  },
  {
    id: "mid-brush-bot",
    name: "Arbusto Mid Inferior",
    description: "Cubre ganks desde la jungla inferior hacia mid.",
    priority: "high",
    phase: ["early", "mid"],
    roles: ["mid"],
    position: { top: "52%", left: "48%" },
    tip: "Prioriza el lado donde está el jungla enemigo."
  },
  // Deep Wards
  {
    id: "enemy-blue-entrance",
    name: "Entrada Jungla Azul Enemiga",
    description: "Ward profundo que revela rotaciones del jungla y mid.",
    priority: "medium",
    phase: ["mid", "late"],
    roles: ["jungle", "support"],
    position: { top: "20%", left: "65%" },
    tip: "Solo colócalo cuando tengas control del mapa."
  },
  {
    id: "enemy-red-entrance",
    name: "Entrada Jungla Roja Enemiga",
    description: "Ward profundo en territorio enemigo para splitpush.",
    priority: "medium",
    phase: ["mid", "late"],
    roles: ["top", "jungle"],
    position: { top: "15%", left: "35%" },
    tip: "Perfecto para top laners que hacen splitpush."
  }
];

const roleInfo = {
  all: { label: "Todos", icon: Eye },
  top: { label: "Top", icon: Sword },
  jungle: { label: "Jungla", icon: Trees },
  mid: { label: "Mid", icon: Wand2 },
  adc: { label: "ADC", icon: Crosshair },
  support: { label: "Support", icon: Heart }
};

const MapaWards = () => {
  const [selectedPhase, setSelectedPhase] = useState<Phase>("all");
  const [selectedRole, setSelectedRole] = useState<Role>("all");
  const [hoveredWard, setHoveredWard] = useState<string | null>(null);

  const filteredWards = wardSpots.filter(ward => {
    const phaseMatch = selectedPhase === "all" || ward.phase.includes(selectedPhase as "early" | "mid" | "late");
    const roleMatch = selectedRole === "all" || ward.roles.includes(selectedRole as Exclude<Role, "all">);
    return phaseMatch && roleMatch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/50 border-red-400 hover:bg-red-500/70 shadow-red-500/30";
      case "medium": return "bg-yellow-500/50 border-yellow-400 hover:bg-yellow-500/70 shadow-yellow-500/30";
      case "low": return "bg-green-500/50 border-green-400 hover:bg-green-500/70 shadow-green-500/30";
      default: return "bg-accent/40 border-accent";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high": return <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Alta Prioridad</Badge>;
      case "medium": return <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Media</Badge>;
      case "low": return <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Situacional</Badge>;
    }
  };

  const getRoleBadges = (roles: string[]) => {
    return roles.map(role => {
      const info = roleInfo[role as keyof typeof roleInfo];
      const Icon = info.icon;
      return (
        <Badge key={role} variant="outline" className="text-xs gap-1">
          <Icon className="h-3 w-3" />
          {info.label}
        </Badge>
      );
    });
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
              Mapa de Visión Interactivo
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubre los mejores lugares para colocar wards según tu rol y fase del juego
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
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
            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="pt-6 flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Duración y Límites</h3>
                  <p className="text-sm text-muted-foreground">
                    Cada jugador puede colocar máximo 2 wards. Duran 90-150 segundos dependiendo del nivel.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="pt-6 flex items-start gap-3">
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Wards de Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Cuestan 75 oros, son visibles pero permanentes. Eliminan wards enemigos cercanos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <Card className="border-lol-blue/30 overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-accent" />
                Mapa Interactivo de Visión
              </CardTitle>
              <CardDescription>Filtra por fase del juego y rol para ver los spots más importantes para ti</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Phase Selector */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">Fase del Juego</p>
                  <Tabs value={selectedPhase} onValueChange={(v) => setSelectedPhase(v as Phase)}>
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">Todos</TabsTrigger>
                      <TabsTrigger value="early">Early</TabsTrigger>
                      <TabsTrigger value="mid">Mid</TabsTrigger>
                      <TabsTrigger value="late">Late</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Role Selector */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">Tu Rol</p>
                  <ToggleGroup 
                    type="single" 
                    value={selectedRole} 
                    onValueChange={(v) => v && setSelectedRole(v as Role)}
                    className="flex flex-wrap justify-start gap-1"
                  >
                    {Object.entries(roleInfo).map(([key, { label, icon: Icon }]) => (
                      <ToggleGroupItem 
                        key={key} 
                        value={key} 
                        className="flex items-center gap-1 px-3 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{label}</span>
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
              </div>

              {/* Ward Count */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                Mostrando <span className="font-semibold text-foreground">{filteredWards.length}</span> ubicaciones de ward
              </div>

              {/* Map */}
              <div className="relative w-full bg-gradient-to-br from-emerald-950/40 via-slate-900/60 to-blue-950/40 rounded-xl border border-accent/30 overflow-hidden shadow-2xl" style={{ paddingBottom: "75%" }}>
                {/* Background effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.15),transparent_50%)]" />
                
                {/* River */}
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 30% 5% Q 45% 35% 50% 50% Q 55% 65% 70% 95%" 
                    stroke="url(#riverGradient)" 
                    strokeWidth="20" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Lanes indication */}
                <div className="absolute top-[8%] left-[8%] right-[65%] h-1 bg-gradient-to-r from-blue-500/30 to-transparent rounded" />
                <div className="absolute bottom-[8%] right-[8%] left-[65%] h-1 bg-gradient-to-l from-red-500/30 to-transparent rounded" />

                {/* Ward Spots */}
                {filteredWards.map((ward) => (
                  <HoverCard key={ward.id} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <button
                        className={`absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${getPriorityColor(ward.priority)} ${
                          hoveredWard === ward.id ? "scale-150 z-30 ring-2 ring-white/50" : "scale-100 z-10"
                        }`}
                        style={{
                          top: ward.position.top,
                          left: ward.position.left,
                          transform: "translate(-50%, -50%)"
                        }}
                        onMouseEnter={() => setHoveredWard(ward.id)}
                        onMouseLeave={() => setHoveredWard(null)}
                        onClick={() => setHoveredWard(hoveredWard === ward.id ? null : ward.id)}
                      >
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 z-50" side="top">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-base">{ward.name}</h4>
                          {getPriorityBadge(ward.priority)}
                        </div>
                        <p className="text-sm text-muted-foreground">{ward.description}</p>
                        
                        {ward.tip && (
                          <div className="bg-accent/10 rounded-lg p-2 border border-accent/20">
                            <p className="text-xs text-accent flex gap-2">
                              <span className="font-bold">💡</span>
                              {ward.tip}
                            </p>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1">
                          <span className="text-xs text-muted-foreground mr-1">Roles:</span>
                          {getRoleBadges(ward.roles)}
                        </div>

                        <div className="flex gap-1 flex-wrap">
                          <span className="text-xs text-muted-foreground mr-1">Fases:</span>
                          {ward.phase.map(phase => (
                            <Badge key={phase} variant="secondary" className="text-xs">
                              {phase === "early" ? "Early" : phase === "mid" ? "Mid" : "Late"}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}

                {/* Base indicators */}
                <div className="absolute top-[8%] left-[8%] px-3 py-1 rounded-lg bg-blue-500/40 border border-blue-400 text-xs font-bold text-blue-200">
                  Base Azul
                </div>
                <div className="absolute bottom-[8%] right-[8%] px-3 py-1 rounded-lg bg-red-500/40 border border-red-400 text-xs font-bold text-red-200">
                  Base Roja
                </div>

                {/* Objectives */}
                <div className="absolute top-[30%] left-[45%] w-6 h-6 rounded-full bg-purple-500/50 border-2 border-purple-400 flex items-center justify-center text-[10px] font-bold" title="Barón Nashor">
                  B
                </div>
                <div className="absolute top-[60%] left-[45%] w-6 h-6 rounded-full bg-orange-500/50 border-2 border-orange-400 flex items-center justify-center text-[10px] font-bold" title="Dragón">
                  D
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-red-500/50 border-2 border-red-400 flex items-center justify-center shadow-lg">
                    <Eye className="h-3 w-3" />
                  </div>
                  <span className="text-sm">Alta Prioridad</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/50 border-2 border-yellow-400 flex items-center justify-center shadow-lg">
                    <Eye className="h-3 w-3" />
                  </div>
                  <span className="text-sm">Media</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500/50 border-2 border-green-400 flex items-center justify-center shadow-lg">
                    <Eye className="h-3 w-3" />
                  </div>
                  <span className="text-sm">Situacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500/50 border-2 border-purple-400 flex items-center justify-center text-[10px] font-bold">
                    B
                  </div>
                  <span className="text-sm">Barón</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-orange-500/50 border-2 border-orange-400 flex items-center justify-center text-[10px] font-bold">
                    D
                  </div>
                  <span className="text-sm">Dragón</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Role-specific Tips */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(roleInfo).filter(([key]) => key !== "all").map(([key, { label, icon: Icon }]) => (
              <Card key={key} className="border-accent/20 hover:border-accent/40 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon className="h-5 w-5 text-accent" />
                    {label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {key === "top" && "Wardea el río y tri-bush cuando pushees. En late, controla la entrada a la jungla enemiga para splitpush seguro."}
                    {key === "jungle" && "Trackea al jungla enemigo con wards en sus campamentos. Prepara visión 1 minuto antes de objetivos."}
                    {key === "mid" && "Alterna wards entre ambos lados del río según la posición del jungla enemigo. Prioriza el lado del próximo objetivo."}
                    {key === "adc" && "Deja que el support wardee agresivamente. Tu prioridad es el tri-bush y pixel brush para farmear seguro."}
                    {key === "support" && "Eres el principal responsable de la visión. Siempre lleva un ward de control y rota a wardear objetivos."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Section */}
          <Card className="border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Consejos Generales de Visión
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-sm">Siempre lleva un ward de control (75 oros) cuando salgas de base.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-sm">Coloca wards 1 minuto ANTES de hacer Dragón o Barón.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-sm">Wardea hacia donde planeas jugar, no donde ya estás.</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span className="text-sm">No guardes tus wards - es mejor usarlos que perderlos.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span className="text-sm">No wardees solo. Asegúrate de tener backup antes de ir a zonas peligrosas.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-400 font-bold">✗</span>
                    <span className="text-sm">No ignores los wards enemigos. Usa lente de escaneo o wards de control.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MapaWards;
