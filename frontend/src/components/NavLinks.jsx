import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // importando o contexto de autenticação
import { signOut } from "firebase/auth"; // importando o método signOut
import { auth } from "../firebase/config"; // importando a instância de autenticação do Firebase
import AvatarSuspenso from "./AvatarSuspenso";

const NavLinks = () => {
  const { currentUser } = useAuth(); // obtendo o usuário atual do contexto
  const navigate = useNavigate(); // hook para redirecionamento

  const handleLogout = async () => {
    try {
      await signOut(auth); // realiza o logout
      navigate("/entrar"); // redireciona para a página de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <>
      <Link
        to="/"
        className="hover:text-verde-paleta hover:shadow duration-500 block"
      >
        Início
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

      {/* botões de logout e perfil - exibidos apenas para usuários logados */}
      {currentUser && (
        <AvatarSuspenso />
      )}

      {/* botôes criar conta e login - exibidos apenas para usuários não logados */}
      {!currentUser && (
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
            to="/entrar"
            className="bg-gray-300 hover:bg-gray-400 duration-500 text-azul-paleta font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <span className="material-symbols-outlined flex items-center justify-center w-5 h-5 mr-2">
              login
            </span>
            Entrar
          </Link>
        </div>
      )}
    </>
  );
};

export default NavLinks;