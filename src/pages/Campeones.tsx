import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { championsData } from "@/data/champions";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { getChampionSquareUrl } from "@/lib/ddragon";
import { 
  Search, 
  Sword, 
  Shield, 
  Wand2, 
  Target, 
  Heart, 
  Sparkles,
  Users,
  BookOpen,
  ArrowRight,
  Gamepad2,
  Star,
  ChevronRight
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Campeones = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("Todos");
  const [difficultyFilter, setDifficultyFilter] = useState("Todos");

  const filteredChampions = championsData.filter((champion) => {
    const matchesSearch = champion.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "Todos" || champion.role.includes(roleFilter);
    const matchesDifficulty = difficultyFilter === "Todos" || champion.difficulty === difficultyFilter;
    return matchesSearch && matchesRole && matchesDifficulty;
  });

  const beginnerChampions = [
    {
      role: "Top",
      icon: Shield,
      champions: [
        { name: "Garen", difficulty: "Fácil", description: "Guerrero resistente con habilidades simples pero efectivas" },
        { name: "Malphite", difficulty: "Fácil", description: "Tanque de roca con una definitiva devastadora" },
      ],
    },
    {
      role: "Jungla",
      icon: Sword,
      champions: [
        { name: "Warwick", difficulty: "Fácil", description: "Cazador que se cura al atacar y rastrea enemigos débiles" },
        { name: "Maestro Yi", difficulty: "Fácil", description: "Espadachín veloz con alto daño de ataque" },
      ],
    },
    {
      role: "Mid",
      icon: Wand2,
      champions: [
        { name: "Annie", difficulty: "Fácil", description: "Maga con su osito Tibbers y control de masas" },
        { name: "Lux", difficulty: "Medio", description: "Maga de luz con habilidades de largo alcance" },
      ],
    },
    {
      role: "ADC",
      icon: Target,
      champions: [
        { name: "Ashe", difficulty: "Fácil", description: "Arquera de hielo con ralentizaciones constantes" },
        { name: "Caitlyn", difficulty: "Fácil", description: "Sheriff con el mayor rango de ataque básico" },
      ],
    },
    {
      role: "Soporte",
      icon: Heart,
      champions: [
        { name: "Soraka", difficulty: "Fácil", description: "Sanadora celestial que mantiene al equipo con vida" },
        { name: "Leona", difficulty: "Medio", description: "Tanque solar que inicia peleas con control de masas" },
      ],
    },
  ];

  const features = [
    {
      icon: Users,
      title: "+160 Campeones",
      description: "Un roster masivo con estilos únicos para cada jugador"
    },
    {
      icon: BookOpen,
      title: "Guías Detalladas",
      description: "Aprende combos, builds y estrategias para cada campeón"
    },
    {
      icon: Gamepad2,
      title: "Para Principiantes",
      description: "Campeones fáciles recomendados para empezar tu aventura"
    },
    {
      icon: Star,
      title: "Actualizado",
      description: "Información al día con los últimos parches del juego"
    }
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
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Guía Completa de Campeones
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Domina a tu Campeón Favorito
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Descubre los mejores campeones para empezar tu aventura en la Grieta del Invocador y encuentra tu estilo de juego perfecto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#search">
                    <Search className="w-5 h-5 mr-2" />
                    Buscar Campeones
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#beginners">
                    <Star className="w-5 h-5 mr-2" />
                    Para Principiantes
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {/* Introduction Card */}
        <ScrollAnimation animation="fade-up">
          <Card className="mb-12 border-accent/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" />
                ¿Qué son los Campeones?
              </CardTitle>
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
        </ScrollAnimation>

        {/* Search and Filters */}
        <ScrollAnimation animation="fade-up">
          <Card id="search" className="mb-8 border-accent/20 scroll-mt-24">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Search className="w-6 h-6 text-primary" />
                Buscar Campeones
              </CardTitle>
              <CardDescription>Encuentra el campeón perfecto para ti</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos los roles</SelectItem>
                    <SelectItem value="Top">Top</SelectItem>
                    <SelectItem value="Jungla">Jungla</SelectItem>
                    <SelectItem value="Mid">Mid</SelectItem>
                    <SelectItem value="ADC">ADC</SelectItem>
                    <SelectItem value="Soporte">Soporte</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por dificultad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todas las dificultades</SelectItem>
                    <SelectItem value="Fácil">Fácil</SelectItem>
                    <SelectItem value="Medio">Medio</SelectItem>
                    <SelectItem value="Difícil">Difícil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* All Champions Grid */}
        <div className="mb-16">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Todos los Campeones 
              <Badge variant="secondary" className="ml-3 text-lg">
                {filteredChampions.length}
              </Badge>
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChampions.map((champion, index) => (
              <ScrollAnimation key={champion.id} animation="fade-up" delay={(index % 6) * 50}>
                <Link to={`/campeones/${champion.id}`}>
                  <Card className="border-accent/20 hover:border-primary/60 transition-all hover:shadow-xl hover:-translate-y-1 h-full group overflow-hidden">
                    <div className="flex items-center gap-4 p-4 pb-0">
                      <img 
                        src={getChampionSquareUrl(champion.id)} 
                        alt={champion.name}
                        className="w-16 h-16 rounded-lg object-cover border-2 border-border group-hover:border-primary/50 transition-colors"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors truncate">
                            {champion.name}
                          </CardTitle>
                          <Badge className={`${difficultyColor(champion.difficulty)} shrink-0`}>
                            {champion.difficulty}
                          </Badge>
                        </div>
                        <CardDescription className="text-accent">
                          {champion.role.join(", ")}
                        </CardDescription>
                      </div>
                    </div>
                    <CardContent className="pt-3">
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{champion.description}</p>
                      <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver detalles <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
          {filteredChampions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron campeones con los filtros seleccionados.
              </p>
            </div>
          )}
        </div>

        {/* Beginner Champions Section */}
        <section id="beginners" className="scroll-mt-24">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                <Star className="w-4 h-4 mr-2" />
                Recomendados
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Campeones para Principiantes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estos campeones son perfectos para empezar, con mecánicas sencillas que te permitirán enfocarte en aprender el juego
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="space-y-6">
            {beginnerChampions.map((roleData, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="border-accent/20 overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <roleData.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-primary">{roleData.role}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {roleData.champions.map((champion, champIndex) => (
                        <div 
                          key={champIndex}
                          className="p-4 rounded-lg border border-border hover:border-primary/40 transition-all hover:shadow-md bg-card/50 group cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {champion.name}
                            </h3>
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
              </ScrollAnimation>
            ))}
          </div>
        </section>

        {/* Tips Card */}
        <ScrollAnimation animation="fade-up">
          <Card className="mt-16 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground border-0 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                Consejos para Elegir tu Campeón
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  Empieza con campeones marcados como "Fácil" hasta que entiendas el juego
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  Prueba diferentes roles para descubrir cuál te gusta más
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  Lee las habilidades de tu campeón antes de entrar a una partida
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  Practica en partidas contra IA antes de jugar contra otros jugadores
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  No tengas miedo de experimentar - ¡diviértete aprendiendo!
                </li>
              </ul>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation animation="fade-up">
          <section className="mt-16 text-center py-16 px-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border/50">
            <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Aprende los fundamentos del juego y conviértete en un mejor invocador con nuestras guías
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/fundamentos">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Aprender Fundamentos
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/quiz-campeones">
                  <Gamepad2 className="w-5 h-5 mr-2" />
                  Quiz de Campeones
                </Link>
              </Button>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Campeones;
