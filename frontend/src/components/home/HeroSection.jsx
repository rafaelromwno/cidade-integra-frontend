import HeroFoto from '/hero-foto.avif'
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-azul to-azul/90 text-white py-16 md:py-24">

      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center">

          <div className="md:w-1/2 mb-10 md:mb-0 mr-12">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ajude a <span className='text-verde'>melhorar</span> sua cidade!
            </h1>

            <p className="text-lg md:text-xl mb-8 text-cinza">
              Reporte problemas urbanos como buracos nas ruas, iluminação, lixo e mais.
              Sua participação é essencial para uma cidade melhor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Button asChild size="lg" className="font-medium text-azul bg-verde hover:bg-verde-escuro duration-500">

                <Link to="/nova-denuncia" className="flex items-center gap-2">

                  <MapPin className="h-5 w-5" />
                  <span>Reportar Problema</span>

                </Link>

              </Button>

              <Button asChild size="lg" variant="outline" className="border-verde bg-transparent  font-medium text-verde hover:bg-verde hover:text-azul duration-500 ">

                <Link to="/denuncias" className="flex items-center gap-2">

                  <span>Ver Denúncias</span>
                  <ArrowRight className="h-5 w-5" />

                </Link>

              </Button>

            </div>

          </div>

          <div className="md:w-1/2 flex justify-center">

            <picture>
              <source
                srcSet="/hero-foto-800.avif"
                type="image/avif"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/hero-foto-800.webp"
                type="image/webp"
                media="(min-width: 768px)"
              />
              <source
                srcSet="/hero-foto-400.avif"
                type="image/avif"
                media="(max-width: 767px)"
              />
              <source
                srcSet="/hero-foto-400.webp"
                type="image/webp"
                media="(max-width: 767px)"
              />
              <img
                src="/hero-foto-800.webp"
                alt="Imagem de uma moça flexionando os joelhos e registrando a foto de um buraco para denúncia"
                className="w-full max-w-md h-auto rounded-lg object-contain md:max-h-[400px]"
                fetchpriority="high"
                decoding="async"
              />
            </picture>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
