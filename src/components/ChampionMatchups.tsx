import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ThumbsUp, ThumbsDown, Swords, Shield } from "lucide-react";
import { useDDragonUrls } from "@/hooks/useDDragon";
import { normalizeChampionId } from "@/lib/ddragon";
import type { Matchup } from "@/data/champions";

interface ChampionMatchupsProps {
  championName: string;
  matchups?: {
    easy: Matchup[];
    hard: Matchup[];
  };
}

const difficultyColors = {
  'Fácil': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Medio': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Difícil': 'bg-red-500/20 text-red-300 border-red-500/30',
};

const MatchupCard = ({ matchup, type }: { matchup: Matchup; type: 'easy' | 'hard' }) => {
  const { getChampionSquare, version } = useDDragonUrls();
  const isEasy = type === 'easy';
  
  return (
    <div className={`p-4 rounded-lg border ${isEasy ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
      <div className="flex items-start gap-3">
        {version ? (
          <img
            src={getChampionSquare(normalizeChampionId(matchup.championId)) || '/placeholder.svg'}
            alt={matchup.championName}
            className="w-12 h-12 rounded-lg border-2 border-border"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        ) : (
          <Skeleton className="w-12 h-12 rounded-lg" />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-foreground">{matchup.championName}</span>
            <Badge className={difficultyColors[matchup.difficulty]} variant="outline">
              {matchup.difficulty}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{matchup.tip}</p>
        </div>
      </div>
    </div>
  );
};

const ChampionMatchups = ({ championName, matchups }: ChampionMatchupsProps) => {
  if (!matchups || (matchups.easy.length === 0 && matchups.hard.length === 0)) {
    return (
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Swords className="h-5 w-5 text-muted-foreground" />
            Matchups
          </CardTitle>
          <CardDescription>Próximamente: información sobre enfrentamientos</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            Estamos trabajando en añadir información de matchups para {championName}.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Easy Matchups */}
      <Card className="border-green-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-400">
            <ThumbsUp className="h-5 w-5" />
            Matchups Favorables
          </CardTitle>
          <CardDescription>
            Campeones contra los que {championName} tiene ventaja
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {matchups.easy.length > 0 ? (
            matchups.easy.map((matchup, index) => (
              <MatchupCard key={index} matchup={matchup} type="easy" />
            ))
          ) : (
            <p className="text-muted-foreground text-center py-4">
              No hay matchups favorables registrados aún.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Hard Matchups */}
      <Card className="border-red-500/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-400">
            <ThumbsDown className="h-5 w-5" />
            Matchups Difíciles
          </CardTitle>
          <CardDescription>
            Campeones que son un desafío para {championName}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {matchups.hard.length > 0 ? (
            matchups.hard.map((matchup, index) => (
              <MatchupCard key={index} matchup={matchup} type="hard" />
            ))
          ) : (
            <p className="text-muted-foreground text-center py-4">
              No hay matchups difíciles registrados aún.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ChampionMatchups;
