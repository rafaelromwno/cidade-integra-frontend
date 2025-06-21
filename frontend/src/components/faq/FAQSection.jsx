import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FAQCategory from "./FAQCategory";
import { faqCategories } from "@/data/faqData";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    faqCategories.forEach((category) => {
      const el = document.getElementById(category.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col md:flex-row gap-8"
    >
      {/* ScrollSpy Menu */}
      <aside className="md:w-1/4 sticky top-4 h-fit">
        <nav>
          <ul className="space-y-2">
            {faqCategories.map((category) => (
              <li key={category.id} className="relative pl-4">
                {activeId === category.id && (
                  <span className="absolute left-0 top-2 h-6 w-1 rounded-full bg-primary" />
                )}
                <a
                  href={`#${category.id}`}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeId === category.id
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* FAQ Content */}
      <div className="md:w-3/4 space-y-10">
        <Card className="border-none shadow-lg">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-t-lg border-b border-gray-100 dark:border-gray-700">
            <CardTitle className="text-xl md:text-2xl text-azul">
              Dúvidas sobre o Cidade Integra
            </CardTitle>
            <CardDescription className="text-base">
              Encontre respostas para suas perguntas nas seções abaixo.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {faqCategories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Removido título duplicado aqui */}
                <FAQCategory
                  id={category.id}
                  title={category.label}
                  faqItems={category.items}
                />
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default FAQSection;
