import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const DenunciasSearch = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  return (
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
  )
}

export default DenunciasSearch