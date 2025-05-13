import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const ContactSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ainda tem dúvidas?</CardTitle>
        <CardDescription>
          Entre em contato com nossa equipe de suporte.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 font-semibold">
          Se você não encontrou a resposta para sua dúvida, entre em contato conosco
          através do canal abaixo:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-sm font-semibold text-verde">suporte@cidadeunida.com
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
