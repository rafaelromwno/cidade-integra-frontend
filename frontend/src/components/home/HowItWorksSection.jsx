
import { Badge } from "@/components/ui/badge";

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">

      <div className="container mx-auto px-4">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-azul mb-4">Como Funciona?</h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reportar <span className="text-verde font-bold">problemas urbanos</span> nunca foi tão fácil. Com apenas alguns passos,
            você pode contribuir para melhorar sua cidade!
          </p>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex flex-col items-center text-center">

            <Badge className="bg-verde text-white mb-4 text-lg h-10 w-10 rounded-full flex items-center justify-center">1</Badge>

            <h3 className="text-xl font-semibold mb-3">Registre o Problema</h3>

            <p className="text-muted-foreground">
              Utilize nosso aplicativo para registrar o problema. Adicione fotos, descrição
              e localização precisa.
            </p>

          </div>
          
          <div className="flex flex-col items-center text-center">

            <Badge className="bg-verde text-white mb-4 text-lg h-10 w-10 rounded-full flex items-center justify-center">2</Badge>

            <h3 className="text-xl font-semibold mb-3">Acompanhe o Status</h3>

            <p className="text-muted-foreground">
              Nossa equipe analisa e encaminha a denúncia para o órgão responsável.
              Você pode acompanhar todo o processo.
            </p>

          </div>
          
          <div className="flex flex-col m-6 items-center text-center">

            <Badge className="bg-verde text-white mb-4 text-lg h-10 w-10 rounded-full flex items-center justify-center">3</Badge>

            <h3 className="text-xl font-semibold mb-3">Problema Resolvido</h3>

            <p className="text-muted-foreground">
              Após resolvido, você receberá uma notificação. Você também pode 
              confirmar se o problema foi corretamente solucionado.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
