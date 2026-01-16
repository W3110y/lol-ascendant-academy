import { useState } from "react";
import { Search, User, Trophy, Star, Shield, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useDDragonUrls, useDDragonVersion, useChampions } from "@/hooks/useDDragon";

const REGIONS = [
  { value: 'na1', label: 'Norteamérica (NA)' },
  { value: 'euw1', label: 'Europa Oeste (EUW)' },
  { value: 'eun1', label: 'Europa Nordeste (EUNE)' },
  { value: 'kr', label: 'Corea (KR)' },
  { value: 'br1', label: 'Brasil (BR)' },
  { value: 'la1', label: 'Latinoamérica Norte (LAN)' },
  { value: 'la2', label: 'Latinoamérica Sur (LAS)' },
  { value: 'oc1', label: 'Oceanía (OCE)' },
  { value: 'jp1', label: 'Japón (JP)' },
  { value: 'ru', label: 'Rusia (RU)' },
  { value: 'tr1', label: 'Turquía (TR)' },
];

const QUEUE_NAMES: Record<string, string> = {
  'RANKED_SOLO_5x5': 'Solo/Dúo',
  'RANKED_FLEX_SR': 'Flexible',
  'RANKED_TFT': 'TFT',
};

const TIER_COLORS: Record<string, string> = {
  'IRON': 'bg-gray-600',
  'BRONZE': 'bg-amber-700',
  'SILVER': 'bg-gray-400',
  'GOLD': 'bg-yellow-500',
  'PLATINUM': 'bg-teal-500',
  'EMERALD': 'bg-emerald-500',
  'DIAMOND': 'bg-blue-400',
  'MASTER': 'bg-purple-500',
  'GRANDMASTER': 'bg-red-500',
  'CHALLENGER': 'bg-amber-400',
};

interface SummonerData {
  account: {
    gameName: string;
    tagLine: string;
  };
  summoner: {
    profileIconId: number;
    summonerLevel: number;
  };
  ranked: Array<{
    queueType: string;
    tier: string;
    rank: string;
    leaguePoints: number;
    wins: number;
    losses: number;
  }>;
  mastery: Array<{
    championId: number;
    championLevel: number;
    championPoints: number;
  }>;
  region: string;
  regionName: string;
}

