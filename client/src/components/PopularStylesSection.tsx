import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mountainTimber from "@assets/mountain-timber.png";
import espressoShaker from "@assets/espresso-shaker.png";
import modernSlateShaker from "@assets/modern-slate-shaker.png";
import whiteShaker from "@assets/white-shaker.png";
import greyShaker from "@assets/grey-shaker.png";
import naturalOak from "@assets/natural-oak.png";
import walnut from "@assets/walnut.png";
import glossWhite from "@assets/gloss-white.png";

const styles = [
  {
    id: 1,
    name: "MOUNTAIN TIMBER",
    image: mountainTimber,
    description: "Warm wood-grain finish for traditional elegance",
    category: "Shaker"
  },
  {
    id: 2,
    name: "ESPRESSO SHAKER",
    image: espressoShaker,
    description: "Rich dark tones for sophisticated spaces",
    category: "Shaker"
  },
  {
    id: 3,
    name: "MODERN SLATE SHAKER",
    image: modernSlateShaker,
    description: "Contemporary charcoal for modern aesthetics",
    category: "Shaker"
  },
  {
    id: 4,
    name: "WHITE SHAKER",
    image: whiteShaker,
    description: "Timeless classic for any design style",
    category: "Shaker"
  },
  {
    id: 5,
    name: "GREY SHAKER",
    image: greyShaker,
    description: "Versatile neutral for contemporary homes",
    category: "Shaker"
  },
  {
    id: 6,
    name: "NATURAL OAK",
    image: naturalOak,
    description: "Light wood finish for seamless sophistication",
    category: "Euro Frameless"
  },
  {
    id: 7,
    name: "WALNUT",
    image: walnut,
    description: "Rich wood grain for enduring charm",
    category: "Euro Frameless"
  },
  {
    id: 8,
    name: "GLOSS WHITE",
    image: glossWhite,
    description: "Modern seamless profile for elevated design",
    category: "Euro Frameless"
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

  // Single style for mobile
  const mobileStyle = styles[currentIndex];

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
          {/* Mobile: Single item */}
          <div className="md:hidden">
            <div className="text-center max-w-sm mx-auto">
              <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden mb-6 flex items-center justify-center p-8">
                <img
                  src={mobileStyle.image}
                  alt={mobileStyle.name}
                  className="h-full w-auto object-contain drop-shadow-xl"
                  data-testid={`img-style-${mobileStyle.id}`}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide">
                {mobileStyle.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">
                {mobileStyle.category}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {mobileStyle.description}
              </p>
              <Button
                variant="default"
                onClick={() => {
                  const element = document.getElementById('materials');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid={`button-view-${mobileStyle.id}`}
              >
                VIEW DETAILS
              </Button>
            </div>
          </div>

          {/* Desktop: Three items */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12">
            {visibleStyles.map((style, idx) => (
              <div key={`${style.id}-${idx}`} className="text-center">
                <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden mb-6 flex items-center justify-center p-8">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="h-full w-auto object-contain drop-shadow-xl"
                    data-testid={`img-style-${style.id}`}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-wide">
                  {style.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {style.category}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {style.description}
                </p>
                <Button
                  variant="default"
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
            className="absolute left-2 md:left-0 top-1/4 md:top-1/3 -translate-y-1/2 md:-translate-x-12 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
            onClick={prev}
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 md:right-0 top-1/4 md:top-1/3 -translate-y-1/2 md:translate-x-12 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
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
