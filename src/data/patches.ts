export interface PatchNote {
  id: string;
  version: string;
  date: string;
  highlights: string[];
  changes: PatchChange[];
}

export interface PatchChange {
  category: "Campeones" | "Objetos" | "Runas" | "Sistema" | "Equilibrio";
  title: string;
  description: string;
  impact: "Buff" | "Nerf" | "Ajuste" | "Nuevo";
  affectedItems: string[];
  beginnerRelevance: "Alta" | "Media" | "Baja";
  explanation: string;
}

export const patchNotes: PatchNote[] = [
  {
    id: "14-2",
    version: "14.2",
    date: "2024-01-24",
    highlights: [
      "Ajustes importantes a ADCs para mejorar su poder en early game",
      "Nuevos cambios en objetos de tanque para hacerlos más viables",
      "Mejoras en la experiencia de nuevos jugadores"
    ],
    changes: [
      {
        category: "Campeones",
        title: "Miss Fortune - Buffs generales",
        description: "Aumento en el daño base de Q y reducción del cooldown de R",
        impact: "Buff",
        affectedItems: ["Miss Fortune"],
        beginnerRelevance: "Alta",
        explanation: "Miss Fortune es uno de los ADCs más fáciles para principiantes. Este buff significa que será más fuerte en early game, haciendo más fácil ganar tu línea. Si estás aprendiendo el rol de ADC, ¡es un buen momento para probarla!"
      },
      {
        category: "Campeones",
        title: "Zed - Ajuste de daño",
        description: "Reducción del daño de R en early game, aumento en late game",
        impact: "Ajuste",
        affectedItems: ["Zed"],
        beginnerRelevance: "Media",
        explanation: "Zed es un asesino complejo. Este cambio hace que sea menos agobiante contra principiantes en early game, pero sigue siendo fuerte en late game para jugadores experimentados. Si eres nuevo, esto significa que Zed no te matará tan fácilmente antes del nivel 11."
      },
      {
        category: "Objetos",
        title: "Filo del Infinito - Buff de costo",
        description: "Reducción de precio de 3400g a 3300g",
        impact: "Buff",
        affectedItems: ["Filo del Infinito"],
        beginnerRelevance: "Media",
        explanation: "El Filo del Infinito es el objeto de daño crítico más importante. Ahora es 100g más barato, lo que significa que puedes comprarlo antes y ser más fuerte más rápido. Importante para ADCs y algunos luchadores."
      },
      {
        category: "Objetos",
        title: "Égida de Fuego Solar - Mejora de stats",
        description: "Aumento de vida de 450 a 500",
        impact: "Buff",
        affectedItems: ["Égida de Fuego Solar"],
        beginnerRelevance: "Alta",
        explanation: "Este es uno de los objetos más comunes para tanques. Más vida significa que serás más difícil de matar. Si juegas campeones tanques como Malphite o Amumu, este cambio te hace más resistente."
      },
      {
        category: "Runas",
        title: "Conquistador - Ajuste",
        description: "Reducción de stacks necesarios de 12 a 10",
        impact: "Buff",
        affectedItems: ["Conquistador"],
        beginnerRelevance: "Media",
        explanation: "Conquistador es una runa popular para luchadores. Ahora se activa más rápido (con menos ataques), lo que significa más poder en peleas. Útil si juegas campeones como Darius, Yasuo o Jax."
      },
      {
        category: "Sistema",
        title: "Tutorial mejorado",
        description: "Nuevo tutorial interactivo para súbditos y farmeo",
        impact: "Nuevo",
        affectedItems: ["Sistema de Tutorial"],
        beginnerRelevance: "Alta",
        explanation: "¡Excelente para nuevos jugadores! El juego ahora tiene un tutorial mejorado que te enseña mejor cómo conseguir oro matando súbditos. Si eres completamente nuevo, asegúrate de jugarlo."
      }
    ]
  },
  {
    id: "14-1",
    version: "14.1",
    date: "2024-01-10",
    highlights: [
      "Inicio de la nueva temporada con cambios masivos en la jungla",
      "Rebalanceo de objetos míticos",
      "Ajustes a dragones para hacer el juego más dinámico"
    ],
    changes: [
      {
        category: "Sistema",
        title: "Nueva Temporada - Cambios en Jungla",
        description: "Los monstruos de jungla dan más oro pero aparecen más lento",
        impact: "Ajuste",
        affectedItems: ["Sistema de Jungla"],
        beginnerRelevance: "Media",
        explanation: "Si estás aprendiendo a jugar jungla, esto significa que tendrás más tiempo para farmear antes de que tu equipo espere ganks. Es más amigable para principiantes porque reduce la presión inicial."
      },
      {
        category: "Objetos",
        title: "Removidos Objetos Míticos",
        description: "Los objetos míticos ya no existen, ahora todos los objetos legendarios son iguales",
        impact: "Nuevo",
        affectedItems: ["Sistema de Objetos"],
        beginnerRelevance: "Alta",
        explanation: "¡Gran cambio! Antes solo podías comprar un objeto 'mítico' por partida. Ahora tienes más libertad para experimentar con diferentes combinaciones. Esto hace las builds menos rígidas y más flexibles."
      },
      {
        category: "Campeones",
        title: "Garen - Simplificación",
        description: "Su pasiva ahora funciona igual contra campeones que contra súbditos",
        impact: "Ajuste",
        affectedItems: ["Garen"],
        beginnerRelevance: "Alta",
        explanation: "Garen es uno de los campeones más recomendados para principiantes. Este cambio lo hace más simple y consistente. Ahora siempre sabes cuándo te vas a curar, sin excepciones confusas."
      }
    ]
  }
];