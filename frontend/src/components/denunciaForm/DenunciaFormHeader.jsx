import React from "react";

const DenunciaFormHeader = () => {
  return (
    <div className="bg-azul text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Nova Denúncia</h1>
        <p className="text-lg text-cinza">
          Preencha o formulário abaixo para registrar um problema na sua cidade.
        </p>
      </div>
    </div>
  );
};

export default DenunciaFormHeader;