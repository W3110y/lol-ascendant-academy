import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, Swords, Brain, Target } from "lucide-react";

interface FeatureSlide {
  id: number;
  badge: string;
  title: string;
  description: string;
  cta: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
  icon: React.ElementType;
  gradient: string;
  bgPattern: string;
}

const slides: FeatureSlide[] = [
  {
    id: 1,
    badge: "Nuevo Jugador",
    title: "¿Empezando en League of Legends?",
    description: "Guías paso a paso para dominar los fundamentos. Desde conceptos básicos hasta tu primera victoria.",
    cta: { text: "Empieza Aquí", link: "/fundamentos/primera-partida" },
    secondaryCta: { text: "Quiz de Roles", link: "/quiz-campeones" },
    icon: BookOpen,
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
  },
  {
    id: 2,
    badge: "160+ Campeones",
    title: "Encuentra tu Campeón Ideal",
    description: "Descubre el campeón perfecto para tu estilo de juego. Guías detalladas para principiantes.",
    cta: { text: "Explorar Campeones", link: "/campeones" },
    secondaryCta: { text: "Comparar", link: "/herramientas/comparar-campeones" },
    icon: Swords,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)"
  },
  {
    id: 3,
    badge: "Interactivo",
    title: "Aprende Practicando",
    description: "Simuladores y herramientas interactivas para mejorar tu toma de decisiones sin presión.",
    cta: { text: "Probar Simulador", link: "/herramientas/simulador" },
    secondaryCta: { text: "Todas las Herramientas", link: "/herramientas" },
    icon: Brain,
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)"
  },
  {
    id: 4,
    badge: "Estrategia",
    title: "Domina la Visión del Mapa",
    description: "Aprende dónde colocar wards y controla el mapa como un profesional. La visión gana partidas.",
    cta: { text: "Mapa de Wards", link: "/herramientas/ward-map" },
    secondaryCta: { text: "Guía de Visión", link: "/conceptos-intermedios/vision" },
    icon: Target,
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    bgPattern: "radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)"
  }
];

export const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <Card className="border-accent/20 bg-gradient-to-br from-card via-card to-card/80 overflow-hidden">
        {/* Background pattern */}
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{ background: slide.bgPattern }}
        />
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-all duration-700`} />
        
        <CardContent className="p-6 md:p-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-accent" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-3 bg-accent/20 text-accent border-accent/40">
                <Sparkles className="w-3 h-3 mr-1" />
                {slide.badge}
              </Badge>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 transition-all duration-300">
                {slide.title}
              </h3>
              
              <p className="text-muted-foreground mb-5 max-w-xl">
                {slide.description}
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link to={slide.cta.link}>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                    {slide.cta.text}
                  </Button>
                </Link>
                {slide.secondaryCta && (
                  <Link to={slide.secondaryCta.link}>
                    <Button variant="outline" className="border-accent/30 hover:border-accent hover:bg-accent/10">
                      {slide.secondaryCta.text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/30">
            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-accent"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureCarousel;
