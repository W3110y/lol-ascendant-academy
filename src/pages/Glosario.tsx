import { useState } from "react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  example?: string;
}

const glossaryData: GlossaryTerm[] = [
  { term: "AD", definition: "Attack Damage. Daño de ataque físico.", example: "Los campeones AD usan armas para hacer daño." },
  { term: "AP", definition: "Ability Power. Poder de habilidad, que aumenta el daño mágico.", example: "Los magos escalan con AP." },
  { term: "ADC", definition: "Attack Damage Carry. El tirador del equipo, usualmente va en bot lane.", example: "Ashe es una ADC clásica." },
  { term: "AFK", definition: "Away From Keyboard. Cuando un jugador se desconecta o no está jugando.", example: "El mid está AFK, tenemos que jugar 4v5." },
  { term: "Baron / Barón Nashor", definition: "El monstruo neutral más poderoso del juego. Otorga un buff importante.", example: "Conseguimos el Barón y ahora podemos pushear." },
  { term: "Bot Lane", definition: "La línea inferior del mapa donde juegan el ADC y el Support.", example: "Voy a jugar bot lane con Ashe." },
  { term: "Buff", definition: "Un efecto positivo temporal. También se refiere a los monstruos de la jungla (rojo y azul).", example: "Tengo el buff rojo, voy a gankar top." },
  { term: "Build", definition: "La combinación de objetos que compras para tu campeón.", example: "Esta build de Garen es muy tanque." },
  { term: "Carry", definition: "El jugador o campeón que hace más daño y 'carga' al equipo hacia la victoria.", example: "El ADC está haciendo carry esta partida." },
  { term: "CC", definition: "Crowd Control. Efectos que controlan al enemigo (aturdimiento, ralentización, enraizamiento).", example: "Leona tiene mucho CC en su kit." },
  { term: "CS", definition: "Creep Score. El número de súbditos que has matado.", example: "Tengo 100 CS a los 10 minutos." },
  { term: "Dive", definition: "Atacar a un enemigo bajo su torreta, arriesgándose a recibir daño de la torre.", example: "Vamos a hacer dive al ADC enemigo." },
  { term: "Dragon / Dragón", definition: "Monstruo neutral importante que otorga buffs permanentes al equipo.", example: "Matamos el tercer dragón, ahora tenemos soul." },
  { term: "Elo", definition: "Sistema de clasificación de habilidad de los jugadores.", example: "Estoy subiendo de elo, ya llegué a Oro." },
  { term: "Farm / Farmear", definition: "Matar súbditos para obtener oro y experiencia.", example: "Necesito farmear más para comprar mi próximo objeto." },
  { term: "Feed / Feedear", definition: "Morir repetidamente, dando oro y ventaja al equipo enemigo.", example: "El top está fedeando, el enemigo está muy adelantado." },
  { term: "Flash", definition: "Hechizo de invocador que te teletransporta una corta distancia.", example: "Usé flash para escapar del gank." },
  { term: "Gank / Gankar", definition: "Cuando un jugador (usualmente el jungla) embosca a un enemigo en otra línea.", example: "El jungla enemigo está gankando mid mucho." },
  { term: "Herald / Heraldo", definition: "Heraldo de la Grieta. Monstruo neutral que ayuda a destruir torretas.", example: "Invocamos el Heraldo para romper la torre de mid." },
  { term: "Ignite / Encender", definition: "Hechizo de invocador que hace daño verdadero en el tiempo y reduce curación.", example: "Usa Ignite en Soraka para reducir su curación." },
  { term: "Inhibitor / Inhibidor", definition: "Estructura que, al ser destruida, permite que aparezcan súbditos poderosos.", example: "Destruimos el inhibidor bot, ahora tenemos super minions." },
  { term: "Jungle / Jungla", definition: "El área entre las líneas donde hay monstruos neutrales. También el rol del jugador que la farmea.", example: "Voy a jugar jungla con Warwick." },
  { term: "Kill Steal / KS", definition: "Cuando un aliado 'roba' una muerte que otro jugador iba a conseguir.", example: "¡Me hiciste KS! Esa kill era mía." },
  { term: "Lane / Línea", definition: "Los caminos principales del mapa (Top, Mid, Bot).", example: "Mi línea está pusheada, ten cuidado con ganks." },
  { term: "Last Hit", definition: "Dar el golpe final a un súbdito para obtener el oro.", example: "Practica last hit para mejorar tu farmeo." },
  { term: "Meta", definition: "Los campeones, estrategias y builds más efectivas en el parche actual.", example: "Garen está muy fuerte en el meta actual." },
  { term: "Minions / Súbditos", definition: "Las unidades pequeñas que avanzan por las líneas y dan oro al matarlas.", example: "Los minions están pusheando hacia mi torre." },
  { term: "Nexus / Nexo", definition: "La estructura principal de cada base. Destruirla es el objetivo del juego.", example: "¡Destruimos el nexo! ¡Victoria!" },
  { term: "Peel", definition: "Proteger a un aliado (usualmente el carry) de enemigos que intentan matarlo.", example: "Necesito peel, el asesino me está atacando." },
  { term: "Poke / Pokear", definition: "Hacer daño a distancia sin comprometerse a una pelea completa.", example: "Lux está pokeando con su E desde lejos." },
  { term: "Push / Pushear", definition: "Matar súbditos rápidamente para avanzar la oleada hacia la torre enemiga.", example: "Voy a pushear mid y luego rotar a dragon." },
  { term: "Recall / Recallear", definition: "Volver a la base para comprar objetos y recuperar vida/maná.", example: "Voy a recallear para comprar mi primer objeto." },
  { term: "Roam / Roamear", definition: "Dejar tu línea para ayudar a otras partes del mapa.", example: "El mid está roameando a bot, ten cuidado." },
  { term: "Runes / Runas", definition: "Modificadores que eliges antes de la partida para personalizar tu campeón.", example: "Estas runas dan más daño en early game." },
  { term: "Split Push", definition: "Estrategia de pushear una línea solo mientras el equipo distrae en otro lugar.", example: "Voy a hacer split push en top mientras peleáis por baron." },
  { term: "Summoner Spells / Hechizos de Invocador", definition: "Dos habilidades extra que eliges antes de la partida (Flash, Ignite, etc.).", example: "Llevo Flash y Ignite como hechizos de invocador." },
  { term: "Tank / Tanque", definition: "Campeón con mucha vida y resistencias, diseñado para absorber daño.", example: "Malphite es un buen tanque contra equipos AD." },
  { term: "Teamfight / Pelea de equipo", definition: "Cuando ambos equipos pelean juntos, usualmente por objetivos.", example: "Ganamos la teamfight y conseguimos el baron." },
  { term: "Top Lane", definition: "La línea superior del mapa.", example: "Juego top lane con Garen." },
  { term: "Trade / Tradear", definition: "Intercambiar daño con el enemigo en línea.", example: "Gané el trade porque usé mi escudo." },
  { term: "Turret / Torreta", definition: "Las estructuras defensivas que atacan enemigos automáticamente.", example: "La torreta de mid está baja, podemos destruirla." },
  { term: "Ultimate / R", definition: "La habilidad más poderosa de un campeón, usualmente con cooldown largo.", example: "Espera a que tenga mi ultimate antes de pelear." },
  { term: "Ward", definition: "Objeto que proporciona visión en el mapa.", example: "Coloca un ward en el río para ver ganks." },
  { term: "Wave / Oleada", definition: "Un grupo de súbditos que avanza por la línea.", example: "Espera a que llegue la próxima oleada para pushear." },
];

const Glosario = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = glossaryData.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group by first letter
  const groupedTerms = filteredTerms.reduce((acc, item) => {
    const firstLetter = item.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Glosario de League of Legends
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Todos los términos que necesitas conocer para entender el juego y comunicarte con tu equipo.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar término..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg h-12"
            />
          </div>
        </div>

        {/* Glossary */}
        <div className="max-w-5xl mx-auto">
          {sortedLetters.map((letter) => (
            <div key={letter} className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-accent">{letter}</h2>
              <div className="grid gap-4">
                {groupedTerms[letter].map((item, index) => (
                  <Card key={index} className="border-lol-blue/30">
                    <CardHeader>
                      <CardTitle className="text-xl text-lol-gold">{item.term}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-foreground">{item.definition}</p>
                      {item.example && (
                        <p className="text-sm text-muted-foreground italic">
                          💡 Ejemplo: {item.example}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No se encontraron términos.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Glosario;
