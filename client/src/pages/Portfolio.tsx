import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "@assets/black shaker 10_1760717059430.jpg";
import img2 from "@assets/black shaker 11_1760717063232.jpg";
import img3 from "@assets/white shaker 32_1760723026350.jpg";
import img4 from "@assets/white shaker 8_1760723013546.jpg";
import img5 from "@assets/white and brown shaker 22_1760722991073.jpg";
import img6 from "@assets/closet white shaker_1760717144739.jpg";
import img7 from "@assets/IMG_3037_1761700500526.jpg";
import img8 from "@assets/IMG_3038_1761700532373.jpg";
import img9 from "@assets/IMG_3049_1761701315198.jpg";
import img10 from "@assets/bathroom_white_shaker_2_1760717045213.webp";
import img11 from "@assets/bathroom_white_shaker_3_1760717051961.webp";
import img12 from "@assets/blue kitchen 2_1760717109551.jpg";

const portfolioProjects = [
  {
    image: img1,
    alt: "Black shaker kitchen cabinet installation Denver Colorado",
    caption: "Capitol Hill — Full kitchen install. Black shaker, soft-close, quartz tops. 5 days.",
    category: "Kitchen"
  },
  {
    image: img2,
    alt: "Modern black shaker kitchen cabinets Denver metro area",
    caption: "LoDo — Modern kitchen renovation. Black shaker with stainless hardware. 4 days.",
    category: "Kitchen"
  },
  {
    image: img3,
    alt: "White shaker kitchen cabinets professional installation Denver",
    caption: "Highlands Ranch — Kitchen remodel. White shaker, modern hardware. 4 days.",
    category: "Kitchen"
  },
  {
    image: img4,
    alt: "Clean white shaker kitchen installation Denver Colorado",
    caption: "Cherry Creek — Complete kitchen install. White shaker, premium finishes. 5 days.",
    category: "Kitchen"
  },
  {
    image: img5,
    alt: "Bright white shaker kitchen cabinets Denver metro",
    caption: "Lakewood — Kitchen upgrade. White shaker, soft-close drawers. 4 days.",
    category: "Kitchen"
  },
  {
    image: img6,
    alt: "Traditional white shaker kitchen Denver installation",
    caption: "Centennial — Full kitchen renovation. White shaker, classic design. 6 days.",
    category: "Kitchen"
  },
  {
    image: img7,
    alt: "Water damage kitchen cabinet restoration after completion Denver",
    caption: "Aurora — Water damage restoration. Complete cabinet replacement. 6 days.",
    category: "Water Damage"
  },
  {
    image: img8,
    alt: "Kitchen cabinet water damage repair Denver metro area",
    caption: "Thornton — Water damage repair. Cabinet removal and reinstall. 5 days.",
    category: "Water Damage"
  },
  {
    image: img9,
    alt: "Before water damaged kitchen cabinets Denver Colorado",
    caption: "Westminster — Emergency water damage. Full cabinet replacement. 6 days.",
    category: "Water Damage"
  },
  {
    image: img10,
    alt: "White shaker bathroom vanity installation Denver",
    caption: "Wash Park — Master bathroom. White shaker vanity cabinets. 2 days.",
    category: "Bathroom"
  },
  {
    image: img11,
    alt: "White shaker pantry cabinet system Denver Colorado",
    caption: "Parker — Pantry installation. White shaker, custom shelving. 3 days.",
    category: "Pantry"
  },
  {
    image: img12,
    alt: "Multi-unit kitchen cabinet installation Denver property management",
    caption: "Denver Metro — Multi-unit property. 12 kitchens, white shaker. 3 weeks.",
    category: "Multi-Unit"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-[120px]">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/">
              <Button variant="ghost" className="mb-6" data-testid="button-back-home">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
                Our Portfolio
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse our completed cabinet installation projects across the Denver metro area. From kitchens to water-damage repairs, see the quality craftsmanship we deliver.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover-elevate active-elevate-2"
                  data-testid={`portfolio-project-${index}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2">{project.category}</Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.caption}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="p-6 inline-block">
                <p className="text-muted-foreground mb-4">
                  Ready to start your cabinet project?
                </p>
                <Button size="lg" asChild>
                  <a href="tel:+17202242908">Call (720) 224-2908</a>
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
