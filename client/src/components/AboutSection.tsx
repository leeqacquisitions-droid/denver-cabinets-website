import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Building2 } from "lucide-react";
import ceoImg from "@assets/ceo of estate solutions_1760665714169.jpg";
import truckImg from "@assets/image000000 5_1760745097178.jpg";
import logoImg from "@assets/estate solutions logo _1760720586570.jpg";

export function AboutSection() {
  const stats = [
    { icon: CheckCircle, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "450+", label: "Happy Clients" },
  ];

  const clientTypes = [
    { icon: Building2, title: "General Contractors", description: "Reliable subcontracting partner for new construction and remodels" },
    { icon: Building2, title: "Property Managers", description: "Multi-unit installations for residential and commercial properties" },
    { icon: Users, title: "Homeowners", description: "Professional installation for kitchen, bathroom, and pantry renovations" },
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">About Estate Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving the Denver metro area with quality craftsmanship and professional service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={ceoImg} alt="Estate Solutions team" className="w-full h-full object-cover" />
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold">
              Your Trusted Partner in Cabinet Installation
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Estate Solutions specializes in fast, reliable shaker and flat panel cabinets. We provide 
              professional assembly and installation of pre-manufactured cabinets for general contractors, 
              property managers, and homeowners. Whether you're working on new construction, remodeling 
              existing properties, or upgrading multi-unit buildings, we deliver exceptional quality 
              on every project.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our experienced team understands the demands of contractors and the expectations of 
              property owners. We provide reliable, timely installations that meet your specifications 
              and budget, making us the preferred subcontracting partner in the Denver metro area.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Licensed & Insured</Badge>
              <Badge variant="secondary">Contractor Preferred</Badge>
              <Badge variant="secondary">Quality Guaranteed</Badge>
              <Badge variant="secondary">On-Time Delivery</Badge>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center" data-testid={`stat-${index}`}>
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-center mb-8">Who We Serve</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {clientTypes.map((client, index) => (
              <Card key={index} className="p-6 text-center">
                <client.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold text-lg mb-2">{client.title}</h4>
                <p className="text-muted-foreground text-sm">{client.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={truckImg} alt="Estate Solutions service vehicle" className="w-full h-full object-cover" />
              {/* Corner watermark logo */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <img src={logoImg} alt="Estate Solutions" className="h-16 sm:h-20 md:h-24 w-auto opacity-70 drop-shadow-lg rounded-lg" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
