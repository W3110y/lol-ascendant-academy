import { useState, useEffect, useCallback } from "react";
import {
  DDRAGON_BASE,
  DEFAULT_LANGUAGE,
  DDragonLanguage,
} from "@/lib/ddragon";

// Cache for API data
const cache: Record<string, { data: unknown; timestamp: number }> = {};
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

/**
 * Hook to get the latest DDragon version
 */
export const useDDragonVersion = () => {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      const cacheKey = "ddragon_version";
      const cached = cache[cacheKey];
      
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        setVersion(cached.data as string);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${DDRAGON_BASE}/api/versions.json`);
        const versions = await response.json();
        const latestVersion = versions[0];
        
        cache[cacheKey] = { data: latestVersion, timestamp: Date.now() };
        setVersion(latestVersion);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchVersion();
  }, []);

  return { version, loading, error };
};

/**
 * Hook to fetch all champions data
 */
export const useChampions = (language: DDragonLanguage = DEFAULT_LANGUAGE) => {
  const { version } = useDDragonVersion();
  const [champions, setChampions] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!version) return;

    const fetchChampions = async () => {
      const cacheKey = `champions_${version}_${language}`;
      const cached = cache[cacheKey];
      
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        setChampions(cached.data as Record<string, unknown>);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${DDRAGON_BASE}/cdn/${version}/data/${language}/champion.json`
        );
        const data = await response.json();
        
        cache[cacheKey] = { data: data.data, timestamp: Date.now() };
        setChampions(data.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchChampions();
  }, [version, language]);

  return { champions, loading, error, version };
};

/**
 * Hook to fetch all items data
 */
export const useItems = (language: DDragonLanguage = DEFAULT_LANGUAGE) => {
  const { version } = useDDragonVersion();
  const [items, setItems] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!version) return;

    const fetchItems = async () => {
      const cacheKey = `items_${version}_${language}`;
      const cached = cache[cacheKey];
      
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        setItems(cached.data as Record<string, unknown>);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${DDRAGON_BASE}/cdn/${version}/data/${language}/item.json`
        );
        const data = await response.json();
        
        cache[cacheKey] = { data: data.data, timestamp: Date.now() };
        setItems(data.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [version, language]);

  return { items, loading, error, version };
};

/**
 * Hook to fetch summoner spells data
 */
export const useSummonerSpells = (language: DDragonLanguage = DEFAULT_LANGUAGE) => {
  const { version } = useDDragonVersion();
  const [spells, setSpells] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!version) return;

    const fetchSpells = async () => {
      const cacheKey = `summoner_spells_${version}_${language}`;
      const cached = cache[cacheKey];
      
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        setSpells(cached.data as Record<string, unknown>);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${DDRAGON_BASE}/cdn/${version}/data/${language}/summoner.json`
        );
        const data = await response.json();
        
        cache[cacheKey] = { data: data.data, timestamp: Date.now() };
        setSpells(data.data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpells();
  }, [version, language]);

  return { spells, loading, error, version };
};

/**
 * Hook to fetch runes data
 */
export const useRunes = (language: DDragonLanguage = DEFAULT_LANGUAGE) => {
  const { version } = useDDragonVersion();
  const [runes, setRunes] = useState<unknown[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!version) return;

    const fetchRunes = async () => {
      const cacheKey = `runes_${version}_${language}`;
      const cached = cache[cacheKey];
      
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        setRunes(cached.data as unknown[]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${DDRAGON_BASE}/cdn/${version}/data/${language}/runesReforged.json`
        );
        const data = await response.json();
        
        cache[cacheKey] = { data, timestamp: Date.now() };
        setRunes(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchRunes();
  }, [version, language]);

  return { runes, loading, error, version };
};

/**
 * Utility to get image URLs with dynamic version
 */
export const useDDragonUrls = () => {
  const { version } = useDDragonVersion();
  
  const getChampionSquare = useCallback((championId: string) => {
    if (!version) return null;
    return `${DDRAGON_BASE}/cdn/${version}/img/champion/${championId}.png`;
  }, [version]);

  const getChampionSplash = useCallback((championId: string, skinNum = 0) => {
    return `${DDRAGON_BASE}/cdn/img/champion/splash/${championId}_${skinNum}.jpg`;
  }, []);

  const getChampionLoading = useCallback((championId: string, skinNum = 0) => {
    return `${DDRAGON_BASE}/cdn/img/champion/loading/${championId}_${skinNum}.jpg`;
  }, []);

  const getItem = useCallback((itemId: string | number) => {
    if (!version) return null;
    return `${DDRAGON_BASE}/cdn/${version}/img/item/${itemId}.png`;
  }, [version]);

  const getSpell = useCallback((spellImage: string) => {
    if (!version) return null;
    return `${DDRAGON_BASE}/cdn/${version}/img/spell/${spellImage}`;
  }, [version]);

  const getPassive = useCallback((passiveImage: string) => {
    if (!version) return null;
    return `${DDRAGON_BASE}/cdn/${version}/img/passive/${passiveImage}`;
  }, [version]);

  const getProfileIcon = useCallback((iconId: number) => {
    if (!version) return null;
    return `${DDRAGON_BASE}/cdn/${version}/img/profileicon/${iconId}.png`;
  }, [version]);

  const getRune = useCallback((runeImage: string) => {
    if (!version) return null;
    return `${DDRAGON_BASE}/cdn/img/${runeImage}`;
  }, [version]);

  return {
    version,
    getChampionSquare,
    getChampionSplash,
    getChampionLoading,
    getItem,
    getSpell,
    getPassive,
    getProfileIcon,
    getRune,
  };
};
