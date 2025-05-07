
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-azul text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-verde" />
              <span className="font-bold text-xl">Urban Watch Verde</span>
            </div>
            <p className="text-cinza mb-4">
              Uma plataforma para cidadãos reportarem problemas urbanos e 
              contribuírem para uma cidade melhor.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-verde">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-cinza hover:text-verde transition-colors">Início</Link></li>
              <li><Link to="/mapa" className="text-cinza hover:text-verde transition-colors">Mapa</Link></li>
              <li><Link to="/denuncias" className="text-cinza hover:text-verde transition-colors">Denúncias</Link></li>
              <li><Link to="/nova-denuncia" className="text-cinza hover:text-verde transition-colors">Reportar Problema</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-verde">Contato</h3>
            <p className="text-cinza">
              Para suporte ou informações adicionais:
              <br />
              suporte@urbanwatchverde.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-cinza/30 mt-8 pt-6 text-center text-cinza">
          <p>&copy; {currentYear} Urban Watch Verde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
