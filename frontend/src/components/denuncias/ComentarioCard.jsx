import React from "react";
import { User } from "lucide-react";

const ComentarioCard = ({ nome, tempo, texto, destaque }) => (
  <div className="border rounded-lg p-4">
    <div className="flex items-start gap-3">
      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${destaque ? "bg-verde-escuro text-white" : "bg-gray-200 text-gray-600"}`}>
        <User className="h-5 w-5" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{nome}</span>
          <span className="text-xs text-muted-foreground">{tempo}</span>
        </div>
        <p className="mt-1 text-muted-foreground">{texto}</p>
      </div>
    </div>
  </div>
);

export default ComentarioCard;