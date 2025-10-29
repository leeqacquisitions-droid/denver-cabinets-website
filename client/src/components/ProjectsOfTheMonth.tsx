import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import before1 from "@assets/IMG_2951 2_1761700443565.jpg";
import after1 from "@assets/IMG_3037_1761700500526.jpg";
import after2 from "@assets/IMG_3038_1761700532373.jpg";
import after3 from "@assets/IMG_3035_1761700547671.jpg";

const projects = [
  {
    title: "Modern Living Room Entertainment Center",
    description: "Custom cabinets flanking fireplace with integrated lighting",
    before: before1,
    after: after1,
    details: "Complete transformation with premium cabinets and professional installation"
  },
  {
    title: "Mudroom Organization System",
    description: "Built-in storage solution for entryway organization",
    before: null,
    after: after2,
    details: "Floor-to-ceiling cabinets with bench seating and cubbies"
  },
  {
    title: "Custom Cabinet Details",
    description: "Premium finish with integrated task lighting",
    before: null,
    after: after3,
    details: "Professional installation with attention to every detail"
  }
];

export function ProjectsOfTheMonth() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  const currentProject = projects[currentIndex];
  const hasBefore = currentProject.before !== null;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowBefore(false);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowBefore(false);
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

        {/* Main Project Display */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-card border-2">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative bg-black min-h-[400px] lg:min-h-[500px]">
                {hasBefore && (
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <Button
                      size="sm"
                      variant={!showBefore ? "default" : "outline"}
                      onClick={() => setShowBefore(false)}
                      className="backdrop-blur-sm bg-background/90 border-border"
                      data-testid="button-after"
                    >
                      After
                    </Button>
                    <Button
                      size="sm"
                      variant={showBefore ? "default" : "outline"}
                      onClick={() => setShowBefore(true)}
                      className="backdrop-blur-sm bg-background/90 border-border"
                      data-testid="button-before"
                    >
                      Before
                    </Button>
                  </div>
                )}
                
                <img
                  src={hasBefore && showBefore ? currentProject.before : currentProject.after}
                  alt={`${currentProject.title}${hasBefore && showBefore ? " - Before" : " - After"}`}
                  className="w-full h-full object-cover"
                  data-testid="img-project"
                />

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={prevProject}
                    className="pointer-events-auto backdrop-blur-sm bg-background/90 border-border shadow-lg"
                    data-testid="button-prev"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={nextProject}
                    className="pointer-events-auto backdrop-blur-sm bg-background/90 border-border shadow-lg"
                    data-testid="button-next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Details Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-card to-muted/20">
                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary mb-3">
                    Project {currentIndex + 1} of {projects.length}
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {currentProject.description}
                  </p>
                  <p className="text-base">
                    {currentProject.details}
                  </p>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-2 mb-6">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setShowBefore(false);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary w-8"
                          : "bg-muted w-2"
                      }`}
                      data-testid={`dot-${index}`}
                    />
                  ))}
                </div>

                {/* CTA */}
                <div>
                  <a href="#portfolio">
                    <Button className="group" data-testid="button-view-more">
                      View More Projects
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
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
    </section>
  );
}
