import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChefHat, Droplet, Building2 } from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Cabinet Installation",
    description: "Professional installation of pre-manufactured kitchen cabinets with 4-6 day completion.",
    href: "/services/kitchen-cabinet-installation"
  },
  {
    icon: Droplet,
    title: "Water-Damage Cabinet Repair",
    description: "Expert repair and replacement of water-damaged cabinets throughout the Denver metro.",
    href: "/services/water-damage-cabinet-repair"
  },
  {
    icon: Building2,
    title: "Multi-Unit & Builders",
    description: "Specialized services for contractors, property managers, and multi-unit developments.",
    href: "/services/multi-unit-builders"
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
