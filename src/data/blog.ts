export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: "Guías" | "Noticias" | "Consejos" | "Parches";
  tags: string[];
  readTime: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cómo Mejorar tu Farm en 7 Días",
    slug: "como-mejorar-farm-7-dias",
    excerpt: "El farmeo de súbditos es la habilidad más importante para ganar oro. Aprende técnicas probadas para mejorar tu CS.",
    content: `
# Cómo Mejorar tu Farm en 7 Días

El **farmeo** (o "CS" - Creep Score) es una de las habilidades fundamentales que separa a los jugadores principiantes de los intermedios. Un buen farm te da más oro, lo que significa más objetos y más poder en el juego.

## ¿Por Qué es Importante el Farm?

Cada súbdito que matas te da oro. Un súbdito cuerpo a cuerpo da 21g, los de rango 14g, y los de cañón 60-90g. Si farmeas bien, puedes ganar el equivalente a 2-3 kills solo con CS.

### Meta: 7 CS por Minuto

Para un principiante, el objetivo es alcanzar **7 CS por minuto**. Esto significa:
- A los 10 minutos: 70 CS
- A los 20 minutos: 140 CS
- A los 30 minutos: 210 CS

## Técnicas para Mejorar

### 1. Práctica en la Herramienta de Práctica
Antes de jugar partidas normales, ve al modo práctica y simplemente farmea durante 10 minutos. No pelees, solo enfócate en conseguir cada súbdito.

### 2. Entiende el Daño de tu Campeón
Cada campeón tiene diferente daño base y animación de ataque. Practica con tu campeón favorito para "sentir" cuándo el súbdito está lo suficientemente bajo como para matarlo de un golpe.

### 3. Usa Habilidades con Inteligencia
No desperdicies tu maná. Pero si hay varios súbditos bajos de vida y no puedes alcanzarlos a todos con ataques básicos, usa una habilidad.

### 4. Posicionamiento Bajo Torre
Cuando los súbditos están bajo tu torre:
- **Súbditos cuerpo a cuerpo**: 2 golpes de torre + 1 tuyo
- **Súbditos de rango**: 1 golpe tuyo + 1 de torre + 1 tuyo
- **Súbditos de cañón**: Muchos golpes de torre, prepáralos con ataques

## Plan de 7 Días

- **Día 1-2**: Solo práctica, 3 sesiones de 10 minutos cada día
- **Día 3-4**: Partidas normales, enfócate solo en CS, ignora kills
- **Día 5-6**: Combina CS con intercambios cortos contra el enemigo
- **Día 7**: Evalúa tu progreso. ¿Llegaste a 7 CS/min?

## Errores Comunes

❌ Pushear la línea sin razón
❌ Ignorar el CS por perseguir kills
❌ No farmear la jungla cuando tu línea está pusheada
❌ Perder oleadas completas por estar en peleas innecesarias

✅ Mantén la línea congelada cerca de tu torre
✅ Prioriza el oro seguro sobre el incierto
✅ Toma súbditos de jungla neutral cuando sea seguro
✅ Solo pelea cuando tu oleada esté bajo la torre enemiga

---

¿Listo para practicar? ¡Ve a la Grieta y mejora tu CS!
    `,
    author: "LoLAprende Team",
    date: "2025-01-15",
    category: "Guías",
    tags: ["Farm", "CS", "Oro", "Fundamentos"],
    readTime: 5,
    featured: true
  },
  {
    id: "2",
    title: "Los 5 Errores Más Comunes de Principiantes",
    slug: "5-errores-comunes-principiantes",
    excerpt: "Evita estos errores típicos que cometen todos los nuevos jugadores y acelera tu curva de aprendizaje.",
    content: `
# Los 5 Errores Más Comunes de Principiantes

Si eres nuevo en League of Legends, probablemente estés cometiendo estos errores. ¡Pero no te preocupes! Identificarlos es el primer paso para mejorar.

## 1. Perseguir Kills en Lugar de Objetivos

**El Error**: Ver a un enemigo bajo de vida y perseguirlo por todo el mapa, ignorando torres, dragones o Baron.

**La Solución**: Pregúntate: "¿Qué gano con esta kill?" Si la respuesta es solo satisfacción personal, mejor toma un objetivo.

## 2. No Mirar el Minimapa

**El Error**: Jugar como si solo existiera tu línea. No ver cuando el jungla enemigo se acerca.

**La Solución**: Cada 3-5 segundos, mira el minimapa. Cuenta cuántos enemigos ves. Si faltan, significa que pueden estar emboscándote.

## 3. Builds Incorrectas

**El Error**: Comprar objetos al azar o seguir una build sin entender por qué.

**La Solución**: Usa nuestra calculadora de builds y aprende qué estadística necesitas contra qué enemigos.

## 4. Farmear sin Visión

**El Error**: Pushear tu línea sin wards, haciéndote vulnerable a ganks.

**La Solución**: Antes de pushear, coloca un ward en el río o en la jungla enemiga cercana.

## 5. No Jugar Alrededor de Objetivos

**El Error**: Estar farmeando en línea superior mientras tu equipo pelea por el dragón.

**La Solución**: 1 minuto antes de que spawne un dragón o Baron, posiciónate cerca para ayudar a tu equipo.

---

Evitar estos 5 errores puede aumentar significativamente tu tasa de victorias. ¡Pruébalo en tu próxima partida!
    `,
    author: "LoLAprende Team",
    date: "2025-01-10",
    category: "Consejos",
    tags: ["Errores", "Principiantes", "Mejora"],
    readTime: 4,
    featured: true
  },
  {
    id: "3",
    title: "Guía de Visión: Dónde Colocar Wards",
    slug: "guia-vision-donde-colocar-wards",
    excerpt: "La visión gana partidas. Aprende los mejores lugares para colocar tus wards en cada fase del juego.",
    content: `
# Guía de Visión: Dónde Colocar Wards

La visión es poder en League of Legends. Ver al enemigo antes de que te vean a ti puede ser la diferencia entre ganar y perder.

## ¿Por Qué es Importante la Visión?

- Evita ganks del jungla enemigo
- Te permite hacer jugadas agresivas con seguridad
- Controla objetivos como Dragón y Baron
- Rastrea la posición del jungla enemigo

## Wards Básicos para Early Game

### Para Top Lane
- **Trinket en el río**: Cerca del arbusto superior
- **Ward profundo**: En el lado del jungla enemigo

### Para Mid Lane
- **Ambos arbustos del río**: Uno a cada lado
- **Ward en raptor** o krugs enemigos para ver rotaciones

### Para Bot Lane
- **Arbusto del río**: El más cercano a dragón
- **Tribush**: El arbusto triangular cerca de tu torre

## Wards Avanzados para Mid-Late Game

Cuando llegues al mid-game, necesitas visión más profunda:

- **Jungla enemiga**: Buffs, cruces de caminos
- **Objetivos**: Dragón y Baron, especialmente 1 minuto antes de spawn
- **Líneas laterales**: Si quieres hacer split push

## Consejo Pro: Control Wards

Compra **Control Wards** (75g) cada vez que regreses a la base. Solo puedes tener uno activo, pero son invaluables:
- Revelan wards enemigos (que puedes destruir)
- No expiran hasta que los destruyan
- Niegan visión enemiga en áreas clave

---

¿Quieres ver un mapa visual? Visita nuestra herramienta interactiva de ward map.
    `,
    author: "LoLAprende Team",
    date: "2025-01-05",
    category: "Guías",
    tags: ["Visión", "Wards", "Mapa", "Control"],
    readTime: 6
  }
];