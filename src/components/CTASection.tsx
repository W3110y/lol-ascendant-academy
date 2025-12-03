import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Trophy } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

export const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">100% Gratis para Principiantes</span>
            </div>
          </ScrollAnimation>

          {/* Main heading */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              ¿Listo para Dominar
              <span className="block text-accent">la Grieta del Invocador?</span>
            </h2>
          </ScrollAnimation>

          {/* Description */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Únete a miles de jugadores que han mejorado su nivel con nuestras guías. 
              Desde lo más básico hasta convertirte en un invocador experimentado.
            </p>
          </ScrollAnimation>

          {/* Features */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Guías Actualizadas</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">+170 Campeones</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Herramientas Interactivas</span>
              </div>
            </div>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fundamentos">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  Empezar Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/quiz-campeones">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300"
                >
                  Descubre tu Campeón
                </Button>
              </Link>
            </div>
          </ScrollAnimation>

          {/* Trust text */}
          <ScrollAnimation animation="fade" delay={500}>
            <p className="mt-8 text-sm text-primary-foreground/60">
              Sin registro requerido • Contenido actualizado semanalmente
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
