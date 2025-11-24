import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Youtube, MessageCircle, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-lol-gold">Tu Academia de la Grieta</h3>
            <p className="text-sm text-muted-foreground">
              La guía definitiva para principiantes de League of Legends. Aprende desde cero con recursos diseñados especialmente para nuevos jugadores.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/fundamentos" className="text-muted-foreground hover:text-lol-blue transition-colors">
                  Fundamentos
                </Link>
              </li>
              <li>
                <Link to="/campeones" className="text-muted-foreground hover:text-lol-blue transition-colors">
                  Campeones
                </Link>
              </li>
              <li>
                <Link to="/conceptos-intermedios" className="text-muted-foreground hover:text-lol-blue transition-colors">
                  Conceptos Intermedios
                </Link>
              </li>
              <li>
                <Link to="/glosario" className="text-muted-foreground hover:text-lol-blue transition-colors">
                  Glosario
                </Link>
              </li>
              <li>
                <Link to="/errores-comunes" className="text-muted-foreground hover:text-lol-blue transition-colors">
                  Errores Comunes
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/recursos" className="text-muted-foreground hover:text-lol-blue transition-colors">
                  Recursos Externos
                </Link>
              </li>
              <li>
                <Link to="/quiz-campeones" className="text-muted-foreground hover:text-lol-blue transition-colors">
                  Quiz de Campeones
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Mantente Actualizado</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Recibe consejos y actualizaciones semanales
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="tu@email.com" 
                className="text-sm"
              />
              <Button type="submit" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a 
              href="https://discord.gg/leagueoflegends" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-lol-blue transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-lol-blue transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-lol-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © 2025 Tu Academia de la Grieta. Hecho con ❤️ para jugadores de LoL principiantes.
          </p>

          <div className="flex gap-4 text-sm">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Privacidad
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Términos
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
