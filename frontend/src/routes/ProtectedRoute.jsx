import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

export default function ProtectedRoute({ children }) {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    
    // exibe um carregamento enquanto verifica o estado de autenticação
    return <div>Carregando...</div>;

  }

  if (!user) {

    // redireciona para a página de login se o usuário não estiver autenticado
    return <Navigate to="/login" />;

  }

  // renderiza o componente filho se o usuário estiver autenticado
  return children;
}