import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { championsData } from "@/data/champions";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { useDDragonVersion, useDDragonUrls } from "@/hooks/useDDragon";
import { normalizeChampionId } from "@/lib/ddragon";
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
  Gamepad2,
  Star,
  ChevronRight,
  RefreshCw,
  Filter,
  X
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
  const [expandedAbilities, setExpandedAbilities] = useState<string[]>([]);
  
  // Dynamic DDragon version and URLs
  const { version, loading: versionLoading } = useDDragonVersion();
  const { getChampionSquare, getChampionSplash } = useDDragonUrls();

  const clearFilters = useCallback(() => {
    setSearchTerm("");
    setRoleFilter("Todos");
    setDifficultyFilter("Todos");
  }, []);

  const hasActiveFilters = searchTerm || roleFilter !== "Todos" || difficultyFilter !== "Todos";

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
        { name: "Garen", id: "garen", difficulty: "Fácil", description: "Guerrero resistente con habilidades simples pero efectivas", abilities: ["Q - Golpe Decisivo", "W - Coraje", "E - Juicio", "R - Justicia Demaciata"] },
        { name: "Malphite", id: "malphite", difficulty: "Fácil", description: "Tanque de roca con una definitiva devastadora", abilities: ["Q - Fragmento Sísmico", "W - Trueno", "E - Suelo Inestable", "R - Fuerza Imparable"] },
      ],
    },
    {
      role: "Jungla",
      icon: Sword,
      champions: [
        { name: "Warwick", id: "warwick", difficulty: "Fácil", description: "Cazador que se cura al atacar y rastrea enemigos débiles", abilities: ["Q - Fauces del Terror", "W - Caza Sangrienta", "E - Miedo Primitivo", "R - Salto Infinito"] },
        { name: "Maestro Yi", id: "masteryi", difficulty: "Fácil", description: "Espadachín veloz con alto daño de ataque", abilities: ["Q - Golpe Alfa", "W - Meditar", "E - Estilo Wuju", "R - Highlander"] },
      ],
    },
    {
      role: "Mid",
      icon: Wand2,
      champions: [
        { name: "Annie", id: "annie", difficulty: "Fácil", description: "Maga con su osito Tibbers y control de masas", abilities: ["Q - Desintegrar", "W - Incineración", "E - Escudo de Molten", "R - Tibbers"] },
        { name: "Lux", id: "lux", difficulty: "Medio", description: "Maga de luz con habilidades de largo alcance", abilities: ["Q - Atadura de Luz", "W - Barrera Prismática", "E - Singularidad Luciente", "R - Chispa Final"] },
      ],
    },
    {
      role: "ADC",
      icon: Target,
      champions: [
        { name: "Ashe", id: "ashe", difficulty: "Fácil", description: "Arquera de hielo con ralentizaciones constantes", abilities: ["Q - Concentración del Guardabosques", "W - Volea", "E - Halcón Explorador", "R - Flecha de Cristal Encantada"] },
        { name: "Caitlyn", id: "caitlyn", difficulty: "Fácil", description: "Sheriff con el mayor rango de ataque básico", abilities: ["Q - Disparo Pacificador", "W - Trampa Yordle", "E - Red Calibre 90", "R - Ace en la Manga"] },
      ],
    },
    {
      role: "Soporte",
      icon: Heart,
      champions: [
        { name: "Soraka", id: "soraka", difficulty: "Fácil", description: "Sanadora celestial que mantiene al equipo con vida", abilities: ["Q - Llamada Estelar", "W - Infusión Astral", "E - Ecuanimidad", "R - Deseo"] },
        { name: "Leona", id: "leona", difficulty: "Medio", description: "Tanque solar que inicia peleas con control de masas", abilities: ["Q - Espada del Alba", "W - Eclipse", "E - Espada del Cénit", "R - Llamarada Solar"] },
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
        return "bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30";
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
                {version && (
                  <span className="ml-2 flex items-center gap-1 text-xs opacity-75">
                    <RefreshCw className="w-3 h-3" />
                    Parche {version}
                  </span>
                )}
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
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Search className="w-6 h-6 text-primary" />
                    Buscar Campeones
                  </CardTitle>
                  <CardDescription>Encuentra el campeón perfecto para ti</CardDescription>
                </div>
                {hasActiveFilters && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Limpiar filtros
                  </Button>
                )}
              </div>
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
                    <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Filtrar por rol" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border z-50">
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
                    <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Filtrar por dificultad" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border z-50">
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
                      {versionLoading ? (
                        <Skeleton className="w-16 h-16 rounded-lg" />
                      ) : (
                        <img 
                          src={getChampionSquare(normalizeChampionId(champion.id)) || '/placeholder.svg'}
                          alt={champion.name}
                          className="w-16 h-16 rounded-lg object-cover border-2 border-border group-hover:border-primary/50 transition-colors"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder.svg';
                          }}
                        />
                      )}
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
              <p className="text-muted-foreground text-lg mb-4">
                No se encontraron campeones con los filtros seleccionados.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>

        {/* Beginner Champions Section with Accordion for Abilities */}
        <section id="beginners" className="scroll-mt-24">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20">
                <Star className="w-4 h-4 mr-2" />
                Recomendados
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Campeones para Principiantes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Estos campeones son perfectos para empezar, con mecánicas sencillas. Haz clic en cada campeón para ver sus habilidades.
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
                    <Accordion type="multiple" className="space-y-4">
                      {roleData.champions.map((champion, champIndex) => (
                        <AccordionItem 
                          key={champIndex} 
                          value={`${roleData.role}-${champion.id}`}
                          className="border border-border/50 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 hover:no-underline">
                            <div className="flex items-center gap-4 w-full">
                              {version && (
                                <img 
                                  src={getChampionSquare(normalizeChampionId(champion.id)) || '/placeholder.svg'}
                                  alt={champion.name}
                                  className="w-12 h-12 rounded-lg object-cover border border-border"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                                  }}
                                />
                              )}
                              <div className="flex-1 text-left">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-lg font-semibold text-foreground">
                                    {champion.name}
                                  </h3>
                                  <Badge className={difficultyColor(champion.difficulty)}>
                                    {champion.difficulty}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{champion.description}</p>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4">
                            <div className="pl-16 space-y-3">
                              <h4 className="font-medium text-foreground flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-accent" />
                                Habilidades
                              </h4>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {champion.abilities.map((ability, abilityIndex) => (
                                  <div 
                                    key={abilityIndex}
                                    className="p-2 rounded-lg bg-muted/50 border border-border/50 text-sm"
                                  >
                                    {ability}
                                  </div>
                                ))}
                              </div>
                              <Link to={`/campeones/${champion.id}`}>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Ver guía completa
                                  <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                              </Link>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
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
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <p>Empieza con campeones de dificultad Fácil para enfocarte en aprender el juego</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <p>Elige un rol que se adapte a tu estilo de juego preferido</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <p>Domina uno o dos campeones antes de expandir tu pool</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <p>Usa el Quiz de Campeones para descubrir cuál encaja mejor contigo</p>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/quiz-campeones">
                  <Button variant="secondary" size="lg" className="group">
                    Hacer Quiz de Campeones
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Campeones;
