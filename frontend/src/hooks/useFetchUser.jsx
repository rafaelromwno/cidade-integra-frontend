import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export function useFetchUser(userId) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)  // Inicialmente true, assume que a requisição será feita
  const [error, setError] = useState(null)

  useEffect(() => {
    // Não faz a requisição se não tiver userId
    if (!userId) return

    setLoading(true)
    setError(null)

    let isMounted = true  // Flag para verificar se o componente está montado

    async function fetchUser() {
      try {
        const docRef = doc(db, "users", userId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          // Só atualiza o estado se o componente ainda estiver montado
          if (isMounted) {
            setUser(docSnap.data())
          }
        } else {
          // Se o documento não for encontrado, define o erro
          if (isMounted) {
            setUser(null)
            setError("Usuário não encontrado.")
          }
        }
      } catch (err) {
        // Adiciona log de erro
        console.error("Erro ao buscar o usuário:", err)

        if (isMounted) {
          setError("Erro ao buscar o usuário.")
        }
      } finally {
        // Certifica-se de que a mudança de estado só ocorre se o componente estiver montado
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchUser()

    // Cleanup: se o componente for desmontado, cancela a atualização de estado
    return () => {
      isMounted = false
    }
  }, [userId])

  return { user, loading, error }
}
