import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical kitchen install take?",
    answer: "Most kitchens are installed in 4–6 days depending on size, material lead times, and site conditions."
  },
  {
    question: "Do you remove and dispose of old cabinets?",
    answer: "Yes. We can include demo and haul-away in your quote."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. We carry up-to-date licensing and general liability insurance. Proof available upon request."
  },
  {
    question: "What services do you provide?",
    answer: "We specialize in professional installation of pre-manufactured cabinets for kitchens, bathrooms, and pantries. We also offer water-damage cabinet repair. We work with general contractors, property managers, and homeowners throughout the Denver metro area."
  },
  {
    question: "Do you build custom cabinets?",
    answer: "We assemble and install pre-manufactured cabinets. Depending on your layout, we can provide semi-custom solutions in the field to ensure a perfect fit for your space."
  },
  {
    question: "Do you work with contractors?",
    answer: "Absolutely! We're a preferred subcontracting partner for general contractors throughout the Denver area. We provide reliable, on-time installations for new construction and remodel projects."
  },
  {
    question: "Can you handle multi-unit properties?",
    answer: "Yes! We work extensively with property managers on multi-unit residential properties, including apartment buildings and commercial properties."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Denver metro area and surrounding communities in Colorado."
  },
  {
    question: "How do I get started?",
    answer: "Contact us at (720) 224-2908 or josue@denvercabinets.net to schedule your free on-site consultation. We'll assess your space and provide a detailed quote."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 tracking-tight text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our cabinet installation services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="estate-card-light overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <Accordion type="single" collapsible>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-0 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline text-slate-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
