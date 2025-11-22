import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, X } from "lucide-react";
import mudroom from "@assets/img_3304_1763788353485.jpg";
import consultation from "@assets/img_3345_1763788353485.jpg";
import blackKitchen from "@assets/img_3348_1763788353485.jpg";
import twoToneInstall from "@assets/img_3171_1763788362767.jpg";
import twoToneComplete from "@assets/img_3174_1763788362767.jpg";
import whiteBuiltin from "@assets/img_3243_1763788362767.jpg";

const installations = [
  {
    id: 1,
    title: "Custom Mudroom & Utility Space",
    image: mudroom,
    description: "Wood grain shaker cabinets with built-in bench seating and storage. Complete mudroom transformation with shiplap accent wall.",
    location: "Denver Metro",
    date: "November 2025"
  },
  {
    id: 2,
    title: "Professional Design Consultation",
    image: consultation,
    description: "On-site 3D design consultation with homeowners. Our team provides detailed layout renderings before installation begins.",
    location: "Denver Metro",
    date: "November 2025"
  },
  {
    id: 3,
    title: "Modern Black Shaker Kitchen",
    image: blackKitchen,
    description: "Sleek black shaker cabinets with modern hardware. Complete kitchen installation showcasing contemporary design.",
    location: "Denver Metro",
    date: "November 2025"
  },
  {
    id: 4,
    title: "Two-Tone Kitchen Installation",
    image: twoToneInstall,
    description: "Elegant two-tone design featuring white upper cabinets and sage green lower cabinets with brass hardware accents.",
    location: "Denver Metro",
    date: "November 2025"
  },
  {
    id: 5,
    title: "Two-Tone Kitchen Completion",
    image: twoToneComplete,
    description: "Completed two-tone kitchen with island. Professional installation completed in under 6 days.",
    location: "Denver Metro",
    date: "November 2025"
  },
  {
    id: 6,
    title: "White Built-In Window Seat",
    image: whiteBuiltin,
    description: "Custom white shaker built-in with window seat, open shelving, and drawer storage. Perfect blend of style and function.",
    location: "Denver Metro",
    date: "November 2025"
  }
];

export default function RecentInstallations() {
  const [lightboxImage, setLightboxImage] = useState<typeof installations[0] | null>(null);
  const scrollPositionRef = useRef<number>(0);

  // Prevent body scroll when lightbox is open and preserve scroll position
  useEffect(() => {
    if (lightboxImage) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restore scroll position
        const savedScrollY = scrollPositionRef.current;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, savedScrollY);
      };
    }
  }, [lightboxImage]);

  return (
    <div className="min-h-screen pt-[120px] overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="py-12 bg-background border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <Badge className="mb-4" data-testid="badge-new">
                NEW
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Recent Installations
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See what we've accomplished this month. Real projects, real results from Estate Solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {installations.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover-elevate cursor-pointer group"
                  onClick={() => setLightboxImage(project)}
                  data-testid={`card-installation-${project.id}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-testid={`img-installation-${project.id}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3" data-testid={`title-installation-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing list of satisfied customers. Get your free on-site consultation and 3D design rendering today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17202242908"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                data-testid="button-call-cta"
              >
                Call Now: (720) 224-2908
              </a>
              <a
                href="/#quote"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8"
                data-testid="button-quote-cta"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            data-testid="lightbox-overlay"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setLightboxImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="max-w-6xl w-full">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-md touch-auto select-none"
                onClick={(e) => e.stopPropagation()}
                style={{ touchAction: 'auto' }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-2xl font-semibold mb-2">{lightboxImage.title}</h3>
                <p className="text-white/80 text-sm mb-3">{lightboxImage.description}</p>
                <div className="flex justify-center gap-4 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{lightboxImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{lightboxImage.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
