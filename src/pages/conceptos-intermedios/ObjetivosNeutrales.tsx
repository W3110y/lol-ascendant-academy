import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ObjetivosNeutrales = () => {
  const dragons = [
    {
      name: "Dragón Infernal",
      buff: "+8% de Daño de Ataque y Poder de Habilidad",
      color: "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30",
    },
    {
      name: "Dragón de Montaña",
      buff: "+6% de Armadura y Resistencia Mágica",
      color: "bg-stone-500/20 text-stone-600 dark:text-stone-400 border-stone-500/30",
    },
    {
      name: "Dragón Oceánico",
      buff: "Regeneración de vida y maná mejorada",
      color: "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30",
    },
    {
      name: "Dragón de Nube",
      buff: "+7% de Velocidad de Movimiento fuera de combate",
      color: "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
    },
    {
      name: "Dragón Hextech",
      buff: "+5% de Daño de Ataque y Poder de Habilidad + Ralentización de habilidades",
      color: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
    },
    {
      name: "Dragón Quimiotecnológico",
      buff: "+5% de daño total + Quemadura al atacar",
      color: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
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
            Objetivos Neutrales
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dragones, Heraldo de la Grieta y Barón Nashor: los objetivos que cambian el curso de la partida
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">¿Por Qué Son Importantes?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Los objetivos neutrales son monstruos poderosos que aparecen en la jungla y otorgan buffs permanentes
              o temporales a tu equipo cuando los derrotas. Controlar estos objetivos es crucial para ganar la partida.
            </p>
            <p className="text-muted-foreground">
              A menudo, las partidas se deciden por el equipo que consigue más objetivos, no necesariamente
              por el que tiene más asesinatos. ¡Aprende a priorizarlos!
            </p>
          </CardContent>
        </Card>

        {/* Dragons Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Los Dragones Elementales</h2>
          <Card className="mb-6 border-accent/20">
            <CardHeader className="bg-gradient-card">
              <CardTitle className="text-2xl">🐉 El Dragón</CardTitle>
              <CardDescription className="text-base">
                Aparece en la zona inferior del río cada 5 minutos
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                El dragón otorga buffs permanentes a todo tu equipo. El tipo de dragón cambia cada partida,
                y hay diferentes tipos con diferentes beneficios. Si tu equipo mata 4 dragones, obtiene el
                <strong className="text-accent"> Alma del Dragón</strong>, un buff muy poderoso.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dragons.map((dragon, index) => (
              <Card key={index} className="border-accent/20 hover:border-accent/40 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{dragon.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge className={dragon.color}>
                    {dragon.buff}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6 bg-gradient-hero text-primary-foreground border-0">
            <CardHeader>
              <CardTitle className="text-xl">🔥 Dragón Anciano</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary-foreground/90">
                Después de que un equipo consiga el Alma del Dragón, aparece el <strong>Dragón Anciano</strong>.
                Este dragón otorga un buff temporal que ejecuta enemigos con poca vida. ¡Es extremadamente poderoso!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Herald Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Heraldo de la Grieta</h2>
          <Card className="border-accent/20">
            <CardHeader className="bg-gradient-card">
              <CardTitle className="text-2xl">👁️ El Heraldo de la Grieta</CardTitle>
              <CardDescription className="text-base">
                Aparece en la zona superior del río a los 8 minutos
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">¿Qué hace?</h3>
                  <p className="text-muted-foreground">
                    El Heraldo deja caer el <strong>"Ojo del Heraldo"</strong> que puedes recoger e invocar más tarde.
                    Cuando lo invocas, el Heraldo carga contra las torretas enemigas, causando daño masivo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">¿Cuándo usarlo?</h3>
                  <p className="text-muted-foreground">
                    Es ideal para derribar la primera torreta de una calle y conseguir ventaja de oro para tu equipo.
                    El Heraldo desaparece a los 19:45 minutos, así que úsalo antes de ese momento.
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Consejo:</strong> El Heraldo tiene un punto débil en su espalda (el ojo morado).
                    Atacarlo ahí causa daño extra, ¡así que rodéalo para derrotarlo más rápido!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Baron Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Barón Nashor</h2>
          <Card className="border-accent/20">
            <CardHeader className="bg-gradient-card">
              <CardTitle className="text-2xl">👑 El Barón Nashor</CardTitle>
              <CardDescription className="text-base">
                Aparece a los 20 minutos en la zona superior del río
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">El Objetivo Más Poderoso</h3>
                  <p className="text-muted-foreground mb-4">
                    El Barón Nashor es el monstruo más fuerte del juego. Derrotarlo otorga el
                    <strong> Buff del Barón Nashor</strong> a todo tu equipo vivo durante 3 minutos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-accent">Beneficios del Buff</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Aumenta significativamente tu Poder de Ataque y Poder de Habilidad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Los súbditos cercanos a ti se vuelven más fuertes y avanzan más rápido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Te permite destruir torretas mucho más fácilmente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Recuperas maná al recibir daño</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    ⚠️ <strong>Advertencia:</strong> El Barón es extremadamente peligroso. Intentar matarlo
                    sin la preparación adecuada puede terminar en un desastre.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Mejor momento:</strong> Intenta hacer el Barón cuando hayas derrotado a varios
                    enemigos en una pelea de equipo, o cuando el equipo enemigo esté lejos del área.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips Card */}
        <Card className="bg-gradient-hero text-primary-foreground border-0">
          <CardHeader>
            <CardTitle className="text-2xl">💡 Consejos Clave sobre Objetivos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>✓ Siempre muévete al Dragón cuando aparezca (cada 5 minutos)</li>
              <li>✓ Usa el Heraldo para conseguir la primera torreta del juego</li>
              <li>✓ No intentes el Barón si no sabes dónde están todos los enemigos</li>
              <li>✓ La visión (wards) alrededor de estos objetivos es crucial</li>
              <li>✓ Es mejor perder una pelea y que el enemigo no consiga el objetivo, que regalárselo</li>
              <li>✓ Comunícate con tu equipo - los objetivos se consiguen en equipo, no solo</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ObjetivosNeutrales;
