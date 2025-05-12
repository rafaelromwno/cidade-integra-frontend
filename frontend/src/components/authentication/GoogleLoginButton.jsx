import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import useAuthentication from "@/hooks/UseAuthentication";
import { useState } from "react";


const GoogleLoginButton = ({ setGoogleError }) => {
  const { loginWithGoogle } = useAuthentication();
  const { toast } = useToast();
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    setGoogleError(null);

    const result = await loginWithGoogle();
    setIsGoogleLoading(false);

    if (result.success) {
      toast({ title: "Login com Google realizado com sucesso." });
    } else {
      const errorMessage = result.error || "Erro ao fazer login com o Google.";
      toast({
        title: "Falha no login com o Google",
        description: errorMessage,
        variant: "destructive",
      });
      setGoogleError(errorMessage);
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
