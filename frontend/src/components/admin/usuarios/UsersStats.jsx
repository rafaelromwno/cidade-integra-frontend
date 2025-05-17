import { UserCheck, UserX, User, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const UsersStats = ({ users }) => {
  const estatisticas = {
    total: users.length,
    ativos: users.filter(u => u.status === "ativo").length,
    inativos: users.filter(u => u.status === "inativo").length,
    bloqueados: users.filter(u => u.status === "bloqueado").length,
    administradores: users.filter(u => u.role === "administrador").length,
    moderadores: users.filter(u => u.role === "moderador").length,
    usuarios: users.filter(u => u.role === "usuario").length,
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{estatisticas.total}</div>
        </CardContent>
      </Card>
      <Card className="bg-green-500/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Ativos</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <div className="text-2xl font-bold">{estatisticas.ativos}</div>
          <UserCheck className="h-5 w-5 text-verde" />
        </CardContent>
      </Card>
      <Card className="bg-orange-500/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Inativos</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <div className="text-2xl font-bold">{estatisticas.inativos}</div>
          <User className="h-5 w-5 text-orange-500" />
        </CardContent>
      </Card>
      <Card className="bg-red-500/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Bloqueados</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <div className="text-2xl font-bold">{estatisticas.bloqueados}</div>
          <UserX className="h-5 w-5 text-vermelho" />
        </CardContent>
      </Card>
    </div>
  )
}

export default UsersStats
