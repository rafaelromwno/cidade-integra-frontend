import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Importando o contexto de autenticação
import { signOut } from "firebase/auth"; // Importando o método de logout do Firebase
import { auth } from "../../firebase/config"; // Importando a instância de autenticação do Firebase
import { useNavigate } from "react-router-dom"; // Para redirecionamento após logout
import { Link } from "react-router-dom"; // Para navegação entre páginas

export default function AvatarSuspenso() {
  const { currentUser } = useAuth(); // Obtendo o usuário atual e o método de logout do contexto
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Obtém a primeira letra do nome ou do e-mail
  const firstLetter =
    currentUser?.displayName?.charAt(0).toUpperCase() ||
    currentUser?.email?.charAt(0).toUpperCase() ||
    "U";

  const handleLogout = async () => {
    try {
      await signOut(auth); // Chama o método de logout do contexto
      navigate("/entrar"); // Redireciona para a página de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <div className="relative">
      {/* Avatar como botão com a inicial do nome */}
      <button
        id="avatarButton"
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-verde-paleta text-white font-bold cursor-pointer"
      >
        {firstLetter}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="z-10 divide-y rounded-lg shadow-sm w-44 bg-gray-700 divide-gray-600 absolute top-12 left-0 sm:left-auto sm:right-0"
        >
          <div className="px-4 py-3 text-sm text-white">
            <div>{currentUser?.displayName || "Usuário"}</div>
            <div className="font-medium truncate">{currentUser?.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-200">
            <li>
              <Link
                to="/perfil"
                className="block px-4 py-2 hover:bg-[#22C55E] hover:text-white rounded-md"
              >
                Perfil
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-sm text-white bg-[#DC2626] hover:bg-red-700 rounded-md text-center"
            >
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
