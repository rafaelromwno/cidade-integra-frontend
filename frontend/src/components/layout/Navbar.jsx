
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Bell, Plus, Home, User, LogIn, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-azul text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-verde" />
            <span className="font-bold text-xl">Urban Watch Verde</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-verde transition-colors flex items-center gap-1">
              <Home size={18} />
              <span>Início</span>
            </Link>
            <Link to="/login" className="hover:text-verde transition-colors flex items-center gap-1">
              <LogIn size={18} />
              <span>Entrar</span>
            </Link>
            <Link to="/denuncias" className="hover:text-verde transition-colors flex items-center gap-1">
              <Bell size={18} />
              <span>Denúncias</span>
            </Link>
            <Link to="/sobre" className="hover:text-verde transition-colors flex items-center gap-1">
              <User size={18} />
              <span>Sobre</span>
            </Link>
            <Link to="/perfil" className="hover:text-verde transition-colors flex items-center gap-1">
              <User size={18} />
              <span>Perfil</span>
            </Link>
            <Link to="/admin" className="hover:text-verde transition-colors flex items-center gap-1">
              <Shield size={18} />
              <span>Admin</span>
            </Link>
            <Button asChild className="bg-verde hover:bg-verde-escuro text-white rounded-full">
              <Link to="/nova-denuncia" className="flex items-center gap-1">
                <Plus className="h-4 w-4" />
                <span>Nova Denúncia</span>
              </Link>
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <Link to="/" 
              className="hover:text-verde transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} />
              <span>Início</span>
            </Link>
            <Link to="/login" 
              className="hover:text-verde transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <LogIn size={18} />
              <span>Entrar</span>
            </Link>
            <Link to="/denuncias" 
              className="hover:text-verde transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Bell size={18} />
              <span>Denúncias</span>
            </Link>
            <Link to="/sobre" 
              className="hover:text-verde transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <User size={18} />
              <span>Sobre</span>
            </Link>
            <Link to="/perfil" 
              className="hover:text-verde transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <User size={18} />
              <span>Perfil</span>
            </Link>
            <Link to="/admin" 
              className="hover:text-verde transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Shield size={18} />
              <span>Admin</span>
            </Link>
            <Button asChild className="bg-verde hover:bg-verde-escuro text-white w-full">
              <Link to="/nova-denuncia" className="flex items-center justify-center gap-1" onClick={() => setIsOpen(false)}>
                <Plus className="h-4 w-4" />
                <span>Nova Denúncia</span>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
