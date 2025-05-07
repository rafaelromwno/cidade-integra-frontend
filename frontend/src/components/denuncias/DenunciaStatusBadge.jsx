
import { Badge } from "@/components/ui/badge";



const DenunciaStatusBadge = ({ status, className = "" }) => {
  const statusConfig = {
    pendente: {
      color: "bg-yellow-500",
      text: "Pendente"
    },
    em_analise: {
      color: "bg-blue-500",
      text: "Em Análise"
    },
    resolvido: {
      color: "bg-verde",
      text: "Resolvido"
    },
    rejeitado: {
      color: "bg-vermelho",
      text: "Rejeitado"
    }
  };

  const config = statusConfig[status];

  return (
    <Badge className={`${config.color} text-white ${className}`}>
      {config.text}
    </Badge>
  );
};

export default DenunciaStatusBadge;
