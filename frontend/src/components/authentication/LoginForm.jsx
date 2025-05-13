import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import useAuthentication from "@/hooks/UseAuthentication";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginForm = ({ resetTrigger }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [googleError, setGoogleError] = useState(null);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const { loginWithEmail, error: authError } = useAuthentication();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setLoginError(null);
    setGoogleError(null);
  }, [resetTrigger]);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      const emailInput = document.getElementById("email");
      if (emailInput) emailInput.value = savedEmail;
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(null);
    setIsEmailLoading(true);
  
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
  
    // Verificar se os campos estão vazios
    if (!email || !password) {
      setLoginError("Por favor, preencha todos os campos.");
      toast({
        title: "⚠️ Campos obrigatórios",
        description: "E-mail e senha são obrigatórios.",
        variant: "destructive",
      });
      setIsEmailLoading(false);
      return;
    }
  
    rememberMe
      ? localStorage.setItem("rememberedEmail", email)
      : localStorage.removeItem("rememberedEmail");
  
    try {
      const result = await loginWithEmail(email, password);
  
      if (result.success) {
        toast({
          title: "✅ Login realizado com sucesso!",
          description: "Bem-vindo de volta!",
        });
        navigate("/");
      } else {
        const message = result.error || "Não foi possível fazer login.";
        setLoginError(message);
        toast({
          title: "❌ Falha no login",
          description: `${message} Verifique suas credenciais.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      setLoginError("Erro inesperado ao fazer login.");
      toast({
        title: "🚨 Erro inesperado",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsEmailLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="lyoto@email.com"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="pl-10"
            required
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(!!checked)}
            />
            <Label htmlFor="remember" className="text-sm">
              Lembrar de mim
            </Label>
          </div>
          <Link
            to="/recuperar-senha"
            className="text-sm text-verde hover:underline"
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-verde hover:bg-verde-escuro"
        disabled={isEmailLoading}
      >
        {isEmailLoading ? "Entrando..." : "Entrar"}
      </Button>

      <GoogleLoginButton setGoogleError={setGoogleError} />

      {(loginError || googleError) && (
        <p className="text-sm text-red-500 mt-2 text-center">
          {loginError || googleError}
        </p>
      )}
    </form>
  );
};

export default LoginForm;