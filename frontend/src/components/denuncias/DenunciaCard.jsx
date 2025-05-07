
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

const getStatusColor = (status) => {
  switch (status) {
    case "pendente":
      return "bg-yellow-500";
    case "em_analise":
      return "bg-blue-500";
    case "resolvido":
      return "bg-verde";
    case "rejeitado":
      return "bg-vermelho";
    default:
      return "bg-gray-500";
  }
};

const getStatusText = (status) => {
  switch (status) {
    case "pendente":
      return "Pendente";
    case "em_analise":
      return "Em Análise";
    case "resolvido":
      return "Resolvido";
    case "rejeitado":
      return "Rejeitado";
    default:
      return "Desconhecido";
  }
};

const DenunciaCard = ({ denuncia }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/denuncias/${denuncia.id}`}>
        {denuncia.imagem && (
          <div className="h-48 overflow-hidden">
            <img
              src={denuncia.imagem}
              alt={denuncia.titulo}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg line-clamp-1">{denuncia.titulo}</h3>
            <Badge className={`${getStatusColor(denuncia.status)} text-white`}>
              {getStatusText(denuncia.status)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {denuncia.descricao}
          </p>
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{denuncia.local}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {formatDistanceToNow(denuncia.data, { 
                addSuffix: true, 
                locale: ptBR 
              })}
            </span>
          </div>
        </CardContent>
        <CardFooter className="pt-1 text-sm text-muted-foreground border-t">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{denuncia.usuario}</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default DenunciaCard;
