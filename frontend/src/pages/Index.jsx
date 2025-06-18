
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/home/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <HowItWorksSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
