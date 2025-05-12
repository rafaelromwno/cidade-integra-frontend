import { useState } from "react";
import { mockDenuncias } from "@/data/MockDenunciasComponent"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import PerfilHeader from "@/components/perfil/PerfilHeader";
import PerfilUsuarioCard from "@/components/perfil/PerfilUsuarioCard";
import EstatisticasCard from "@/components/perfil/EstatisticasCard";
import MinhasDenuncias from "@/components/perfil/MinhasDenuncias";
import EditarPerfilForm from "@/components/perfil/EditarPerfilForm";

const PerfilUsuarioPage = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPasswordAlertOpen, setIsPasswordAlertOpen] = useState(false);
  const { toast } = useToast();

  // Dados do usuário (mock)
  const [usuarioData, setUsuarioData] = useState({
    nome: "Maria Silva",
    email: "maria.silva@exemplo.com",
    bio: "Cidadã engajada em melhorar a cidade através de denúncias ativas.",
    avatar: "https://github.com/shadcn.png",
    pontuacao: 125,
    nivel: "Vigilante Urbano",
  });

  const { pontuacao, nivel } = usuarioData;

  // Filtra as denúncias do usuário atual (mock)
  const minhasDenuncias = mockDenuncias.filter((d) => d.usuario === "Maria S.");

  const calcularPorcentagemResolvidas = () => {
    const resolvidas = minhasDenuncias.filter(
      (d) => d.status === "resolvido"
    ).length;
    return minhasDenuncias.length > 0
      ? Math.round((resolvidas / minhasDenuncias.length) * 100)
      : 0;
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nome = formData.get("nome");
    const email = formData.get("email");
    const bio = formData.get("bio");
    const senhaAtual = formData.get("senha-atual");
    const novaSenha = formData.get("nova-senha");
    const confirmarNovaSenha = formData.get("confirmar-senha");

    // Verifica se os campos de senha foram preenchidos
    if (senhaAtual && novaSenha && confirmarNovaSenha) {
      if (novaSenha !== confirmarNovaSenha) {
        setIsPasswordAlertOpen(true);
        return;
      }

      // Aqui você faria a validação da senha atual e a atualização no backend
      console.log("Senha atualizada");
    }

    // Atualiza os dados do perfil
    setUsuarioData({
      ...usuarioData,
      nome,
      email,
      bio,
    });

    setIsEditDialogOpen(false);

    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PerfilHeader />

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna de informações do usuário */}
            <div className="md:col-span-1">
              <PerfilUsuarioCard
                usuario={usuarioData}
                nivel={nivel}
                onEditClick={() => setIsEditDialogOpen(true)}
              />
              <EstatisticasCard
                pontuacao={pontuacao}
                totalDenuncias={minhasDenuncias.length}
                porcentagemResolvidas={calcularPorcentagemResolvidas()}
              />
            </div>

            {/* Coluna de conteúdo principal - Apenas Minhas Denúncias */}
            <div className="md:col-span-2">
              <MinhasDenuncias denuncias={minhasDenuncias} />
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Diálogo de Edição de Perfil */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <EditarPerfilForm
          usuario={usuarioData}
          isOpen={isEditDialogOpen}
          isPasswordAlertOpen={isPasswordAlertOpen}
          onOpenChange={setIsEditDialogOpen}
          onPasswordAlertOpenChange={setIsPasswordAlertOpen}
          onSubmit={handleEditProfile}
        />
      </Dialog>
    </div>
  );
};

export default PerfilUsuarioPage;
