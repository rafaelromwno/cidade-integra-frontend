import React from "react";
import { User } from "lucide-react";

const ComentarioCard = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">Comentários</h2>
      <span className="text-muted-foreground text-sm">
        2 comentários
      </span>
    </div>

    <div className="space-y-4">
      <div className="border rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Ana Silva</span>
              <span className="text-xs text-muted-foreground">
                há 2 dias
              </span>
            </div>
            <p className="mt-1 text-muted-foreground">
              Esse problema já está causando transtornos há semanas.
              Espero que seja resolvido logo!
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="bg-verde-escuro h-10 w-10 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium">
                Prefeitura Municipal
              </span>
              <span className="text-xs text-muted-foreground">
                há 1 dia
              </span>
            </div>
            <p className="mt-1 text-muted-foreground">
              Agradecemos o reporte. Uma equipe técnica foi
              designada para avaliar o problema e tomar as
              providências necessárias.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ComentarioCard;