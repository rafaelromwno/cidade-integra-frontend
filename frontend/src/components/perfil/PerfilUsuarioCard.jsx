
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, User, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const PerfilUsuarioCard = ({ usuario, nivel, onEditClick }) => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={usuario.avatar} alt={usuario.nome} />
            <AvatarFallback>
              <User className="h-12 w-12 text-muted-foreground" />
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-semibold">{usuario.nome}</h2>
          <p className="text-muted-foreground mb-2">{usuario.email}</p>
          <p className="text-sm text-center text-muted-foreground mt-2 mb-4">
            {usuario.bio}
          </p>
          <div className="flex items-center gap-2 bg-verde/10 text-verde px-3 py-1 rounded-full text-sm mt-2">
            <Award className="h-4 w-4" />
            <span>{nivel}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onEditClick}
            className="mt-4 w-full"
          >
            <PenLine className="mr-2 h-4 w-4" />
            Editar Perfil
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerfilUsuarioCard;
