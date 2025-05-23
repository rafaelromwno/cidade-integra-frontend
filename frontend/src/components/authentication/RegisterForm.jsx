import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import useAuthentication from "@/hooks/UseAuthentication";
import { z } from "zod";

const RegisterForm = ({ resetTrigger }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const { registerWithEmail } = useAuthentication();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setRegisterError(null);
  }, [resetTrigger]);

  const registerSchema = z.object({
    name: z
      .string()
      .min(1, "Por favor, preencha seu nome completo."),
    email: z
      .string()
      .email("Por favor, insira um e-mail válido."),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z
      .string()
      .min(6, "A senha de confirmação deve ter pelo menos 6 caracteres."),
  }).refine(data => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRegisterError(null);

    const name = e.target["name"].value.trim();
    const email = e.target["register-email"].value.trim();
    const password = e.target["register-password"].value;
    const confirmPassword = e.target["confirm-password"].value;

    // validando os dados com Zod
    try {
      const validatedData = registerSchema.parse({ name, email, password, confirmPassword });

      // Se a validação passar, continue com o processo de registro
      const result = await registerWithEmail(validatedData.email, validatedData.password, validatedData.name);

      if (result.success) {
        toast({
          title: "🎉 Cadastro realizado com sucesso!",
          description: "Bem-vindo! Você já pode começar a usar a plataforma.",
        });
        navigate("/");
      } else {
        const message = result.error || "Ocorreu um erro ao criar sua conta.";
        setRegisterError(message);
        toast({
          title: "❌ Falha no cadastro",
          description: `${message} Verifique os dados e tente novamente.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Se ocorrer um erro de validação, exiba a mensagem de erro para o usuário
        const errorMessage = error.errors[0].message;
        setRegisterError(errorMessage);
        toast({
          title: "❌ Falha no cadastro",
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        toast({
          title: "🚨 Erro inesperado",
          description: "Não foi possível concluir o cadastro. Tente novamente mais tarde.",
          variant: "destructive",
        });
        setRegisterError("Erro inesperado. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
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
          <a href="https://file.notion.so/f/f/fe1e184e-f7fc-4980-83e0-4ae30c90d16b/bf8b3195-396f-49d3-a042-08111ee46c8a/Termo_de_Uso_-_Cidade_Integra.pdf?table=block&id=1e499cfc-6489-809c-b56b-c68f29d19b24&spaceId=fe1e184e-f7fc-4980-83e0-4ae30c90d16b&expirationTimestamp=1748131200000&signature=xIdmujzsX2cpL56G5lJU_kgVPHwZY3d3gwfNet1v9EY&downloadName=Termo+de+Uso+-+Cidade+Integra.pdf" target="_blank" className="text-verde hover:underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="https://file.notion.so/f/f/fe1e184e-f7fc-4980-83e0-4ae30c90d16b/bb795f8e-6cf4-4308-ae19-4fed2b24494b/Poltica_de_Privacidade__Cidade_Integra.pdf?table=block&id=1e499cfc-6489-80c0-a2d8-dd6acb182154&spaceId=fe1e184e-f7fc-4980-83e0-4ae30c90d16b&expirationTimestamp=1748131200000&signature=gv7sudFZCKu8uF0YbkH-3nvzgRo8vy8f_dXv5yNKzL0&downloadName=Política+de+Privacidade+—+Cidade+Integra.pdf" target="_blank" className="text-verde hover:underline">
            política de privacidade
          </a>
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
