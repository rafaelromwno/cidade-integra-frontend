import { MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import useAuthentication from "@/hooks/UseAuthentication";
import LoginForm from "@/components/authentication/LoginForm";
import RegisterForm from "@/components/authentication/RegisterForm";
import AuthNotice from "@/components/authentication/shared/AuthNotice";

const LoginPage = () => {
  const { user } = useAuth();
  const { clearError } = useAuthentication();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4">
          {/* header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-verde rounded-full mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-azul">
              Acesse o Cidade Unida
            </h1>
            <p className="text-gray-500 mt-2">
              Ajude a melhorar sua cidade reportando problemas urbanos!
            </p>
          </div>

          {/* tabs */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <Tabs
              defaultValue="login"
              className="w-full"
              onValueChange={clearError}
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Cadastrar</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <LoginForm />
              </TabsContent>

              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>
            </Tabs>
          </div>

          {!user && <AuthNotice />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
