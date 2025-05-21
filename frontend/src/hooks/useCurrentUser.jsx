import { useAuth } from "@/context/AuthContext"
import { useFetchUser } from "@/hooks/useFetchUser"

export function useCurrentUser() {
  const { user } = useAuth()
  const { user: firestoreUser, loading, error } = useFetchUser(user?.uid)

  return {
    user: firestoreUser,
    loading,
    error,
  }
}