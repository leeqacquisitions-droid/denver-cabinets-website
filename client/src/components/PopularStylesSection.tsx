import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import shakerStyles from "@assets/shaker-styles-1.png";
import shakerStyles2 from "@assets/shaker-styles-2.png";
import euroDeluxe from "@assets/euro-deluxe.png";
import euroClassic from "@assets/euro-classic.png";

const styles = [
  {
    id: 1,
    name: "SHAKER STYLES",
    image: shakerStyles,
    description: "Mountain Timber, Espresso, Modern Slate, White & Grey"
  },
  {
    id: 2,
    name: "PREMIUM SHAKERS",
    image: shakerStyles2,
    description: "Signature Blue, Onyx, Dove White & Saige Green Slim"
  },
  {
    id: 3,
    name: "EURO FRAMELESS - DELUXE",
    image: euroDeluxe,
    description: "Gloss White & Matte White modern finishes"
  },
  {
    id: 4,
    name: "EURO FRAMELESS - CLASSIC",
    image: euroClassic,
    description: "Natural Oak & Walnut timeless finishes"
  }
];

export function PopularStylesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % styles.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + styles.length) % styles.length);
  };

  const visibleStyles = [
    styles[currentIndex],
    styles[(currentIndex + 1) % styles.length],
    styles[(currentIndex + 2) % styles.length]
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" id="styles">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-muted-foreground mb-2">
            HOT PRODUCTS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            OUR BEST SELLERS
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {visibleStyles.map((style, idx) => (
              <div key={`${style.id}-${idx}`} className="text-center">
                <div className="aspect-[4/3] bg-card rounded-lg overflow-hidden mb-6 flex items-center justify-center p-4">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-full object-contain"
                    data-testid={`img-style-${style.id}`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-wide">
                  {style.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {style.description}
                </p>
                <Button
                  variant="default"
                  className="bg-foreground text-background hover:bg-foreground/90"
                  onClick={() => {
                    const element = document.getElementById('materials');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  data-testid={`button-view-${style.id}`}
                >
                  VIEW DETAILS
                </Button>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prev}
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={next}
            data-testid="button-carousel-next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
