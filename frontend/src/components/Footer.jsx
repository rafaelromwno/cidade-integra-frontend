import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-azul-paleta text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Logo e Nome do Site */}
          <div className="text-center cursor-pointer md:text-left mb-4 md:mb-0">
            <img src="/src/assets/logotipo-sem-borda.svg" alt="Logotipo" className="w-44" />
          </div>

          {/* Links de Navegação */}
          <div className="flex justify-center mb-4 mt-2 md:mb-0">

            <Link to="/" className="mx-2 hover:text-verde-paleta hover:shadow duration-500">Home</Link>

            <Link to="/denuncie" className="mx-2 hover:text-verde-paleta hover:shadow duration-500">Denúncias</Link>

            <Link to="/duvidas" className="mx-2 hover:text-verde-paleta hover:shadow duration-500">Dúvidas</Link>

            <Link to="/duvidas#contato" className="mx-2 hover:text-verde-paleta hover:shadow duration-500">Contato</Link>

          </div>

           {/* Ícones Sociais */}
           <div className="flex justify-center">
            <a  target="_blank" href="https://github.com/cidade-unida/cidade-unida-frontend" className="mx-2">
                <img src="https://skillicons.dev/icons?i=github" width="40" height="40" alt="github logo"  />
            </a>
            <a target="_blank" href="https://discord.gg/xv8cuVYTKw" className="mx-2">
                <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="40" height="40" alt="linkedin logo"  />
            </a>
            <a href="#" className="mx-2">
                <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/discord/default.svg" width="40" height="40" alt="discord logo"  />
            </a>
          </div>

        </div>

        {/* Informações de Copyright */}
        <div className="text-center mt-8">
          <p>&copy; 2025 Cidade Unida. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
