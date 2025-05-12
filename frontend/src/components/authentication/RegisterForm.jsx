import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import useAuthentication from "@/hooks/UseAuthentication";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const { registerWithEmail, error: authError } = useAuthentication();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRegisterError(null);

    const email = e.target["register-email"].value;
    const password = e.target["register-password"].value;
    const confirm = e.target["confirm-password"].value;

    if (password !== confirm) {
      setIsLoading(false);
      setRegisterError("As senhas não coincidem.");
      return;
    }

    const result = await registerWithEmail(email, password);
    setIsLoading(false);

    if (result.success) {
      toast({ title: "Cadastro realizado com sucesso." });
      navigate("/");
    } else {
      setRegisterError(authError);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 mb-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" name="name" placeholder="Seu nome completo" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="register-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="register-email"
            name="register-email"
            type="email"
            placeholder="lyoto@email.com"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="register-password">Senha</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="register-password"
            name="register-password"
            type="password"
            className="pl-10"
            required
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirme a senha</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            className="pl-10"
            required
            placeholder="••••••••"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms" className="text-sm">
          Concordo com os{" "}
          <Link to="/termos" className="text-verde hover:underline">
            termos de uso
          </Link>{" "}
          e{" "}
          <Link to="/privacidade" className="text-verde hover:underline">
            política de privacidade
          </Link>
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-verde hover:bg-verde-escuro"
        disabled={isLoading}
      >
        {isLoading ? "Cadastrando..." : "Cadastrar"}
      </Button>

      {registerError && (
        <p className="text-sm text-red-500 mt-2 text-center">{registerError}</p>
      )}
    </form>
  );
};

export default RegisterForm;
