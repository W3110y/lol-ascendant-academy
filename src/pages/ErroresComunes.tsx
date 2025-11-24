import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

interface CommonMistake {
  title: string;
  category: "Laning" | "Objetivos" | "Teamfights" | "Items" | "Mentalidad";
  mistake: string;
  whyBad: string;
  solution: string;
  example?: string;
}

const commonMistakes: CommonMistake[] = [
  {
    title: "No Farmear Constantemente",
    category: "Laning",
    mistake: "Muchos principiantes ignoran los súbditos y solo buscan peleas.",
    whyBad: "El oro de los súbditos es tu principal fuente de ingresos. Sin farmar, te quedarás atrás en objetos y poder.",
    solution: "Prioriza el last hitting. Cada oleada de súbditos vale aproximadamente 125 oro. Mantén un buen CS (Creep Score) como objetivo principal.",
    example: "Si tienes 50 CS a los 10 minutos mientras tu enemigo tiene 80, estás 375 oro atrás (equivalente a una kill)."
  },
  {
    title: "No Mirar el Minimapa",
    category: "Laning",
    mistake: "Jugar con 'visión de túnel', solo mirando tu línea y no el mapa completo.",
    whyBad: "No verás ganks enemigos, oportunidades para ayudar a tu equipo, u objetivos importantes.",
    solution: "Mira el minimapa cada 3-5 segundos. Desarrolla el hábito de verificar dónde están todos los enemigos.",
    example: "Si ves al jungla enemigo en top, sabes que es seguro ser agresivo en bot."
  },
  {
    title: "Pushear sin Visión",
    category: "Laning",
    mistake: "Avanzar tu línea profundamente sin colocar wards o saber dónde está el jungla enemigo.",
    whyBad: "Te vuelves un objetivo fácil para ganks. Una muerte te hace perder oro, experiencia y presión en el mapa.",
    solution: "Coloca wards en el río o jungla enemiga antes de pushear. Si no sabes dónde está el jungla enemigo, juega más seguro.",
    example: "Pushear hasta la torreta enemiga sin wards es como pedir que te ganken."
  },
  {
    title: "Perseguir Kills Innecesarias",
    category: "Laning",
    mistake: "Seguir a un enemigo con poca vida durante mucho tiempo, ignorando todo lo demás.",
    whyBad: "Pierdes tiempo de farmeo, te expones a emboscadas, y a menudo no consigues la kill.",
    solution: "Evalúa si la kill vale la pena. Si el enemigo escapa bajo su torreta o hacia su jungla, es mejor volver a farmear.",
    example: "Perseguir al support enemigo por 30 segundos te hace perder 2 oleadas completas (250 oro)."
  },
  {
    title: "Ignorar los Dragones",
    category: "Objetivos",
    mistake: "No priorizar dragones o no asistir cuando tu equipo quiere hacerlo.",
    whyBad: "Los dragones dan buffs permanentes. El alma del dragón (4to dragón) puede cambiar el juego completamente.",
    solution: "Avisa cuando el dragón esté por aparecer. Intenta tener prioridad en tu línea (pushear antes) para poder rotarte.",
    example: "Un equipo con alma de dragón infernal hace significativamente más daño en teamfights."
  },
  {
    title: "Morir por el Barón",
    category: "Objetivos",
    mistake: "Intentar el Barón cuando no es seguro o sin visión del equipo enemigo.",
    whyBad: "El Barón hace mucho daño y es fácil para el enemigo robarlo o sorprender a tu equipo.",
    solution: "Solo intenta el Barón si: (1) Mataste a varios enemigos, (2) Tienes visión de los enemigos restantes, (3) Tu equipo está saludable.",
    example: "Intentar el Barón con todo el equipo enemigo vivo es extremadamente arriesgado."
  },
  {
    title: "No Proteger Torretas",
    category: "Objetivos",
    mistake: "Dejar que el enemigo destruya tus torretas sin defenderlas.",
    whyBad: "Las torretas dan oro al equipo enemigo y abren tu mapa, haciendo más peligroso farmear.",
    solution: "Intenta defender las torretas cuando sea posible. Si no puedes, al menos trata de tradear una torreta enemiga.",
    example: "Si pierdes tu torreta de mid sin tomar nada, el enemigo puede roamear más fácilmente."
  },
  {
    title: "Pelear Sin Tus Carries",
    category: "Teamfights",
    mistake: "Iniciar peleas cuando tu ADC o Mid están en otra parte del mapa.",
    whyBad: "Los carries hacen la mayor parte del daño. Sin ellos, probablemente perderás la pelea.",
    solution: "Verifica que tu equipo esté junto antes de pelear. Usa pings para coordinar.",
    example: "Un tanque no puede ganar una pelea 5v5 solo, necesita que sus carries hagan el daño."
  },
  {
    title: "No Focusear en Teamfights",
    category: "Teamfights",
    mistake: "Atacar al tanque enemigo en lugar de los carries, o cambiar de objetivo constantemente.",
    whyBad: "Los tanques son difíciles de matar y hacen poco daño. Los carries son frágiles pero peligrosos.",
    solution: "Como carry, ataca al enemigo más cercano que puedas matar de forma segura. Como tanque, protege a tus carries o lockea a los enemigos.",
    example: "Un ADC que ataca al Malphite enemigo mientras el Zed enemigo asesina a tu equipo está cometiendo un error."
  },
  {
    title: "Usar Todas las Habilidades a la Vez",
    category: "Teamfights",
    mistake: "Lanzar todas tus habilidades inmediatamente sin pensar en el momento adecuado.",
    whyBad: "Puedes desperdiciar CC importante o daño en objetivos equivocados o en mal momento.",
    solution: "Aprende a espaciar tus habilidades. Guarda el CC para cancelar habilidades clave enemigas.",
    example: "Guardar tu aturdimiento para cancelar la R de Katarina en lugar de usarlo al inicio de la pelea."
  },
  {
    title: "Comprar Objetos Incorrectos",
    category: "Items",
    mistake: "Seguir la misma build sin adaptarla al juego actual.",
    whyBad: "Los objetos situacionales son muy poderosos. Comprar el objeto equivocado reduce tu efectividad.",
    solution: "Aprende ítems básicos contra diferentes amenazas: Armadura vs AD, Resistencia mágica vs AP, Anti-heal vs campeones con curación.",
    example: "Comprar Heridas Graves (anti-heal) contra un Mundo o Soraka es crucial."
  },
  {
    title: "Completar Builds muy Caras",
    category: "Items",
    mistake: "Ahorrar oro para objetos completos muy caros en lugar de comprar componentes.",
    whyBad: "Estar con mucho oro sin gastar te hace más débil. Los componentes también dan stats.",
    solution: "Compra componentes regularmente. No ahorres más de 1000 oro sin una buena razón.",
    example: "Comprar Espada Larga + Botas es mejor que ahorrar 3000 oro para tu primer objeto completo."
  },
  {
    title: "Ignorar las Botas",
    category: "Items",
    mistake: "No comprar botas temprano o completarlas muy tarde.",
    whyBad: "La velocidad de movimiento es crucial para todo: escapar, perseguir, roamear, esquivar habilidades.",
    solution: "Compra botas básicas en tu primera o segunda compra. Complétalas antes de terminar tu segundo objeto principal.",
    example: "Unas botas de 300 oro pueden salvarte de múltiples ganks."
  },
  {
    title: "Rendirse Mentalmente",
    category: "Mentalidad",
    mistake: "Asumir que el juego está perdido después de una desventaja temprana.",
    whyBad: "League of Legends puede dar muchos giros. Un buen teamfight o un enemigo cometiendo un error puede cambiar todo.",
    solution: "Concéntrate en lo que puedes controlar. Farmea de forma segura, coloca visión, y espera errores enemigos.",
    example: "Muchos juegos se ganan después de estar 5000 oro abajo. El late game puede igualarlo todo."
  },
  {
    title: "Culpar a los Compañeros",
    category: "Mentalidad",
    mistake: "Escribir en el chat culpando a otros jugadores por errores.",
    whyBad: "Reduce la moral del equipo, distrae de jugar, y no ayuda a mejorar.",
    solution: "Silencia el chat si te molesta. Concéntrate en tu propio juego. Usa pings constructivos.",
    example: "Tiempo gastado escribiendo = tiempo no farmeando o jugando."
  },
  {
    title: "No Aprender de los Errores",
    category: "Mentalidad",
    mistake: "Morir y no entender por qué sucedió, repitiendo los mismos errores.",
    whyBad: "No puedes mejorar si no identificas qué estás haciendo mal.",
    solution: "Después de cada muerte, pregúntate: ¿Por qué morí? ¿Qué podría haber hecho diferente? Aprende patrones.",
    example: "Si mueres por ganks 3 veces en la misma situación, necesitas colocar más wards o jugar más seguro."
  }
];

