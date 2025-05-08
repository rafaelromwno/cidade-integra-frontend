
import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, ShieldCheck } from "lucide-react";

const DenunciaFormFields = ({ form }) => {
  return (
    <>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <FormField
          control={form.control}
          name="cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <div className="flex">
                  <Input
                    placeholder="Ex: 00000-000"
                    {...field}
                    className="rounded-r-none"
                  />
                  <div className="flex items-center justify-center px-3 border border-l-0 rounded-r-md bg-muted">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Informe o CEP da localidade.
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
                Informe o endereço onde o problema está localizado.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


      </div>

      <FormField
        control={form.control}
        name="anonima"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-5 w-5 text-verde" />
                <FormLabel className="text-base font-semibold text-gray-700">
                  Denúncia Anônima
                </FormLabel>
              </div>
              <FormDescription className="text-sm text-gray-500">
                Marque esta opção se deseja que sua identidade seja mantida em sigilo.
              </FormDescription>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default DenunciaFormFields;