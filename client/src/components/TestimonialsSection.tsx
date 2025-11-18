import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import reviewImg from "@assets/excellent reviews_1760666657230.jpg";

const testimonials: any[] = [];

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

        <div className="mb-12 max-w-3xl mx-auto">
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={reviewImg} alt="Happy clients with Estate Solutions team" className="w-full h-full object-cover" />
            </div>
          </Card>
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
