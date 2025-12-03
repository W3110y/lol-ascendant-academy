import { Link } from "react-router-dom";
import { BookOpen, Users, TrendingUp, Star, Award, Gamepad2, Target, Shield, Swords } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Guías Paso a Paso",
    description: "Aprende desde cero con tutoriales diseñados para principiantes absolutos",
    link: "/fundamentos",
    gradient: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: <Swords className="w-8 h-8" />,
    title: "+170 Campeones",
    description: "Descubre todos los campeones con guías, builds y consejos específicos",
    link: "/campeones",
    gradient: "from-amber-500/20 to-orange-600/20",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Quiz de Campeones",
    description: "Encuentra tu campeón ideal según tu estilo de juego preferido",
    link: "/quiz-campeones",
    gradient: "from-purple-500/20 to-pink-600/20",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Entender los Roles",
    description: "Domina los 5 roles del juego y encuentra tu posición perfecta",
    link: "/roles",
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Conceptos Avanzados",
    description: "Mejora tu nivel con estrategias de visión, objetivos y teamfights",
    link: "/conceptos-intermedios",
    gradient: "from-red-500/20 to-rose-600/20",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Herramientas Interactivas",
    description: "Practica con simuladores, mapas interactivos y calculadoras",
    link: "/simulador",
    gradient: "from-cyan-500/20 to-sky-600/20",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Todo lo que necesitas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tu Camino hacia la Maestría
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recursos diseñados específicamente para que cualquier principiante pueda mejorar rápidamente
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group">
              <div className={`relative h-full p-8 rounded-2xl border border-border/50 bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-accent font-medium opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span>Explorar</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/fundamentos"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            <span>Ver todas las guías</span>
            <Award className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
