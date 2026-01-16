import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Riot API regions and their routing values
const PLATFORM_ROUTING: Record<string, string> = {
  'br1': 'americas',
  'eun1': 'europe',
  'euw1': 'europe',
  'jp1': 'asia',
  'kr': 'asia',
  'la1': 'americas',
  'la2': 'americas',
  'na1': 'americas',
  'oc1': 'sea',
  'ph2': 'sea',
  'ru': 'europe',
  'sg2': 'sea',
  'th2': 'sea',
  'tr1': 'europe',
  'tw2': 'sea',
  'vn2': 'sea',
};

const REGION_NAMES: Record<string, string> = {
  'br1': 'Brasil',
  'eun1': 'Europa Nordeste',
  'euw1': 'Europa Oeste',
  'jp1': 'Japón',
  'kr': 'Corea',
  'la1': 'Latinoamérica Norte',
  'la2': 'Latinoamérica Sur',
  'na1': 'Norteamérica',
  'oc1': 'Oceanía',
  'ph2': 'Filipinas',
  'ru': 'Rusia',
  'sg2': 'Singapur',
  'th2': 'Tailandia',
  'tr1': 'Turquía',
  'tw2': 'Taiwán',
  'vn2': 'Vietnam',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RIOT_API_KEY = Deno.env.get('RIOT_API_KEY');
    if (!RIOT_API_KEY) {
      console.error('RIOT_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { gameName, tagLine, region } = await req.json();
    
    if (!gameName || !tagLine || !region) {
      return new Response(
        JSON.stringify({ error: 'Se requiere nombre de juego, tag y región' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const routingRegion = PLATFORM_ROUTING[region];
    if (!routingRegion) {
      return new Response(
        JSON.stringify({ error: 'Región no válida' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Looking up summoner: ${gameName}#${tagLine} in region ${region}`);

    // Step 1: Get account by Riot ID
    const accountUrl = `https://${routingRegion}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`;
    console.log(`Fetching account from: ${accountUrl}`);
    
    const accountResponse = await fetch(accountUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    if (!accountResponse.ok) {
      if (accountResponse.status === 404) {
        return new Response(
          JSON.stringify({ error: 'Invocador no encontrado. Verifica el nombre y tag.' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (accountResponse.status === 403) {
        return new Response(
          JSON.stringify({ error: 'API key inválida o expirada' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (accountResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Límite de solicitudes excedido. Intenta de nuevo en unos segundos.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      console.error(`Account API error: ${accountResponse.status}`);
      return new Response(
        JSON.stringify({ error: 'Error al buscar la cuenta' }),
        { status: accountResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const accountData = await accountResponse.json();
    console.log('Account found:', accountData.puuid);

    // Step 2: Get summoner by PUUID
    const summonerUrl = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${accountData.puuid}`;
    console.log(`Fetching summoner from: ${summonerUrl}`);
    
    const summonerResponse = await fetch(summonerUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    if (!summonerResponse.ok) {
      if (summonerResponse.status === 404) {
        return new Response(
          JSON.stringify({ error: 'Este jugador no tiene cuenta de LoL en esta región.' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      console.error(`Summoner API error: ${summonerResponse.status}`);
      return new Response(
        JSON.stringify({ error: 'Error al obtener datos del invocador' }),
        { status: summonerResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const summonerData = await summonerResponse.json();
    console.log('Summoner found:', summonerData.id);

    // Step 3: Get ranked stats
    const rankedUrl = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerData.id}`;
    console.log(`Fetching ranked data from: ${rankedUrl}`);
    
    const rankedResponse = await fetch(rankedUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    let rankedData = [];
    if (rankedResponse.ok) {
      rankedData = await rankedResponse.json();
      console.log('Ranked data entries:', rankedData.length);
    }

    // Step 4: Get champion mastery (top 5)
    const masteryUrl = `https://${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${accountData.puuid}/top?count=5`;
    console.log(`Fetching mastery from: ${masteryUrl}`);
    
    const masteryResponse = await fetch(masteryUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    let masteryData = [];
    if (masteryResponse.ok) {
      masteryData = await masteryResponse.json();
      console.log('Mastery entries:', masteryData.length);
    }

    // Return combined data (positive experience focus - no shaming metrics)
    const result = {
      account: {
        gameName: accountData.gameName,
        tagLine: accountData.tagLine,
      },
      summoner: {
        profileIconId: summonerData.profileIconId,
        summonerLevel: summonerData.summonerLevel,
      },
      ranked: rankedData.map((entry: any) => ({
        queueType: entry.queueType,
        tier: entry.tier,
        rank: entry.rank,
        leaguePoints: entry.leaguePoints,
        wins: entry.wins,
        losses: entry.losses,
      })),
      mastery: masteryData.map((m: any) => ({
        championId: m.championId,
        championLevel: m.championLevel,
        championPoints: m.championPoints,
      })),
      region: region,
      regionName: REGION_NAMES[region] || region,
    };

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in riot-summoner function:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
