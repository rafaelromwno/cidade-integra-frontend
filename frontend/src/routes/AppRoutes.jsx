import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import DenunciasPage from "../pages/DenunciasPage";
import DenunciaDetalhes from "../pages/DenunciaDetalhes";
import NovaDenunciaPage from "../pages/NovaDenunciaPage";
import LoginPage from "../pages/LoginPage";
import SobrePage from "../pages/SobrePage";
import PerfilUsuarioPage from "../pages/PerfilUsuarioPage";
import AdminPage from "../pages/AdminPage";
import NotFound from "../pages/NotFound";
import RecuperarSenhaPage from "@/pages/RecuperarSenhaPage";
import ProtectedRoute from "./ProtectedRoute";
import { Toaster } from "@/components/ui/toaster"
import { ToastProvider } from "@radix-ui/react-toast";
import FAQPage from "@/pages/FAQPage";
import AccessDeniedPage from "../pages/AccessDeniedPage"
import AdminRoute from "./AdminRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Toaster />
        <Routes>
  
          {/* rotas publicas */}
  
          <Route path="/" element={<Index />} />
          <Route path="/denuncias" element={<DenunciasPage />} />
          <Route path="/denuncias/:id" element={<DenunciaDetalhes />} />
          <Route path="/recuperar-senha" element={<RecuperarSenhaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/duvidas" element={<FAQPage />} />
          <Route path="/acesso-negado" element={<AccessDeniedPage />} />

          {/* rotas protegidas */}
  
          <Route
            path="/nova-denuncia"
            element={
              <ProtectedRoute>
                <NovaDenunciaPage />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <PerfilUsuarioPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            }
          />
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}