import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/config"
import { toast } from "sonner"

const REPORT_COLLECTION = "users"

export function useUpdateUserStatus() {
  const updateStatus = async (uid, status) => {
    try {
      const userRef = doc(db, REPORT_COLLECTION, uid)
      await updateDoc(userRef, { status })
      toast.success(`Status atualizado para "${status}"`)
    } catch (err) {
      console.error("Erro ao atualizar status:", err)
      toast.error("Erro ao atualizar status do usuário.")
    }
  }

  return {
    updateStatusToActive: (uid) => updateStatus(uid, "active"),
    updateStatusToInactive: (uid) => updateStatus(uid, "inactive"),
    updateStatusToBanned: (uid) => updateStatus(uid, "banned"),
  }
}
