import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, TrendingUp, Zap } from "lucide-react";

interface Camp {
  id: string;
  name: string;
  position: { top: string; left: string };
  side: 'blue' | 'red';
}

interface Route {
  id: string;
  name: string;
  difficulty: 'Fácil' | 'Medio';
  description: string;
  champions: string[];
  path: string[];
  tips: string[];
}

const camps: Camp[] = [
  // Blue side camps
  { id: 'blue-red', name: 'Buff Rojo', position: { top: '60%', left: '25%' }, side: 'blue' },
  { id: 'blue-blue', name: 'Buff Azul', position: { top: '25%', left: '22%' }, side: 'blue' },
  { id: 'blue-gromp', name: 'Gromp', position: { top: '18%', left: '18%' }, side: 'blue' },
  { id: 'blue-wolves', name: 'Lobos', position: { top: '35%', left: '32%' }, side: 'blue' },
  { id: 'blue-raptors', name: 'Aves', position: { top: '55%', left: '35%' }, side: 'blue' },
  { id: 'blue-krugs', name: 'Krugs', position: { top: '70%', left: '28%' }, side: 'blue' },
  // Red side camps (mirror)
  { id: 'red-red', name: 'Buff Rojo', position: { top: '40%', left: '75%' }, side: 'red' },
  { id: 'red-blue', name: 'Buff Azul', position: { top: '75%', left: '78%' }, side: 'red' },
  { id: 'red-gromp', name: 'Gromp', position: { top: '82%', left: '82%' }, side: 'red' },
  { id: 'red-wolves', name: 'Lobos', position: { top: '65%', left: '68%' }, side: 'red' },
  { id: 'red-raptors', name: 'Aves', position: { top: '45%', left: '65%' }, side: 'red' },
  { id: 'red-krugs', name: 'Krugs', position: { top: '30%', left: '72%' }, side: 'red' },
];

const routes: Route[] = [
  {
    id: 'full-clear-blue',
    name: 'Despeje Completo (Lado Azul)',
    difficulty: 'Fácil',
    description: 'La ruta más estándar para farmear toda la jungla antes de tu primer gank. Ideal para junglas que escalan bien.',
    champions: ['Warwick', 'Maestro Yi', 'Amumu', 'Shyvana'],
    path: ['Buff Rojo', 'Krugs', 'Aves', 'Lobos', 'Buff Azul', 'Gromp', 'Cangrejo'],
    tips: [
      'Empieza con Buff Rojo y pide ayuda a tu bot lane',
      'Usa Castigo en Krugs y Gromp para máxima salud',
      'Llegas a nivel 4 antes de tu primer gank',
      'Ideal para campeones que necesitan items para ser fuertes',
    ],
  },
  {
    id: 'fast-gank-red',
    name: 'Gank Rápido Level 3 (Lado Rojo)',
    difficulty: 'Fácil',
    description: 'Ruta agresiva para hacer un gank temprano en mid o top después de solo 3 campamentos.',
    champions: ['Warwick', 'Jarvan IV', 'Xin Zhao', 'Lee Sin'],
    path: ['Buff Rojo', 'Lobos', 'Buff Azul', 'Gank Mid/Top'],
    tips: [
      'Empieza con Buff Rojo con ayuda de tu bot',
      'Salta Krugs para llegar rápido a level 3',
      'Ideal para junglas con CC temprano',
      'Busca líneas con enemigos pusheados',
    ],
  },
  {
    id: 'vertical-jungle',
    name: 'Jungla Vertical',
    difficulty: 'Medio',
    description: 'Estrategia avanzada donde farmeas tu lado y el lado opuesto del enemigo para controlar el mapa.',
    champions: ['Graves', 'Nidalee', 'Kha\'Zix'],
    path: ['Tu Lado Completo', 'Lado Opuesto Enemigo', 'Objetivos'],
    tips: [
      'Requiere visión y conocimiento del enemigo',
      'Ideal cuando tu lado del mapa tiene ventaja',
      'Roba camps enemigos mientras proteges tu lado fuerte',
      'Controla cangrejo del río en tu lado',
    ],
  },
  {
    id: 'power-farm',
    name: 'Farm Intensivo hasta Level 6',
    difficulty: 'Fácil',
    description: 'Para junglas que necesitan su ultimate para ser efectivos. Prioriza farmear hasta level 6.',
    champions: ['Amumu', 'Nocturne', 'Master Yi', 'Fiddlesticks'],
    path: ['Despeje Completo', 'Repetir', 'Cangrejos', 'Repetir'],
    tips: [
      'Minimiza ganks antes de level 6',
      'Prioriza todos los campamentos grandes',
      'Toma ambos cangrejos cuando sea posible',
      'Una vez level 6, busca ganks con tu ultimate',
    ],
  },
];

