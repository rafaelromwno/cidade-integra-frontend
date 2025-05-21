import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, User } from "lucide-react"
import { Link } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useFetchUser } from "@/hooks/useFetchUser"

const DenunciaCard = ({ denuncia }) => {

  // pegando o usuário da denúncia
  const { user } = useFetchUser(denuncia.userId)

  // converte o timestamp do Firebase para Date ou Date padrão
  const parseDate = (data) => {
    if (!data) return null
    if (typeof data.toDate === "function") return data.toDate()
    const parsed = new Date(data)
    return isNaN(parsed) ? null : parsed
  }

  const date = parseDate(denuncia.createdAt)

  const relativeTime = date
    ? formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
    : "Data inválida"

  // pegando a imagem principal (se houver)
  const mainImage = denuncia.imageUrls && denuncia.imageUrls.length > 0 ? denuncia.imageUrls[0] : null

  // status em inglês — faça o mapeamento correto para pt e cores
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500"
      case "in_review":
        return "bg-blue-500"
      case "resolved":
        return "bg-green-500"
      case "rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Pendente"
      case "in_review":
        return "Em Análise"
      case "resolved":
        return "Resolvido"
      case "rejected":
        return "Rejeitado"
      default:
        return "Desconhecido"
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/denuncias/${denuncia.uid}`}>
        {mainImage && (
          <div className="h-48 overflow-hidden">
            <img
              src={mainImage}
              alt={denuncia.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg line-clamp-1">{denuncia.title}</h3>
            <Badge className={`${getStatusColor(denuncia.status)} text-white`}>
              {getStatusText(denuncia.status)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {denuncia.description}
          </p>
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{denuncia.location?.address}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{relativeTime}</span>
          </div>
        </CardContent>
        <CardFooter className="pt-1 text-sm text-muted-foreground border-t">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{denuncia.isAnonymous ? "Anônimo" : user?.displayName || "Não encontrado"}</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default DenunciaCard