
import { useState } from "react";
import { mockDenuncias } from "@/data/mock-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Eye, CheckCircle, XCircle, AlertCircle, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import DenunciaStatusBadge from "@/components/denuncias/DenunciaStatusBadge";

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("todas");
  const { toast } = useToast();
  
  const atualizarStatus = (id: number, novoStatus: "pendente" | "em_analise" | "resolvido" | "rejeitado") => {
    // Aqui seria a lógica real para atualizar o status no backend
    toast({
      title: "Status atualizado",
      description: `Denúncia #${id} marcada como ${novoStatus.replace("_", " ")}.`,
      variant: "default",
    });
  };

  const filteredDenuncias = mockDenuncias.filter((denuncia) => {
    const matchesSearch = 
      denuncia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.local.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesFilter = filter === "todas" || denuncia.status === filter;

    return matchesSearch && matchesFilter;
  });

  const estatisticas = {
    total: mockDenuncias.length,
    pendentes: mockDenuncias.filter(d => d.status === "pendente").length,
    emAnalise: mockDenuncias.filter(d => d.status === "em_analise").length,
    resolvidas: mockDenuncias.filter(d => d.status === "resolvido").length,
    rejeitadas: mockDenuncias.filter(d => d.status === "rejeitado").length,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-azul text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-verde" />
              <h1 className="text-3xl font-bold">Painel de Administração</h1>
            </div>
            <p className="text-lg text-cinza mt-2">
              Gerencie e modere as denúncias registradas na plataforma.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total de Denúncias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{estatisticas.total}</div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-500/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pendentes</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <div className="text-2xl font-bold">{estatisticas.pendentes}</div>
                <Clock className="h-5 w-5 text-yellow-500" />
              </CardContent>
            </Card>
            <Card className="bg-blue-500/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Em Análise</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <div className="text-2xl font-bold">{estatisticas.emAnalise}</div>
                <AlertCircle className="h-5 w-5 text-blue-500" />
              </CardContent>
            </Card>
            <Card className="bg-verde/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Resolvidas</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <div className="text-2xl font-bold">{estatisticas.resolvidas}</div>
                <CheckCircle className="h-5 w-5 text-verde" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="lista" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger value="lista">Lista de Denúncias</TabsTrigger>
              <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lista">
              <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar denúncias..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas</SelectItem>
                    <SelectItem value="pendente">Pendentes</SelectItem>
                    <SelectItem value="em_analise">Em Análise</SelectItem>
                    <SelectItem value="resolvido">Resolvidas</SelectItem>
                    <SelectItem value="rejeitado">Rejeitadas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Título</TableHead>
                      <TableHead>Local</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDenuncias.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                          Nenhuma denúncia encontrada.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredDenuncias.map((denuncia) => (
                        <TableRow key={denuncia.id}>
                          <TableCell className="font-medium">{denuncia.id}</TableCell>
                          <TableCell>{denuncia.titulo}</TableCell>
                          <TableCell>{denuncia.local}</TableCell>
                          <TableCell>{new Date(denuncia.data).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>
                            <DenunciaStatusBadge status={denuncia.status} />
                          </TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/denuncias/${denuncia.id}`}>
                                <Eye className="h-4 w-4 mr-1" />
                                Ver
                              </Link>
                            </Button>
                            
                            <Button 
                              variant="ghost"
                              size="sm"
                              className="text-verde hover:text-verde hover:bg-verde/10"
                              onClick={() => atualizarStatus(denuncia.id, "resolvido")}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Resolver
                            </Button>
                            
                            <Button 
                              variant="ghost"
                              size="sm"
                              className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                              onClick={() => atualizarStatus(denuncia.id, "rejeitado")}
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Rejeitar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="estatisticas">
              <Card>
                <CardHeader>
                  <CardTitle>Estatísticas de Denúncias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Distribuição por Status</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-muted-foreground">Pendentes</span>
                            <span className="font-medium">{estatisticas.pendentes} ({Math.round((estatisticas.pendentes/estatisticas.total)*100)}%)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${(estatisticas.pendentes/estatisticas.total)*100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-muted-foreground">Em análise</span>
                            <span className="font-medium">{estatisticas.emAnalise} ({Math.round((estatisticas.emAnalise/estatisticas.total)*100)}%)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(estatisticas.emAnalise/estatisticas.total)*100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-muted-foreground">Resolvidas</span>
                            <span className="font-medium">{estatisticas.resolvidas} ({Math.round((estatisticas.resolvidas/estatisticas.total)*100)}%)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-verde h-2.5 rounded-full" style={{ width: `${(estatisticas.resolvidas/estatisticas.total)*100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-muted-foreground">Rejeitadas</span>
                            <span className="font-medium">{estatisticas.rejeitadas} ({Math.round((estatisticas.rejeitadas/estatisticas.total)*100)}%)</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-vermelho h-2.5 rounded-full" style={{ width: `${(estatisticas.rejeitadas/estatisticas.total)*100}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
