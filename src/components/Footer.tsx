import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Youtube, MessageCircle, Twitter, Mail, Gamepad2, Heart, ExternalLink } from "lucide-react";

const footerLinks = {
  aprender: [
    { title: "Fundamentos", link: "/fundamentos" },
    { title: "Conceptos Básicos", link: "/fundamentos/conceptos-basicos" },
    { title: "Tu Primera Partida", link: "/fundamentos/primera-partida" },
    { title: "Errores Comunes", link: "/errores-comunes" },
  ],
  campeones: [
    { title: "Todos los Campeones", link: "/campeones" },
    { title: "Quiz de Campeones", link: "/quiz-campeones" },
    { title: "Roles", link: "/roles" },
    { title: "Comparar Campeones", link: "/comparar-campeones" },
  ],
  herramientas: [
    { title: "Simulador", link: "/simulador" },
    { title: "Calculadora de Builds", link: "/build-calculator" },
    { title: "Mapa de Wards", link: "/mapa-wards" },
    { title: "Rutas de Jungla", link: "/rutas-jungla" },
  ],
  recursos: [
    { title: "Blog", link: "/blog" },
    { title: "Glosario", link: "/glosario" },
    { title: "Parches", link: "/parches" },
    { title: "Recursos Externos", link: "/recursos" },
  ],
};

const socialLinks = [
  { icon: MessageCircle, href: "https://discord.gg/leagueoflegends", label: "Discord" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-xl text-foreground">LoL</span>
                <span className="font-bold text-xl text-accent">Aprende</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              La guía definitiva para principiantes de League of Legends. Aprende desde cero con recursos diseñados especialmente para nuevos jugadores.
            </p>
            
            {/* Newsletter */}
            <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
              <h4 className="font-semibold text-foreground mb-2">Mantente actualizado</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Recibe consejos y novedades semanales
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="text-sm bg-background"
                />
                <Button type="submit" size="sm" className="bg-accent hover:bg-accent/90">
                  <Mail className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Aprender</h3>
            <ul className="space-y-3">
              {footerLinks.aprender.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link} 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Campeones</h3>
            <ul className="space-y-3">
              {footerLinks.campeones.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link} 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Herramientas</h3>
            <ul className="space-y-3">
              {footerLinks.herramientas.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link} 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link} 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center flex items-center gap-1">
            © 2025 Tu Academia de la Grieta. Hecho con 
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            para jugadores de LoL
          </p>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Privacidad
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Términos
            </button>
            <a 
              href="https://www.leagueoflegends.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              LoL Oficial
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
