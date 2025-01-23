import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 mt-16 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto px-4 md:px-0 w-full max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">DS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("servicios");
              }}
              className="text-sm hover:text-primary transition-colors"
            >
              Servicios
            </a>
            <a
              href="#planes"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("planes");
              }}
              className="text-sm hover:text-primary transition-colors"
            >
              Planes
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
              }}
              className="text-sm hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacto");
              }}
              className="text-sm hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("servicios");
                setIsMenuOpen(false);
              }}
              className="block text-sm hover:text-primary transition-colors"
            >
              Servicios
            </a>
            <a
              href="#planes"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("planes");
                setIsMenuOpen(false);
              }}
              className="block text-sm hover:text-primary transition-colors"
            >
              Planes
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("portfolio");
                setIsMenuOpen(false);
              }}
              className="block text-sm hover:text-primary transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacto");
                setIsMenuOpen(false);
              }}
              className="block text-sm hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export { Navigation };
