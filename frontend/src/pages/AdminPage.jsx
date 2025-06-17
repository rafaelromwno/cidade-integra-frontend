import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminHeader from "@/components/admin/AdminHeader";
import DenunciasDashboard from "@/components/admin/denuncias/DenunciasDashboard";
import DenunciasSearch from "@/components/admin/denuncias/DenunciasSearch";
import DenunciasTable from "@/components/admin/denuncias/DenunciasTable";
import DenunciasStats from "@/components/admin/denuncias/DenunciasStats";
import { useReport } from "@/hooks/useReport";

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todas");
  const [denuncias, setDenuncias] = useState([]);
  const { getAllReports } = useReport();

  // Obtendo as denúncias no useEffect
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const reports = await getAllReports(); // Pega todas as denúncias
        setDenuncias(reports); // Atualiza o estado com as denúncias
      } catch (err) {
        console.error("Erro ao carregar as denúncias:", err);
      }
    };
    fetchReports(); // Chama a função para buscar as denúncias
  }, []);

  // Filtrando as denúncias
  const filteredDenuncias = denuncias.filter((denuncia) => {
    
    const matchesSearch =
      denuncia.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.location.address.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "todas" || denuncia.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AdminHeader />
        
        <div className="container mx-auto px-4 py-8">

          {/* dashboard */}
          <DenunciasDashboard denuncias={denuncias} />

          <Tabs defaultValue="lista" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger value="lista">Lista de Denúncias</TabsTrigger>
              <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lista">
              <DenunciasSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filter={filter}
                setFilter={setFilter}
                denuncias={filteredDenuncias}
              />
              <DenunciasTable denuncias={filteredDenuncias}  setDenuncias={setDenuncias}/>
            </TabsContent>
            
            <TabsContent value="estatisticas">
              <DenunciasStats denuncias={denuncias} />
            </TabsContent>
          </Tabs>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
