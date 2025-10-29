import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <Button
      size="lg"
      asChild
      className="fixed bottom-20 right-4 z-40 bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl rounded-full h-16 w-16 p-0 md:hidden"
      data-testid="button-floating-call"
    >
      <a href="tel:+17202242908" aria-label="Call Estate Solutions">
        <Phone className="h-7 w-7" />
      </a>
    </Button>
  );
}
