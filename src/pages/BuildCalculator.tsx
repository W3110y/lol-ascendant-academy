import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Item, itemsData, calculateTotalStats, ItemStats } from "@/data/items";
import { getItemUrl } from "@/lib/ddragon";
import { Package, Trash2, Save } from "lucide-react";
import { toast } from "sonner";

const BuildCalculator = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [buildName, setBuildName] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Daño");

  const categories = ["Daño", "Tanque", "Soporte", "Movilidad", "Jungla"];
  const maxItems = 6;

  const addItem = (item: Item) => {
    if (selectedItems.length >= maxItems) {
      toast.error(`Solo puedes tener ${maxItems} objetos en tu build`);
      return;
    }
    setSelectedItems([...selectedItems, item]);
    toast.success(`${item.name} añadido a tu build`);
  };

  const removeItem = (index: number) => {
    const newItems = [...selectedItems];
    newItems.splice(index, 1);
    setSelectedItems(newItems);
  };

  const clearBuild = () => {
    setSelectedItems([]);
    setBuildName("");
    toast.info("Build limpiada");
  };

  const saveBuild = () => {
    if (selectedItems.length === 0) {
      toast.error("Añade al menos un objeto a tu build");
      return;
    }
    const name = buildName || "Mi Build";
    const builds = JSON.parse(localStorage.getItem("savedBuilds") || "[]");
    builds.push({
      name,
      items: selectedItems,
      date: new Date().toISOString()
    });
    localStorage.setItem("savedBuilds", JSON.stringify(builds));
    toast.success(`Build "${name}" guardada exitosamente`);
  };

  const totalStats = calculateTotalStats(selectedItems);
  const totalCost = selectedItems.reduce((sum, item) => sum + item.cost, 0);

  const renderStatValue = (value: number | undefined, suffix: string = "") => {
    if (!value || value === 0) return null;
    return (
      <div className="flex items-center justify-between py-2 border-b border-border/40">
        <span className="text-sm text-muted-foreground">{suffix}</span>
        <span className="font-semibold text-accent">{value}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Calculadora de Builds
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experimenta con diferentes combinaciones de objetos y descubre cómo afectan a tus estadísticas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Item Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Objetos Disponibles
                  </CardTitle>
                  <CardDescription>Selecciona hasta {maxItems} objetos para tu build</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                    <TabsList className="grid w-full grid-cols-5 mb-6">
                      {categories.map((cat) => (
                        <TabsTrigger key={cat} value={cat}>
                          {cat}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {categories.map((category) => (
                      <TabsContent key={category} value={category} className="space-y-3">
                        {itemsData
                          .filter((item) => item.category === category)
                          .map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 p-4 rounded-lg border border-border/40 hover:border-accent/50 transition-colors cursor-pointer group"
                              onClick={() => addItem(item)}
                            >
                              <div className="relative w-14 h-14 flex-shrink-0">
                                <img
                                  src={getItemUrl(item.ddragonId)}
                                  alt={item.name}
                                  className="w-full h-full rounded-md border-2 border-border/60 group-hover:border-accent/70 transition-colors"
                                  loading="lazy"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-foreground">{item.name}</h4>
                                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{item.description}</p>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {item.stats.ad && <Badge variant="secondary" className="text-xs">AD +{item.stats.ad}</Badge>}
                                  {item.stats.ap && <Badge variant="secondary" className="text-xs">AP +{item.stats.ap}</Badge>}
                                  {item.stats.health && <Badge variant="secondary" className="text-xs">Vida +{item.stats.health}</Badge>}
                                  {item.stats.armor && <Badge variant="secondary" className="text-xs">Armadura +{item.stats.armor}</Badge>}
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <span className="text-lg font-bold text-accent">{item.cost}g</span>
                              </div>
                            </div>
                          ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Build Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tu Build</CardTitle>
                  <CardDescription>{selectedItems.length} / {maxItems} objetos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: maxItems }).map((_, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg border-2 border-dashed border-border/40 flex items-center justify-center relative overflow-hidden bg-background/50"
                      >
                        {selectedItems[index] ? (
                          <>
                            <img
                              src={getItemUrl(selectedItems[index].ddragonId)}
                              alt={selectedItems[index].name}
                              className="w-full h-full object-cover"
                              title={selectedItems[index].name}
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute -top-1 -right-1 h-5 w-5 rounded-full"
                              onClick={() => removeItem(index)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </>
                        ) : (
                          <span className="text-4xl text-muted-foreground/30">+</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold">Coste Total</span>
                      <span className="text-xl font-bold text-accent">{totalCost}g</span>
                    </div>

                    {selectedItems.length > 0 && (
                      <>
                        <div className="space-y-1 text-sm">
                          {renderStatValue(totalStats.ad, "Daño de Ataque")}
                          {renderStatValue(totalStats.ap, "Poder de Habilidad")}
                          {renderStatValue(totalStats.health, "Vida")}
                          {renderStatValue(totalStats.armor, "Armadura")}
                          {renderStatValue(totalStats.mr, "Resistencia Mágica")}
                          {renderStatValue(totalStats.attackSpeed, "Velocidad de Ataque %")}
                          {renderStatValue(totalStats.critChance, "Prob. Crítico %")}
                          {renderStatValue(totalStats.lifeSteal, "Robo de Vida %")}
                          {renderStatValue(totalStats.abilityHaste, "Presteza de Habilidad")}
                          {renderStatValue(totalStats.mana, "Maná")}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="space-y-2 pt-4">
                    <Input
                      placeholder="Nombre de tu build..."
                      value={buildName}
                      onChange={(e) => setBuildName(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button onClick={saveBuild} className="flex-1">
                        <Save className="w-4 h-4 mr-2" />
                        Guardar
                      </Button>
                      <Button onClick={clearBuild} variant="outline">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Limpiar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">💡 Consejos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Balancea daño con defensa según tu rol</p>
                  <p>• Los objetos de armadura son efectivos contra AD</p>
                  <p>• La resistencia mágica protege contra AP</p>
                  <p>• No olvides botas para movilidad (no incluidas aquí)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuildCalculator;