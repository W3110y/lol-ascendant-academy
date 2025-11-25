export interface ItemStats {
  ad?: number;
  ap?: number;
  health?: number;
  armor?: number;
  mr?: number;
  attackSpeed?: number;
  critChance?: number;
  lifeSteal?: number;
  abilityHaste?: number;
  mana?: number;
}

export interface Item {
  id: string;
  name: string;
  category: "Daño" | "Tanque" | "Soporte" | "Movilidad" | "Jungla";
  cost: number;
  stats: ItemStats;
  description: string;
  icon?: string;
}

export const itemsData: Item[] = [
  // Daño AD
  {
    id: "infinity-edge",
    name: "Filo del Infinito",
    category: "Daño",
    cost: 3400,
    stats: { ad: 70, critChance: 20 },
    description: "Aumenta el daño crítico. Perfecto para tiradores."
  },
  {
    id: "kraken-slayer",
    name: "Sacrificio del Kraken",
    category: "Daño",
    cost: 3100,
    stats: { ad: 40, attackSpeed: 25 },
    description: "Causa daño verdadero cada 3 ataques. Excelente contra tanques."
  },
  {
    id: "bloodthirster",
    name: "Sanguinario",
    category: "Daño",
    cost: 3400,
    stats: { ad: 55, lifeSteal: 20 },
    description: "Proporciona robo de vida y un escudo protector."
  },
  {
    id: "lord-dominiks",
    name: "Recuerdos de Lord Dominik",
    category: "Daño",
    cost: 3000,
    stats: { ad: 35, critChance: 20 },
    description: "Penetración de armadura. Ideal contra enemigos con mucha armadura."
  },

  // Daño AP
  {
    id: "rabadons",
    name: "Sombrero Mortal de Rabadon",
    category: "Daño",
    cost: 3600,
    stats: { ap: 120 },
    description: "Aumenta tu poder de habilidad en un 35%. El objeto más poderoso para magos."
  },
  {
    id: "ludens-tempest",
    name: "Tempestad de Luden",
    category: "Daño",
    cost: 3200,
    stats: { ap: 90, abilityHaste: 20, mana: 600 },
    description: "Hace eco de daño mágico. Perfecto para magos de ráfaga."
  },
  {
    id: "zhonyas",
    name: "Reloj de Arena de Zhonya",
    category: "Daño",
    cost: 3000,
    stats: { ap: 80, armor: 45, abilityHaste: 15 },
    description: "Te vuelve invulnerable por 2.5 segundos. Esencial para magos."
  },
  {
    id: "void-staff",
    name: "Bastón del Vacío",
    category: "Daño",
    cost: 2800,
    stats: { ap: 90 },
    description: "40% de penetración mágica. Contra enemigos con resistencia mágica."
  },

  // Tanque
  {
    id: "sunfire",
    name: "Égida de Fuego Solar",
    category: "Tanque",
    cost: 2800,
    stats: { health: 450, armor: 50 },
    description: "Quema a los enemigos cercanos. Perfecto para tanques de línea frontal."
  },
  {
    id: "thornmail",
    name: "Malla de Espinas",
    category: "Tanque",
    cost: 2700,
    stats: { armor: 60, health: 250 },
    description: "Refleja daño y reduce curación enemiga. Contra campeones de AD."
  },
  {
    id: "spirit-visage",
    name: "Visage Espiritual",
    category: "Tanque",
    cost: 2900,
    stats: { health: 400, mr: 55, abilityHaste: 10 },
    description: "Aumenta toda la curación recibida. Excelente para tanques con curación."
  },
  {
    id: "warmogs",
    name: "Armadura de Warmog",
    category: "Tanque",
    cost: 3000,
    stats: { health: 800 },
    description: "Regeneración masiva fuera de combate. Para tanques de línea frontal."
  },

  // Soporte
  {
    id: "moonstone",
    name: "Renovación de Piedra Lunar",
    category: "Soporte",
    cost: 2500,
    stats: { ap: 40, abilityHaste: 20, mana: 200 },
    description: "Cura a aliados cuando usas habilidades. Para soportes encantadores."
  },
  {
    id: "shurelyas",
    name: "Batlesong de Shurelya",
    category: "Soporte",
    cost: 2500,
    stats: { ap: 40, abilityHaste: 20, mana: 200 },
    description: "Acelera a aliados cercanos. Para iniciar peleas o escapar."
  },
  {
    id: "redemption",
    name: "Redención",
    category: "Soporte",
    cost: 2300,
    stats: { health: 200, abilityHaste: 15, mana: 200 },
    description: "Cura en área a distancia. Puede usarse incluso estando muerto."
  },
  {
    id: "locket",
    name: "Convergencia de Zeke",
    category: "Soporte",
    cost: 2500,
    stats: { armor: 25, mr: 25, abilityHaste: 10 },
    description: "Proporciona escudo en área a aliados. Para proteger al equipo."
  },

  // Movilidad
  {
    id: "galeforce",
    name: "Fuerza de Trinidad",
    category: "Movilidad",
    cost: 3333,
    stats: { ad: 35, attackSpeed: 30, health: 300 },
    description: "Aumenta velocidad de movimiento y daño. Versátil para luchadores."
  },
  {
    id: "youmuus",
    name: "Espada Espectral de Youmuu",
    category: "Movilidad",
    cost: 2900,
    stats: { ad: 60, abilityHaste: 18 },
    description: "Activa para ganar velocidad de movimiento. Para asesinos."
  },
  {
    id: "deadmans",
    name: "Coraza del Difunto",
    category: "Movilidad",
    cost: 2900,
    stats: { health: 300, armor: 45 },
    description: "Acumula velocidad al moverte. Ideal para tanques que inician."
  },

  // Jungla
  {
    id: "goredrinker",
    name: "Bebehemoglobina",
    category: "Jungla",
    cost: 3300,
    stats: { ad: 55, health: 400, abilityHaste: 20 },
    description: "Activa para curarte basándote en vida faltante. Para junglas de bruiser."
  },
  {
    id: "eclipse",
    name: "Eclipse",
    category: "Jungla",
    cost: 3200,
    stats: { ad: 55, abilityHaste: 15 },
    description: "Causa daño extra y te da un escudo. Para asesinos de jungla."
  }
];

export const calculateTotalStats = (items: Item[]): ItemStats => {
  return items.reduce((total, item) => ({
    ad: (total.ad || 0) + (item.stats.ad || 0),
    ap: (total.ap || 0) + (item.stats.ap || 0),
    health: (total.health || 0) + (item.stats.health || 0),
    armor: (total.armor || 0) + (item.stats.armor || 0),
    mr: (total.mr || 0) + (item.stats.mr || 0),
    attackSpeed: (total.attackSpeed || 0) + (item.stats.attackSpeed || 0),
    critChance: (total.critChance || 0) + (item.stats.critChance || 0),
    lifeSteal: (total.lifeSteal || 0) + (item.stats.lifeSteal || 0),
    abilityHaste: (total.abilityHaste || 0) + (item.stats.abilityHaste || 0),
    mana: (total.mana || 0) + (item.stats.mana || 0),
  }), {} as ItemStats);
};