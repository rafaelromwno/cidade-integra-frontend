import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import UsersAdminHeader from "@/components/admin/usuarios/UsersAdminHeader";
import UsersSearch from "@/components/admin/usuarios/UsersSearch";
import UsersStats from "@/components/admin/usuarios/UsersStats";
import UsersTable from "@/components/admin/usuarios/UsersTable";
import { mockUsers } from "@/data/mockUsers";

const UsersAdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todos");
  const { toast } = useToast();
  
  const atualizarStatus = (id, novoStatus) => {
    toast({
      title: "Status atualizado",
      description: `Usuário #${id} teve seu status alterado para ${novoStatus}.`,
      variant: "default",
    });
  };

  const atualizarFuncao = (id, novaFuncao) => {
    toast({
      title: "Função atualizada",
      description: `Usuário #${id} teve sua função alterada para ${novaFuncao}.`,
      variant: "default",
    });
  };

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch = 
      user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = filter === "todos" || user.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <UsersAdminHeader />
        
        <div className="container mx-auto px-4 py-8">

          {/* dashboard */}
          <UsersStats users={mockUsers} />

          {/* busca e filtros */}
          <UsersSearch 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filter={filter}
            setFilter={setFilter}
          />

          {/* tabela de usuários */}
          <UsersTable 
            users={filteredUsers}
            atualizarStatus={atualizarStatus}
            atualizarFuncao={atualizarFuncao}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersAdminPage;
