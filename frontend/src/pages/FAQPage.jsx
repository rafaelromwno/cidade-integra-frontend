import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQHeader from "@/components/faq/FAQHeader";
import FAQSection from "@/components/faq/FAQSection";
import FAQNavigation from "@/components/faq/FAQNavigation";
import ContactSection from "@/components/faq/ContactSection";
import { motion } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { faqCategories } from "@/data/faqData";

const FAQPage = () => {
  const sectionIds = faqCategories.map((category) => category.id);
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <FAQHeader />

      <motion.div
        className="container mx-auto px-4 py-12 flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
          {/* navegação lateral */}
          <aside className="hidden md:block">
            <FAQNavigation
              activeSection={activeSection}
              categories={faqCategories}
            />
          </aside>
          {/* conteúdo principal */}
          <main className="w-full">
            <FAQSection />
            <ContactSection />
          </main>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default FAQPage;
