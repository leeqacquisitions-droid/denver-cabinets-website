import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    project: "Kitchen Renovation",
    rating: 5,
    text: "Estate Solutions transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of work exceeded our expectations!"
  },
  {
    id: 2,
    name: "Michael Chen",
    project: "Pantry Installation",
    rating: 5,
    text: "Professional, punctual, and precise. Our custom pantry is not only beautiful but incredibly functional. Highly recommend!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    project: "Bathroom Cabinets",
    rating: 5,
    text: "From design to installation, the team was exceptional. They listened to our needs and delivered exactly what we wanted."
  },
  {
    id: 4,
    name: "David Thompson",
    project: "Kitchen & Pantry",
    rating: 5,
    text: "Best quality work in the metro area! The craftsmanship is outstanding and they completed the project on time and within budget."
  },
];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Client Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
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
