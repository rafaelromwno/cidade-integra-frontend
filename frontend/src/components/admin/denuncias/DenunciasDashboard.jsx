import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, AlertCircle, CheckCircle } from "lucide-react"

const DenunciasDashboard = ({ denuncias }) => {
    
  const estatisticas = {
    total: denuncias.length,
    pendentes: denuncias.filter(d => d.status === "pending").length,
    emAnalise: denuncias.filter(d => d.status === "review").length,
    resolvidas: denuncias.filter(d => d.status === "resolved").length,
    rejeitadas: denuncias.filter(d => d.status === "rejected").length,
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total de Denúncias</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{estatisticas.total}</div>
        </CardContent>
      </Card>
      <Card className="bg-yellow-500/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Pendentes</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <div className="text-2xl font-bold">{estatisticas.pendentes}</div>
          <Clock className="h-5 w-5 text-yellow-500" />
        </CardContent>
      </Card>
      <Card className="bg-blue-500/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Em Análise</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <div className="text-2xl font-bold">{estatisticas.emAnalise}</div>
          <AlertCircle className="h-5 w-5 text-blue-500" />
        </CardContent>
      </Card>
      <Card className="bg-verde/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Resolvidas</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <div className="text-2xl font-bold">{estatisticas.resolvidas}</div>
          <CheckCircle className="h-5 w-5 text-verde" />
        </CardContent>
      </Card>
    </div>
  )
}

export default DenunciasDashboard