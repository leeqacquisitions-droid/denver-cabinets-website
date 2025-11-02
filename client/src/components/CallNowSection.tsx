import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CallNowSection() {
  return (
    <section id="call-now" className="py-16 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Call us today for a free consultation and quote
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a 
            href="tel:+17202242908"
            className="text-2xl sm:text-3xl font-semibold text-foreground hover:text-primary transition-colors"
            data-testid="link-phone"
          >
            (720) 224-2908
          </a>
          <Button
            size="lg"
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white min-h-12 text-lg w-full sm:w-auto"
            data-testid="button-call-now"
          >
            <a href="tel:+17202242908" className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
