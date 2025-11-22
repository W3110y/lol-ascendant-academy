import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Crosshair, Swords, Heart, Users } from "lucide-react";

const Teamfights = () => {
  const positioning = [
    {
      role: "Tanque / Iniciador",
      icon: Shield,
      color: "text-blue-500",
      position: "Frente",
      description: "Eres la primera línea. Tu trabajo es absorber daño y proteger a tus aliados.",
      dos: [
        "Inicia las peleas cuando tu equipo esté listo",
        "Usa tus habilidades de control de masas en los carries enemigos",
        "Absorbe el daño para proteger a tus compañeros",
        "Bloquea habilidades importantes con tu cuerpo",
      ],
      donts: [
        "Iniciar cuando tu equipo no puede seguirte",
        "Desperdiciar tus habilidades en el tanque enemigo",
        "Alejarte de tus carries dejándolos desprotegidos",
      ],
    },
    {
      role: "ADC (Tirador)",
      icon: Crosshair,
      color: "text-red-500",
      position: "Atrás",
      description: "Eres el daño constante. Debes atacar desde una posición segura sin morir.",
      dos: [
        "Mantente en la parte trasera de la pelea",
        "Ataca al objetivo más cercano que puedas golpear de forma segura",
        "Usa tu Flash para escapar si te atacan",
        "Espera a que el enemigo use sus habilidades importantes antes de acercarte",
      ],
      donts: [
        "Correr hacia adelante para perseguir asesinatos",
        "Atacar al tanque enemigo si puedes alcanzar a un carry de forma segura",
        "Estar solo sin protección de tu equipo",
      ],
    },
    {
      role: "Asesino / Luchador",
      icon: Swords,
      color: "text-purple-500",
      position: "Lateral / Flanqueo",
      description: "Tu trabajo es eliminar a los carries enemigos. Espera el momento correcto para entrar.",
      dos: [
        "Espera a que la pelea comience antes de entrar",
        "Busca flanquear para llegar a los carries enemigos",
        "Enfócate en eliminar al ADC o al Mid enemigo",
        "Usa tus habilidades de movilidad para entrar Y salir",
      ],
      donts: [
        "Entrar primero a la pelea (no eres tanque)",
        "Atacar al tanque enemigo cuando hay carries disponibles",
        "Usar todas tus habilidades de escape para entrar",
      ],
    },
    {
      role: "Mago / Control de Masas",
      icon: Users,
      color: "text-cyan-500",
      position: "Media distancia",
      description: "Proporciona daño en área y control. Mantén distancia pero participa activamente.",
      dos: [
        "Posiciónate a media distancia para usar tus habilidades",
        "Guarda tus habilidades de control para peleas importantes",
        "Intenta golpear a múltiples enemigos con tus habilidades de área",
        "Protégete detrás de tu línea frontal",
      ],
      donts: [
        "Desperdiciar tus habilidades más importantes antes de la pelea",
        "Estar tan atrás que no puedas participar",
        "Acercarte demasiado sin tener escape",
      ],
    },
    {
      role: "Soporte",
      icon: Heart,
      color: "text-green-500",
      position: "Flexible",
      description: "Tu posición depende de tu tipo de soporte: protege a tus carries o inicia peleas.",
      dos: [
        "Si eres soporte de protección: quédate cerca de tu ADC",
        "Si eres soporte iniciador: busca buenas oportunidades para iniciar",
        "Coloca visión antes de objetivos importantes",
        "Usa tus habilidades en los momentos clave",
      ],
      donts: [
        "Morir por salvar a alguien que ya está muerto",
        "Usar todas tus habilidades en una sola persona",
        "Alejarte de tu equipo si eres el único que puede protegerlos",
      ],
    },
  ];

  const phases = [
    {
      phase: "Antes de la Pelea",
      tips: [
        "Asegúrate de que tu equipo esté agrupado (cuenta 1, 2, 3, 4, 5)",
        "Coloca visión en arbustos importantes",
        "Ten tus habilidades importantes disponibles (no en cooldown)",
        "Posiciónate según tu rol antes de que empiece",
      ],
    },
    {
      phase: "Durante la Pelea",
      tips: [
        "Mantén la calma - las peleas de equipo son caóticas",
        "Enfócate en TU trabajo según tu rol",
        "Presta atención a las habilidades importantes del enemigo",
        "Comunícate con pings si ves una oportunidad o peligro",
      ],
    },
    {
      phase: "Después de la Pelea",
      tips: [
        "Si ganaste: captura un objetivo (Barón, Dragón, Torreta)",
        "No persigas enemigos si estás bajo de vida",
        "Retrocede a base si necesitas curarte o comprar objetos",
        "Agrúpate de nuevo para el próximo objetivo",
      ],
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
            Peleas de Equipo (Teamfights)
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Domina el posicionamiento y las responsabilidades de cada rol en las peleas 5v5
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">¿Qué es una Pelea de Equipo?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Una pelea de equipo (teamfight) es cuando ambos equipos completos (o la mayoría de sus miembros)
              se enfrentan en un combate. Estas peleas suelen decidir el resultado de objetivos importantes
              como el Barón, Dragones, o incluso la partida completa.
            </p>
            <p className="text-muted-foreground mb-4">
              El posicionamiento y la coordinación son MÁS importantes que las mecánicas individuales.
              Un equipo bien posicionado puede ganar incluso con desventaja de oro.
            </p>
            <p className="text-muted-foreground">
              Como principiante, tu prioridad es: <strong className="text-accent">no morir</strong> y
              hacer tu trabajo según tu rol. No necesitas hacer jugadas espectaculares, solo cumplir
              tu función.
            </p>
          </CardContent>
        </Card>

        {/* Positioning by Role */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Posicionamiento por Rol</h2>
          <div className="space-y-6">
            {positioning.map((guide, index) => (
              <Card key={index} className="border-accent/20">
                <CardHeader className="bg-gradient-card">
                  <div className="flex items-center gap-3 mb-2">
                    <guide.icon className={`w-8 h-8 ${guide.color}`} />
                    <div>
                      <CardTitle className="text-2xl">{guide.role}</CardTitle>
                      <CardDescription className="text-base">
                        📍 Posición: <strong>{guide.position}</strong>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">{guide.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                        <span>✓</span> Lo Que DEBES Hacer
                      </h3>
                      <ul className="space-y-2">
                        {guide.dos.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
                        <span>✗</span> Lo Que NO Debes Hacer
                      </h3>
                      <ul className="space-y-2">
                        {guide.donts.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                            <span>{item}</span>
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

        {/* Phases of Teamfights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Las Tres Fases de una Pelea de Equipo</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((section, index) => (
              <Card key={index} className="border-accent/20">
                <CardHeader className="bg-gradient-card">
                  <CardTitle className="text-xl">{section.phase}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Focus Targets */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">🎯 Prioridad de Objetivos</CardTitle>
            <CardDescription className="text-base">
              ¿A quién debes atacar primero?
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent">Regla General</h3>
                <p className="text-muted-foreground mb-4">
                  Como principiante, sigue esta regla simple: <strong>"Ataca al enemigo más cercano
                  que puedas golpear de forma SEGURA"</strong>. No te arriesgues a morir por intentar
                  llegar al carry enemigo si eso significa atravesar todo su equipo.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-accent">Prioridad de Objetivos (Ideal)</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-semibold">1.</span>
                    <span><strong>ADC enemigo</strong> - Hace el mayor daño constante en late game</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-semibold">2.</span>
                    <span><strong>Mid laner enemigo</strong> - Alto daño explosivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-semibold">3.</span>
                    <span><strong>Cualquier enemigo desposicionado</strong> - Fácil de eliminar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-semibold">4.</span>
                    <span><strong>Bruisers / Luchadores</strong> - Daño medio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-semibold">5.</span>
                    <span><strong>Tanques / Soportes</strong> - Menos prioridad pero a veces no hay opción</span>
                  </li>
                </ol>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Importante:</strong> Esta prioridad solo aplica si puedes alcanzar esos objetivos
                  de forma SEGURA. Es mejor atacar al tanque enemigo estando seguro, que morir intentando
                  llegar al ADC.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">❌ Errores Comunes en Teamfights</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
                  Errores de Posicionamiento
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>Estar demasiado adelante como ADC o mago</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>Estar demasiado atrás y no poder hacer daño</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>Agruparse todos en el mismo punto (fácil de golpear con AoE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>Perseguir enemigos dejando a tu equipo atrás</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
                  Errores de Decisión
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>Iniciar pelea cuando tu equipo no está listo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>Usar todas tus habilidades en el tanque enemigo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>No usar tu definitiva por "guardarla para después"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400">✗</span>
                    <span>Entrar uno por uno en lugar de esperar al equipo</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="bg-gradient-hero text-primary-foreground border-0">
          <CardHeader>
            <CardTitle className="text-2xl">💡 Consejos de Oro para Teamfights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>✓ Tu prioridad #1 es SOBREVIVIR - no puedes ayudar si estás muerto</li>
              <li>✓ Espera a que tu equipo esté agrupado antes de iniciar o entrar a la pelea</li>
              <li>✓ Mantén la calma - las teamfights son caóticas pero con práctica mejorarás</li>
              <li>✓ Mira el minimapa antes de la pelea - ¿están todos los enemigos ahí?</li>
              <li>✓ Después de ganar una pelea, SIEMPRE toma un objetivo (torreta, dragón, barón)</li>
              <li>✓ Si perdiste la pelea, retírate y defiende - no mueras más intentando salvarlo</li>
              <li>✓ Practica en partidas normales antes de llevar estas técnicas a rankeds</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Teamfights;
