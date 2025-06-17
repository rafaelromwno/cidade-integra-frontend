import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useFetchUser } from "@/hooks/useFetchUser"

const ExportCSV = ({ denuncias }) => {
  const { toast } = useToast()
  

  const exportToCSV = () => {

    // verifica se há dados para exportar
    if (!denuncias || denuncias.length === 0) {
      toast({
        title: "Nenhum dado para exportar",
        description: "Não há denúncias para exportar.",
        variant: "destructive",
      })
      return
    }

    // função para evitar quebra do texto no csv
    const escapeCSV = (text) =>
      `"${String(text).replace(/"/g, '""')}"`

    // cabeçalhos do arquivo csv
    const headers = [
      "ID", "Título", "Descrição", "Categoria", "Local",
      "Criado em", "Atualizado em", "Resolvido em", "Status", "Usuário"
    ]

    // monta os dados das denúncias no formato csv
    const csvData = denuncias.map(denuncia => [
      denuncia.reportId,
      escapeCSV(denuncia.title),
      escapeCSV(denuncia.description),
      denuncia.category,
      escapeCSV(denuncia.location?.address || "Endereço não informado"),
      escapeCSV(denuncia.createdAt?.toDate().toLocaleString('pt-BR') || "Sem data"),
      escapeCSV(denuncia.updatedAt?.toDate().toLocaleString('pt-BR') || "Não atualizado"),
      escapeCSV(denuncia.resolvedAt ? denuncia.resolvedAt.toDate().toLocaleString('pt-BR') : "Não resolvido"),
      denuncia.status,
      denuncia.isAnonymous
        ? "Anônimo"
        : escapeCSV(denuncia.userId || "Usuário não disponível")
    ])

    // junta cabeçalhos e dados
    const csvContent = [headers, ...csvData]
      .map(row => row.join(","))
      .join("\n")

    // cria e dispara o download do arquivo
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.setAttribute("download", `denuncias_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // mostra toast de sucesso
    toast({
      title: "Exportação concluída",
      description: `${denuncias.length} denúncias exportadas com sucesso.`,
      variant: "default",
    })
  }

  return (
    <Button
      onClick={exportToCSV}
      variant="outline"
      className="flex items-center gap-2"
      aria-label="Exportar dados para CSV"
    >
      <Download className="h-4 w-4" />
      Exportar CSV
    </Button>
  )
}

export default ExportCSV