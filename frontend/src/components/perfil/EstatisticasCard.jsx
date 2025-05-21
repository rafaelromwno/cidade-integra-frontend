import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const EstatisticasCard = ({ pontuacao, totalDenuncias, porcentagemResolvidas }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Star className="h-5 w-5 text-amber-500" />
          Estatísticas
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">Pontuação</span>
              <span className="font-medium flex items-center gap-1">
                {pontuacao} <Star className="h-4 w-4 text-amber-500" />
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-verde h-2.5 rounded-full" style={{ width: `${Math.min(pontuacao/2, 100)}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">Denúncias feitas</span>
              <span className="font-medium">{totalDenuncias}</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-muted-foreground">Resolvidas</span>
              <span className="font-medium">{porcentagemResolvidas}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${porcentagemResolvidas}%` }}></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default EstatisticasCard
