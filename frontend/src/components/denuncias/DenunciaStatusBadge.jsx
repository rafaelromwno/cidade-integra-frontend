import { Badge } from "@/components/ui/badge";

const DenunciaStatusBadge = ({ status, className = "" }) => {
  const statusConfig = {
    pending: {
      color: "bg-yellow-500",
      text: "Pendente"
    },
    review: {
      color: "bg-blue-500",
      text: "Em Análise"
    },
    resolved: {
      color: "bg-verde",
      text: "Resolvido"
    },
    rejected: {
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
