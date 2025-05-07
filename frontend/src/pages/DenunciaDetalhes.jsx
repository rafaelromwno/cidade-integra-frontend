import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { mockDenuncias } from "@/data/MockDenunciasComponent";
import DenunciaCard from "@/components/denuncias/DenunciaCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DenunciaStatusBadge from "@/components/denuncias/DenunciaStatusBadge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MapPin, Calendar, ArrowLeft, MessageSquare, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const DenunciaDetalhes = () => {
  const { id } = useParams();
  const [denuncia, setDenuncia] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento de dados
    const timer = setTimeout(() => {
      const found = mockDenuncias.find((d) => d.id === Number(id));
      setDenuncia(found || null);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-verde"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!denuncia) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-10">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Denúncia não encontrada</h2>
            <p className="text-muted-foreground mb-6">
              A denúncia que você está procurando não existe ou foi removida.
            </p>
            <Button asChild>
              <Link to="/denuncias" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar para Denúncias</span>
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-azul text-white py-8">
          <div className="container mx-auto px-4">
            <Link
              to="/denuncias"
              className="flex items-center text-cinza hover:text-white mb-4 w-fit"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span>Voltar para Denúncias</span>
            </Link>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h1 className="text-2xl md:text-3xl font-bold">
                {denuncia.titulo}
              </h1>
              <DenunciaStatusBadge
                status={denuncia.status}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {denuncia.imagem && (
                <div className="mb-6">
                  <img
                    src={denuncia.imagem}
                    alt={denuncia.titulo}
                    className="w-full h-auto rounded-lg shadow-sm"
                  />
                </div>
              )}

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Descrição</h2>
                <p className="text-muted-foreground">{denuncia.descricao}</p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Comentários</h2>
                  <span className="text-muted-foreground text-sm">
                    2 comentários
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Ana Silva</span>
                          <span className="text-xs text-muted-foreground">
                            há 2 dias
                          </span>
                        </div>
                        <p className="mt-1 text-muted-foreground">
                          Esse problema já está causando transtornos há semanas.
                          Espero que seja resolvido logo!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-verde-escuro h-10 w-10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">
                            Prefeitura Municipal
                          </span>
                          <span className="text-xs text-muted-foreground">
                            há 1 dia
                          </span>
                        </div>
                        <p className="mt-1 text-muted-foreground">
                          Agradecemos o reporte. Uma equipe técnica foi
                          designada para avaliar o problema e tomar as
                          providências necessárias.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Informações</h2>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Categoria</p>
                    <p className="font-medium">
                      {denuncia.categoria.charAt(0).toUpperCase() +
                        denuncia.categoria.slice(1)}
                    </p>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-verde-escuro shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Localização
                      </p>
                      <p className="font-medium">{denuncia.local}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-verde-escuro shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Data de Registro
                      </p>
                      <p className="font-medium">
                        {format(denuncia.data, "PPP", { locale: ptBR })}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-2">
                    <User className="h-5 w-5 text-verde-escuro shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Reportado por
                      </p>
                      <p className="font-medium">{denuncia.usuario}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Ações</h2>

                <div className="space-y-4">
                  <Button className="w-full bg-verde hover:bg-verde-escuro">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    <span>Adicionar Comentário</span>
                  </Button>

                  <Button variant="outline" className="w-full">
                    Compartilhar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DenunciaDetalhes;
