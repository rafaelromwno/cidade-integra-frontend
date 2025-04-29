import { BrowserRouter, Routes, Route } from "react-router-dom";
import CriarConta from "../pages/CriarConta";
import Denuncia from "../pages/Denuncia";
import Duvidas from "../pages/Duvidas";
import Entrar from "../pages/Entrar";
import Paginainicial from "../pages/PaginaInicial";
import NotFound from "../pages/NotFound";
import EsqueciSenha from "../pages/EsqueciSenha";
import Perfil from "../pages/Perfil";
import ProtectedRoute from "../routes/ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginainicial />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/denuncie" element={<Denuncia />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <Perfil />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}