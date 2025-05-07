
import { useState } from "react";
import DenunciaCard from "./DenunciaCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const DenunciasList = ({ denuncias }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todas");

  const filteredDenuncias = denuncias.filter((denuncia) => {
    const matchesSearch = 
      denuncia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.local.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = filter === "todas" || denuncia.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar denúncias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas</SelectItem>
            <SelectItem value="pendente">Pendentes</SelectItem>
            <SelectItem value="em_analise">Em Análise</SelectItem>
            <SelectItem value="resolvido">Resolvidas</SelectItem>
            <SelectItem value="rejeitado">Rejeitadas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {filteredDenuncias.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          <p>Nenhuma denúncia encontrada.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDenuncias.map((denuncia) => (
            <DenunciaCard key={denuncia.id} denuncia={denuncia} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DenunciasList;
