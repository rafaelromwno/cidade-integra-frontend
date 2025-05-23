import { Shield } from "lucide-react"

const AdminHeader = () => {
  return (
    <div className="bg-azul text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-verde" />
          <h1 className="text-3xl font-bold">Painel de Administração</h1>
        </div>
        <p className="text-lg text-cinza mt-2">
          Gerencie e modere as denúncias registradas na plataforma.
        </p>
      </div>
    </div>
  )
}

export default AdminHeader