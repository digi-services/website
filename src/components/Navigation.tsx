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
            ? "fixed top-0 left-0 right-0 backdrop-blur-md bg-neutral-950/90 shadow-lg z-40"
            : "absolute z-30 bg-neutral-950 text-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center space-x-2">
              <CodeIcon width="24" height="24" />
              <span className="font-bold text-2xl text-white">Digital Solutions</span>
            </a>

            {/* Navegación Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group"
              >
                Servicios
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#plans"
                onClick={(e) => handleNavClick(e, "plans")}
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group"
              >
                Planes
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="text-sm font-medium text-white hover:text-primary transition-colors relative group"
              >
                Contacto
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XIcon width="24" height="24"  />
              ) : (
                <MenuIcon width="24" height="24"  />
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
          <div className="bg-neutral-950/90 backdrop-blur-md border-t border-neutral-800">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="block text-sm font-medium text-white hover:text-primary transition-colors"
              >
                Inicio
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="block text-sm font-medium text-white hover:text-primary transition-colors"
              >
                Servicios
              </a>
              <a
                href="#plans"
                onClick={(e) => handleNavClick(e, "plans")}
                className="block text-sm font-medium text-white hover:text-primary transition-colors"
              >
                Planes
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="block text-sm font-medium text-white hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="block text-sm font-medium text-white hover:text-primary transition-colors"
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