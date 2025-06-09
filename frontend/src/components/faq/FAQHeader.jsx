import React from "react";
import { BookOpen } from "lucide-react";

const FAQHeader = () => {
  return (
    <div className="bg-azul text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="h-7 w-7" />
          Perguntas Frequentes
        </h1>
        <p className="text-lg text-cinza">
          Encontre respostas para as dúvidas mais comuns sobre a plataforma.
        </p>
      </div>
    </div>
  );
};

export default FAQHeader;
