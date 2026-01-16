import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNames: Record<string, string> = {
    fundamentos: "Fundamentos",
    "primera-partida": "Tu Primera Partida",
    "conceptos-basicos": "Conceptos Básicos",
    campeones: "Campeones",
    roles: "Roles",
    glosario: "Glosario",
    recursos: "Recursos",
    "conceptos-intermedios": "Conceptos Intermedios",
    vision: "Visión y Wards",
    objetivos: "Objetivos Neutrales",
    fases: "Fases de la Partida",
    teamfights: "Peleas de Equipo",
    blog: "Blog",
    herramientas: "Herramientas",
    "buscar-invocador": "Buscar Invocador",
  };

  if (pathnames.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                Inicio
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNames[name] || name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <div key={name} className="flex items-center gap-2">
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{displayName}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={routeTo}>{displayName}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
