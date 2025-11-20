import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { championsData } from "@/data/champions";
import { Search, Filter } from "lucide-react";

const Campeones = () => {
  const beginnerChampions = [
    {
      role: "Top",
      champions: [
        { name: "Garen", difficulty: "Fácil", description: "Guerrero resistente con habilidades simples pero efectivas" },
        { name: "Malphite", difficulty: "Fácil", description: "Tanque de roca con una definitiva devastadora" },
      ],
    },
    {
      role: "Jungla",
      champions: [
        { name: "Warwick", difficulty: "Fácil", description: "Cazador que se cura al atacar y rastrea enemigos débiles" },
        { name: "Maestro Yi", difficulty: "Fácil", description: "Espadachín veloz con alto daño de ataque" },
      ],
    },
    {
      role: "Mid",
      champions: [
        { name: "Annie", difficulty: "Fácil", description: "Maga con su osito Tibbers y control de masas" },
        { name: "Lux", difficulty: "Medio", description: "Maga de luz con habilidades de largo alcance" },
      ],
    },
    {
      role: "ADC",
      champions: [
        { name: "Ashe", difficulty: "Fácil", description: "Arquera de hielo con ralentizaciones constantes" },
        { name: "Caitlyn", difficulty: "Fácil", description: "Sheriff con el mayor rango de ataque básico" },
      ],
    },
    {
      role: "Soporte",
      champions: [
        { name: "Soraka", difficulty: "Fácil", description: "Sanadora celestial que mantiene al equipo con vida" },
        { name: "Leona", difficulty: "Medio", description: "Tanque solar que inicia peleas con control de masas" },
      ],
    },
  ];

  const difficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30";
      case "Medio":
        return "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30";
      default:
        return "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground">
            Campeones
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los mejores campeones para empezar tu aventura en la Grieta
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="mb-12 border-accent/20">
          <CardHeader className="bg-gradient-card">
            <CardTitle className="text-2xl">¿Qué son los Campeones?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              Los campeones son los personajes que controlas en League of Legends. Cada uno tiene habilidades únicas, 
              fortalezas y debilidades. Actualmente hay más de 160 campeones en el juego.
            </p>
            <p className="text-muted-foreground">
              Como principiante, es mejor empezar con campeones sencillos que te permitan aprender los fundamentos 
              del juego sin preocuparte por mecánicas complicadas.
            </p>
          </CardContent>
        </Card>

        {/* Champions by Role */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Campeones Recomendados para Principiantes</h2>
          <div className="space-y-6">
            {beginnerChampions.map((roleData, index) => (
              <Card key={index} className="border-accent/20">
                <CardHeader className="bg-gradient-card">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <span className="text-accent">{roleData.role}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {roleData.champions.map((champion, champIndex) => (
                      <div 
                        key={champIndex}
                        className="p-4 rounded-lg border border-border hover:border-accent/40 transition-all hover:shadow-md"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{champion.name}</h3>
                          <Badge className={difficultyColor(champion.difficulty)}>
                            {champion.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{champion.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Card */}
        <Card className="mt-12 bg-gradient-hero text-primary-foreground border-0">
          <CardHeader>
            <CardTitle className="text-2xl">💡 Consejos para Elegir tu Campeón</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>✓ Empieza con campeones marcados como "Fácil" hasta que entiendas el juego</li>
              <li>✓ Prueba diferentes roles para descubrir cuál te gusta más</li>
              <li>✓ Lee las habilidades de tu campeón antes de entrar a una partida</li>
              <li>✓ Practica en partidas contra IA antes de jugar contra otros jugadores</li>
              <li>✓ No tengas miedo de experimentar - ¡diviértete aprendiendo!</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Campeones;
