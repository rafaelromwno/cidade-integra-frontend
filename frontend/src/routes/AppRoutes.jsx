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

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* rotas publicas */}

        <Route path="/" element={<Index />} />
        <Route path="/denuncias" element={<DenunciasPage />} />
        <Route path="/denuncias/:id" element={<DenunciaDetalhes />} />
        <Route path="/recuperar-senha" element={<RecuperarSenhaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        
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
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}