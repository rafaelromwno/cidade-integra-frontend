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


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/denuncias" element={<DenunciasPage />} />
        <Route path="/denuncias/:id" element={<DenunciaDetalhes />} />
        <Route path="/nova-denuncia" element={<NovaDenunciaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/perfil" element={<PerfilUsuarioPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}