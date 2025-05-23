import { UserCog } from "lucide-react"

const UsersAdminHeader = () => {
  return (
    <div className="bg-azul text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2">
          <UserCog className="h-6 w-6 text-verde" />
          <h1 className="text-3xl font-bold">Administração de Usuários</h1>
        </div>
        <p className="text-lg text-cinza mt-2">
          Gerencie usuários, seus papéis e permissões na plataforma.
        </p>
      </div>
    </div>
  )
}

export default UsersAdminHeader
