import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import { toast } from "sonner"
import { useState } from "react"

const REPORT_COLLECTION = "users"

export function useUpdateUserRole() {
  const [loading, setLoading] = useState(false)

  const updateRole = async (uid, role) => {
    setLoading(true)
    try {
      const userRef = doc(db, REPORT_COLLECTION, uid)
      await updateDoc(userRef, { role })
      toast.success(`Função alterada para "${role}"`)
    } catch (err) {
      console.error("Erro ao atualizar role:", err)
      toast.error("Erro ao atualizar função do usuário.")
    } finally {
      setLoading(false)
    }
  }

  return {
    updateToAdmin: (uid) => updateRole(uid, "admin"),
    updateToUser: (uid) => updateRole(uid, "user"),
    loading,
  }
}