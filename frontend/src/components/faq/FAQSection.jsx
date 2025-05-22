import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQCategory from "./FAQCategory";
import { faqCategories } from "@/data/faqData";

const FAQSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Dúvidas sobre o Cidade Integra</CardTitle>
        <CardDescription>
          Selecione uma categoria para encontrar respostas para suas perguntas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="platform" className="w-full">
          <TabsList className="mb-6 w-full justify-start bg-verde">
            {faqCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="text-azul">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {faqCategories.map(category => (
            <FAQCategory 
              key={category.id} 
              categoryId={category.id} 
              faqItems={category.items}
            />
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
