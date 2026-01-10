import { useMemo } from "react";
import { useChampions, useDDragonVersion, useDDragonUrls } from "./useDDragon";
import { championsData, Champion } from "@/data/champions";

export interface DDragonChampion {
  id: string;
  key: string;
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
  image: {
    full: string;
    sprite: string;
    group: string;
  };
}

export interface MergedChampion {
  id: string;
  name: string;
  title: string;
  blurb: string;
  tags: string[];
  role: string[];
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  damageType: 'AD' | 'AP' | 'Tanque' | 'Híbrido';
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  hasLocalData: boolean;
  localData?: Champion;
}

// Map DDragon tags to Spanish roles
const tagToRole: Record<string, string> = {
  'Fighter': 'Top',
  'Tank': 'Top',
  'Mage': 'Mid',
  'Assassin': 'Mid',
  'Marksman': 'ADC',
  'Support': 'Soporte',
};

// Determine difficulty based on DDragon info.difficulty (1-10)
const getDifficulty = (difficulty: number): 'Fácil' | 'Medio' | 'Difícil' => {
  if (difficulty <= 4) return 'Fácil';
  if (difficulty <= 7) return 'Medio';
  return 'Difícil';
};

// Determine damage type based on stats
const getDamageType = (info: DDragonChampion['info'], tags: string[]): 'AD' | 'AP' | 'Tanque' | 'Híbrido' => {
  if (tags.includes('Tank')) return 'Tanque';
  if (info.magic > info.attack + 2) return 'AP';
  if (info.attack > info.magic + 2) return 'AD';
  return 'Híbrido';
};

// Map tags to roles
const mapTagsToRoles = (tags: string[]): string[] => {
  const roles = new Set<string>();
  tags.forEach(tag => {
    const role = tagToRole[tag];
    if (role) roles.add(role);
  });
  // If no roles found, default based on first tag
  if (roles.size === 0 && tags.length > 0) {
    if (tags[0] === 'Fighter' || tags[0] === 'Tank') roles.add('Top');
    else if (tags[0] === 'Mage' || tags[0] === 'Assassin') roles.add('Mid');
    else if (tags[0] === 'Marksman') roles.add('ADC');
    else if (tags[0] === 'Support') roles.add('Soporte');
    else roles.add('Top');
  }
  return Array.from(roles);
};

export const useDDragonChampions = (language: string = 'es_ES') => {
  const { version, loading: versionLoading, error: versionError } = useDDragonVersion();
  const { champions: ddChampions, loading: championsLoading, error: championsError } = useChampions(language as any);
  const { getChampionSquare, getChampionSplash } = useDDragonUrls();

  const mergedChampions = useMemo(() => {
    if (!ddChampions) return [];

    const localChampionsMap = new Map(
      championsData.map(c => [c.id.toLowerCase(), c])
    );

    const merged: MergedChampion[] = Object.values(ddChampions as Record<string, DDragonChampion>).map((ddChamp) => {
      const localChamp = localChampionsMap.get(ddChamp.id.toLowerCase());
      
      return {
        id: ddChamp.id,
        name: ddChamp.name,
        title: ddChamp.title,
        blurb: ddChamp.blurb,
        tags: ddChamp.tags,
        role: localChamp?.role || mapTagsToRoles(ddChamp.tags),
        difficulty: localChamp?.difficulty || getDifficulty(ddChamp.info.difficulty),
        damageType: localChamp?.damageType || getDamageType(ddChamp.info, ddChamp.tags),
        info: ddChamp.info,
        hasLocalData: !!localChamp,
        localData: localChamp,
      };
    });

    // Sort alphabetically by name
    return merged.sort((a, b) => a.name.localeCompare(b.name));
  }, [ddChampions]);

  const loading = versionLoading || championsLoading;
  const error = versionError || championsError;

  return {
    champions: mergedChampions,
    loading,
    error,
    version,
    getChampionSquare,
    getChampionSplash,
    totalChampions: mergedChampions.length,
    championsWithData: mergedChampions.filter(c => c.hasLocalData).length,
  };
};
