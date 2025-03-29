import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-700 mt-2">Página não encontrada :(</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-verde-paleta text-white rounded-md hover:bg-verde-escuro-paleta transition">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;