import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Layout, Gamepad2, Shield } from "lucide-react";

const PrimeraPartida = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Tu Primera Partida
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Una guía paso a paso para comenzar tu aventura en League of Legends.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Step 1 */}
          <Card className="border-lol-blue/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">1</span>
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Download className="h-6 w-6 text-accent" />
                  Descarga e Instalación
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-3 text-foreground/90">
                <li>Ve a la página oficial: <a href="https://www.leagueoflegends.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">leagueoflegends.com</a></li>
                <li>Haz clic en "Jugar Gratis" o "Descargar"</li>
                <li>Ejecuta el instalador y sigue las instrucciones en pantalla</li>
                <li>El juego es completamente gratuito - no necesitas pagar para jugar</li>
                <li>Crea tu cuenta de Riot Games (recuerda tu nombre de usuario y contraseña)</li>
              </ol>
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-300">
                  💡 <strong>Consejo:</strong> La descarga puede tardar un rato dependiendo de tu conexión. El juego ocupa aproximadamente 12-15 GB.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-lol-gold/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-lol-gold flex items-center justify-center">
                  <span className="text-lol-dark font-bold">2</span>
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Layout className="h-6 w-6 text-lol-gold" />
                  El Cliente de League of Legends
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90">
                El "cliente" es el programa principal donde navegas antes de entrar a una partida. Aquí puedes:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/90"><strong>Jugar:</strong> Iniciar partidas contra bots o jugadores reales</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/90"><strong>Colección:</strong> Ver tus campeones, aspectos y recompensas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/90"><strong>Perfil:</strong> Ver tus estadísticas y progreso</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/90"><strong>Tienda:</strong> Comprar campeones (con esencia azul gratis) o aspectos (cosméticos)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/90"><strong>Loot:</strong> Abrir cofres y reclamar recompensas</span>
                </li>
              </ul>
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-blue-300">
                  💡 <strong>Dato:</strong> Cada semana hay una rotación gratuita de campeones que puedes probar sin comprarlos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-accent/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">3</span>
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Gamepad2 className="h-6 w-6 text-accent" />
                  Tu Primera Partida: Tutorial
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90">
                El juego te guiará a través de un tutorial automático. Aquí aprenderás:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card-foreground/5 border border-border">
                  <h4 className="font-semibold text-accent mb-2">Controles Básicos</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Click derecho para moverte</li>
                    <li>• Q, W, E, R para habilidades</li>
                    <li>• D y F para hechizos de invocador</li>
                    <li>• B para volver a base</li>
                    <li>• P para abrir la tienda</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-card-foreground/5 border border-border">
                  <h4 className="font-semibold text-accent mb-2">Conceptos Iniciales</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Cómo atacar súbditos y enemigos</li>
                    <li>• Qué son las habilidades</li>
                    <li>• Cómo usar la tienda</li>
                    <li>• Objetivo: destruir el Nexo enemigo</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="border-green-500/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-lol-dark font-bold">4</span>
                </div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-400" />
                  Después del Tutorial
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90 mb-4">
                Una vez completes el tutorial, te recomendamos:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">1. Juega contra bots primero</h4>
                  <p className="text-sm text-muted-foreground">
                    Las partidas vs IA (Inteligencia Artificial) son perfectas para practicar sin presión. Elige "Intro vs IA" para empezar.
                  </p>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">2. Prueba diferentes campeones</h4>
                  <p className="text-sm text-muted-foreground">
                    Experimenta con los campeones gratuitos cada semana para encontrar los que más te gusten.
                  </p>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">3. No te preocupes por perder</h4>
                  <p className="text-sm text-muted-foreground">
                    Todos empezamos perdiendo. Lo importante es aprender algo de cada partida.
                  </p>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">4. Sigue aprendiendo</h4>
                  <p className="text-sm text-muted-foreground">
                    Revisa nuestra sección de <a href="/fundamentos" className="text-accent hover:underline">Fundamentos</a> para entender mejor el juego.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrimeraPartida;
