import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, CheckCircle, XCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import DenunciaStatusBadge from "@/components/denuncias/DenunciaStatusBadge"

const DenunciasTable = ({ denuncias }) => {
  const { toast } = useToast()

  const atualizarStatus = (id, novoStatus) => {
    // hook para atualizar o status da denúncia
    toast({
      title: "Status atualizado",
      description: `Denúncia #${id} marcada como ${novoStatus.replace("_", " ")}.`,
      variant: "default",
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Título</TableHead>
            <TableHead>Local</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {denuncias.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                Nenhuma denúncia encontrada.
              </TableCell>
            </TableRow>
          ) : (
            denuncias.map((denuncia) => (
              <TableRow key={denuncia.id}>
                <TableCell className="font-medium">{denuncia.id}</TableCell>
                <TableCell>{denuncia.titulo}</TableCell>
                <TableCell>{denuncia.local}</TableCell>
                <TableCell>{new Date(denuncia.data).toLocaleDateString('pt-BR')}</TableCell>
                <TableCell>
                  <DenunciaStatusBadge status={denuncia.status} />
                </TableCell>
                <TableCell className="text-right flex flex-col space-y-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/denuncias/${denuncia.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      Ver
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="text-verde hover:text-verde hover:bg-verde/10"
                    onClick={() => atualizarStatus(denuncia.id, "resolvido")}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Resolver
                  </Button>
                  
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="text-vermelho hover:text-vermelho hover:bg-vermelho/10"
                    onClick={() => atualizarStatus(denuncia.id, "rejeitado")}
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Rejeitar
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default DenunciasTable
