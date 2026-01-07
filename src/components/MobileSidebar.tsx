import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Menu, 
  Home, 
  BookOpen, 
  Users, 
  Lightbulb, 
  Wrench, 
  FileText, 
  RefreshCw, 
  BookMarked,
  ChevronRight,
  Sparkles,
  Swords,
  Map,
  Target,
  Brain
} from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  children?: { name: string; path: string; icon: React.ElementType }[];
}

const navItems: NavItem[] = [
  { name: "Inicio", path: "/", icon: Home },
  { 
    name: "Fundamentos", 
    path: "/fundamentos", 
    icon: BookOpen,
    children: [
      { name: "Conceptos Básicos", path: "/fundamentos/conceptos-basicos", icon: Lightbulb },
      { name: "Tu Primera Partida", path: "/fundamentos/primera-partida", icon: Target },
    ]
  },
  { 
    name: "Campeones", 
    path: "/campeones", 
    icon: Swords,
    children: [
      { name: "Comparar Campeones", path: "/herramientas/comparar-campeones", icon: Users },
      { name: "Quiz de Campeones", path: "/quiz-campeones", icon: Brain },
    ]
  },
  { 
    name: "Conceptos", 
    path: "/conceptos-intermedios", 
    icon: Lightbulb,
    children: [
      { name: "Fases de Partida", path: "/conceptos-intermedios/fases-partida", icon: RefreshCw },
      { name: "Visión", path: "/conceptos-intermedios/vision", icon: Map },
      { name: "Teamfights", path: "/conceptos-intermedios/teamfights", icon: Swords },
      { name: "Objetivos", path: "/conceptos-intermedios/objetivos-neutrales", icon: Target },
    ]
  },
  { 
    name: "Herramientas", 
    path: "/herramientas", 
    icon: Wrench,
    children: [
      { name: "Simulador", path: "/herramientas/simulador", icon: Brain },
      { name: "Mapa de Wards", path: "/herramientas/ward-map", icon: Map },
      { name: "Calculadora de Builds", path: "/herramientas/build-calculator", icon: Target },
      { name: "Rutas de Jungla", path: "/herramientas/rutas-jungla", icon: RefreshCw },
    ]
  },
  { name: "Blog", path: "/blog", icon: FileText },
  { name: "Parches", path: "/parches", icon: RefreshCw },
  { name: "Glosario", path: "/glosario", icon: BookMarked },
];

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (item: NavItem) => {
    if (isActive(item.path)) return true;
    if (item.children) {
      return item.children.some(child => isActive(child.path));
    }
    return false;
  };

  const toggleExpanded = (name: string) => {
    setExpandedItems(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name)
        : [...prev, name]
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0 bg-background border-r border-border/40">
        <SheetHeader className="p-4 border-b border-border/40">
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="bg-gradient-gold bg-clip-text text-transparent font-bold">
              LoLAprende
            </span>
          </SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-65px)]">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isParentActive(item)
                          ? "bg-accent/10 text-accent"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </span>
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform ${
                          expandedItems.includes(item.name) ? "rotate-90" : ""
                        }`} 
                      />
                    </button>
                    {expandedItems.includes(item.name) && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-border/50 pl-3">
                        <Link
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                            isActive(item.path)
                              ? "bg-accent/10 text-accent font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          Ver Todo
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                              isActive(child.path)
                                ? "bg-accent/10 text-accent font-medium"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                          <child.icon className="w-3.5 h-3.5" />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive(item.path)
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <Separator className="my-4" />
          
          <div className="p-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <p className="text-sm font-medium text-accent mb-2">💡 Tip del día</p>
              <p className="text-xs text-muted-foreground">
                El farmeo es clave en LoL. ¡10 CS equivalen a aproximadamente 1 kill!
              </p>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
