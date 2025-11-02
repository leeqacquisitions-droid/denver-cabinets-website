import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import img1 from "@assets/black shaker 10_1760717059430.jpg";
import img2 from "@assets/white shaker 32_1760723026350.jpg";
import img3 from "@assets/IMG_3037_1761700500526.jpg";

const recentProjects = [
  {
    image: img1,
    alt: "Black shaker kitchen cabinet installation Denver Colorado",
    caption: "Capitol Hill — Full kitchen install. Black shaker, soft-close, quartz tops. 5 days."
  },
  {
    image: img2,
    alt: "White shaker kitchen cabinets professional installation Denver",
    caption: "Highlands Ranch — Kitchen remodel. White shaker, modern hardware. 4 days."
  },
  {
    image: img3,
    alt: "Water damage kitchen cabinet restoration after completion Denver",
    caption: "Aurora — Water damage restoration. Complete cabinet replacement. 6 days."
  }
];

export function PortfolioTeaser() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Recent Cabinet Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            See our latest installations across the Denver metro area
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2"
              data-testid={`portfolio-teaser-${index}`}
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <span className="inline-flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer" data-testid="link-full-portfolio">
              View full portfolio
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
