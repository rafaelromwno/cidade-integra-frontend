
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-azul to-azul/90 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ajude a melhorar sua cidade
            </h1>
            <p className="text-lg md:text-xl mb-8 text-cinza">
              Reporte problemas urbanos como buracos nas ruas, iluminação, lixo e mais.
              Sua participação é essencial para uma cidade melhor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-verde hover:bg-verde-escuro">
                <Link to="/nova-denuncia" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Reportar Problema</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/denuncias" className="flex items-center gap-2">
                  <span>Ver Denúncias</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Urban Watch Verde" 
              className="max-w-full h-auto rounded-lg shadow-xl"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
