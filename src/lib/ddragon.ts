/**
 * Data Dragon (DDragon) Utilities
 * Official Riot Games static data API for League of Legends
 * 
 * Documentation: https://riot-api-libraries.readthedocs.io/en/latest/ddragon.html
 * 
 * DDragon provides:
 * - Champion images and data
 * - Item images and data
 * - Runes images and data (runesReforged.json)
 * - Summoner spell images and data
 * - Profile icons
 * 
 * Note: Champion spell data and item stats can be inaccurate.
 * For precise values, use League Wikia: https://leagueoflegends.fandom.com
 * 
 * Community Dragon (CDragon) supplements DDragon with additional assets
 * like rune stat images: http://raw.communitydragon.org/
 */

// Fallback patch version - prefer using useDDragonVersion() hook for latest
// Check latest at: https://ddragon.leagueoflegends.com/api/versions.json
export const DDRAGON_VERSION = "14.24.1";

// Base URLs
export const DDRAGON_BASE = "https://ddragon.leagueoflegends.com";
export const DDRAGON_CDN = `${DDRAGON_BASE}/cdn/${DDRAGON_VERSION}`;

// Community Dragon for additional assets not in DDragon
export const CDRAGON_BASE = "https://raw.communitydragon.org/latest";

// Language codes supported by DDragon
export type DDragonLanguage = 
  | "es_ES" | "es_MX" | "es_AR" // Spanish
  | "en_US" | "en_GB" | "en_AU" | "en_PH" | "en_SG" // English
  | "pt_BR" // Portuguese
  | "fr_FR" // French
  | "de_DE" // German
  | "it_IT" // Italian
  | "ko_KR" // Korean
  | "ja_JP" // Japanese
  | "zh_CN" | "zh_TW" | "zh_MY" // Chinese
  | "ru_RU" // Russian
  | "tr_TR" // Turkish
  | "pl_PL" // Polish
  | "th_TH" // Thai
  | "vn_VN"; // Vietnamese

// Default language for Spanish LoL learning site
export const DEFAULT_LANGUAGE: DDragonLanguage = "es_ES";

// API endpoint for getting available game regions/realms
export const getRealmUrl = (region: string): string => {
  return `${DDRAGON_BASE}/realms/${region}.json`;
};

// Get versions list
export const getVersionsUrl = (): string => {
  return `${DDRAGON_BASE}/api/versions.json`;
};

/**
 * Champion Image URLs
 */
export const getChampionSquareUrl = (championId: string): string => {
  // Handle special cases like "Master Yi" -> "MasterYi", "Wukong" -> "MonkeyKing"
  const normalizedId = normalizeChampionId(championId);
  return `${DDRAGON_CDN}/img/champion/${normalizedId}.png`;
};

export const getChampionSplashUrl = (championId: string, skinNum: number = 0): string => {
  const normalizedId = normalizeChampionId(championId);
  return `${DDRAGON_CDN}/img/champion/splash/${normalizedId}_${skinNum}.jpg`;
};

export const getChampionLoadingUrl = (championId: string, skinNum: number = 0): string => {
  const normalizedId = normalizeChampionId(championId);
  return `${DDRAGON_CDN}/img/champion/loading/${normalizedId}_${skinNum}.jpg`;
};

export const getChampionCenteredSplashUrl = (championId: string, skinNum: number = 0): string => {
  const normalizedId = normalizeChampionId(championId);
  return `${DDRAGON_CDN}/img/champion/centered/${normalizedId}_${skinNum}.jpg`;
};

/**
 * Champion Ability/Spell Image URLs
 */
export const getPassiveUrl = (passiveImage: string): string => {
  return `${DDRAGON_CDN}/img/passive/${passiveImage}`;
};

export const getSpellUrl = (spellImage: string): string => {
  return `${DDRAGON_CDN}/img/spell/${spellImage}`;
};

/**
 * Item Image URLs
 */
export const getItemUrl = (itemId: string | number): string => {
  return `${DDRAGON_CDN}/img/item/${itemId}.png`;
};

/**
 * Rune/Perk Image URLs
 */
export const getRuneUrl = (runeImage: string): string => {
  return `${DDRAGON_CDN}/img/${runeImage}`;
};

/**
 * Summoner Spell Image URLs
 */
export const getSummonerSpellUrl = (spellImage: string): string => {
  return `${DDRAGON_CDN}/img/spell/${spellImage}`;
};

/**
 * Profile Icon URLs
 */
export const getProfileIconUrl = (iconId: number): string => {
  return `${DDRAGON_CDN}/img/profileicon/${iconId}.png`;
};

/**
 * Map Images
 */
export const getMapUrl = (mapId: number): string => {
  return `${DDRAGON_CDN}/img/map/map${mapId}.png`;
};

/**
 * Data JSON URLs - for fetching champion/item/rune data
 */
export const getChampionsDataUrl = (language: DDragonLanguage = DEFAULT_LANGUAGE): string => {
  return `${DDRAGON_CDN}/data/${language}/champion.json`;
};

export const getChampionDataUrl = (championId: string, language: DDragonLanguage = DEFAULT_LANGUAGE): string => {
  const normalizedId = normalizeChampionId(championId);
  return `${DDRAGON_CDN}/data/${language}/champion/${normalizedId}.json`;
};

