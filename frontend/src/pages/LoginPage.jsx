import { MapPin } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import LoginForm from "@/components/authentication/LoginForm";
import RegisterForm from "@/components/authentication/RegisterForm";
import AuthNotice from "@/components/authentication/shared/AuthNotice";

const LoginPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-verde rounded-full mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-azul">
              Bem-vindo ao Cidade Unida
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Faça login ou crie uma conta para começar a reportar problemas urbanos.
            </p>
          </div>

          {/* Auth Tabs */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <Tabs defaultValue="login" onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="register">Cadastrar</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <LoginForm resetTrigger={activeTab} />
              </TabsContent>

              <TabsContent value="register">
                <RegisterForm resetTrigger={activeTab} />
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
