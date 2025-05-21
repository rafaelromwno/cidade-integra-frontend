import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  limit,
  startAfter,
  orderBy,
} from "firebase/firestore";

const REPORT_COLLECTION = "reports";
const PAGE_SIZE = 4; // itens por página

export function useUserReports(userId) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastDoc, setLastDoc] = useState(null);
  const [firstDoc, setFirstDoc] = useState(null);
  const [pageHistory, setPageHistory] = useState([]);

  async function fetchPage(next = true) {
    if (!userId) {
      setReports([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const db = getFirestore();
      const denunciasRef = collection(db, REPORT_COLLECTION);

      let q;

      if (next) {
        // Próxima página
        if (lastDoc) {
          q = query(
            denunciasRef,
            where("userId", "==", userId),
            orderBy("createdAt", "desc"),
            startAfter(lastDoc),
            limit(PAGE_SIZE)
          );
        } else {
          // Primeira página
          q = query(
            denunciasRef,
            where("userId", "==", userId),
            orderBy("createdAt", "desc"),
            limit(PAGE_SIZE)
          );
        }
      } else {
        // Página anterior
        if (pageHistory.length > 1) {
          const prevDoc = pageHistory[pageHistory.length - 2];
          q = query(
            denunciasRef,
            where("userId", "==", userId),
            orderBy("createdAt", "desc"),
            startAfter(prevDoc),
            limit(PAGE_SIZE)
          );
        } else {
          // Se não tem página anterior, buscar a primeira
          q = query(
            denunciasRef,
            where("userId", "==", userId),
            orderBy("createdAt", "desc"),
            limit(PAGE_SIZE)
          );
        }
      }

      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        setFirstDoc(querySnapshot.docs[0]);
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);

        if (next) {
          setPageHistory((prev) => [...prev, querySnapshot.docs[0]]);
        } else {
          setPageHistory((prev) => prev.slice(0, -1));
        }
      }

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
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
    // Sempre que userId mudar, resetar estados e carregar a primeira página
    setReports([]);
    setLastDoc(null);
    setFirstDoc(null);
    setPageHistory([]);
    if (userId) fetchPage(true);
  }, [userId]);

  return {
    reports,
    loading,
    error,
    fetchNextPage: () => fetchPage(true),
    fetchPrevPage: () => fetchPage(false),
    canGoBack: pageHistory.length > 1,
    canGoNext: reports.length === PAGE_SIZE,
    currentPage: pageHistory.length || 1,
  };
}
