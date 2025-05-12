import React from "react";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DenunciaCard from "@/components/denuncias/DenunciaCard";

const MinhasDenuncias = ({ denuncias }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5" />
        Minhas Denúncias
      </h2>
      
      {denuncias.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-10 text-muted-foreground">
              <p>Você ainda não fez nenhuma denúncia.</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {denuncias.map((denuncia) => (
            <DenunciaCard key={denuncia.id} denuncia={denuncia} />
          ))}
        </div>
      )}
    </>
  );
};

export default MinhasDenuncias;
