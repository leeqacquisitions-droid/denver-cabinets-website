import { Button } from "@/components/ui/button";
import heroImage from "@assets/best quality work in the metro area _1760665661487.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Transform Your Space with Custom Cabinetry
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
            Professional cabinetry installation for kitchens, bathrooms, and pantries in the Denver metro area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              data-testid="button-hero-consultation"
              className="text-lg"
            >
              Request Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              data-testid="button-hero-portfolio"
              className="text-lg backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
