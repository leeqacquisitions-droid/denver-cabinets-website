import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImage from "@assets/estate solution back face_1760721713621.jpg";
import bbbLogo from "@assets/IMG_3160_1762735445742.jpg";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src={logoImage} 
              alt="Estate Solutions" 
              className="h-32 w-auto mb-4 rounded-lg" 
            />
            <p className="text-primary-foreground/80 mb-4">
              Professional supplier, designer & installer of pre-manufactured cabinets serving the Denver metro area.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10 text-primary-foreground"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10 text-primary-foreground"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary-foreground/10 text-primary-foreground"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Portfolio", "Materials", "Process", "Reviews"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    data-testid={`footer-link-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <strong className="text-primary-foreground">Estate Solutions</strong>
              </li>
              <li>
                <a href="tel:+17202242908" className="hover:text-primary-foreground transition-colors" data-testid="footer-phone">
                  (720) 224-2908
                </a>
              </li>
              <li>
                <a href="mailto:josue@denvercabinets.net" className="hover:text-primary-foreground transition-colors" data-testid="footer-email">
                  josue@denvercabinets.net
                </a>
              </li>
              <li className="pt-2 font-semibold text-primary-foreground">Service Areas:</li>
              <li>Denver metro (30-60 mile radius)</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get design inspiration & tips
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                data-testid="input-newsletter"
              />
              <Button
                variant="secondary"
                data-testid="button-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a 
                href="https://www.bbb.org/us/co/denver/profile/kitchen-cabinets/estate-solution-llc-1296-1000188702"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90 transition-opacity shrink-0"
                data-testid="link-footer-bbb-profile"
              >
                <img 
                  src={bbbLogo} 
                  alt="BBB Accredited Business - Leave a Review" 
                  className="h-20 w-auto object-contain max-h-20"
                  data-testid="img-footer-bbb-logo"
                />
              </a>
              <div className="text-sm text-primary-foreground/90 text-center md:text-left">
                <p className="font-semibold">Estate Solutions • <a href="tel:+17202242908" className="hover:text-primary-foreground">(720) 224-2908</a></p>
                <p className="text-primary-foreground/80">
                  <a 
                    href="https://www.bbb.org/us/co/denver/profile/kitchen-cabinets/estate-solution-llc-1296-1000188702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors"
                    data-testid="link-footer-bbb-text"
                  >
                    BBB Accredited - Leave a Review
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/80">
              <button className="hover:text-primary-foreground transition-colors">Privacy Policy</button>
              <button className="hover:text-primary-foreground transition-colors">Terms of Service</button>
            </div>
          </div>
          <p className="text-primary-foreground/80 text-sm text-center">
            © {new Date().getFullYear()} Estate Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
