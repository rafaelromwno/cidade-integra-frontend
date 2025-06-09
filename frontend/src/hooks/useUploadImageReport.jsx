import supabase from "@/supabase/config";
import { v4 as uuidv4 } from "uuid";

// Limites
const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function useUploadImageReport(file, userId) {

  // validações
  if (!file) {
    return { success: false, error: "Nenhum arquivo fornecido." };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return { success: false, error: "Tipo de arquivo inválido. Use JPG, PNG ou WEBP." };
  }

  if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
    return { success: false, error: `Arquivo excede ${MAX_FILE_SIZE_MB}MB.` };
  }

  // geração de nome seguro
  const fileExt = file.name.split(".").pop();
  const fileName = `${userId}/${uuidv4()}.${fileExt}`;
  const bucket = "reports";

  // upload
  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: "3600", // 1h
      upsert: false
    });

  if (uploadError) {
    return { success: false, error: `Erro no upload: ${uploadError.message}` };
  }

  // obtenção da URL pública
  const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(fileName);
  const publicUrl = publicData?.publicUrl;

  return {
    success: true,
    url: publicUrl || null,
    path: fileName,
    message: "Imagem enviada com sucesso."
  };
}
