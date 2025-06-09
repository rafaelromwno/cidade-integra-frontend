import { z } from "zod";

export const formSchema = z.object({
  titulo: z
    .string()
    .trim()
    .min(3, { message: "O título deve ter pelo menos 3 caracteres" }),

  descricao: z
    .string()
    .trim()
    .min(10, { message: "A descrição deve ter pelo menos 10 caracteres" }),

  categoria: z.enum(
    ["buracos", "iluminacao", "lixo", "vazamentos", "areas-verdes", "outros"],
    { errorMap: () => ({ message: "Categoria inválida" }) }
  ),

  local: z
    .string()
    .trim()
    .min(5, { message: "Informe o endereço completo da ocorrência" }),

  cep: z.preprocess(
    (value) => {
      if (typeof value === "string") {
        const trimmed = value.trim();
        return trimmed === "" ? undefined : trimmed;
      }
      return value;
    },
    z
      .string()
      .regex(/^\d{5}-?\d{3}$/, { message: "CEP inválido (formato esperado: 00000-000)" })
      .optional()
  ),

  anonima: z.boolean().default(false),
});
