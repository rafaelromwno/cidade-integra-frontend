import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu se a tela for redimensionada para maior que 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-azul-paleta text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link to="/">
            <img
              src="/src/assets/logotipo-sem-borda.svg"
              alt="Logotipo"
              className="w-44"
            />
          </Link>
        </div>

        {/* Botão de menu para mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navegação desktop */}
        <nav className="hidden lg:flex space-x-9 items-center">
          <NavLinks />
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="bg-azul-paleta lg:hidden">
          <nav className="px-4 py-4 space-y-2">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
