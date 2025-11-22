import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Gem, Clock, Swords } from "lucide-react";

const ConceptosIntermedios = () => {
  const modules = [
    {
      title: "Visión y Wards",
      description: "Aprende la importancia de la visión, dónde colocar wards y cómo controlar el mapa",
      icon: Eye,
      link: "/conceptos-intermedios/vision",
      color: "text-blue-500",
    },
    {
      title: "Objetivos Neutrales",
      description: "Dragones, Heraldo de la Grieta y Barón Nashor: cuándo y cómo capturarlos",
      icon: Gem,
      link: "/conceptos-intermedios/objetivos-neutrales",
      color: "text-purple-500",
    },
    {
      title: "Fases de la Partida",
      description: "Early, Mid y Late game: qué hacer en cada fase y cómo adaptarte",
      icon: Clock,
      link: "/conceptos-intermedios/fases-partida",
      color: "text-orange-500",
    },
    {
      title: "Peleas de Equipo",
      description: "Posicionamiento, prioridades y cómo ganar teamfights según tu rol",
      icon: Swords,
      link: "/conceptos-intermedios/teamfights",
      color: "text-red-500",
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
            Conceptos Intermedios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lleva tu juego al siguiente nivel con estos conceptos esenciales
          </p>
        </div>

        {/* Learning Modules */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
                    Aprender →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-12 bg-gradient-hero text-primary-foreground border-0 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">💡 Domina estos conceptos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-primary-foreground/90">
              Estos conceptos intermedios son fundamentales para mejorar tu nivel de juego. 
              Una vez que domines los fundamentos básicos, estos temas te ayudarán a tomar 
              mejores decisiones, coordinar con tu equipo y ganar más partidas. ¡Tómate tu tiempo 
              para aprender cada uno!
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ConceptosIntermedios;
