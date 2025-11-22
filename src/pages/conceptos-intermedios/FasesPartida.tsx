import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, TrendingUp, Zap } from "lucide-react";

const FasesPartida = () => {
  const phases = [
    {
      name: "Early Game (Juego Temprano)",
      time: "0 - 14 minutos",
      icon: Clock,
      color: "text-green-500",
      objectives: [
        "Farmear súbditos y conseguir oro",
        "Ganar experiencia y subir de nivel",
        "No morir innecesariamente",
        "Conseguir la primera torreta",
        "Capturar los primeros dragones",
      ],
      tips: [
        "Enfócate en dar el último golpe a los súbditos (CS)",
        "Juega seguro si estás aprendiendo - no persigas asesinatos arriesgados",
        "Aprende los tiempos de aparición de los buffs de la jungla",
        "Comunica si el enemigo desaparece de tu calle (está 'missing')",
      ],
    },
    {
      name: "Mid Game (Juego Medio)",
      time: "14 - 25 minutos",
      icon: TrendingUp,
      color: "text-yellow-500",
      objectives: [
        "Agruparse con el equipo para conseguir objetivos",
        "Derribar torretas exteriores",
        "Controlar el Dragón y el Heraldo",
        "Empezar a rotar entre calles",
        "Conseguir ventaja de visión en la jungla enemiga",
      ],
      tips: [
        "No farmees solo en una calle sin visión - es peligroso",
        "Muévete con tu equipo para conseguir objetivos importantes",
        "Las peleas 5v5 empiezan a ser más comunes",
        "Presta atención al minimapa constantemente",
      ],
    },
    {
      name: "Late Game (Juego Tardío)",
      time: "25+ minutos",
      icon: Zap,
      color: "text-red-500",
      objectives: [
        "Luchar por el Barón Nashor",
        "Conseguir el Alma del Dragón o Dragón Anciano",
        "Destruir inhibidores",
        "Ganar peleas de equipo decisivas",
        "Destruir el Nexo enemigo",
      ],
      tips: [
        "Una sola muerte puede costar la partida - juega con cuidado",
        "Mantén la visión alrededor de objetivos importantes",
        "Espera a que tu equipo esté agrupado antes de pelear",
        "Aprovecha las ventajas después de ganar una pelea de equipo",
      ],
    },
  ];

  const roleGuidance = [
    {
      role: "Top Laner",
      earlyGame: "Farmea y sobrevive. Usa el Teletransporte para ayudar en peleas de dragón.",
      midGame: "Únete al equipo para peleas u obtén ventaja dividiendo (split push).",
      lateGame: "Protege a tus carries o inicia peleas si eres tanque.",
    },
    {
      role: "Jungla",
      earlyGame: "Despeja tus campamentos, gankea cuando sea seguro, captura objetivos.",
      midGame: "Controla el mapa, asegura dragones y heraldo, ayuda en las calles que lo necesiten.",
      lateGame: "Asegura el Barón, inicia peleas o protege a tus carries.",
    },
    {
      role: "Mid Laner",
      earlyGame: "Farmea y pockea (haz daño pequeño) al enemigo. Ayuda a tu jungla en los scuttle crabs.",
      midGame: "Rota a otras calles para ayudar. Haz daño en peleas de equipo.",
      lateGame: "Haz el mayor daño posible en peleas mientras te mantienes seguro.",
    },
    {
      role: "ADC (Tirador)",
      earlyGame: "Farmea de forma segura y sigue a tu soporte.",
      midGame: "Farmea hasta conseguir 2-3 objetos, luego agrúpate con el equipo.",
      lateGame: "Mantén la máxima distancia y haz daño constante en peleas.",
    },
    {
      role: "Soporte",
      earlyGame: "Protege a tu ADC y coloca visión en el río.",
      midGame: "Controla la visión de objetivos y protege a tus carries.",
      lateGame: "Mantén vivo a tu equipo con escudos/curas o inicia peleas si eres tanque.",
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
            Fases de la Partida
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprende qué hacer en cada momento del juego para maximizar tus posibilidades de victoria
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">¿Por Qué Son Importantes las Fases?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Una partida de League of Legends no es la misma del minuto 1 que del minuto 30. El juego
              evoluciona a través de diferentes fases, y cada una requiere estrategias y prioridades distintas.
            </p>
            <p className="text-muted-foreground">
              Saber en qué fase estás y qué debes hacer es fundamental para tomar buenas decisiones
              y ayudar a tu equipo a ganar. Muchos principiantes pierden partidas simplemente porque no
              adaptaron su estilo de juego a la fase actual.
            </p>
          </CardContent>
        </Card>

        {/* Phases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Las Tres Fases del Juego</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="border-accent/20">
                <CardHeader className="bg-gradient-card">
                  <div className="flex items-center gap-3 mb-2">
                    <phase.icon className={`w-8 h-8 ${phase.color}`} />
                    <div>
                      <CardTitle className="text-2xl">{phase.name}</CardTitle>
                      <CardDescription className="text-base">
                        ⏱️ {phase.time}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-accent">Objetivos Principales</h3>
                      <ul className="space-y-2">
                        {phase.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-accent">Consejos Clave</h3>
                      <ul className="space-y-2">
                        {phase.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-accent mt-1">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Role-Specific Guidance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Guía por Rol</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleGuidance.map((guide, index) => (
              <Card key={index} className="border-accent/20">
                <CardHeader className="bg-gradient-card">
                  <CardTitle className="text-xl">{guide.role}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-1">
                        Early Game
                      </h4>
                      <p className="text-sm text-muted-foreground">{guide.earlyGame}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-yellow-600 dark:text-yellow-400 mb-1">
                        Mid Game
                      </h4>
                      <p className="text-sm text-muted-foreground">{guide.midGame}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 mb-1">
                        Late Game
                      </h4>
                      <p className="text-sm text-muted-foreground">{guide.lateGame}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">❌ Errores Comunes en Cada Fase</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-green-600 dark:text-green-400">
                  Early Game
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Perseguir asesinatos en lugar de farmear</li>
                  <li>• No respetar el daño del enemigo y morir innecesariamente</li>
                  <li>• Gastar todo el maná en pockeo y quedarse sin recursos</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-yellow-600 dark:text-yellow-400">
                  Mid Game
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Farmear solo en una calle sin visión</li>
                  <li>• Ignorar los objetivos de equipo (dragón, torretas)</li>
                  <li>• No agruparse cuando el equipo lo necesita</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-600 dark:text-red-400">
                  Late Game
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Iniciar peleas sin tener a todo el equipo listo</li>
                  <li>• Morir sin razón y regalar el Barón o la partida</li>
                  <li>• No aprovechar las ventajas después de ganar una pelea</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="bg-gradient-hero text-primary-foreground border-0">
          <CardHeader>
            <CardTitle className="text-2xl">💡 Reglas de Oro</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>✓ En early game, el farmeo es más importante que los asesinatos</li>
              <li>✓ En mid game, los objetivos de equipo son más importantes que el farmeo</li>
              <li>✓ En late game, NO MUERAS - cada muerte puede costar la partida</li>
              <li>✓ Siempre adapta tu juego a la fase actual, no juegues igual todo el tiempo</li>
              <li>✓ Mira el reloj del juego para saber cuándo cambiarás de fase</li>
              <li>✓ Comunícate con tu equipo sobre qué fase están jugando</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FasesPartida;
