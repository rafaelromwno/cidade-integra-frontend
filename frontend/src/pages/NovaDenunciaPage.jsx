
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Camera, Upload } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const formSchema = z.object({
  titulo: z.string().min(5, {
    message: "O título deve ter pelo menos 5 caracteres.",
  }),
  descricao: z.string().min(10, {
    message: "A descrição deve ter pelo menos 10 caracteres.",
  }),
  categoria: z.string({
    required_error: "Por favor, selecione uma categoria.",
  }),
  local: z.string().min(5, {
    message: "O endereço deve ter pelo menos 5 caracteres.",
  }),
});

const NovaDenunciaPage = () => {
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: "",
      descricao: "",
      categoria: "",
      local: "",
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Imagem muito grande",
        description: "Por favor, escolha uma imagem com até 5MB.",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    
    // Simula o envio de uma denúncia
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Denúncia enviada com sucesso!",
        description: "Sua denúncia foi registrada e será analisada em breve.",
      });
      setIsSubmitting(false);
      navigate("/denuncias");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-azul text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Nova Denúncia</h1>
            <p className="text-lg text-cinza">
              Preencha o formulário abaixo para registrar um problema na sua cidade.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="titulo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Buraco na calçada" {...field} />
                      </FormControl>
                      <FormDescription>
                        Um título conciso que descreva o problema.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="descricao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva o problema em detalhes..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Descreva os detalhes do problema, incluindo há quanto tempo ele existe e como está afetando a área.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="categoria"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoria</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="buracos">Buracos</SelectItem>
                          <SelectItem value="iluminacao">Iluminação</SelectItem>
                          <SelectItem value="lixo">Lixo</SelectItem>
                          <SelectItem value="vazamentos">Vazamentos</SelectItem>
                          <SelectItem value="areas-verdes">Áreas Verdes</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Selecione a categoria que melhor descreve o problema.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="local"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Rua das Flores, 123 - Centro" {...field} />
                      </FormControl>
                      <FormDescription>
                        Informe o endereço completo onde o problema está localizado.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-2">
                  <FormLabel>Foto do problema (opcional)</FormLabel>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    {previewImage ? (
                      <div className="relative w-full">
                        <img 
                          src={previewImage} 
                          alt="Preview" 
                          className="w-full h-auto rounded-lg" 
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setPreviewImage(null)}
                        >
                          Remover
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Camera className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground text-center mb-4">
                          Arraste uma imagem ou clique para fazer upload.
                        </p>
                        <label htmlFor="file-upload">
                          <div className="bg-verde hover:bg-verde-escuro text-white font-medium py-2 px-4 rounded-md cursor-pointer flex items-center gap-2">
                            <Upload className="h-4 w-4" />
                            <span>Enviar foto</span>
                          </div>
                          <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      </>
                    )}
                  </div>
                  <FormDescription>
                    Adicione uma foto para ajudar na identificação do problema. Máx. 5MB.
                  </FormDescription>
                </div>
                
                <Button type="submit" className="w-full bg-verde hover:bg-verde-escuro" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Denúncia"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NovaDenunciaPage;
