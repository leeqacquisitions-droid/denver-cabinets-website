import { Card } from "@/components/ui/card";
import mountainTimber from "@assets/mountain-timber-door.png";
import espressoShaker from "@assets/espresso-shaker-door.png";
import modernSlateShaker from "@assets/modern-slate-shaker-door.png";
import whiteShaker from "@assets/white-shaker-door.png";
import greyShaker from "@assets/grey-shaker-door.png";
import naturalOak from "@assets/natural_oak_1763432240988.png";
import walnut from "@assets/walnut_1763432380510.png";
import matteWhite from "@assets/matte-white-euro-door.png";
import signatureBlue from "@assets/signature-blue-shaker-door.png";
import onyxShaker from "@assets/onyx-shaker-door.png";
import doveWhite from "@assets/dove-white-slim-shaker-door.png";
import saigeGreen from "@assets/saige-green-slim-shaker-door.png";

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
    name: "WHITE SHAKER",
    image: whiteShaker,
    description: "Timeless classic for any design style",
    category: "Shaker"
  },
  {
    id: 3,
    name: "GREY SHAKER",
    image: greyShaker,
    description: "Versatile neutral for contemporary homes",
    category: "Shaker"
  },
  {
    id: 4,
    name: "MODERN SLATE SHAKER",
    image: modernSlateShaker,
    description: "Contemporary charcoal for modern aesthetics",
    category: "Shaker"
  },
  {
    id: 5,
    name: "SIGNATURE BLUE SHAKER",
    image: signatureBlue,
    description: "Bold blue finish for distinctive style",
    category: "Shaker"
  },
  {
    id: 6,
    name: "ONYX SHAKER",
    image: onyxShaker,
    description: "Deep black for dramatic modern spaces",
    category: "Shaker"
  },
  {
    id: 7,
    name: "ESPRESSO SHAKER",
    image: espressoShaker,
    description: "Rich dark tones for sophisticated spaces",
    category: "Shaker"
  },
  {
    id: 8,
    name: "DOVE WHITE SLIM SHAKER",
    image: doveWhite,
    description: "Soft white with sleek profile",
    category: "Slim Shaker"
  },
  {
    id: 9,
    name: "SAIGE GREEN SLIM SHAKER",
    image: saigeGreen,
    description: "Earthy green for natural elegance",
    category: "Slim Shaker"
  },
  {
    id: 10,
    name: "NATURAL OAK",
    image: naturalOak,
    description: "Light wood finish for seamless sophistication",
    category: "Euro Frameless"
  },
  {
    id: 11,
    name: "WALNUT",
    image: walnut,
    description: "Rich wood grain for enduring charm",
    category: "Euro Frameless"
  },
  {
    id: 12,
    name: "MATTE WHITE",
    image: matteWhite,
    description: "Modern sophistication in matte white finish",
    category: "Euro Frameless"
  }
];

export function PopularStylesSection() {
  return (
    <section className="py-16 bg-background" id="styles">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-muted-foreground mb-2">
            HOT PRODUCTS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            OUR BEST SELLERS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular cabinet door styles - from classic shakers to modern frameless designs
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {styles.map((style) => (
            <Card
              key={style.id}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              data-testid={`card-style-${style.id}`}
            >
              <div className="aspect-[3/4] bg-muted/30 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-style-${style.id}`}
                />
              </div>
              <div className="p-3">
                <p className="text-xs text-muted-foreground mb-1">
                  {style.category}
                </p>
                <h3 className="text-sm font-bold tracking-wide mb-1">
                  {style.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {style.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see what you're looking for? We offer many more styles and finishes!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover-elevate active-elevate-2 h-10 px-6 font-medium"
            data-testid="button-contact-styles"
          >
            Contact Us for More Options
          </a>
        </div>
      </div>
    </section>
  );
}
