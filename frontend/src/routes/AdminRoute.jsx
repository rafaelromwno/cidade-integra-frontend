import { useEffect } from "react"
import { useCurrentUser } from "@/hooks/useCurrentUser"
import { useNavigate } from "react-router-dom"


export default function AdminRoute({ children }) {
  const navigate = useNavigate()
  const { user, loading } = useCurrentUser()

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== "admin") {
        navigate("/acesso-negado") // redireciona para a home ou página de acesso negado
      }
    }
  }, [user, loading, navigate])

  if (loading || !user) return null

  return <>{children}</>
}
