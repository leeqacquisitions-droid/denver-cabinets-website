import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users } from "lucide-react";
import ceoImg from "@assets/ceo of estate solutions_1760665714169.jpg";
import truckImg from "@assets/estate truck 2_1760665776405.jpg";

export function AboutSection() {
  const stats = [
    { icon: CheckCircle, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "450+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
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
              <img src={ceoImg} alt="Estate Solutions team" className="w-full h-auto" />
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl lg:text-3xl font-bold">
              Your Trusted Partner in Custom Cabinetry
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Estate Solutions, we specialize in transforming spaces with premium custom cabinetry. 
              Our team of experienced craftsmen takes pride in delivering exceptional quality and 
              personalized service to every client.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From initial consultation to final installation, we work closely with you to bring 
              your vision to life. Our commitment to excellence and attention to detail has made us 
              a trusted name in the Denver metro area.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Licensed & Insured</Badge>
              <Badge variant="secondary">Quality Guaranteed</Badge>
              <Badge variant="secondary">Free Consultations</Badge>
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

        <Card className="overflow-hidden p-0">
          <img src={truckImg} alt="Estate Solutions service vehicle" className="w-full h-auto" />
        </Card>
      </div>
    </section>
  );
}
