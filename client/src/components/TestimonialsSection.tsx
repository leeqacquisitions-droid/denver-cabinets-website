import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Phone } from "lucide-react";
import reviewImg from "@assets/excellent reviews_1760666657230.jpg";

const testimonials: any[] = [];

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 tracking-tight text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by contractors, property managers, and homeowners throughout Denver
          </p>
        </div>

        <div className="mb-12 max-w-3xl mx-auto">
          <Card className="estate-card overflow-hidden p-0" data-testid="card-client-review">
            {/* Review meta strip */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 text-slate-100">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.8 Rating</span>
              </div>
              <span className="text-sm text-slate-300">Homeowner review • Denver, CO</span>
            </div>
            
            {/* Review photo */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={reviewImg} 
                alt="Happy clients with Estate Solutions team" 
                className="w-full h-full object-cover" 
                data-testid="img-client-review"
              />
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
