import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Crosshair, Castle, Flame } from "lucide-react";

const ConceptosBasicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Conceptos Básicos del Juego
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Los conceptos fundamentales que necesitas dominar para mejorar en League of Legends.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Interactive Map */}
          <InteractiveMap />

          {/* Minions and Farming */}
          <Card className="border-lol-gold/30">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Crosshair className="h-8 w-8 text-lol-gold" />
                Súbditos y Farmeo (CS)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90 text-lg">
                Los <strong>súbditos (minions)</strong> son las unidades pequeñas que aparecen automáticamente cada 30 segundos y avanzan por las tres líneas.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">Súbditos Melé</h4>
                  <p className="text-sm text-muted-foreground">Luchan cuerpo a cuerpo. Dan ~21 de oro.</p>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">Súbditos de Rango</h4>
                  <p className="text-sm text-muted-foreground">Atacan desde lejos. Dan ~14 de oro.</p>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <h4 className="font-semibold text-accent mb-2">Súbditos de Asedio</h4>
                  <p className="text-sm text-muted-foreground">Grandes y resistentes. Dan ~60 de oro.</p>
                </div>
              </div>

              <div className="p-4 bg-lol-gold/10 border border-lol-gold/30 rounded-lg">
                <h4 className="font-semibold text-lol-gold mb-2">¿Qué es "Farmear" o "Last Hit"?</h4>
                <p className="text-foreground/90 mb-2">
                  <strong>Farmear</strong> significa dar el golpe final (last hit) a los súbditos para obtener oro. Solo recibes oro si TÚ das el último golpe.
                </p>
                <p className="text-muted-foreground text-sm">
                  💡 <strong>Meta:</strong> Un buen farmeo es ~70 CS (creep score) a los 10 minutos. Practica en partidas vs IA.
                </p>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-300">
                  ⚠️ <strong>Error común:</strong> Empujar la oleada sin control hace que seas vulnerable a ganks. A veces es mejor farmear cerca de tu torre.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gold and Shop */}
          <Card className="border-lol-blue/30">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Coins className="h-8 w-8 text-lol-gold" />
                Oro y la Tienda
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90 text-lg mb-4">
                El <strong>oro</strong> es el recurso que usas para comprar objetos que hacen más fuerte a tu campeón.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-accent text-lg">¿Cómo consigo oro?</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-lol-gold">💰</span>
                    <span className="text-foreground/90"><strong>Matando súbditos:</strong> La fuente principal y más confiable</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lol-gold">💰</span>
                    <span className="text-foreground/90"><strong>Destruyendo torretas:</strong> 150-300 oro por torre</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lol-gold">💰</span>
                    <span className="text-foreground/90"><strong>Matando campeones enemigos:</strong> 300 oro base + bonos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lol-gold">💰</span>
                    <span className="text-foreground/90"><strong>Objetivos neutrales:</strong> Dragones, Heraldo, Barón</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-lol-gold">💰</span>
                    <span className="text-foreground/90"><strong>Pasivamente:</strong> Ganas oro automáticamente con el tiempo</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">La Tienda</h4>
                <p className="text-foreground/90 mb-2">
                  Presiona <kbd className="px-2 py-1 bg-lol-dark border border-lol-blue rounded">P</kbd> para abrir la tienda. Solo puedes comprar desde la fuente (base).
                </p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Los objetos mejoran tus estadísticas (daño, vida, velocidad, etc.)</li>
                  <li>• Sigue las "builds recomendadas" al principio</li>
                  <li>• Compra "objetos iniciales" primero, luego "objetos legendarios"</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Jungle Buffs */}
          <Card className="border-green-500/30">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Flame className="h-8 w-8 text-green-400" />
                Buffs de la Jungla
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90 text-lg">
                En la jungla hay dos monstruos especiales que otorgan <strong>buffs</strong> (mejoras temporales):
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <h4 className="font-semibold text-red-400 mb-3 text-xl">🔴 Buff Rojo (Centinela Rojo)</h4>
                  <p className="text-foreground/90 mb-2"><strong>Beneficios:</strong></p>
                  <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                    <li>• Tus ataques ralentizan enemigos</li>
                    <li>• Hace daño verdadero en el tiempo</li>
                    <li>• Excelente para ganks y persecuciones</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">Dura 90 segundos. Reaparece 5 minutos después de morir.</p>
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-3 text-xl">🔵 Buff Azul (Centinela Azul)</h4>
                  <p className="text-foreground/90 mb-2"><strong>Beneficios:</strong></p>
                  <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                    <li>• Regeneración de maná muy rápida</li>
                    <li>• Reducción de cooldowns (10%)</li>
                    <li>• Perfecto para campeones que usan maná</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">Dura 90 segundos. Reaparece 5 minutos después de morir.</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-yellow-300">
                  💡 <strong>Dato:</strong> El jungla suele empezar matando uno de estos buffs. A veces, los da a sus compañeros de equipo para ayudarlos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Structures */}
          <Card className="border-accent/30">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Castle className="h-8 w-8 text-accent" />
                Estructuras del Mapa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90 text-lg mb-4">
                Para ganar, debes destruir estas estructuras en orden:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-card-foreground/5 border-l-4 border-lol-blue">
                  <h4 className="font-semibold text-lol-blue mb-2 text-lg">1. Torretas (Turrets)</h4>
                  <p className="text-foreground/90 mb-2">
                    Torres defensivas que atacan automáticamente a enemigos cercanos. Hay 11 torretas por equipo:
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Torretas exteriores:</strong> Las primeras de cada línea (más débiles)</li>
                    <li>• <strong>Torretas interiores:</strong> Las segundas (más resistentes)</li>
                    <li>• <strong>Torretas inhibidoras:</strong> Las terceras, protegen los inhibidores (muy resistentes)</li>
                    <li>• <strong>Torretas del Nexo:</strong> Las dos finales que protegen el Nexo</li>
                  </ul>
                  <p className="text-sm text-green-400 mt-2">
                    ✓ Las torretas priorizan a los campeones que atacan a campeones aliados
                  </p>
                </div>

                <div className="p-4 bg-card-foreground/5 border-l-4 border-lol-gold">
                  <h4 className="font-semibold text-lol-gold mb-2 text-lg">2. Inhibidores (Inhibitors)</h4>
                  <p className="text-foreground/90 mb-2">
                    Hay 3 inhibidores (uno por línea). Al destruir uno:
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Aparecen <strong>súper súbditos</strong> en esa línea (muy fuertes)</li>
                    <li>• El inhibidor reaparece después de 5 minutos</li>
                    <li>• Debes destruir la torreta inhibidora primero</li>
                  </ul>
                </div>

                <div className="p-4 bg-card-foreground/5 border-l-4 border-accent">
                  <h4 className="font-semibold text-accent mb-2 text-lg">3. Nexo (Nexus)</h4>
                  <p className="text-foreground/90 mb-2">
                    El objetivo final del juego. Al destruir el Nexo enemigo, <strong>¡GANAS!</strong>
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Está protegido por 2 torretas del Nexo</li>
                    <li>• Debes destruir al menos 1 inhibidor para atacar el Nexo</li>
                    <li>• Es el edificio más resistente del juego</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-sm text-red-300">
                  ⚠️ <strong>Importante:</strong> Las torretas hacen MUCHO daño al principio. No pelees bajo una torreta enemiga a menos que tengas ventaja clara o súbditos tanqueando los disparos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConceptosBasicos;
