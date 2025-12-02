import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Sparkles, ChevronDown, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-primary/90 via-primary/80 to-primary" />
      
      {/* Animated Particles/Shapes */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lol-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center mb-8 animate-fade-in">
            <Badge className="bg-accent/20 text-accent border-accent/40 text-lg px-6 py-3 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              Tu Academia de la Grieta
            </Badge>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-primary-foreground">Aprende a jugar</span>
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">League of Legends</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Guías paso a paso diseñadas para principiantes. Desde tu primera partida hasta 
            dominar la Grieta del Invocador.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>100% Gratis</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>En Español</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <div className="w-2 h-2 rounded-full bg-lol-blue" />
              <span>Para Principiantes</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-12" style={{ animationDelay: '0.4s' }}>
            <Link to="/fundamentos/primera-partida">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:scale-105">
                <Award className="w-6 h-6 mr-2" />
                Empezar Ahora
              </Button>
            </Link>
            <Link to="/quiz-campeones">
              <Button size="lg" variant="secondary" className="bg-primary-foreground/10 border border-accent/50 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-lg px-10 py-7 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                Encuentra tu Campeón
              </Button>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <button 
            onClick={scrollToContent}
            className="animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
