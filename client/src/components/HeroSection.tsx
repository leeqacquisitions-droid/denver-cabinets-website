import { Button } from "@/components/ui/button";
import heroImage from "@assets/NEED TO SELL YOUR HOME LOOK AT THIS_1760666956139.webp";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Quality Cabinets, Expert Installation
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
            Professional cabinetry solutions for Denver metro contractors, property managers, and homeowners
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              data-testid="button-hero-consultation"
              className="text-base sm:text-lg min-h-12 sm:min-h-auto"
            >
              Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              data-testid="button-hero-portfolio"
              className="text-base sm:text-lg min-h-12 sm:min-h-auto backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
