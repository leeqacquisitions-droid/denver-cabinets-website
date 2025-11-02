import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ProjectsOfTheMonth } from "@/components/ProjectsOfTheMonth";
import { ServicesSection } from "@/components/ServicesSection";
import { PopularStylesSection } from "@/components/PopularStylesSection";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { MaterialsSection } from "@/components/MaterialsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { CallNowSection } from "@/components/CallNowSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <div className="min-h-screen pt-[120px] overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <PopularStylesSection />
        <PortfolioTeaser />
        <ProjectsOfTheMonth />
        <PortfolioSection />
        <WhyChooseSection />
        <MaterialsSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <CallNowSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
