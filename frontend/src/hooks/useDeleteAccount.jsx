import { useUpdateUserStatus } from "@/hooks/useUpdateUserStatus"
import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { auth } from "@/firebase/config"

export function useDeleteAccount() {
  const { updateStatusToInactive } = useUpdateUserStatus()
  const navigate = useNavigate()


  const deactivateAccount = async () => {
    const user = auth.currentUser

    if (!user) {
      toast.error("Usuário não autenticado.")
      return
    }

    try {
      await updateStatusToInactive(user.uid)
      await signOut(auth)
      toast.success("Conta desativada com sucesso.")
      navigate("/login")
    } catch (error) {
      console.error("Erro ao desativar conta:", error)
      toast.error("Erro ao desativar conta.")
    }
  }

  return { deactivateAccount }
}