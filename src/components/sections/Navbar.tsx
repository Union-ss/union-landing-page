// components/sections/Navbar.jsx

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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
            ? "bg-black/30 backdrop-blur-md shadow-2xl shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`font-bold transition-all duration-300 ${
                  isScrolled 
                    ? "text-white text-lg" 
                    : "gradient-text text-2xl" 
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
                      ? "text-white/80 hover:text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link}
                </a>
              ))}
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