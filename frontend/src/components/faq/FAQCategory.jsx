import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TabsContent } from "@/components/ui/tabs";

const FAQCategory = ({ categoryId, faqItems }) => {
  return (
    <TabsContent value={categoryId} className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </TabsContent>
  );
};

export default FAQCategory;
