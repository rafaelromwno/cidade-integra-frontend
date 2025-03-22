import React from "react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-azul-paleta text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <a href="/">
            <img src="/src/assets/logotipo-sem-borda.svg" alt="Logotipo" className="w-44" />
          </a>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden transition-all duration-500 ease-in-out">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-9 md:items-center text-white">
          <a href="/" className="hover:text-verde-paleta hover:shadow duration-500">Home</a>
          <a href="/denuncias" className="hover:text-verde-paleta hover:shadow duration-500">Denúncias</a>
          <a href="/ajuda" className="hover:text-verde-paleta hover:shadow duration-500">Ajuda</a>
          
          {/* Botões */}
          <div className="space-x-2">
            <a href="/registro" className="bg-verde-paleta hover:bg-verde-escuro-paleta  duration-500 text-azul-paleta font-bold py-2 px-4 rounded inline-flex items-center">
              <span className="material-symbols-outlined flex items-center justify-center w-5 h-5 mr-2">person_add</span>Criar Conta
            </a>
            <a href="/login" className="bg-gray-300 hover:bg-gray-400 duration-500 text-azul-paleta font-bold py-2 px-4 rounded inline-flex items-center">
              <span className="material-symbols-outlined flex items-center justify-center w-5 h-5 mr-2">login</span>Entrar
            </a>
          </div>
        </nav>
      </div>

      {/* Menu Mobile Expandido */}
      {menuOpen && (
        <div className="bg-azul-paleta">
          <nav className="px-4 py-4 space-y-2">
            <a href="/" className="block hover:text-verde-paleta hover:shadow duration-500">Home</a>
            <a href="/denuncias" className="block hover:text-verde-paleta hover:shadow duration-500">Denúncias</a>
            <a href="/ajuda" className="block hover:text-verde-paleta hover:shadow duration-500">Ajuda</a>
          </nav>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
