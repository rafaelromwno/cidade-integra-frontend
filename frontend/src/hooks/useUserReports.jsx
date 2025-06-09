import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs, orderBy } from "firebase/firestore";

const REPORT_COLLECTION = "reports";

export function useUserReports(userId) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchReports() {
    if (!userId) {
      setReports([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const db = getFirestore();
      const denunciasRef = collection(db, REPORT_COLLECTION);
      const q = query(
        denunciasRef,
        where("userId", "==", userId),
        orderBy("createdAt", "desc") // ordena pela data de criação
      );

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        reportId: doc.id,
        ...(doc.data()),
      }));

      setReports(data);
    } catch (err) {
      setError("Erro ao buscar denúncias.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userId) fetchReports();
  }, [userId]);

  return {
    reports,
    loading,
    error
  };
}
