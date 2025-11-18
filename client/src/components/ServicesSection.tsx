import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Package, Hammer, Ruler } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Cabinet Supplier",
    description: "High-quality pre-manufactured cabinets for kitchens, bathrooms, and all spaces. Wide selection of styles, finishes, and sizes to fit any project.",
    href: "/services/cabinet-supplier"
  },
  {
    icon: Hammer,
    title: "Cabinet Installations",
    description: "Expert installation with 4-6 day kitchen completion. Licensed and insured professionals ensuring precision fit and lasting quality.",
    href: "/services/cabinet-installations"
  },
  {
    icon: Ruler,
    title: "On-site Consultation with 3D Renderings and Layout",
    description: "Free on-site visits with professional design renderings and detailed 3D layouts to visualize your space before installation.",
    href: "/services/consultation-design"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cabinet solutions from design to installation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card
                className="p-6 rounded-md shadow-sm transition-shadow duration-300 hover-elevate active-elevate-2 cursor-pointer h-full"
                data-testid={`service-${index}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
