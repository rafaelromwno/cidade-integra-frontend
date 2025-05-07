
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { MapPin, Mail, Lock, UserPlus, LogIn } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simula login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login realizado",
        description: "Você foi autenticado com sucesso!",
      });
    }, 1500);
  };
  
  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simula registro
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Cadastro realizado",
        description: "Sua conta foi criada com sucesso!",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-verde rounded-full mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-azul">Acesse o Urban Watch Verde</h1>
            <p className="text-gray-500 mt-2">Ajude a melhorar sua cidade reportando problemas urbanos</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  <span>Entrar</span>
                </TabsTrigger>
                <TabsTrigger value="register" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Cadastrar</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="email" type="email" placeholder="seu@email.com" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <Link to="/recuperar-senha" className="text-sm text-verde hover:underline">
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">Lembrar de mim</Label>
                  </div>
                  <Button type="submit" className="w-full bg-verde hover:bg-verde-escuro" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="register-email" type="email" placeholder="seu@email.com" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="register-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirme a senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="confirm-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      Concordo com os <Link to="/termos" className="text-verde hover:underline">termos de uso</Link> e <Link to="/privacidade" className="text-verde hover:underline">política de privacidade</Link>
                    </Label>
                  </div>
                  <Button type="submit" className="w-full bg-verde hover:bg-verde-escuro" disabled={isLoading}>
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center mt-6 text-sm text-gray-500">
            <p>© 2023 Urban Watch Verde. Todos os direitos reservados.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
