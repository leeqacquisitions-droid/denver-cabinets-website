import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, PenTool, Hammer, CheckCircle } from "lucide-react";
import designImg from "@assets/custom design layouts_1760665730035.png";
import measureImg from "@assets/custom measurements_1760665744538.jpg";

const steps = [
  {
    id: 1,
    icon: Ruler,
    title: "Custom Measurements",
    description: "Precise measurements of your space to ensure perfect fit"
  },
  {
    id: 2,
    icon: PenTool,
    title: "Design & Planning",
    description: "Detailed layouts and 3D renderings for your approval"
  },
  {
    id: 3,
    icon: Hammer,
    title: "Expert Installation",
    description: "Professional installation by our skilled craftsmen"
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Quality Inspection",
    description: "Final walkthrough to ensure your complete satisfaction"
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to final installation, we ensure quality at every step
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex gap-4" data-testid={`process-step-${step.id}`}>
                <div className="flex-shrink-0">
                  <Badge className="h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            <Card className="overflow-hidden p-0">
              <img src={designImg} alt="Custom design layout" className="w-full h-auto" />
            </Card>
            <Card className="overflow-hidden p-0">
              <img src={measureImg} alt="Custom measurements" className="w-full h-auto" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
