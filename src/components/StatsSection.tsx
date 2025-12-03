import { useEffect, useState, useRef } from "react";
import { Users, BookOpen, Gamepad2, Trophy } from "lucide-react";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: <Gamepad2 className="w-8 h-8" />, value: 168, suffix: "+", label: "Campeones en Guías" },
  { icon: <BookOpen className="w-8 h-8" />, value: 50, suffix: "+", label: "Guías Detalladas" },
  { icon: <Users className="w-8 h-8" />, value: 5, suffix: "", label: "Roles Explicados" },
  { icon: <Trophy className="w-8 h-8" />, value: 100, suffix: "%", label: "Contenido Gratuito" },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, start]);
  
  return count;
};

const StatCard = ({ stat, index, isVisible }: { stat: StatItem; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.value, 2000, isVisible);
  
  return (
    <div 
      className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 text-accent mb-4 group-hover:scale-110 transition-transform">
        {stat.icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-foreground mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-muted-foreground font-medium">
        {stat.label}
      </div>
    </div>
  );
};

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas para empezar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contenido completo y actualizado para guiarte en tu aventura como Invocador
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} animation="scale" delay={index * 100}>
              <StatCard stat={stat} index={index} isVisible={isVisible} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
