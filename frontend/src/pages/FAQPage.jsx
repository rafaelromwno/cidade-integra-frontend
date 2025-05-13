import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQHeader from "@/components/faq/FAQHeader";
import FAQSection from "@/components/faq/FAQSection";
import ContactSection from "@/components/faq/ContactSection";

const FAQPage = () => {
  return (
    <>
      <Navbar />
      <FAQHeader />

      <div className="container mx-auto px-4 py-12">
        <FAQSection />
        <ContactSection />
      </div>

      <Footer />
    </>
  );
};

export default FAQPage;
