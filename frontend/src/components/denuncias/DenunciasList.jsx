import { useEffect, useState } from "react";
import DenunciaCard from "./DenunciaCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from "@/components/ui/pagination";
import { useReport } from "@/hooks/useReport";

const ITEMS_PER_PAGE = 6;
const SEARCH_ITEMS_LIMIT = 7

const DenunciasList = () => {
  const { getInitialReports, getMoreReports, loading } = useReport();

  const [denuncias, setDenuncias] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [pageHistory, setPageHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todas");

  // Carregar as denúncias iniciais
  useEffect(() => {
    const fetchData = async () => {
      const {verify, reports, lastVisible } = await getInitialReports(SEARCH_ITEMS_LIMIT, ITEMS_PER_PAGE);
      setDenuncias(reports);
      setLastVisible(lastVisible);
      setPageHistory([]);
      setCurrentPage(1); // reinicia página
      setHasMore(verify.length > ITEMS_PER_PAGE);
    };

    fetchData();
  }, []);

  // Carregar mais denúncias
  const handleLoadMore = async () => {
    if (!lastVisible || !hasMore) return;

    const {verify: moreVerify, reports: more, lastVisible: newLast } = await getMoreReports(
      lastVisible,
      SEARCH_ITEMS_LIMIT,
      ITEMS_PER_PAGE
    );

    setPageHistory((prev) => [...prev, {      
      lastVisible: lastVisible
    }]);
    setDenuncias(more);
    setLastVisible(newLast);
    setCurrentPage((prev) => prev + 1); // avança página
    setHasMore(moreVerify.length > ITEMS_PER_PAGE);
  };

  // Carregar a página anterior
  const handlePreviousPage = async () => {
    if (pageHistory.length === 0) return;
    
    const newHistory = [...pageHistory];
    const previousDoc = newHistory[newHistory.length - 2]?.lastVisible ?? null;

    const {reports: previousReports, lastVisible: newLast } = previousDoc
      ? await getMoreReports(previousDoc, SEARCH_ITEMS_LIMIT, ITEMS_PER_PAGE)
      : await getInitialReports(SEARCH_ITEMS_LIMIT, ITEMS_PER_PAGE);

    setDenuncias(previousReports);
    setLastVisible(newLast);
    setPageHistory(newHistory.slice(0, -1));
    setCurrentPage((prev) => Math.max(prev - 1, 1)); // volta página
    setHasMore(true);
  };

  // Filtrando as denúncias
  const filteredDenuncias = denuncias.filter((denuncia) => {
    // Comparando título, descrição e local com o termo de pesquisa
    const matchesSearch =
      (denuncia.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (denuncia.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (denuncia.location?.address || "").toLowerCase().includes(searchTerm.toLowerCase());

    // Filtrando pelas categorias de status
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
            <SelectItem value="pending">Pendentes</SelectItem>
            <SelectItem value="review">Em Análise</SelectItem>
            <SelectItem value="resolved">Resolvidas</SelectItem>
            <SelectItem value="rejected">Rejeitadas</SelectItem>
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
            {filteredDenuncias.map((denuncia) => (
              <DenunciaCard key={denuncia.reportId} denuncia={denuncia} />
            ))}
          </div>

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={handlePreviousPage}
                  className={pageHistory.length === 0 || loading ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>

              {/* Exibe até 2 páginas anteriores */}
              {currentPage > 2 && (
                <PaginationItem>
                  <PaginationLink onClick={() => handlePreviousPage()}>
                    {currentPage - 2}
                  </PaginationLink>
                </PaginationItem>
              )}
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationLink onClick={() => handlePreviousPage()}>
                    {currentPage - 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Página atual */}
              <PaginationItem>
                <PaginationLink isActive>{currentPage}</PaginationLink>
              </PaginationItem>

              {/* Próximas páginas (opcional, depende de hasMore) */}
              {hasMore && (
                <PaginationItem>
                  <PaginationLink onClick={() => handleLoadMore()}>
                    {currentPage + 1}
                  </PaginationLink>
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={handleLoadMore}
                  className={!hasMore || loading ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
};

export default DenunciasList;
