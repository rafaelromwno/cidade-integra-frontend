import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DenunciaFormHeader from "@/components/denunciaForm/DenunciaFormHeader";
import DenunciaForm from "@/components/denunciaForm/DenunciaForm";

const NovaDenunciaPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DenunciaFormHeader />
        <DenunciaForm />
      </main>
      <Footer />
    </div>
  );
};

export default NovaDenunciaPage;