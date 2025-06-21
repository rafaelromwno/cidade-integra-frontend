import React, { useEffect, useState } from "react";
import { FileText, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DenunciaCard from "@/components/denuncias/DenunciaCard";
import { useUserReports } from "@/hooks/useUserReports";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const MinhasDenuncias = () => {
  const { currentUser: user, loading: authLoading } = useAuth();
  const {
    reports: denuncias,
    loading,
    error,
  } = useUserReports(user?.uid || null);

  const [savedReports, setSavedReports] = useState([]);
  const [loadingSaved, setLoadingSaved] = useState(true);

  // Função para remover denúncia salva da interface
  const handleRemoveSavedReport = (reportId) => {
    setSavedReports((prev) => prev.filter((r) => r.reportId !== reportId));
  };

  useEffect(() => {
    const fetchSavedReports = async () => {
      if (!user) {
        setSavedReports([]);
        setLoadingSaved(false);
        return;
      }

      try {
        const colRef = collection(db, "users", user.uid, "denunciasSalvas");
        const snap = await getDocs(colRef);
        const saved = snap.docs.map((doc) => ({
          reportId: doc.id,
          ...doc.data(),
        }));
        setSavedReports(saved);
      } catch (error) {
        console.error("Erro ao buscar denúncias salvas:", error);
        setSavedReports([]);
      } finally {
        setLoadingSaved(false);
      }
    };

    fetchSavedReports();
  }, [user]);

  if (authLoading) return <p>Carregando autenticação...</p>;

  if (!user) return <p>Você precisa estar logado para ver suas denúncias.</p>;

  return (
    <>
      {/* DENÚNCIAS CRIADAS */}
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5" />
        Minhas Denúncias
      </h2>

      {loading && <p>Carregando denúncias...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && denuncias.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-10 text-muted-foreground">
              <p>Você ainda não fez nenhuma denúncia.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!loading && denuncias.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {denuncias.map((denuncia) => (
            <DenunciaCard key={denuncia.reportId} denuncia={denuncia} />
          ))}
        </div>
      )}

      {/* DENÚNCIAS SALVAS */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 flex items-center gap-2">
        <Bookmark className="h-5 w-5" />
        Denúncias Salvas
      </h2>

      {loadingSaved && <p>Carregando denúncias salvas...</p>}

      {!loadingSaved && savedReports.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-10 text-muted-foreground">
              <p>Você ainda não salvou nenhuma denúncia.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!loadingSaved && savedReports.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {savedReports.map((denuncia) => (
            <DenunciaCard
              key={denuncia.reportId}
              denuncia={denuncia}
              onRemoveSaved={handleRemoveSavedReport}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MinhasDenuncias;
