
import { useState } from "react";
import { mockDenuncias } from "@/data/mock-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DenunciaCard from "@/components/denuncias/DenunciaCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, User, BarChart, FileText } from "lucide-react";

const PerfilUsuarioPage = () => {
  const [activeTab, setActiveTab] = useState("denuncias");
  const usuarioNome = "Maria Silva";
  const usuarioEmail = "maria.silva@exemplo.com";
  const pontuacao = 125;
  const nivel = "Vigilante Urbano";
  
  // Filtra as denúncias do usuário atual (mock)
  const minhasDenuncias = mockDenuncias.filter(d => d.usuario === "Maria S.");

  const calcularPorcentagemResolvidas = () => {
    const resolvidas = minhasDenuncias.filter(d => d.status === "resolvido").length;
    return minhasDenuncias.length > 0 ? Math.round((resolvidas / minhasDenuncias.length) * 100) : 0;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-azul text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Meu Perfil</h1>
            <p className="text-lg text-cinza">
              Gerencie suas informações e acompanhe suas denúncias.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna de informações do usuário */}
            <div className="md:col-span-1">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="https://github.com/shadcn.png" alt={usuarioNome} />
                      <AvatarFallback>
                        <User className="h-12 w-12 text-muted-foreground" />
                      </AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-semibold">{usuarioNome}</h2>
                    <p className="text-muted-foreground mb-2">{usuarioEmail}</p>
                    <div className="flex items-center gap-2 bg-verde/10 text-verde px-3 py-1 rounded-full text-sm mt-2">
                      <Award className="h-4 w-4" />
                      <span>{nivel}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-muted-foreground" />
                    Estatísticas
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">Pontuação</span>
                        <span className="font-medium flex items-center gap-1">
                          {pontuacao} <Star className="h-4 w-4 text-amber-500" />
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-verde h-2.5 rounded-full" style={{ width: `${Math.min(pontuacao/2, 100)}%` }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">Denúncias feitas</span>
                        <span className="font-medium">{minhasDenuncias.length}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-muted-foreground">Resolvidas</span>
                        <span className="font-medium">{calcularPorcentagemResolvidas()}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${calcularPorcentagemResolvidas()}%` }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coluna de conteúdo principal */}
            <div className="md:col-span-2">
              <Tabs defaultValue="denuncias" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="denuncias" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Minhas Denúncias
                  </TabsTrigger>
                  <TabsTrigger value="atividade" className="flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    Atividade
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="denuncias" className="pt-6">
                  {minhasDenuncias.length === 0 ? (
                    <div className="text-center py-10 text-muted-foreground">
                      <p>Você ainda não fez nenhuma denúncia.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {minhasDenuncias.map((denuncia) => (
                        <DenunciaCard key={denuncia.id} denuncia={denuncia} />
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="atividade" className="pt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Histórico de Atividades</h3>
                      <div className="space-y-4">
                        {minhasDenuncias.map((denuncia) => (
                          <div key={denuncia.id} className="border-b pb-3">
                            <p className="font-medium">{denuncia.titulo}</p>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-sm text-muted-foreground">
                                {new Date(denuncia.data).toLocaleDateString('pt-BR')}
                              </span>
                              <span className="text-sm">
                                Status: {denuncia.status === "resolvido" ? 
                                  <span className="text-verde">Resolvido</span> : 
                                  <span className="text-amber-500">Em andamento</span>}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PerfilUsuarioPage;
