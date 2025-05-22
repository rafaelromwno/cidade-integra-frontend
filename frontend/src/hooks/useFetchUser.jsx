import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export function useFetchUser(userId) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!userId) return

    setLoading(true)
    setError(null)
    let isMounted = true

    async function fetchUser() {
      try {
        const docRef = doc(db, "users", userId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          if (isMounted) {
            setUser({
              uid: docSnap.id, // inclui o UID
              ...docSnap.data(),
            })
          }
        } else {
          if (isMounted) {
            setUser(null)
            setError("Usuário não encontrado.")
          }
        }
      } catch (err) {
        console.error("Erro ao buscar o usuário:", err)
        if (isMounted) {
          setError("Erro ao buscar o usuário.")
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchUser()
    return () => {
      isMounted = false
    }
  }, [userId])

  return { user, loading, error }
}
