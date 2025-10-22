import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We specialize in professional installation of pre-manufactured cabinets for kitchens, bathrooms, and pantries. We work with general contractors, property managers, and homeowners throughout the Denver metro area."
  },
  {
    question: "Do you build custom cabinets?",
    answer: "We assemble and install pre-manufactured cabinets. Depending on your layout, we can provide semi-custom solutions in the field to ensure a perfect fit for your space."
  },
  {
    question: "What is your process?",
    answer: "We start with a free 30-minute in-home design consultation to assess your space and needs. Once approved, we require a 70% down payment for materials, with the remaining 30% due upon job completion."
  },
  {
    question: "How long does installation take?",
    answer: "Depending on the kitchen size and complexity, most installations are completed in 4-6 days. We'll provide a specific timeline during your consultation."
  },
  {
    question: "Do you work with contractors?",
    answer: "Absolutely! We're a preferred subcontracting partner for general contractors throughout the Denver area. We provide reliable, on-time installations for new construction and remodel projects."
  },
  {
    question: "Can you handle multi-unit properties?",
    answer: "Yes! We work extensively with property managers on multi-unit residential properties, including apartment buildings, sobriety houses, and commercial properties."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Denver metro area and surrounding communities in Colorado."
  },
  {
    question: "How do I get started?",
    answer: "Contact us at (720) 224-2908 or josue@denvercabinets.net to schedule your free 30-minute in-home design consultation. We'll assess your space and provide a detailed quote."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods. A 70% deposit is required upfront to secure materials, with the remaining 30% due upon project completion."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured for your protection and peace of mind."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our cabinet installation services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
