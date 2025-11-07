import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import beforeImage from "@assets/IMG_3122_1762481733829.jpg";
import afterImage from "@assets/IMG_3124_1762481741361.jpg";

const projects = [
  {
    title: "Water Damage Kitchen Sink Restoration",
    description: "Complete cabinet restoration after water damage to kitchen sink area",
    before: beforeImage,
    after: afterImage,
    beforeAlt: "Before water damaged kitchen sink cabinets Denver Colorado repair",
    afterAlt: "After water damage kitchen sink cabinet restoration Denver metro area",
  }
];

export function ProjectsOfTheMonth() {
  const [showBefore, setShowBefore] = useState<{[key: number]: boolean}>({
    0: false
  });
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; type: string } | null>(null);
  const scrollPositionRef = useRef<number>(0);

  const toggleBeforeAfter = (index: number) => {
    setShowBefore(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const openLightbox = (src: string, title: string, type: string) => {
    setLightboxImage({ src, title, type });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Projects Grid - Single Featured Project */}
        <div className="max-w-2xl mx-auto mb-12">
          {projects.map((project, index) => {
            const hasBefore = project.before !== null;
            const currentlyShowingBefore = showBefore[index];
            
            return (
              <Card 
                key={index} 
                className="overflow-hidden group"
                data-testid={`card-project-${index}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  {hasBefore && (
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
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
                  
                  {/* Both images rendered, switch with opacity for instant transitions */}
                  {hasBefore ? (
                    <>
                      <img
                        src={project.before!}
                        alt={project.beforeAlt}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer ${
                          currentlyShowingBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        loading="eager"
                        data-testid={`img-project-before-${index}`}
                        onClick={() => openLightbox(project.before!, project.title, "Before")}
                      />
                      <img
                        src={project.after}
                        alt={project.afterAlt}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer ${
                          !currentlyShowingBefore ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        loading="eager"
                        data-testid={`img-project-after-${index}`}
                        onClick={() => openLightbox(project.after, project.title, "After")}
                      />
                    </>
                  ) : (
                    <img
                      src={project.after}
                      alt={project.afterAlt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                      data-testid={`img-project-${index}`}
                      onClick={() => openLightbox(project.after, project.title, "After")}
                    />
                  )}
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
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          {/* Close Button */}
          <Button
            variant="default"
            size="icon"
            className="absolute top-4 right-4 md:top-6 md:right-6 shadow-2xl h-10 w-10 md:h-14 md:w-14 rounded-full"
            onClick={closeLightbox}
            data-testid="button-close-lightbox"
          >
            <X className="h-5 w-5 md:h-8 md:w-8" />
          </Button>
          
          {/* Tap to Close Hint */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white/80 text-xs md:text-sm bg-black/40 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm">
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
