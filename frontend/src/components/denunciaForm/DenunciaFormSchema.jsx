import { z } from "zod";

export const formSchema = z.object({
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
  cep: z.string().min(8, {
    message: "O CEP deve ter pelo menos 8 caracteres.",
  }).max(9),
  anonima: z.boolean().default(false),
});