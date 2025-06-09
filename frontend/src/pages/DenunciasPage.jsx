import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DenunciasList from "@/components/denuncias/DenunciasList";
import { useReport } from "@/hooks/useReport";

const DenunciasPage = () => {
  const { getInitialReports, loading, error } = useReport();
  const [denuncias, setDenuncias] = useState([]);
  
  useEffect(() => {
    async function fetchReports() {
      try {
        const { reports } = await getInitialReports(6); // definir o limite de denúncias iniciais a buscar
        setDenuncias(reports);
      } catch (err) {
        console.error("Erro ao buscar denúncias:", err);
      }
    }

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-azul text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Denúncias</h1>
            <p className="text-lg text-cinza">
              Confira as denúncias registradas e acompanhe seu status.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-verde"></div>
            </div>
          ) : (
            <DenunciasList denuncias={denuncias} />
          )}
          {error && (
            <p className="text-red-600 mt-4">
              Ocorreu um erro ao carregar as denúncias.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DenunciasPage;
