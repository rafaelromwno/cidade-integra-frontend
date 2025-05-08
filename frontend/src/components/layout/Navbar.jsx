import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/logotipo-sem-borda.svg";
import useAuthentication from "@/hooks/UseAuthentication";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthentication();
  const isMobile = useIsMobile();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Erro ao sair:", error);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <nav className="bg-azul text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="h-14" src={Logo} alt="Logo" />
        </Link>

        {/* Menu Responsivo */}
        {isMobile ? (
          <>
            {/* Botão de abrir/fechar menu mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Overlay do menu mobile */}
            <div
              className={`fixed top-20 left-0 w-full bg-azul z-40 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <div className="flex flex-col px-6 py-4 space-y-4">
                <MobileMenu
                  onClickItem={() => setIsOpen(false)}
                  user={user}
                  onLogout={handleLogout}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <DesktopMenu user={user} onLogout={handleLogout} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
