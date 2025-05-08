import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Bell, User, LogIn, Shield, LogOut, Plus } from 'lucide-react';

const MobileMenu = ({ user, onClickItem, onLogout }) => {
    return (
        <>

            <Link to="/" className="hover:text-verde transition-colors py-2 flex items-center gap-2" onClick={onClickItem}>
                <Home size={18} />
                <span>Início</span>
            </Link>

            <Link to="/denuncias" className="hover:text-verde transition-colors py-2 flex items-center gap-2" onClick={onClickItem}>
                <Bell size={18} />
                <span>Denúncias</span>
            </Link>

            <Link to="/sobre" className="hover:text-verde transition-colors py-2 flex items-center gap-2" onClick={onClickItem}>
                <User size={18} />
                <span>Sobre</span>
            </Link>

            {!user && (
                <Link to="/login" className="hover:text-verde transition-colors py-2 flex items-center gap-2" onClick={onClickItem}>
                    <LogIn size={18} />
                    <span>Entrar</span>
                </Link>
            )}

            {user && (
                <>
                    <Link to="/perfil" className="hover:text-verde transition-colors py-2 flex items-center gap-2" onClick={onClickItem}>
                        <User size={18} />
                        <span>Perfil</span>
                    </Link>

                    <Link to="/admin" className="hover:text-verde transition-colors py-2 flex items-center gap-2" onClick={onClickItem}>
                        <Shield size={18} />
                        <span>Admin</span>
                    </Link>

                </>
            )}

            <Button asChild className="bg-verde hover:bg-verde-escuro text-azul font-semibold duration-500 ">
                <Link to="/nova-denuncia" className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    <span>Nova Denúncia</span>
                </Link>
            </Button>

            {user && (
                <Button
                    onClick={onLogout}
                    className="hover:text-white text-white flex items-center gap-1"
                    variant="destructive"
                >
                    <LogOut size={18} />
                    <span>Sair</span>
                </Button>
            )}

        </>
    );
};

export default MobileMenu;
