import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

// Import all portfolio images
import img1 from "@assets/black shaker 10_1760717059430.jpg";
import img2 from "@assets/black shaker 11_1760717063232.jpg";
import img3 from "@assets/black shaker 21_1760717067317.jpg";
import img4 from "@assets/black shaker 30_1760717071196.jpg";
import img5 from "@assets/black shaker 37_1760717075950.jpg";
import img6 from "@assets/black sherk 44_1760717081772.jpg";
import img7 from "@assets/black_shaker_1760717088967.webp";
import img8 from "@assets/black_shaker1_1760717094685.webp";
import img9 from "@assets/black_shaker4_1760717101818.webp";
import img10 from "@assets/blue kitchen 2_1760717109551.jpg";
import img11 from "@assets/blue kitchen_1760717117533.jpg";
import img12 from "@assets/brown shaker 31_1760717130103.jpg";
import img13 from "@assets/brown shaker 38_1760717138399.jpg";
import img14 from "@assets/bathrom shaker 41_1760717039753.jpg";
import img15 from "@assets/bathroom_white_shaker_2_1760717045213.webp";
import img16 from "@assets/bathroom_white_shaker_3_1760717051961.webp";
import img17 from "@assets/closet white shaker_1760717144739.jpg";
import img18 from "@assets/best quality work in the metro area _1760665661487.jpg";
import img19 from "@assets/black and white crown molding mix_1760665666821.jpg";
import img20 from "@assets/black kitchen white counter tops_1760665672520.jpg";
import img21 from "@assets/black kitchen with grey top_1760665677958.jpg";
import img22 from "@assets/black pantries_1760665684123.jpg";
import img23 from "@assets/blue kiotchen white counter top_1760665691434.jpg";
import img24 from "@assets/brown kicthen white counter top_1760665705715.jpg";
import img25 from "@assets/Brown kitchen with white top_1760665709979.jpg";
import img26 from "@assets/clean grey cabinets_1760665718488.jpg";
import img27 from "@assets/clean sleek affordable_1760665724960.jpg";
import img28 from "@assets/custom dog cabinet with bowl_1760665736157.jpg";
import img29 from "@assets/custom window cabinets_1760665751120.jpg";
import img30 from "@assets/denver 2025 selling property_1760665756666.webp";
import img31 from "@assets/exclelent black shaker combo with black marble counter tops_1760666667882.webp";
import img32 from "@assets/grey remodel kicthen_1760666782648.jpg";
import img33 from "@assets/grey remodel with island in middle_1760666799098.jpg";
import img34 from "@assets/high end bathroom sink_1760666806401.jpg";
import img35 from "@assets/kitchens that last_1760666876778.jpg";
import img36 from "@assets/need counter tops for these new cabinets here we are _1760666920187.jpg";
import img37 from "@assets/need remodeling assitance he we are_1760666930898.jpg";
import img38 from "@assets/NEED TO SELL YOUR HOME LOOK AT THIS_1760666956139.webp";

// Additional completed projects
import img39 from "@assets/blue kiotchen white counter top_1760665698336.jpg";
import img40 from "@assets/design 2 installed_1760665770904.jpg";

const portfolioItems = [
  { id: 1, image: img1, category: "Kitchens", title: "Onyx Shaker with Natural Oak" },
  { id: 2, image: img2, category: "Kitchens", title: "Onyx Shaker & Wood Kitchen" },
  { id: 3, image: img3, category: "Kitchens", title: "Onyx Shaker Island Kitchen" },
  { id: 4, image: img4, category: "Kitchens", title: "White & Onyx Shaker Combo" },
  { id: 5, image: img5, category: "Kitchens", title: "Onyx Shaker Kitchen Island" },
  { id: 6, image: img6, category: "Kitchens", title: "Two-Tone Onyx Shaker" },
  { id: 7, image: img7, category: "Custom Features", title: "Onyx Shaker Bar Install" },
  { id: 8, image: img8, category: "Kitchens", title: "Luxury Onyx Shaker Kitchen" },
  { id: 9, image: img9, category: "Kitchens", title: "Modern Onyx Shaker Design" },
  { id: 10, image: img10, category: "Kitchens", title: "White & Signature Blue Shaker" },
  { id: 11, image: img11, category: "Kitchens", title: "Signature Blue Shaker Kitchen" },
  { id: 12, image: img12, category: "Kitchens", title: "Espresso Shaker Kitchen" },
  { id: 13, image: img13, category: "Kitchens", title: "Mountain Timber Shaker" },
  { id: 14, image: img14, category: "Bathrooms", title: "Espresso Shaker Bathroom" },
  { id: 15, image: img15, category: "Bathrooms", title: "White Shaker Bath Vanity" },
  { id: 16, image: img16, category: "Bathrooms", title: "White Shaker Bathroom" },
  { id: 17, image: img17, category: "Custom Features", title: "White Shaker Closet System" },
  { id: 18, image: img18, category: "Kitchens", title: "Onyx Shaker Kitchen" },
  { id: 19, image: img19, category: "Custom Features", title: "Onyx & White Crown Molding" },
  { id: 20, image: img20, category: "Kitchens", title: "Onyx Shaker & White Counters" },
  { id: 21, image: img21, category: "Kitchens", title: "Onyx Shaker Grey Countertops" },
  { id: 22, image: img22, category: "Pantries", title: "Onyx Shaker Pantry" },
  { id: 23, image: img23, category: "Kitchens", title: "Signature Blue Shaker Design" },
  { id: 24, image: img24, category: "Kitchens", title: "Espresso Shaker Kitchen" },
  { id: 25, image: img25, category: "Kitchens", title: "Mountain Timber & White" },
  { id: 26, image: img26, category: "Kitchens", title: "Grey Shaker Island Kitchen" },
  { id: 27, image: img27, category: "Kitchens", title: "Contemporary Grey Shaker" },
  { id: 28, image: img28, category: "Custom Features", title: "Custom Pet Feeding Station" },
  { id: 29, image: img29, category: "Custom Features", title: "White Shaker Window Seat" },
  { id: 30, image: img30, category: "Bathrooms", title: "White Shaker Vanity" },
  { id: 31, image: img31, category: "Kitchens", title: "Onyx Shaker Marble Counters" },
  { id: 32, image: img32, category: "Kitchens", title: "Grey Shaker Remodel" },
  { id: 33, image: img33, category: "Kitchens", title: "Grey Shaker with Island" },
  { id: 34, image: img34, category: "Bathrooms", title: "White Shaker High-End Vanity" },
  { id: 35, image: img35, category: "Kitchens", title: "Durable White Shaker" },
  { id: 36, image: img36, category: "Kitchens", title: "Espresso Shaker Countertop" },
  { id: 37, image: img37, category: "Kitchens", title: "White Shaker Remodel" },
  { id: 38, image: img38, category: "Kitchens", title: "White Shaker Property Value" },
  { id: 39, image: img39, category: "Kitchens", title: "Signature Blue Shaker Kitchen" },
  { id: 40, image: img40, category: "Kitchens", title: "Grey Shaker Installation" },
];

const categories = ["All", "Kitchens", "Bathrooms", "Pantries", "Custom Features"];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completed cabinet installations for new builds, remodels, and property renovations
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover-elevate active-elevate-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer group hover-elevate active-elevate-2"
              onClick={() => setLightboxImage(item)}
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <Badge className="mb-2">{item.category}</Badge>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

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
                className="w-full h-auto max-h-[80vh] object-contain rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="mt-4 text-center">
                <Badge className="mb-2">{lightboxImage.category}</Badge>
                <h3 className="text-white text-xl font-semibold">{lightboxImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
