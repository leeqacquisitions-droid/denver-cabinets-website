import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import reviewImg from "@assets/excellent reviews_1760666657230.jpg";

const testimonials = [
  {
    id: 1,
    name: "Edward Powers",
    project: "Kitchen Design & Installation",
    rating: 5,
    text: "You did a fantastic job from the design all the way through to the finish! Thank you again!"
  },
  {
    id: 2,
    name: "Property Manager",
    project: "Multi-Unit Renovation",
    rating: 5,
    text: "Estate Solutions has become our go-to contractor for all cabinetry installations. Their work quality and reliability are unmatched in the Denver metro area."
  },
  {
    id: 3,
    name: "General Contractor",
    project: "New Construction Homes",
    rating: 5,
    text: "We've subcontracted Estate Solutions for over a dozen projects. They consistently deliver quality work on time and within budget. Highly recommend for contractors!"
  },
  {
    id: 4,
    name: "Homeowner",
    project: "Kitchen & Bathroom Remodel",
    rating: 5,
    text: "From design to installation, the team was exceptional. They transformed our outdated spaces into beautiful, functional areas we love."
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-card">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6" data-testid={`testimonial-${testimonial.id}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.project}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
