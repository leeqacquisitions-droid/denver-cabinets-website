import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import reviewImg from "@assets/excellent reviews_1760666657230.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah R.",
    location: "Broomfield",
    rating: 5,
    text: "Clean install at a fair price. The shaker doors look fantastic in our kitchen."
  },
  {
    id: 2,
    name: "Mike T.",
    location: "Southlands (property manager)",
    rating: 5,
    text: "They handled design renderings and install on schedule. Our tenants love the update."
  },
  {
    id: 3,
    name: "Lauren M.",
    location: "Denver (Highlands)",
    rating: 5,
    text: "Responsive, professional, and the cabinet fit was spot on. Would hire again."
  },
  {
    id: 4,
    name: "Daniel K.",
    location: "Fort Collins",
    rating: 5,
    text: "Great communication and value. Garage storage cabinets came out sturdy and clean."
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Client Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by contractors, property managers, and homeowners throughout Denver
          </p>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden">
            <img src={reviewImg} alt="Happy clients with Estate Solutions team" className="w-full h-auto" />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`testimonial-${testimonial.id}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white min-h-12 text-lg"
            data-testid="button-call-quote"
          >
            <a href="tel:+17202242908">
              <Phone className="h-5 w-5 mr-2" />
              Call (720) 224-2908 for a free quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
