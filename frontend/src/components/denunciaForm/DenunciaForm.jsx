import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { formSchema } from "./DenunciaFormSchema";
import DenunciaFormFields from "./DenunciaFormFields";
import ImageUpload from "./ImageUpload";

const DenunciaForm = () => {
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
      cep: "",
      anonima: false,
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    
    // Simula o envio de uma denúncia
    setTimeout(() => {
      console.log(values);
      toast({
        title: "🌳 Denúncia enviada com sucesso!",
        description: "Sua denúncia foi registrada e será analisada em breve.",
      });
      setIsSubmitting(false);
      navigate("/denuncias");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <DenunciaFormFields form={form} />
            
            <ImageUpload 
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
            />
            
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
  );
};

export default DenunciaForm;