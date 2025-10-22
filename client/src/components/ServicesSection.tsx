import { Card } from "@/components/ui/card";
import { Package, Pencil, Wrench, Home } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Cabinet Supply",
    description: "Quality pre-manufactured cabinets from trusted suppliers. We source the best materials for your kitchen, bathroom, or pantry project."
  },
  {
    icon: Pencil,
    title: "Design Renderings",
    description: "Professional 3D renderings to visualize your space. Free 30-minute in-home consultation to plan your perfect layout."
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert assembly and installation services. Most kitchens completed in 4-6 days with meticulous attention to detail."
  },
  {
    icon: Home,
    title: "Full-Service Solutions",
    description: "From design to installation, we handle everything. Serving contractors, property managers, and homeowners."
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 hover-elevate"
              data-testid={`service-${index}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
