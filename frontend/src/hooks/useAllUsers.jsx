import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/config";

const REPORT_COLLECTION = "users";

export function useAllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(collection(db, REPORT_COLLECTION));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          uid: doc.id, // inclui o UID manualmente
          ...doc.data(),
        }));
        setUsers(data);
        setLoading(false);
      },
      (err) => {
        console.error("Erro ao escutar usuários:", err);
        setError(err);
        setLoading(false);
      }
    );

    // cleanup: cancela a escuta quando o componente desmontar
    return () => unsubscribe();
  }, []);

  return { users, loading, error };
}
