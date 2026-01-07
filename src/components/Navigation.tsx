import { Link, useLocation } from "react-router-dom";
import { MobileSidebar } from "@/components/MobileSidebar";
import { NavDropdown } from "@/components/NavDropdown";
import { 
  Lightbulb, 
  Target, 
  RefreshCw, 
  Map, 
  Swords, 
  Users, 
  Brain 
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const simpleNavItems = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Parches", path: "/parches" },
    { name: "Glosario", path: "/glosario" },
  ];

  const dropdownItems = {
    fundamentos: [
      { 
        name: "Conceptos Básicos", 
        path: "/fundamentos/conceptos-basicos", 
        description: "Aprende los fundamentos",
        icon: <Lightbulb className="w-4 h-4" />
      },
      { 
        name: "Tu Primera Partida", 
        path: "/fundamentos/primera-partida", 
        description: "Guía paso a paso",
        icon: <Target className="w-4 h-4" />
      },
    ],
    campeones: [
      { 
        name: "Comparar Campeones", 
        path: "/herramientas/comparar-campeones", 
        description: "Compara estadísticas",
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: "Quiz de Campeones", 
        path: "/quiz-campeones", 
        description: "Encuentra tu campeón ideal",
        icon: <Brain className="w-4 h-4" />
      },
    ],
    conceptos: [
      { 
        name: "Fases de Partida", 
        path: "/conceptos-intermedios/fases-partida", 
        description: "Early, mid, late game",
        icon: <RefreshCw className="w-4 h-4" />
      },
      { 
        name: "Visión", 
        path: "/conceptos-intermedios/vision", 
        description: "Controla el mapa",
        icon: <Map className="w-4 h-4" />
      },
      { 
        name: "Teamfights", 
        path: "/conceptos-intermedios/teamfights", 
        description: "Peleas de equipo",
        icon: <Swords className="w-4 h-4" />
      },
      { 
        name: "Objetivos Neutrales", 
        path: "/conceptos-intermedios/objetivos-neutrales", 
        description: "Dragones, Baron, etc",
        icon: <Target className="w-4 h-4" />
      },
    ],
    herramientas: [
      { 
        name: "Simulador", 
        path: "/herramientas/simulador", 
        description: "Practica decisiones",
        icon: <Brain className="w-4 h-4" />
      },
      { 
        name: "Mapa de Wards", 
        path: "/herramientas/ward-map", 
        description: "Ubicaciones clave",
        icon: <Map className="w-4 h-4" />
      },
      { 
        name: "Calculadora de Builds", 
        path: "/herramientas/build-calculator", 
        description: "Crea tu build",
        icon: <Target className="w-4 h-4" />
      },
      { 
        name: "Rutas de Jungla", 
        path: "/herramientas/rutas-jungla", 
        description: "Rutas óptimas",
        icon: <RefreshCw className="w-4 h-4" />
      },
    ],
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              LoLAprende
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Simple nav items first */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Inicio
            </Link>

            {/* Dropdown menus */}
            <NavDropdown 
              label="Fundamentos" 
              items={dropdownItems.fundamentos} 
              mainPath="/fundamentos" 
            />
            <NavDropdown 
              label="Campeones" 
              items={dropdownItems.campeones} 
              mainPath="/campeones" 
            />
            <NavDropdown 
              label="Conceptos" 
              items={dropdownItems.conceptos} 
              mainPath="/conceptos-intermedios" 
            />
            <NavDropdown 
              label="Herramientas" 
              items={dropdownItems.herramientas} 
              mainPath="/herramientas" 
            />

            {/* Rest of simple nav items */}
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/blog") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/parches"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/parches") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Parches
            </Link>
            <Link
              to="/glosario"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive("/glosario") ? "text-accent" : "text-foreground/80"
              }`}
            >
              Glosario
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileSidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
