import { useState } from "react"
import { mockDenuncias } from "@/data/MockDenunciasComponent"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminHeader from "@/components/admin/AdminHeader"
import DenunciasDashboard from "@/components/admin/denuncias/DenunciasDashboard"
import DenunciasSearch from "@/components/admin/denuncias/DenunciasSearch"
import DenunciasTable from "@/components/admin/denuncias/DenunciasTable"
import DenunciasStats from "@/components/admin/denuncias/DenunciasStats"

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("todas")

  const filteredDenuncias = mockDenuncias.filter((denuncia) => {
    const matchesSearch = 
      denuncia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      denuncia.local.toLowerCase().includes(searchTerm.toLowerCase())
      
    const matchesFilter = filter === "todas" || denuncia.status === filter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AdminHeader />
        
        <div className="container mx-auto px-4 py-8">

          {/* dashboard */}
          <DenunciasDashboard denuncias={mockDenuncias} />

          <Tabs defaultValue="lista" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
              <TabsTrigger value="lista">Lista de Denúncias</TabsTrigger>
              <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lista">
              <DenunciasSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filter={filter}
                setFilter={setFilter}
              />
              <DenunciasTable denuncias={filteredDenuncias} />
            </TabsContent>
            
            <TabsContent value="estatisticas">
              <DenunciasStats denuncias={mockDenuncias} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AdminPage
