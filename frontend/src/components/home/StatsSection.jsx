
import { Card, CardContent } from "@/components/ui/card";
import { Bell, CheckCircle, Clock, MapPin } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-cinza/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-azul">Nossa Atuação em Números</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="bg-verde/20 p-3 rounded-full mb-4">
                <Bell className="h-8 w-8 text-verde-escuro" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-azul">1.240</h3>
              <p className="text-muted-foreground text-center">Denúncias Registradas</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="bg-verde/20 p-3 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-verde-escuro" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-azul">876</h3>
              <p className="text-muted-foreground text-center">Problemas Resolvidos</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="bg-verde/20 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-verde-escuro" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-azul">5</h3>
              <p className="text-muted-foreground text-center">Dias em Média para Solução</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="bg-verde/20 p-3 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-verde-escuro" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-azul">32</h3>
              <p className="text-muted-foreground text-center">Bairros Atendidos</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
