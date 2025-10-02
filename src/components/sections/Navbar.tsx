// components/sections/Navbar.jsx

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ModeToggle from "../features/mode-toggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_THRESHOLD = 600;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 transition-all duration-300 ${
        isScrolled ? "top-2" : "top-5"
      }`}
    >
      <nav
        className={`w-full transition-all duration-300 rounded-full md:rounded-3xl ${
          isScrolled
            ? "bg-card/80 backdrop-blur-md border border-border/50 shadow-2xl shadow-black/50" // Fondo de tarjeta semi-transparente para Dark Mode
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`font-bold transition-all duration-300 ${
                  isScrolled
                    ? "text-foreground text-lg" // Texto claro sobre la barra oscura
                    : "gradient-text text-2xl" // Mantiene el gradiente en la posición superior (sobre el hero)
                }`}
              >
                Union Software
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {[
                "Features",
                "Products",
                "Pricing",
                "About",
                "Blog",
                "Contact",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className={`transition-colors text-sm font-medium ${
                    isScrolled
                      ? "text-muted-foreground hover:text-foreground" // Usa colores de tema para texto en Dark Mode
                      : "text-foreground/90 hover:text-foreground" // Mantiene el texto blanco arriba, asumiendo un fondo de hero oscuro
                  }`}
                >
                  {link}
                </a>
              ))}
              <ModeToggle />
              <Button variant="hero" size="sm" className="shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;