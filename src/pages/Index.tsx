import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-banner.jpg";

const Index = () => {
  const modules = [
    {
      title: "Fundamentos",
      description: "Aprende los conceptos básicos del juego, el mapa y cómo funciona todo",
      icon: "📚",
      link: "/fundamentos",
      color: "border-lol-blue/30 hover:border-lol-blue",
    },
    {
      title: "Campeones",
      description: "Descubre los mejores campeones para principiantes y sus habilidades",
      icon: "⚔️",
      link: "/campeones",
      color: "border-lol-gold/30 hover:border-lol-gold",
    },
    {
      title: "Roles",
      description: "Entiende los 5 roles del juego y encuentra el que mejor se adapta a ti",
      icon: "🎯",
      link: "/roles",
      color: "border-accent/30 hover:border-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(26, 31, 58, 0.8), rgba(26, 31, 58, 0.95)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              Domina la Grieta del Invocador
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Tu aventura en League of Legends comienza aquí. Guías completas para principiantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fundamentos">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8">
                  Comenzar Ahora
                </Button>
              </Link>
              <Link to="/campeones">
                <Button size="lg" variant="outline" className="border-accent/40 text-foreground hover:bg-accent/10 font-semibold text-lg px-8">
                  Ver Campeones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            ¿Qué quieres aprender hoy?
          </h2>
          <p className="text-xl text-muted-foreground">
            Explora nuestros módulos de aprendizaje diseñados para principiantes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <Link key={index} to={module.link}>
              <Card className={`h-full transition-all hover:shadow-xl hover:-translate-y-1 ${module.color}`}>
                <CardHeader>
                  <div className="text-6xl mb-4">{module.icon}</div>
                  <CardTitle className="text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-base">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full text-accent hover:text-accent/80">
                    Explorar →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-hero text-primary-foreground border-0 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl mb-4">
              🎮 Empieza tu Viaje como Invocador
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              No importa si nunca has jugado un MOBA antes. Nuestras guías te llevarán paso a paso 
              desde lo más básico hasta convertirte en un jugador competente. ¡Únete a millones de 
              invocadores en todo el mundo!
            </p>
            <Link to="/fundamentos">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Comenzar con los Fundamentos
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