const BuscarInvocador = () => {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [region, setRegion] = useState("la1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summonerData, setSummonerData] = useState<SummonerData | null>(null);

  const { version } = useDDragonVersion();
  const { getProfileIcon } = useDDragonUrls();
  const { champions: championsData } = useChampions('es_MX');

  const getChampionName = (championId: number): string => {
    if (!championsData) return `Campeón ${championId}`;
    const champion = Object.values(championsData).find(
      (c: any) => parseInt(c.key) === championId
    );
    return champion ? (champion as any).name : `Campeón ${championId}`;
  };

  const getChampionSquare = (championId: number): string | null => {
    if (!championsData || !version) return null;
    const champion = Object.values(championsData).find(
      (c: any) => parseInt(c.key) === championId
    );
    if (!champion) return null;
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${(champion as any).id}.png`;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gameName.trim() || !tagLine.trim()) {
      setError("Por favor ingresa el nombre de invocador y el tag");
      return;
    }

    setLoading(true);
    setError(null);
    setSummonerData(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke('riot-summoner', {
        body: { gameName: gameName.trim(), tagLine: tagLine.trim(), region }
      });

      if (fnError) {
        throw new Error(fnError.message || 'Error al buscar invocador');
      }

      if (data.error) {
        setError(data.error);
      } else {
        setSummonerData(data);
      }
    } catch (err) {
      console.error('Search error:', err);
      setError(err instanceof Error ? err.message : 'Error al buscar invocador');
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number): string => {
    return num.toLocaleString('es-ES');
  };

  const calculateWinRate = (wins: number, losses: number): string => {
    const total = wins + losses;
    if (total === 0) return '0%';
    return `${((wins / total) * 100).toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs />

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Buscar Invocador
              </h1>
              <p className="text-muted-foreground text-lg">
                Busca el perfil de cualquier jugador y descubre sus estadísticas y campeones favoritos
              </p>
            </div>

            {/* Search Form */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-4">
                      <label className="block text-sm font-medium mb-2">Nombre de Invocador</label>
                      <Input
                        type="text"
                        placeholder="Nombre"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Tag</label>
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-1">#</span>
                        <Input
                          type="text"
                          placeholder="TAG"
                          value={tagLine}
                          onChange={(e) => setTagLine(e.target.value.toUpperCase())}
                          className="w-full"
                          maxLength={5}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-4">
                      <label className="block text-sm font-medium mb-2">Región</label>
                      <Select value={region} onValueChange={setRegion}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona región" />
                        </SelectTrigger>
                        <SelectContent>
                          {REGIONS.map((r) => (
                            <SelectItem key={r.value} value={r.value}>
                              {r.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2 flex items-end">
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Search className="w-4 h-4" />
                        )}
                        <span className="ml-2">{loading ? "Buscando..." : "Buscar"}</span>
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Error Message */}
            {error && (
              <Card className="mb-8 border-destructive">
                <CardContent className="pt-6">
                  <p className="text-destructive text-center">{error}</p>
                </CardContent>
              </Card>
            )}

            {/* Results */}
            {summonerData && (
              <div className="space-y-6">
                {/* Profile Header */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative">
                        <img
                          src={getProfileIcon(summonerData.summoner.profileIconId) || ''}
                          alt="Profile Icon"
                          className="w-24 h-24 rounded-xl border-2 border-primary"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-0.5 rounded text-sm font-bold">
                          {summonerData.summoner.summonerLevel}
                        </div>
                      </div>
                      <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-foreground">
                          {summonerData.account.gameName}
                          <span className="text-muted-foreground ml-1">#{summonerData.account.tagLine}</span>
                        </h2>
                        <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-2 mt-1">
                          <Shield className="w-4 h-4" />
                          {summonerData.regionName}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ranked Stats */}
                {summonerData.ranked.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        Clasificatorias
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {summonerData.ranked.map((rank) => (
                          <div 
                            key={rank.queueType}
                            className="p-4 rounded-lg bg-muted/50 border"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <span className="text-sm font-medium text-muted-foreground">
                                {QUEUE_NAMES[rank.queueType] || rank.queueType}
                              </span>
                              <Badge className={`${TIER_COLORS[rank.tier] || 'bg-gray-500'} text-white`}>
                                {rank.tier} {rank.rank}
                              </Badge>
                            </div>
                            <div className="text-2xl font-bold mb-2">
                              {rank.leaguePoints} LP
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <span className="text-green-500">{rank.wins}V</span>
                              {' / '}
                              <span className="text-red-500">{rank.losses}D</span>
                              {' - '}
                              <span className="font-medium">{calculateWinRate(rank.wins, rank.losses)} WR</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Champion Mastery */}
                {summonerData.mastery.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Campeones Favoritos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {summonerData.mastery.map((m, index) => (
                          <div 
                            key={m.championId}
                            className="text-center p-3 rounded-lg bg-muted/50 border hover:border-primary transition-colors"
                          >
                            <div className="relative inline-block mb-2">
                              {getChampionSquare(m.championId) ? (
                                <img
                                  src={getChampionSquare(m.championId)!}
                                  alt={getChampionName(m.championId)}
                                  className="w-16 h-16 rounded-lg"
                                />
                              ) : (
                                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                                  <User className="w-8 h-8 text-muted-foreground" />
                                </div>
                              )}
                              <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                                M{m.championLevel}
                              </div>
                            </div>
                            <p className="font-medium text-sm truncate">
                              {getChampionName(m.championId)}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {formatNumber(m.championPoints)} pts
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* No ranked data message */}
                {summonerData.ranked.length === 0 && (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <Trophy className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                      <p className="text-muted-foreground">
                        Este invocador no ha jugado partidas clasificatorias esta temporada
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Policy Notice */}
            <div className="mt-8 p-4 rounded-lg bg-muted/50 border text-center text-sm text-muted-foreground">
              <p>
                Esta herramienta está diseñada para ayudar a los jugadores a mejorar y conectar con amigos.
                Usamos datos oficiales de Riot Games API de forma responsable.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuscarInvocador;
