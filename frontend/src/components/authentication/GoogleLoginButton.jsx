import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import useAuthentication from "@/hooks/UseAuthentication";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({ setGoogleError }) => {
  const { loginWithGoogle } = useAuthentication();
  const { toast } = useToast();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    setGoogleError(null);

    try {
      const result = await loginWithGoogle();
      if (result.success) {
        toast({
          title: "🎉 Login bem-sucedido!",
          description: "Você foi autenticado com sucesso. Seja bem-vindo!",
        });
        navigate("/");
      } else {
        const errorMessage = result.error || "Erro ao fazer login com o Google.";
        toast({
          title: "⚠️ Não foi possível fazer login",
          description: `${errorMessage} Por favor, tente novamente ou use outro método.`,
          variant: "destructive",
        });
        setGoogleError(errorMessage);
      }
    } catch (err) {
      const fallbackMessage = "Erro inesperado durante o login.";
      toast({
        title: "🚨 Erro inesperado",
        description: "Ocorreu um problema ao tentar fazer login. Por favor, verifique sua conexão ou tente novamente em instantes.",
        variant: "destructive",
      });
      setGoogleError(fallbackMessage);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleGoogleLogin}
      disabled={isGoogleLoading}
      className="flex items-center gap-2 w-full bg-transparent shadow-md text-azul border-2 duration-500 border-verde hover:bg-verde hover:text-white"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google Logo"
        className="w-5 h-5"
      />
      {isGoogleLoading ? "Entrando com Google..." : "Entrar com Google"}
    </Button>
  );
};

export default GoogleLoginButton;