export const getItemsDataUrl = (language: DDragonLanguage = DEFAULT_LANGUAGE): string => {
  return `${DDRAGON_CDN}/data/${language}/item.json`;
};

export const getRunesDataUrl = (language: DDragonLanguage = DEFAULT_LANGUAGE): string => {
  return `${DDRAGON_CDN}/data/${language}/runesReforged.json`;
};

export const getSummonerSpellsDataUrl = (language: DDragonLanguage = DEFAULT_LANGUAGE): string => {
  return `${DDRAGON_CDN}/data/${language}/summoner.json`;
};

/**
 * Normalize champion ID for DDragon URLs
 * Handles special cases in Riot's naming convention
 */
export const normalizeChampionId = (id: string): string => {
  // Map of special champion ID conversions
  const specialCases: Record<string, string> = {
    // Wukong's internal name is MonkeyKing
    'wukong': 'MonkeyKing',
    'monkey-king': 'MonkeyKing',
    
    // Multi-word champions need proper capitalization
    'master-yi': 'MasterYi',
    'masteryi': 'MasterYi',
    'maestro-yi': 'MasterYi',
    
    'lee-sin': 'LeeSin',
    'leesin': 'LeeSin',
    
    'miss-fortune': 'MissFortune',
    'missfortune': 'MissFortune',
    
    'twisted-fate': 'TwistedFate',
    'twistedfate': 'TwistedFate',
    
    'dr-mundo': 'DrMundo',
    'drmundo': 'DrMundo',
    
    'jarvan-iv': 'JarvanIV',
    'jarvaniv': 'JarvanIV',
    'jarvan': 'JarvanIV',
    
    'xin-zhao': 'XinZhao',
    'xinzhao': 'XinZhao',
    
    'kog-maw': 'KogMaw',
    'kogmaw': 'KogMaw',
    
    'rek-sai': 'RekSai',
    'reksai': 'RekSai',
    
    'aurelion-sol': 'AurelionSol',
    'aurelionsol': 'AurelionSol',
    
    'tahm-kench': 'TahmKench',
    'tahmkench': 'TahmKench',
    
    'kai-sa': 'Kaisa',
    'kaisa': 'Kaisa',

    'bel-veth': 'Belveth',
    'belveth': 'Belveth',
    
    'renata-glasc': 'Renata',
    'renataglasc': 'Renata',
    
    'nunu': 'Nunu',
    'nunu-willump': 'Nunu',
    
    // K'Sante and other special characters
    'ksante': 'KSante',
    'k-sante': 'KSante',
    
    // Cho'Gath and similar
    'chogath': 'Chogath',
    'cho-gath': 'Chogath',
    
    'khazix': 'Khazix',
    'kha-zix': 'Khazix',
    
    'velkoz': 'Velkoz',
    'vel-koz': 'Velkoz',
  };

  const lowerCaseId = id.toLowerCase().trim();
  
  // Check special cases first
  if (specialCases[lowerCaseId]) {
    return specialCases[lowerCaseId];
  }
  
  // Default: capitalize first letter for standard champions
  // Convert kebab-case to PascalCase
  return id
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
};

/**
 * Fetch the latest version from DDragon API
 */
export const fetchLatestVersion = async (): Promise<string> => {
  try {
    const response = await fetch(`${DDRAGON_BASE}/api/versions.json`);
    const versions = await response.json();
    return versions[0]; // First item is the latest version
  } catch (error) {
    console.error('Failed to fetch DDragon version:', error);
    return DDRAGON_VERSION; // Fallback to hardcoded version
  }
};

/**
 * Fetch champion data from DDragon
 */
export const fetchChampionsData = async (language: DDragonLanguage = DEFAULT_LANGUAGE) => {
  try {
    const response = await fetch(getChampionsDataUrl(language));
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch champions data:', error);
    return null;
  }
};

/**
 * Fetch detailed champion data
 */
export const fetchChampionDetail = async (championId: string, language: DDragonLanguage = DEFAULT_LANGUAGE) => {
  try {
    const normalizedId = normalizeChampionId(championId);
    const response = await fetch(getChampionDataUrl(normalizedId, language));
    const data = await response.json();
    return data.data[normalizedId];
  } catch (error) {
    console.error(`Failed to fetch champion ${championId} data:`, error);
    return null;
  }
};

/**
 * Fetch items data from DDragon
 */
export const fetchItemsData = async (language: DDragonLanguage = DEFAULT_LANGUAGE) => {
  try {
    const response = await fetch(getItemsDataUrl(language));
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Failed to fetch items data:', error);
    return null;
  }
};

/**
 * Community Dragon (CDragon) for additional assets
 * Useful for rune stat images and other assets not in DDragon
 * See: http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/
 */
export const getCDragonRuneStatUrl = (statName: string): string => {
  return `${CDRAGON_BASE}/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/${statName}`;
};

// Role icons mapping
export const getRoleIconUrl = (role: string): string => {
  const roleMap: Record<string, string> = {
    'top': 'top',
    'jungle': 'jungle', 
    'jungla': 'jungle',
    'mid': 'middle',
    'middle': 'middle',
    'adc': 'bottom',
    'bot': 'bottom',
    'bottom': 'bottom',
    'support': 'support',
    'soporte': 'support',
  };
  
  const normalizedRole = roleMap[role.toLowerCase()] || role.toLowerCase();
  return `${CDRAGON_BASE}/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${normalizedRole}.png`;
};
