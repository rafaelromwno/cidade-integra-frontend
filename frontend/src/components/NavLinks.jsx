import React from "react";
import { Link } from "react-router-dom";

// componente para links reutilizáveis

const NavLinks = () => {
  return (
    <>
      <Link
        to="/"
        className="hover:text-verde-paleta hover:shadow duration-500 block"
      >
        Página Inicial
      </Link>
      <Link
        to="/denuncie"
        className="hover:text-verde-paleta hover:shadow duration-500 block"
      >
        Denúncias
      </Link>
      <Link
        to="/duvidas"
        className="hover:text-verde-paleta hover:shadow duration-500 block"
      >
        Dúvidas
      </Link>

      {/* botôes criar conta e login */}
      <div className="space-x-2">
        <Link
          to="/criar-conta"
          className="bg-verde-paleta hover:bg-verde-escuro-paleta duration-500 text-azul-paleta font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span className="material-symbols-outlined flex items-center justify-center w-5 h-5 mr-2">
            person_add
          </span>
          Criar Conta
        </Link>
        <Link
          to="/"
          className="bg-gray-300 hover:bg-gray-400 duration-500 text-azul-paleta font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span className="material-symbols-outlined flex items-center justify-center w-5 h-5 mr-2">
            login
          </span>
          Entrar
        </Link>
      </div>
    </>
  );
};

export default NavLinks;
