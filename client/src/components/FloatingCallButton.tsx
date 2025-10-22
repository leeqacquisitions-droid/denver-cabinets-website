import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <Button
      size="lg"
      asChild
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg rounded-full h-14 w-14 p-0 md:hidden"
      data-testid="button-floating-call"
    >
      <a href="tel:+17202242908" aria-label="Call Estate Solutions">
        <Phone className="h-6 w-6" />
      </a>
    </Button>
  );
}
