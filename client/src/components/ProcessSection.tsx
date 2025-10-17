import { Card } from "@/components/ui/card";
import { Phone, Home, Wrench, CheckCircle } from "lucide-react";
import spec from "@assets/custom spec 1_1760717165052.png";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Consultation",
    description: "Schedule a 30-minute in-home design consultation. We'll assess your space, discuss your vision, and answer all your questions."
  },
  {
    icon: Home,
    number: "02",
    title: "Design & Quote",
    description: "Receive a detailed quote and design plan. We'll help you select the perfect pre-manufactured cabinets for your space and budget."
  },
  {
    icon: Wrench,
    number: "03",
    title: "Professional Installation",
    description: "Our expert team installs your cabinets with precision. Most kitchens are completed in 4-6 days, depending on size."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Final Inspection",
    description: "We conduct a thorough quality inspection and walkthrough to ensure everything meets our high standards and your expectations."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consultation to completion, we make cabinet installation seamless
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-6 relative"
                data-testid={`process-step-${index}`}
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-muted-foreground/10">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden p-0">
              <img src={spec} alt="Cabinet specifications and layout" className="w-full h-auto" />
            </Card>
            <Card className="p-6 bg-primary text-primary-foreground">
              <h3 className="font-semibold text-xl mb-2">Payment Structure</h3>
              <p className="text-primary-foreground/90 mb-4">
                70% down payment to secure materials<br />
                Remaining 30% due upon completion
              </p>
              <p className="text-sm text-primary-foreground/80">
                Timeline: Most kitchens completed in 4-6 days
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
