import { Card } from "@/components/ui/card";
import { Award, Clock, Users } from "lucide-react";
import qualityCraftsmanship from "@assets/white and brown shaker 22_1760722991073.jpg";
import fastReliable from "@assets/white shaker 8_1760723013546.jpg";
import contractorPreferred from "@assets/white shaker 32_1760723026350.jpg";

const features = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Expert installation of pre-manufactured cabinets with attention to every detail. We ensure perfect alignment and professional finishing.",
    image: qualityCraftsmanship
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    description: "Most kitchens completed in 4-6 days. We respect your timeline and deliver consistent, on-schedule results contractors trust.",
    image: fastReliable
  },
  {
    icon: Users,
    title: "Contractor Preferred",
    description: "Trusted subcontracting partner for general contractors and property managers. We handle new construction, remodels, and multi-unit properties.",
    image: contractorPreferred
  }
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Why Choose Estate Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional cabinet supplier, and installation services you can depend on
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2"
              data-testid={`feature-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
