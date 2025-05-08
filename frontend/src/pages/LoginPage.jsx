import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { MapPin, Mail, Lock, UserPlus, LogIn, Chrome } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useAuthentication from "@/hooks/UseAuthentication";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false); 
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    loginWithEmail,
    loginWithGoogle,
    registerWithEmail,
    loading,
    error: authError,
  } = useAuthentication();

  useEffect(() => {
    // verifica se há um email salvo no localStorage
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      document.getElementById("email").value = savedEmail;
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email); // salva o email no localStorage
    } else {
      localStorage.removeItem("rememberedEmail"); // remove o email do localStorage
    }

    const result = await loginWithEmail(email, password);
    setIsLoading(false);

    if (result.success) {
      toast({ title: "Login realizado com sucesso." });
      navigate("/");
    } else {
      setError(authError);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const email = e.target["register-email"].value;
    const password = e.target["register-password"].value;
    const confirm = e.target["confirm-password"].value;

    if (password !== confirm) {
      setIsLoading(false);
      setError("As senhas não coincidem.");
      return;
    }

    const result = await registerWithEmail(email, password);
    setIsLoading(false);

    if (result.success) {
      toast({ title: "Cadastro realizado com sucesso." });
      navigate("/");
    } else {
      setError(authError);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    const result = await loginWithGoogle();
    setIsLoading(false);

    if (result.success) {
      toast({ title: "Login com Google realizado com sucesso." });
      navigate("/");
    } else {
      setError(result.error || "Erro ao fazer login com o Google.");
    }
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
            <h1 className="text-2xl font-bold text-azul">Acesse o Cidade Unida</h1>
            <p className="text-gray-500 mt-2">Ajude a melhorar sua cidade reportando problemas urbanos!</p>
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
                      <Input id="email" name="email" type="email" placeholder="lyoto.machida@email.com" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="password" name="password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>

                    <div className="flex items-center justify-between mt-2">

                      <div className="mr-2 flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={rememberMe}
                          onCheckedChange={(checked) => setRememberMe(checked)} // Corrigido para usar onCheckedChange
                        />
                        <Label htmlFor="remember" className="text-sm">
                          Lembrar de mim
                        </Label>
                      </div>

                      <Link to="/recuperar-senha" className="text-sm text-right text-verde hover:underline">
                        Esqueceu a senha?
                      </Link>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-verde hover:bg-verde-escuro" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>

                  <div className="flex items-center justify-center mt-4">
                    <Button
                      type="button"
                      className="flex items-center gap-2 w-full bg-transparent shadow-md text-azul border-2 duration-500 border-verde hover:bg-verde hover:text-white"
                      onClick={handleGoogleLogin}
                      disabled={isLoading}
                    >
                      <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google Logo"
                        className="w-5 h-5"
                      />
                      {isLoading ? "Entrando com Google..." : "Entrar com Google"}
                    </Button>
                  </div>

                  {error && <p className="text-sm text-red-500 mt-2 text-center">{error}</p>}
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" name="name" placeholder="Seu nome completo" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="register-email" name="register-email" type="email" placeholder="lyoto.machida@email.com" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="register-password" name="register-password" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirme a senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="confirm-password" name="confirm-password" type="password" placeholder="••••••••" className="pl-10" required />
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

                  {error && <p className="text-sm text-red-500 mt-2 text-center">{error}</p>}
                </form>
              </TabsContent>
            </Tabs>
          </div>

          {!user && (
            <div className="bg-red-100 border border-red-400 text-red-600 px-4 py-3 rounded relative m-4" role="alert">
              <strong className="font-medium">Atenção: </strong>
              <span className="block sm:inline">Você precisa estar logado para realizar uma denúncia.</span>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;