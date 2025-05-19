
import { useState } from "react";
import DenunciaCard from "./DenunciaCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6;

const DenunciasList = ({ denuncias }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todas");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDenuncias = denuncias.filter((denuncia) => {
    const matchesSearch = 
      denuncia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.local.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = filter === "todas" || denuncia.status === filter;

    return matchesSearch && matchesFilter;
  });

   // Calculate pagination
  const totalItems = filteredDenuncias.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDenuncias = filteredDenuncias.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if we have less than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);
      
      // Add pages around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're near the beginning
      if (currentPage <= 2) {
        endPage = Math.min(totalPages - 1, 3);
      }
      
      // Adjust if we're near the end
      if (currentPage >= totalPages - 1) {
        startPage = Math.max(2, totalPages - 2);
      }
      
      // Add ellipsis if needed
      if (startPage > 2) {
        pages.push('...');
      }
      
      // Add the middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      
      // Always include last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  // Handle page change
  const handlePageChange = (page) => {
    // Ensure we're within valid page range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of the list
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedDenuncias.map((denuncia) => (
              <DenunciaCard key={denuncia.id} denuncia={denuncia} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {getPageNumbers().map((page, index) => (
                  <PaginationItem key={index}>
                    {page === '...' ? (
                      <span className="flex h-9 w-9 items-center justify-center">...</span>
                    ) : (
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  );
};

export default DenunciasList;
