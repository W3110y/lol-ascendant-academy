import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Award, Users, Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

interface CarouselSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: { text: string; link: string; icon: React.ReactNode };
  secondaryCta?: { text: string; link: string; icon: React.ReactNode };
  badge?: { text: string; icon: React.ReactNode };
  image?: string;
}

const slides: CarouselSlide[] = [
  {
    badge: { text: "Tu Academia de la Grieta", icon: <Sparkles className="w-5 h-5 mr-2 inline" /> },
    title: "¿Eres nuevo en League of Legends?",
    subtitle: "Empieza aquí",
    description: "Guías paso a paso, campeones fáciles y todo lo que necesitas para dominar la Grieta del Invocador.",
    cta: { text: "¡Empieza tu Aventura Aquí!", link: "/fundamentos/primera-partida", icon: <Award className="w-5 h-5 mr-2" /> },
    secondaryCta: { text: "Encuentra tu Estilo", link: "/quiz-campeones", icon: <Users className="w-5 h-5 mr-2" /> },
    image: heroBanner,
  },
  {
    badge: { text: "Descubre tu Rol", icon: <Sparkles className="w-5 h-5 mr-2 inline" /> },
    title: "¿Qué rol se adapta a ti?",
    subtitle: "Encuentra tu posición ideal",
    description: "Haz nuestro quiz interactivo y descubre qué rol de League of Legends encaja mejor con tu estilo de juego.",
    cta: { text: "Hacer Quiz de Campeones", link: "/quiz-campeones", icon: <Users className="w-5 h-5 mr-2" /> },
    secondaryCta: { text: "Ver Todos los Roles", link: "/roles", icon: <Award className="w-5 h-5 mr-2" /> },
    image: heroBanner,
  },
  {
    badge: { text: "Herramientas Interactivas", icon: <Sparkles className="w-5 h-5 mr-2 inline" /> },
    title: "Aprende con Práctica Interactiva",
    subtitle: "Simulador de decisiones",
    description: "Practica la toma de decisiones en escenarios reales del juego y mejora tu pensamiento estratégico.",
    cta: { text: "Probar Simulador", link: "/herramientas/simulador", icon: <Award className="w-5 h-5 mr-2" /> },
    secondaryCta: { text: "Ver Rutas de Jungla", link: "/herramientas/rutas-jungla", icon: <Users className="w-5 h-5 mr-2" /> },
    image: heroBanner,
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-700"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 31, 58, 0.85), rgba(26, 31, 58, 0.95)), url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {slide.badge && (
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/40 text-lg px-5 py-2 animate-fade-in">
              {slide.badge.icon}
              {slide.badge.text}
            </Badge>
          )}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent animate-fade-in" 
              style={{ animationDelay: '0.1s' }}>
            {slide.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto animate-fade-in" 
             style={{ animationDelay: '0.2s' }}>
            {slide.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-8" 
               style={{ animationDelay: '0.4s' }}>
            <Link to={slide.cta.link}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 shadow-lg hover-scale">
                {slide.cta.icon}
                {slide.cta.text}
              </Button>
            </Link>
            {slide.secondaryCta && (
              <Link to={slide.secondaryCta.link}>
                <Button size="lg" variant="outline" className="border-accent/40 text-primary-foreground hover:bg-accent/10 font-semibold text-lg px-10">
                  {slide.secondaryCta.icon}
                  {slide.secondaryCta.text}
                </Button>
              </Link>
            )}
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors"
              aria-label="Anterior slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-accent' 
                      : 'w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60'
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors"
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
