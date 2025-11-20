import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Roles = () => {
  const roles = [
    {
      name: "Top Laner",
      lane: "Calle Superior",
      icon: "⚔️",
      description: "El luchador solitario del equipo",
      responsibilities: [
        "Controlar la calle superior y farmear eficientemente",
        "Ser un iniciador o tanque en peleas de equipo",
        "Presionar la calle y atraer atención enemiga",
        "Proteger o destruir la torreta superior",
      ],
      championTypes: "Tanques, Luchadores, Dividepuentes",
      tips: "Aprende a gestionar las oleadas de súbditos y a cuándo teleportarte para ayudar al equipo",
    },
    {
      name: "Jungla",
      lane: "La Jungla",
      icon: "🌲",
      description: "El estratega del mapa",
      responsibilities: [
        "Farmear los campamentos de monstruos neutrales",
        "Realizar 'ganks' (emboscadas) en las calles para ayudar a tu equipo",
        "Controlar objetivos épicos como el Dragón y el Heraldo del Rift",
        "Proporcionar visión y controlar el mapa",
      ],
      championTypes: "Asesinos, Tanques, Controladores",
      tips: "La jungla es el rol más complejo para principiantes. Aprende las rutas de farmeo básicas primero",
    },
    {
      name: "Mid Laner",
      lane: "Calle Central",
      icon: "✨",
      description: "El carrilero con alto potencial de daño",
      responsibilities: [
        "Dominar la calle central y conseguir ventaja",
        "Rotar a otras calles para ayudar (roaming)",
        "Infligir daño masivo en peleas de equipo",
        "Controlar el río y ayudar con objetivos",
      ],
      championTypes: "Magos, Asesinos, Controladores",
      tips: "La posición central te permite influir en todo el mapa. Usa esta ventaja para ayudar a tus compañeros",
    },
    {
      name: "ADC (Tirador)",
      lane: "Calle Inferior",
      icon: "🏹",
      description: "El cañón de cristal del equipo",
      responsibilities: [
        "Farmear para conseguir objetos potentes",
        "Infligir daño constante en peleas de equipo",
        "Destruir torretas y objetivos rápidamente",
        "Posicionarte de forma segura en las peleas",
      ],
      championTypes: "Tiradores (Marksmen)",
      tips: "Eres frágil pero poderoso. Aprende a posicionarte detrás de tu equipo y a farmear eficientemente",
    },
    {
      name: "Soporte",
      lane: "Calle Inferior",
      icon: "🛡️",
      description: "El protector y facilitador de jugadas",
      responsibilities: [
        "Proteger y ayudar al ADC en la fase de líneas",
        "Proporcionar visión con guardianes (wards)",
        "Iniciar peleas o proteger al equipo según el tipo de soporte",
        "Controlar objetivos y el mapa con visión",
      ],
      championTypes: "Encantadores, Tanques, Magos",
      tips: "No necesitas farmear súbditos. Tu oro viene de los objetos de soporte y ayudar al equipo",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            Roles y Líneas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los 5 roles esenciales de League of Legends
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">Trabajo en Equipo</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">
              En League of Legends, cada jugador tiene un rol específico que desempeñar. 
              Entender estos roles es fundamental para coordinar con tu equipo y ganar partidas. 
              Cada rol tiene responsabilidades únicas y requiere diferentes habilidades.
            </p>
          </CardContent>
        </Card>

        {/* Roles Grid */}
        <div className="space-y-8">
          {roles.map((role, index) => (
            <Card key={index} className="border-accent/20 hover:border-accent/40 transition-all">
              <CardHeader className="bg-gradient-card">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-5xl">{role.icon}</span>
                  <div>
                    <CardTitle className="text-3xl">{role.name}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {role.lane} • {role.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-accent">Responsabilidades</h3>
                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-accent">Tipos de Campeones</h3>
                    <p className="text-muted-foreground mb-4">{role.championTypes}</p>
                    
                    <h3 className="text-lg font-semibold mb-3 text-accent">Consejo Principal</h3>
                    <p className="text-muted-foreground italic">{role.tips}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Tips */}
        <Card className="mt-12 bg-gradient-hero text-primary-foreground border-0">
          <CardHeader>
            <CardTitle className="text-2xl">🎮 Encontrando tu Rol</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-primary-foreground/90">
              <p><strong>¿Te gusta el combate directo?</strong> Prueba Top Laner</p>
              <p><strong>¿Prefieres la estrategia y el control del mapa?</strong> La Jungla es para ti</p>
              <p><strong>¿Quieres alto impacto y movilidad?</strong> Mid Laner es tu rol</p>
              <p><strong>¿Te gusta infligir mucho daño sostenido?</strong> Conviértete en ADC</p>
              <p><strong>¿Disfrutas ayudando a otros y siendo táctico?</strong> El Soporte te espera</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Roles;
