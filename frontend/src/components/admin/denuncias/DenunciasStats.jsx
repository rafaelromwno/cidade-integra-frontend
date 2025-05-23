import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const DenunciasStats = ({ denuncias }) => {
    
  const estatisticas = {
    total: denuncias.length,
    pendentes: denuncias.filter(d => d.status === "pending").length,
    emAnalise: denuncias.filter(d => d.status === "review").length,
    resolvidas: denuncias.filter(d => d.status === "resolved").length,
    rejeitadas: denuncias.filter(d => d.status === "rejected").length,
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estatísticas de Denúncias</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Distribuição por Status</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Pendentes</span>
                  <span className="font-medium">{estatisticas.pendentes} ({Math.round((estatisticas.pendentes/estatisticas.total)*100)}%)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${(estatisticas.pendentes/estatisticas.total)*100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Em análise</span>
                  <span className="font-medium">{estatisticas.emAnalise} ({Math.round((estatisticas.emAnalise/estatisticas.total)*100)}%)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(estatisticas.emAnalise/estatisticas.total)*100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Resolvidas</span>
                  <span className="font-medium">{estatisticas.resolvidas} ({Math.round((estatisticas.resolvidas/estatisticas.total)*100)}%)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-verde h-2.5 rounded-full" style={{ width: `${(estatisticas.resolvidas/estatisticas.total)*100}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Rejeitadas</span>
                  <span className="font-medium">{estatisticas.rejeitadas} ({Math.round((estatisticas.rejeitadas/estatisticas.total)*100)}%)</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-vermelho h-2.5 rounded-full" style={{ width: `${(estatisticas.rejeitadas/estatisticas.total)*100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default DenunciasStats