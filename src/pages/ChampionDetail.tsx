import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { championsData } from "@/data/champions";
import { Sword, Shield, Zap, Target, Book, Package, Lightbulb, Video, RefreshCw, Swords, BookOpen } from "lucide-react";
import { useDDragonVersion, useDDragonUrls } from "@/hooks/useDDragon";
import { normalizeChampionId } from "@/lib/ddragon";

// New components
import ChampionLore from "@/components/ChampionLore";
import ChampionMatchups from "@/components/ChampionMatchups";
import ChampionCombos from "@/components/ChampionCombos";
import ChampionBuilds from "@/components/ChampionBuilds";

const ChampionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const champion = championsData.find((c) => c.id === id);
  
  // Dynamic DDragon version and URLs
  const { version, loading: versionLoading } = useDDragonVersion();
  const { getChampionSquare, getChampionSplash } = useDDragonUrls();

  if (!champion) {
    return <Navigate to="/campeones" replace />;
  }

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Banner with Splash Art */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${getChampionSplash(normalizeChampionId(champion.id))})`,
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
                src={getChampionSquare(normalizeChampionId(champion.id)) || '/placeholder.svg'}
                alt={champion.name}
                className="w-32 h-32 rounded-xl border-4 border-background shadow-2xl object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            )}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className={difficultyColor[champion.difficulty]}>
                  {champion.difficulty}
                </Badge>
                {version && (
                  <Badge variant="outline" className="flex items-center gap-1 text-xs">
                    <RefreshCw className="w-3 h-3" />
                    Parche {version}
                  </Badge>
                )}
                <Badge variant="outline" className="flex items-center gap-1">
                  {damageTypeIcon[champion.damageType]}
                  {champion.damageType}
                </Badge>
                {champion.role.map((role) => (
                  <Badge key={role} variant="secondary">{role}</Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-gold bg-clip-text text-transparent">
                {champion.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{champion.title}</p>
              <p className="text-foreground/90 leading-relaxed">{champion.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto pb-12">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChampionDetail;
