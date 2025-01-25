"use client";

import { scrollToSection } from "@/lib/utils";
import { useState, useEffect } from "react";
import { CodeIcon, MenuIcon, XIcon } from "./icons";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 68);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 68);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 backdrop-blur-md shadow-sm z-40"
            : "absolute z-30 bg-neutral-950 text-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <CodeIcon width="18" height="18" />
              <span className="font-bold text-xl">Digital Solutions</span>
            </a>

            {/* Navegación Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-sm hover:text-primary transition-colors"
              >
                Inicio
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-sm hover:text-primary transition-colors"
              >
                Servicios
              </a>
              <a
                href="#planes"
                onClick={(e) => handleNavClick(e, "planes")}
                className="text-sm hover:text-primary transition-colors"
              >
                Planes
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="text-sm hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="text-sm hover:text-primary transition-colors"
              >
                Contacto
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon width="18" height="18" />
              ) : (
                <MenuIcon width="18" height="18" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil con animación */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/80 backdrop-blur-md border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="block text-sm hover:text-primary transition-colors"
              >
                Inicio
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "servicios")}
                className="block text-sm hover:text-primary transition-colors"
              >
                Servicios
              </a>
              <a
                href="#planes"
                onClick={(e) => handleNavClick(e, "planes")}
                className="block text-sm hover:text-primary transition-colors"
              >
                Planes
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="block text-sm hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="block text-sm hover:text-primary transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
