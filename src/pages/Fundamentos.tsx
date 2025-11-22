import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mapImage from "@/assets/map-fundamentals.jpg";
import { BookOpen, Gamepad2, Brain } from "lucide-react";

const Fundamentos = () => {
  const modules = [
    {
      title: "Tu Primera Partida",
      description: "Descarga, instalación y tu primer partido paso a paso",
      icon: Gamepad2,
      link: "/fundamentos/primera-partida",
      color: "text-blue-500",
    },
    {
      title: "Conceptos Básicos",
      description: "Súbditos, farmeo, oro, tienda, buffs y estructuras del mapa",
      icon: BookOpen,
      link: "/fundamentos/conceptos-basicos",
      color: "text-purple-500",
    },
  ];

  const concepts = [
    {
      title: "Súbditos (Minions)",
      description: "Los súbditos son soldaditos que avanzan automáticamente por las calles. Dar el último golpe (farmear) te da oro y experiencia.",
      icon: "⚔️",
    },
    {
      title: "Oro y Experiencia",
      description: "El oro se usa para comprar objetos que mejoran tu campeón. La experiencia te hace subir de nivel y mejorar tus habilidades.",
      icon: "💰",
    },
    {
      title: "La Tienda",
      description: "Accede a la tienda para comprar objetos que aumentan tu poder, defensa, velocidad y más. Los objetos son cruciales para ganar.",
      icon: "🏪",
    },
    {
      title: "Objetivos",
      description: "Destruye torretas, inhibidores y finalmente el Nexo enemigo para ganar la partida. Trabaja en equipo para conseguirlo.",
      icon: "🎯",
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
            Fundamentos del Juego
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprende los conceptos básicos que todo invocador debe dominar
          </p>
        </div>

        {/* Map Section */}
        <Card className="mb-12 overflow-hidden border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-3xl">La Grieta del Invocador</CardTitle>
            <CardDescription className="text-base">
              El mapa donde todas las batallas tienen lugar
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={mapImage} 
                  alt="Mapa de la Grieta del Invocador" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">Las Tres Calles</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong className="text-foreground">Top (Arriba):</strong> Calle superior, generalmente para luchadores solitarios</li>
                    <li><strong className="text-foreground">Mid (Medio):</strong> Calle central, para campeones con alto daño</li>
                    <li><strong className="text-foreground">Bot (Abajo):</strong> Calle inferior, donde van el tirador y el soporte</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-accent">La Jungla</h3>
                  <p className="text-muted-foreground">
                    El área entre las calles llena de monstruos neutrales. El junglero ayuda a todas las calles 
                    y captura objetivos importantes como el Dragón y el Barón Nashor.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Modules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Módulos de Aprendizaje</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Link key={index} to={module.link}>
                <Card className="border-accent/20 hover:border-accent/60 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <module.icon className={`w-10 h-10 ${module.color}`} />
                      <CardTitle className="text-2xl">{module.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Comenzar Módulo →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Key Concepts */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Conceptos Clave</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <Card key={index} className="border-accent/20 hover:border-accent/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{concept.icon}</span>
                    <CardTitle className="text-xl">{concept.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{concept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Game Objective */}
        <Card className="mt-12 bg-gradient-hero text-primary-foreground border-0">
          <CardHeader>
            <CardTitle className="text-3xl">🏆 Objetivo del Juego</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-primary-foreground/90">
              El objetivo principal es simple: <strong>destruir el Nexo enemigo</strong> antes de que destruyan el tuyo. 
              Para lograrlo, debes trabajar en equipo, farmear oro, comprar objetos, derrotar torretas, 
              capturar objetivos épicos y ganar peleas en equipo. ¡La comunicación y la estrategia son clave!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Fundamentos;
