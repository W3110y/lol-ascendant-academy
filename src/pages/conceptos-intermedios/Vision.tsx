import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, MapPin, AlertTriangle } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Breadcrumbs />

      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Visión y Wards
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            El control de visión es la diferencia entre ganar y perder. Aprende a usar wards efectivamente.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <Card className="border-lol-blue/30">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Eye className="h-8 w-8 text-lol-blue" />
                ¿Por qué es importante la visión?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90 text-lg">
                La visión te permite ver partes del mapa que normalmente estarían en <strong>niebla de guerra</strong> (oscuras). Con buena visión puedes:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Ver ganks enemigos antes de que te atrapen</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Saber cuándo el enemigo está haciendo Dragón o Barón</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Encontrar enemigos aislados para matarlos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Controlar zonas del mapa de forma segura</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-lol-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl">Tipos de Wards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-2 text-lg">🟡 Ward de Control (Rosa)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Cuesta 75 de oro en la tienda</li>
                    <li>• Dura para siempre (hasta que la destruyan)</li>
                    <li>• Revela wards invisibles enemigos</li>
                    <li>• Solo puedes tener 1 en el mapa</li>
                    <li>• Los enemigos pueden verlo y destruirlo</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-2 text-lg">🟢 Ward Invisible (Totém)</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Gratis, lo tienes en tu Totém (ítem 4)</li>
                    <li>• Dura 90-120 segundos</li>
                    <li>• Invisible para enemigos</li>
                    <li>• Puedes tener máximo 3 en el mapa</li>
                    <li>• Se recarga con el tiempo (2 cargas máx)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/30">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <MapPin className="h-8 w-8 text-accent" />
                ¿Dónde colocar Wards?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/90 mb-4">
                Los mejores lugares para wardear dependen de la fase del juego:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-card-foreground/5 border-l-4 border-lol-blue">
                  <h4 className="font-semibold text-lol-blue mb-2 text-lg">Early Game (0-15 min)</h4>
                  <ul className="space-y-2 text-foreground/90">
                    <li>• <strong>Arbustos del río:</strong> Para ver al jungla enemigo rotando</li>
                    <li>• <strong>Entradas de tu jungla:</strong> Para protegerte de invasiones</li>
                    <li>• <strong>Cerca de buffs enemigos:</strong> Para rastrear al jungla</li>
                  </ul>
                </div>

                <div className="p-4 bg-card-foreground/5 border-l-4 border-lol-gold">
                  <h4 className="font-semibold text-lol-gold mb-2 text-lg">Mid Game (15-30 min)</h4>
                  <ul className="space-y-2 text-foreground/90">
                    <li>• <strong>Alrededor de objetivos:</strong> Dragón o Heraldo próximo a aparecer</li>
                    <li>• <strong>Jungla enemiga:</strong> Si estás ganando, invade su jungla con visión</li>
                    <li>• <strong>Flancos:</strong> Arbustos desde donde el enemigo podría emboscarte</li>
                  </ul>
                </div>

                <div className="p-4 bg-card-foreground/5 border-l-4 border-accent">
                  <h4 className="font-semibold text-accent mb-2 text-lg">Late Game (30+ min)</h4>
                  <ul className="space-y-2 text-foreground/90">
                    <li>• <strong>Barón Nashor:</strong> Control total de la zona es crítico</li>
                    <li>• <strong>Caminos hacia objetivos:</strong> Para ver rotaciones enemigas</li>
                    <li>• <strong>Tu jungla:</strong> Si estás perdiendo, defiende tu territorio</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-500/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                Consejos y Errores Comunes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-sm text-green-300">
                    ✓ <strong>Siempre compra Wards de Control:</strong> 75 de oro pueden salvar tu vida o asegurar un objetivo.
                  </p>
                </div>
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-sm text-green-300">
                    ✓ <strong>Ward antes de objetivos:</strong> Coloca visión 1-2 minutos antes de que aparezca Dragón/Barón.
                  </p>
                </div>
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-300">
                    ⚠️ <strong>No wardees solo:</strong> Wardear zonas peligrosas sin visión puede resultar en tu muerte.
                  </p>
                </div>
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-300">
                    ⚠️ <strong>No acumules cargas:</strong> Si tu totém tiene 2 cargas, úsalo. Estás perdiendo wards gratis.
                  </p>
                </div>
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm text-blue-300">
                    💡 <strong>El Support es el principal wardeador:</strong> Pero TODOS deben comprar wards de control.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Vision;
