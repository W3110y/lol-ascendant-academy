import { useParams, Navigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { championsData, Champion } from "@/data/champions";
import { Sword, Shield, Zap, Target, Book, Package, Lightbulb, Video, RefreshCw, Swords, BookOpen, AlertCircle, ArrowLeft, Info } from "lucide-react";
import { useDDragonVersion, useDDragonUrls, useChampions } from "@/hooks/useDDragon";
import { normalizeChampionId } from "@/lib/ddragon";
import { useMemo } from "react";

// New components
import ChampionLore from "@/components/ChampionLore";
import ChampionMatchups from "@/components/ChampionMatchups";
import ChampionCombos from "@/components/ChampionCombos";
import ChampionBuilds from "@/components/ChampionBuilds";

interface DDragonChampionData {
  id: string;
  name: string;
  title: string;
  blurb: string;
  tags: string[];
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}

const ChampionDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Dynamic DDragon version and URLs
  const { version, loading: versionLoading } = useDDragonVersion();
  const { getChampionSquare, getChampionSplash } = useDDragonUrls();
  const { champions: ddChampions, loading: ddLoading } = useChampions('es_ES');

  // Find local champion data first
  const localChampion = championsData.find((c) => c.id.toLowerCase() === id?.toLowerCase());
  
  // Find DDragon champion data
  const ddChampion = useMemo(() => {
    if (!ddChampions || !id) return null;
    const normalizedId = normalizeChampionId(id);
    return (ddChampions as Record<string, DDragonChampionData>)[normalizedId] || null;
  }, [ddChampions, id]);

  // Determine difficulty from DDragon info
  const getDifficulty = (difficulty: number): 'Fácil' | 'Medio' | 'Difícil' => {
    if (difficulty <= 4) return 'Fácil';
    if (difficulty <= 7) return 'Medio';
    return 'Difícil';
  };

  // Determine damage type from DDragon info
  const getDamageType = (info: DDragonChampionData['info'], tags: string[]): 'AD' | 'AP' | 'Tanque' | 'Híbrido' => {
    if (tags.includes('Tank')) return 'Tanque';
    if (info.magic > info.attack + 2) return 'AP';
    if (info.attack > info.magic + 2) return 'AD';
    return 'Híbrido';
  };

  // Map tags to roles
  const mapTagsToRoles = (tags: string[]): string[] => {
    const tagToRole: Record<string, string> = {
      'Fighter': 'Top',
      'Tank': 'Top',
      'Mage': 'Mid',
      'Assassin': 'Mid',
      'Marksman': 'ADC',
      'Support': 'Soporte',
    };
    const roles = new Set<string>();
    tags.forEach(tag => {
      const role = tagToRole[tag];
      if (role) roles.add(role);
    });
    if (roles.size === 0) roles.add('Top');
    return Array.from(roles);
  };

  // Loading state
  if (ddLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Skeleton className="w-32 h-32 rounded-xl mx-auto mb-4" />
            <Skeleton className="h-8 w-48 mx-auto mb-2" />
            <Skeleton className="h-4 w-32 mx-auto" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Not found
  if (!localChampion && !ddChampion) {
    return <Navigate to="/campeones" replace />;
  }

  // Use local data if available, otherwise use DDragon data
  const hasLocalData = !!localChampion;
  const champion = localChampion;
  
  // Champion data for display
  const displayName = localChampion?.name || ddChampion?.name || '';
  const displayTitle = localChampion?.title || ddChampion?.title || '';
  const displayDescription = localChampion?.description || ddChampion?.blurb || '';
  const displayDifficulty = localChampion?.difficulty || (ddChampion ? getDifficulty(ddChampion.info.difficulty) : 'Medio');
  const displayDamageType = localChampion?.damageType || (ddChampion ? getDamageType(ddChampion.info, ddChampion.tags) : 'AD');
  const displayRoles = localChampion?.role || (ddChampion ? mapTagsToRoles(ddChampion.tags) : ['Top']);
  const displayTags = ddChampion?.tags || [];
  const displayInfo = ddChampion?.info;

  const difficultyColor = {
    'Fácil': 'bg-green-500/20 text-green-300 border-green-500/30',
    'Medio': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'Difícil': 'bg-red-500/20 text-red-300 border-red-500/30',
  };

  const damageTypeIcon = {
    'AD': <Sword className="h-4 w-4" />,
    'AP': <Zap className="h-4 w-4" />,
    'Tanque': <Shield className="h-4 w-4" />,
    'Híbrido': <Target className="h-4 w-4" />,
  };

  const normalizedId = normalizeChampionId(id || '');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Banner with Splash Art */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${getChampionSplash(normalizedId)})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </section>

      <section className="container mx-auto px-4 -mt-20 relative z-10 flex-1">
        {/* Champion Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {versionLoading ? (
              <Skeleton className="w-32 h-32 rounded-xl" />
            ) : (
              <img 
                src={getChampionSquare(normalizedId) || '/placeholder.svg'}
                alt={displayName}
                className="w-32 h-32 rounded-xl border-4 border-background shadow-2xl object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            )}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className={difficultyColor[displayDifficulty]}>
                  {displayDifficulty}
                </Badge>
                {version && (
                  <Badge variant="outline" className="flex items-center gap-1 text-xs">
                    <RefreshCw className="w-3 h-3" />
                    Parche {version}
                  </Badge>
                )}
                <Badge variant="outline" className="flex items-center gap-1">
                  {damageTypeIcon[displayDamageType]}
                  {displayDamageType}
                </Badge>
                {displayRoles.map((role) => (
                  <Badge key={role} variant="secondary">{role}</Badge>
                ))}
                {displayTags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-gold bg-clip-text text-transparent">
                {displayName}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{displayTitle}</p>
              <p className="text-foreground/90 leading-relaxed">{displayDescription}</p>
            </div>
          </div>
        </div>

        {/* No local data warning */}
        {!hasLocalData && (
          <div className="max-w-5xl mx-auto mb-8">
            <Card className="border-amber-500/30 bg-amber-500/5">
              <CardContent className="flex items-center gap-4 py-4">
                <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">
                    Este campeón aún no tiene guía completa. Estamos mostrando información básica de DDragon.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Las guías con builds, combos y matchups se añaden progresivamente.
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/campeones">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Ver todos
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="max-w-5xl mx-auto pb-12">
          {hasLocalData && champion ? (
            // Full tabs for champions with local data
            <Tabs defaultValue="resumen" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-1 h-auto p-1">
                <TabsTrigger value="resumen" className="text-xs md:text-sm">
                  <BookOpen className="h-4 w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Resumen</span>
                </TabsTrigger>
                <TabsTrigger value="habilidades" className="text-xs md:text-sm">
                  <Book className="h-4 w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Habilidades</span>
                </TabsTrigger>
                <TabsTrigger value="build" className="text-xs md:text-sm">
                  <Package className="h-4 w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Build</span>
                </TabsTrigger>
                <TabsTrigger value="matchups" className="text-xs md:text-sm">
                  <Swords className="h-4 w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Matchups</span>
                </TabsTrigger>
                <TabsTrigger value="consejos" className="text-xs md:text-sm">
                  <Lightbulb className="h-4 w-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Consejos</span>
                </TabsTrigger>
                {champion.guideVideo && (
                  <TabsTrigger value="video" className="text-xs md:text-sm">
                    <Video className="h-4 w-4 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">Video</span>
                  </TabsTrigger>
                )}
              </TabsList>

              {/* Resumen Tab - Now includes Lore */}
              <TabsContent value="resumen" className="space-y-6 mt-6">
                <ChampionLore 
                  name={champion.name}
                  lore={champion.lore}
                  region={champion.region}
                  description={champion.description}
                />
                
                <Card className="border-lol-blue/30">
                  <CardHeader>
                    <CardTitle>Información General</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-muted/30">
                        <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Roles</h3>
                        <div className="flex flex-wrap gap-2">
                          {champion.role.map((role) => (
                            <Badge key={role} variant="secondary">{role}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30">
                        <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Tipo de Daño</h3>
                        <Badge variant="outline" className="flex items-center gap-1 w-fit">
                          {damageTypeIcon[champion.damageType]}
                          {champion.damageType}
                        </Badge>
                      </div>
                      <div className="p-4 rounded-lg bg-muted/30">
                        <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Dificultad</h3>
                        <Badge className={difficultyColor[champion.difficulty]}>
                          {champion.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Habilidades Tab */}
              <TabsContent value="habilidades" className="space-y-6 mt-6">
                <Card className="border-lol-blue/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">Habilidades</CardTitle>
                    <CardDescription>Aprende qué hace cada habilidad de {champion.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded bg-accent/20 text-accent font-bold text-sm">PASIVA</span>
                        <h3 className="font-semibold text-lg">{champion.abilities.passive.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">{champion.abilities.passive.description}</p>
                      {champion.abilities.passive.video && (
                        <AspectRatio ratio={16 / 9}>
                          <iframe
                            src={champion.abilities.passive.video}
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </AspectRatio>
                      )}
                    </div>
                    
                    {(['q', 'w', 'e', 'r'] as const).map((key) => (
                      <div key={key} className="p-4 rounded-lg bg-card-foreground/5 border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 rounded bg-lol-blue/20 text-lol-blue font-bold text-sm uppercase">{key}</span>
                          <h3 className="font-semibold text-lg">{champion.abilities[key].name}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{champion.abilities[key].description}</p>
                        {champion.abilities[key].video && (
                          <AspectRatio ratio={16 / 9}>
                            <iframe
                              src={champion.abilities[key].video}
                              className="w-full h-full rounded-lg"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </AspectRatio>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Combos Section - within abilities tab */}
                <ChampionCombos championName={champion.name} combos={champion.combos} />
              </TabsContent>

              {/* Build & Runas Tab */}
              <TabsContent value="build" className="space-y-6 mt-6">
                <ChampionBuilds
                  championName={champion.name}
                  builds={champion.builds}
                  defaultBuild={champion.build}
                  runes={champion.runes}
                  summonerSpells={champion.summonerSpells}
                />
              </TabsContent>

              {/* Matchups Tab */}
              <TabsContent value="matchups" className="space-y-6 mt-6">
                <ChampionMatchups 
                  championName={champion.name} 
                  matchups={champion.matchups} 
                />
              </TabsContent>

              {/* Consejos Tab */}
              <TabsContent value="consejos" className="space-y-6 mt-6">
                <Card className="border-green-500/30">
                  <CardHeader>
                    <CardTitle>Consejos Básicos</CardTitle>
                    <CardDescription>Tips esenciales para jugar {champion.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {champion.tips.map((tip, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                          <span className="text-foreground/90">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Video Guide Tab */}
              {champion.guideVideo && (
                <TabsContent value="video" className="space-y-6 mt-6">
                  <Card className="border-lol-blue/30">
                    <CardHeader>
                      <CardTitle>Video Guía Completa</CardTitle>
                      <CardDescription>Aprende a jugar {champion.name} con este video tutorial</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <AspectRatio ratio={16 / 9}>
                        <iframe
                          src={champion.guideVideo}
                          className="w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          ) : (
            // Simplified view for DDragon-only champions
            <div className="space-y-6">
              {/* Stats from DDragon */}
              {displayInfo && (
                <Card className="border-primary/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      Estadísticas del Campeón
                    </CardTitle>
                    <CardDescription>Datos oficiales de Riot Games</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Sword className="h-4 w-4 text-red-400" />
                          <span className="text-sm font-medium text-muted-foreground">Ataque</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-red-500 rounded-full transition-all"
                              style={{ width: `${displayInfo.attack * 10}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold">{displayInfo.attack}</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium text-muted-foreground">Magia</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-500 rounded-full transition-all"
                              style={{ width: `${displayInfo.magic * 10}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold">{displayInfo.magic}</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-green-400" />
                          <span className="text-sm font-medium text-muted-foreground">Defensa</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500 rounded-full transition-all"
                              style={{ width: `${displayInfo.defense * 10}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold">{displayInfo.defense}</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-4 w-4 text-purple-400" />
                          <span className="text-sm font-medium text-muted-foreground">Dificultad</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-purple-500 rounded-full transition-all"
                              style={{ width: `${displayInfo.difficulty * 10}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold">{displayInfo.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Basic info card */}
              <Card className="border-accent/30">
                <CardHeader>
                  <CardTitle>Información General</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Roles Sugeridos</h3>
                      <div className="flex flex-wrap gap-2">
                        {displayRoles.map((role) => (
                          <Badge key={role} variant="secondary">{role}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Tipo de Daño</h3>
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        {damageTypeIcon[displayDamageType]}
                        {displayDamageType}
                      </Badge>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Dificultad</h3>
                      <Badge className={difficultyColor[displayDifficulty]}>
                        {displayDifficulty}
                      </Badge>
                    </div>
                  </div>

                  {displayTags.length > 0 && (
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h3 className="font-semibold mb-2 text-sm text-muted-foreground">Clases</h3>
                      <div className="flex flex-wrap gap-2">
                        {displayTags.map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Lore from DDragon */}
              <ChampionLore 
                name={displayName}
                description={displayDescription}
              />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChampionDetail;
