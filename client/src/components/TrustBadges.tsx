import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, ClipboardCheck, Sparkles } from "lucide-react";
import bbbLogo from "@assets/stock_images/better_business_bure_c543fd0c.jpg";

const badges = [
  {
    icon: CheckCircle2,
    text: "Licensed & Insured"
  },
  {
    icon: Clock,
    text: "4–6 Day Kitchen Installs"
  },
  {
    icon: ClipboardCheck,
    text: "Free On-Site Estimates"
  },
  {
    icon: Sparkles,
    text: "Clean Job Sites"
  }
];

export function TrustBadges() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center"
              data-testid={`trust-badge-${index}`}
            >
              <badge.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 pt-6 border-t border-border">
          <a 
            href="https://www.bbb.org/us/co/denver/profile/kitchen-cabinets/estate-solution-llc-1296-1000188702"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover-elevate active-elevate-2 p-3 rounded-md transition-all"
            data-testid="link-bbb-profile"
          >
            <img 
              src={bbbLogo} 
              alt="Better Business Bureau Accredited" 
              className="h-16 w-16 object-contain"
              data-testid="img-bbb-logo"
            />
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground" data-testid="text-bbb-accreditation">
                Accredited by the Better Business Bureau
              </p>
              <p className="text-sm text-muted-foreground">
                since November 6, 2025
              </p>
              <p className="text-xs text-primary font-semibold mt-1">
                Leave a Review →
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
