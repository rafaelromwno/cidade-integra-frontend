import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import FAQCategory from "./FAQCategory";
import { faqCategories } from "@/data/faqData";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Monitor, MessageSquare, User } from "lucide-react";

const FAQSection = () => {

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case "platform":
        return <Monitor className="h-5 w-5" />;
      case "reports":
        return <MessageSquare className="h-5 w-5" />;
      case "account":
        return <User className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (categoryId) => {
    switch (categoryId) {
      case "platform":
        return "text-blue-600 dark:text-blue-400";
      case "reports":
        return "text-green-600 dark:text-green-400";
      case "account":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-azul";
    }
  };

  const getCategoryBgColor = (categoryId) => {
    switch (categoryId) {
      case "platform":
        return "bg-blue-50 dark:bg-blue-900/20";
      case "reports":
        return "bg-green-50 dark:bg-green-900/20";
      case "account":
        return "bg-purple-50 dark:bg-purple-900/20";
      default:
        return "bg-gray-50 dark:bg-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="mb-8 border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-t-lg border-b border-gray-100 dark:border-gray-700">
          <CardTitle className="text-xl md:text-2xl text-azul">Dúvidas sobre o Cidade Integra</CardTitle>
          <CardDescription className="text-base">
            Encontre respostas para suas perguntas nas seções abaixo.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-10">
            {faqCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`mb-4 p-4 rounded-lg ${getCategoryBgColor(category.id)}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${getCategoryColor(category.id)}`}>
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className={`text-lg md:text-xl font-semibold ${getCategoryColor(category.id)}`}>
                      {category.label}
                    </h3>
                  </div>
                  <Separator className="bg-gray-200 dark:bg-gray-600" />
                </div>
                <div className="pl-1">
                  <FAQCategory 
                    categoryId={category.id} 
                    faqItems={category.items}
                  />
                </div>
                {index < faqCategories.length - 1 && (
                  <div className="pt-6"></div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FAQSection;
