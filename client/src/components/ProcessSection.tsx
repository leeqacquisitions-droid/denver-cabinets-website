import { Card } from "@/components/ui/card";
import { Phone, Home, Wrench, CheckCircle, ArrowRight } from "lucide-react";

import schematicImg from "@assets/1000000849_1760743497193.png";
import renderImg from "@assets/image000006_1760743565538.jpg";
import finishedImg from "@assets/IMG_2906 3_1760743650722.jpg";

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

const projectPhases = [
  {
    title: "Schematic",
    image: schematicImg,
    description: "Detailed layout planning"
  },
  {
    title: "3D Render",
    image: renderImg,
    description: "Visualization before installation"
  },
  {
    title: "Finished Project",
    image: finishedImg,
    description: "Completed installation"
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 tracking-tight text-3xl md:text-4xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From consultation to completion, we make cabinet installation seamless
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="estate-card-light p-6 relative hover-elevate transition-all duration-300"
                data-testid={`process-step-${index}`}
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-slate-900/5">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/10 mb-4">
                    <step.icon className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="estate-card-light p-6 bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200/50">
              <h3 className="font-semibold text-xl mb-2 text-slate-900">Payment Structure</h3>
              <p className="text-slate-700 mb-4">
                70% down payment to secure materials<br />
                Remaining 30% due upon completion
              </p>
              <p className="text-sm text-slate-600">
                Timeline: Most kitchens completed in 4-6 days
              </p>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projectPhases.map((phase, index) => (
            <div key={index} className="relative" data-testid={`project-phase-${index}`}>
              <Card className="estate-card-light overflow-hidden p-0 h-full hover-elevate transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/10 text-sky-600 font-bold mb-3">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-lg mb-1 text-slate-900">{phase.title}</h4>
                  <p className="text-sm text-slate-600">{phase.description}</p>
                </div>
              </Card>
              {index < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 z-10">
                  <div className="bg-white rounded-full p-2 shadow-md border border-slate-200/70">
                    <ArrowRight className="h-5 w-5 text-sky-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="estate-card-light inline-block p-4">
            <p className="text-sm font-medium text-slate-700">
              Projects like this are completed on a weekly basis
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
