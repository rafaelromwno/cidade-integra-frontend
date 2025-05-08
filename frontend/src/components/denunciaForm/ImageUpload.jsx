
import React from "react";
import { FormLabel, FormDescription } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ImageUpload = ({ previewImage, setPreviewImage }) => {
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

  return (
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
  );
};

export default ImageUpload;