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

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [googleError, setGoogleError] = useState(null);
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const { loginWithEmail, error: authError } = useAuthentication();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      document.getElementById("email").value = savedEmail;
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(null);
    setIsEmailLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    rememberMe
      ? localStorage.setItem("rememberedEmail", email)
      : localStorage.removeItem("rememberedEmail");

    const result = await loginWithEmail(email, password);
    setIsEmailLoading(false);

    if (result.success) {
      toast({ title: "Login realizado com sucesso." });
      navigate("/");
    } else {
      setLoginError(authError);
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
              onCheckedChange={(checked) => setRememberMe(checked)}
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

      {loginError && (
        <p className="text-sm text-red-500 mt-2 text-center">{loginError}</p>
      )}
      {googleError && (
        <p className="text-sm text-red-500 mt-2 text-center">{googleError}</p>
      )}
    </form>
  );
};

export default LoginForm;
