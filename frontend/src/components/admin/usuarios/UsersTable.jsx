import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const UsersTable = ({ users, atualizarStatus, atualizarFuncao }) => {
  const UserStatusBadge = ({ status }) => {
    switch (status) {
      case "ativo":
        return <Badge className="bg-verde">Ativo</Badge>
      case "inativo":
        return <Badge variant="outline" className="text-gray-500">Inativo</Badge>
      case "bloqueado":
        return <Badge className="bg-vermelho">Bloqueado</Badge>
      default:
        return <Badge variant="outline">Desconhecido</Badge>
    }
  }

  const UserRoleBadge = ({ role }) => {
    switch (role) {
      case "administrador":
        return <Badge className="bg-azul">Administrador</Badge>
      case "usuario":
        return <Badge variant="outline">Usuário</Badge>
      default:
        return <Badge variant="outline">Desconhecido</Badge>
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Função</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data de Criação</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-10 text-muted-foreground">
                Nenhum usuário encontrado.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.nome}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <UserRoleBadge role={user.role} />
                </TableCell>
                <TableCell>
                  <UserStatusBadge status={user.status} />
                </TableCell>
                <TableCell>{user.dataCriacao}</TableCell>
                <TableCell className="text-right">
                  <div className="flex flex-col space-y-2">
                    <Select
                      defaultValue={user.status}
                      onValueChange={(value) => atualizarStatus(user.id, value)}
                    >
                      <SelectTrigger className="w-full h-8 text-xs">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ativo">Ativar</SelectItem>
                        <SelectItem value="inativo">Inativar</SelectItem>
                        <SelectItem value="bloqueado">Bloquear</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select
                      defaultValue={user.role}
                      onValueChange={(value) => atualizarFuncao(user.id, value)}
                    >
                      <SelectTrigger className="w-full h-8 text-xs">
                        <SelectValue placeholder="Função" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usuario">Usuário</SelectItem>
                        <SelectItem value="administrador">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default UsersTable