const RutasJungla = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            Rutas de Jungla para Principiantes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprende las rutas básicas y cuándo usar cada una
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-accent" />
              ¿Qué es una Ruta de Jungla?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Una ruta de jungla es el orden en el que matas los campamentos de monstruos. 
              Elegir la ruta correcta depende de tu campeón, tu estrategia y el estado de la partida.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <TrendingUp className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold mb-1">Despeje Completo</h3>
                <p className="text-sm text-muted-foreground">Para junglas que priorizan farmeo y escala</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <Zap className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold mb-1">Gank Temprano</h3>
                <p className="text-sm text-muted-foreground">Para junglas agresivas con CC fuerte</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <AlertCircle className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold mb-1">Objetivos</h3>
                <p className="text-sm text-muted-foreground">Controla dragón y heraldo para tu equipo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visual Map */}
        <Card className="mb-12 border-lol-blue/30">
          <CardHeader>
            <CardTitle className="text-2xl">Mapa de Campamentos</CardTitle>
            <CardDescription>Ubicación de todos los campamentos de la jungla</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="blue" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="blue">Lado Azul</TabsTrigger>
                <TabsTrigger value="red">Lado Rojo</TabsTrigger>
              </TabsList>
              
              <TabsContent value="blue">
                <div className="relative w-full bg-muted rounded-lg border-2 border-lol-blue/30" style={{ paddingBottom: '75%' }}>
                  <div className="absolute inset-0 p-4">
                    {camps
                      .filter(camp => camp.side === 'blue')
                      .map((camp) => (
                        <div
                          key={camp.id}
                          className="absolute"
                          style={{ top: camp.position.top, left: camp.position.left, transform: 'translate(-50%, -50%)' }}
                        >
                          <div className="bg-lol-blue/20 border-2 border-lol-blue rounded-lg px-3 py-2 text-center hover:bg-lol-blue/40 transition-colors cursor-pointer">
                            <span className="text-xs font-semibold text-lol-blue">{camp.name}</span>
                          </div>
                        </div>
                      ))}
                    
                    {/* Rivers and objectives */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Badge variant="outline" className="bg-accent/20 border-accent">Río</Badge>
                    </div>
                    <div className="absolute bottom-[15%] right-[35%]">
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Dragón</Badge>
                    </div>
                    <div className="absolute top-[15%] left-[35%]">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Heraldo</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="red">
                <div className="relative w-full bg-muted rounded-lg border-2 border-red-500/30" style={{ paddingBottom: '75%' }}>
                  <div className="absolute inset-0 p-4">
                    {camps
                      .filter(camp => camp.side === 'red')
                      .map((camp) => (
                        <div
                          key={camp.id}
                          className="absolute"
                          style={{ top: camp.position.top, left: camp.position.left, transform: 'translate(-50%, -50%)' }}
                        >
                          <div className="bg-red-500/20 border-2 border-red-500 rounded-lg px-3 py-2 text-center hover:bg-red-500/40 transition-colors cursor-pointer">
                            <span className="text-xs font-semibold text-red-300">{camp.name}</span>
                          </div>
                        </div>
                      ))}
                    
                    {/* Rivers and objectives */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Badge variant="outline" className="bg-accent/20 border-accent">Río</Badge>
                    </div>
                    <div className="absolute bottom-[15%] right-[35%]">
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Dragón</Badge>
                    </div>
                    <div className="absolute top-[15%] left-[35%]">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Heraldo</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Routes */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground mb-6">Rutas Recomendadas</h2>
          {routes.map((route, index) => (
            <Card key={route.id} className="border-accent/20 hover:border-accent/40 transition-all">
              <CardHeader className="bg-gradient-card">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-2xl mb-2">{route.name}</CardTitle>
                    <CardDescription className="text-base">{route.description}</CardDescription>
                  </div>
                  <Badge className={route.difficulty === 'Fácil' 
                    ? 'bg-green-500/20 text-green-300 border-green-500/30'
                    : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                  }>
                    {route.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-accent">Orden de Campamentos</h3>
                    <ol className="space-y-2">
                      {route.path.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center gap-3">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                            {stepIndex + 1}
                          </span>
                          <span className="text-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3 text-accent">Campeones Ideales</h3>
                      <div className="flex flex-wrap gap-2">
                        {route.champions.map((champ) => (
                          <Badge key={champ} variant="secondary">{champ}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-accent">Consejos</h3>
                    <ul className="space-y-2">
                      {route.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex gap-2">
                          <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Tips */}
        <Card className="mt-12 bg-gradient-hero text-primary-foreground border-0">
          <CardHeader>
            <CardTitle className="text-2xl">💡 Consejo Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-primary-foreground/90">
              <p><strong>Cangrejos del Río:</strong> Siempre intenta tomar al menos uno después de tu primer despeje. Dan mucho oro y experiencia.</p>
              <p><strong>Castigo (Smite):</strong> Úsalo en Krugs y Gromp para maximizar tu salud durante el despeje.</p>
              <p><strong>Adapta tu ruta:</strong> Si ves una oportunidad de gank, no tengas miedo de cambiar tu plan original.</p>
              <p><strong>Visión:</strong> Coloca guardianes cerca de objetivos importantes (Dragón, Barón) cuando puedas.</p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default RutasJungla;
