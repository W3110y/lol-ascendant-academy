import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavDropdownItem {
  name: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  mainPath: string;
}

export const NavDropdown = ({ label, items, mainPath }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = location.pathname === mainPath || items.some(item => location.pathname === item.path);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={mainPath}
        className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:text-accent ${
          isActive ? "text-accent" : "text-foreground/80"
        }`}
      >
        {label}
        <ChevronDown 
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </Link>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
          isOpen 
            ? "opacity-100 visible translate-y-0" 
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="bg-popover/95 backdrop-blur-md border border-border/60 rounded-xl shadow-xl p-2 min-w-[220px]">
          {/* View All Link */}
          <Link
            to={mainPath}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors border-b border-border/40 mb-2"
          >
            Ver Todo
          </Link>
          
          {/* Items */}
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group ${
                  location.pathname === item.path
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.icon && (
                  <span className="text-muted-foreground group-hover:text-accent transition-colors">
                    {item.icon}
                  </span>
                )}
                <div>
                  <p className="font-medium">{item.name}</p>
                  {item.description && (
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
