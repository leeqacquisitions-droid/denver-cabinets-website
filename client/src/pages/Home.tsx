import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PopularStylesSection } from "@/components/PopularStylesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { MaterialsSection } from "@/components/MaterialsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PopularStylesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <MaterialsSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
