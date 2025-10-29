import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import before1 from "@assets/IMG_2951 2_1761700443565.jpg";
import after1 from "@assets/IMG_3037_1761700500526.jpg";
import after2 from "@assets/IMG_3038_1761700532373.jpg";
import after3 from "@assets/IMG_3035_1761700547671.jpg";
import before4 from "@assets/IMG_3049_1761701315198.jpg";
import after4 from "@assets/IMG_3052_1761701348687.jpg";
import before5 from "@assets/IMG_2974_1761702593125.jpg";
import after5 from "@assets/IMG_2985_1761702608837.jpg";

const projects = [
  {
    title: "Modern Living Room Entertainment Center",
    description: "Custom cabinets flanking fireplace with integrated lighting",
    before: before1,
    after: after1,
  },
  {
    title: "Mudroom Organization System",
    description: "Built-in storage solution for entryway organization",
    before: null,
    after: after2,
  },
  {
    title: "Custom Cabinet Details",
    description: "Premium finish with integrated task lighting",
    before: null,
    after: after3,
  },
  {
    title: "Water Damage Kitchen Restoration",
    description: "Complete cabinet restoration after water damage",
    before: before4,
    after: after4,
  },
  {
    title: "Commercial Ice Cream Shop Cabinets",
    description: "Custom cabinet installation for retail refrigeration",
    before: before5,
    after: after5,
  }
];

export function ProjectsOfTheMonth() {
  const [showBefore, setShowBefore] = useState<{[key: number]: boolean}>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; type: string } | null>(null);

  const toggleBeforeAfter = (index: number) => {
    setShowBefore(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const openLightbox = (src: string, title: string, type: string) => {
    setLightboxImage({ src, title, type });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Featured Work
          </div>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Projects of the Month
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the incredible transformations we've delivered for Denver-area clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {projects.map((project, index) => {
            const hasBefore = project.before !== null;
            const currentlyShowingBefore = showBefore[index];
            
            return (
              <Card key={index} className="overflow-hidden group">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  {hasBefore && (
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <Button
                        size="default"
                        variant={!currentlyShowingBefore ? "default" : "secondary"}
                        onClick={() => toggleBeforeAfter(index)}
                        className="shadow-lg font-semibold"
                        data-testid={`button-after-${index}`}
                      >
                        After
                      </Button>
                      <Button
                        size="default"
                        variant={currentlyShowingBefore ? "default" : "secondary"}
                        onClick={() => toggleBeforeAfter(index)}
                        className="shadow-lg font-semibold"
                        data-testid={`button-before-${index}`}
                      >
                        Before
                      </Button>
                    </div>
                  )}
                  
                  {/* Preload both images */}
                  {hasBefore && (
                    <>
                      <img
                        src={project.before!}
                        alt=""
                        className="hidden"
                        loading="eager"
                      />
                      <img
                        src={project.after}
                        alt=""
                        className="hidden"
                        loading="eager"
                      />
                    </>
                  )}
                  
                  <img
                    src={hasBefore && currentlyShowingBefore ? project.before : project.after}
                    alt={`${project.title}${hasBefore && currentlyShowingBefore ? " - Before" : " - After"}`}
                    className="w-full h-full object-cover transition-opacity duration-200 group-hover:scale-105 transition-transform cursor-pointer"
                    data-testid={`img-project-${index}`}
                    onClick={() => openLightbox(
                      hasBefore && currentlyShowingBefore ? project.before! : project.after,
                      project.title,
                      hasBefore && currentlyShowingBefore ? "Before" : "After"
                    )}
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
          <div>
            <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">4-6</div>
            <div className="text-sm text-muted-foreground">Days for Kitchen Install</div>
          </div>
          <div>
            <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Quality Guaranteed</div>
          </div>
          <div>
            <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
          data-testid="lightbox-overlay"
        >
          {/* Large Close Button */}
          <Button
            variant="default"
            size="lg"
            className="absolute top-6 right-6 shadow-2xl text-lg h-14 w-14 rounded-full"
            onClick={() => setLightboxImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="h-8 w-8" />
          </Button>
          
          {/* Tap to Close Hint */}
          <div className="absolute top-6 left-6 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            Tap anywhere to close
          </div>

          <div className="max-w-7xl max-h-[90vh] flex flex-col items-center pointer-events-none">
            <img
              src={lightboxImage.src}
              alt={`${lightboxImage.title} - ${lightboxImage.type}`}
              className="max-w-full max-h-[80vh] object-contain"
              data-testid="lightbox-image"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-heading font-bold mb-1">
                {lightboxImage.title}
              </h3>
              <p className="text-white/70 text-lg">{lightboxImage.type}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
