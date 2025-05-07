
import { useState, useEffect } from "react";
import { mockDenuncias } from "@/data/mock-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DenunciasList from "@/components/denuncias/DenunciasList";

const DenunciasPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de dados
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
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
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-verde"></div>
            </div>
          ) : (
            <DenunciasList denuncias={mockDenuncias} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DenunciasPage;