const categoryColors = {
  Laning: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Objetivos: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Teamfights: "bg-red-500/20 text-red-300 border-red-500/30",
  Items: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Mentalidad: "bg-green-500/20 text-green-300 border-green-500/30",
};

const ErroresComunes = () => {
  // Group by category
  const groupedByCategory = commonMistakes.reduce((acc, mistake) => {
    if (!acc[mistake.category]) {
      acc[mistake.category] = [];
    }
    acc[mistake.category].push(mistake);
    return acc;
  }, {} as Record<string, CommonMistake[]>);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="h-16 w-16 mx-auto mb-4 text-yellow-400" />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Errores Comunes de Principiantes
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Aprende de los errores más frecuentes que cometen los nuevos jugadores y cómo evitarlos para mejorar más rápido.
          </p>
        </div>
      </section>

      {/* Mistakes by Category */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {Object.entries(groupedByCategory).map(([category, mistakes]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-3xl font-bold text-foreground">{category}</h2>
                <Badge className={categoryColors[category as keyof typeof categoryColors]}>
                  {mistakes.length} errores
                </Badge>
              </div>
              
              <Accordion type="multiple" className="w-full">
                {mistakes.map((mistake, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${category}-${index}`}
                    className="border-lol-blue/30"
                  >
                    <AccordionTrigger className="text-left hover:text-lol-blue">
                      <div className="flex items-start gap-3">
                        <span className="text-red-400 font-bold text-xl">✗</span>
                        <span className="font-semibold">{mistake.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-red-400 mb-1">❌ El Error</h4>
                          <p className="text-muted-foreground">{mistake.mistake}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-yellow-400 mb-1">⚠️ Por qué es Malo</h4>
                          <p className="text-muted-foreground">{mistake.whyBad}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-400 mb-1">✓ La Solución</h4>
                          <p className="text-muted-foreground">{mistake.solution}</p>
                        </div>
                        {mistake.example && (
                          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                            <h4 className="font-semibold text-accent mb-1">💡 Ejemplo</h4>
                            <p className="text-sm text-muted-foreground">{mistake.example}</p>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Bottom tip */}
        <div className="max-w-5xl mx-auto mt-12 p-6 rounded-lg bg-gradient-card border border-lol-blue/30">
          <h3 className="font-bold text-xl mb-2 text-lol-gold">💡 Consejo Final</h3>
          <p className="text-foreground/90">
            No intentes corregir todos estos errores a la vez. Elige 2-3 para trabajar cada semana. 
            La mejora constante y gradual es más efectiva que intentar ser perfecto inmediatamente. 
            ¡Todo el mundo comete estos errores al principio!
          </p>
        </div>
      </section>
    </div>
  );
};

export default ErroresComunes;
