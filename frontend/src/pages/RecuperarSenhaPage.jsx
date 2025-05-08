import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import useAuthentication from "@/hooks/UseAuthentication"; 

const RecuperarSenhaPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { resetPassword } = useAuthentication(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await resetPassword(email); 
    setIsLoading(false);

    if (result.success) { 
      setIsSubmitted(true);
      toast({ title: "Email enviado com sucesso!", description: "Verifique sua caixa de entrada." });
    } else {
      toast({ title: "Erro", description: result.error || "Não foi possível enviar o email.", variant: "destructive" });
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
            <h1 className="text-2xl font-bold text-azul">Recupere sua senha</h1>
            <p className="text-gray-500 mt-2">
              Enviaremos instruções para recuperar sua senha
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="lyoto.machida@email.com" 
                      className="pl-10" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-verde hover:bg-verde-escuro" 
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Recuperar senha"}
                </Button>
                
                <div className="text-center mt-4">
                  <Link 
                    to="/login" 
                    className="text-verde hover:underline inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Voltar para o login</span>
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="text-verde text-5xl mb-4">✓</div>
                <h2 className="text-xl font-medium">Verifique seu email</h2>
                <p className="text-gray-500">
                  Enviamos instruções para {email}.<br />
                  Verifique sua caixa de entrada e spam.
                </p>
                <Button 
                  asChild
                  className="mt-4 bg-verde hover:bg-verde-escuro"
                >
                  <Link to="/login">Voltar para o login</Link>
                </Button>
              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecuperarSenhaPage;