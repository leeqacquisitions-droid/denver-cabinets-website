import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImage from "@assets/estate solution back face_1760721713621.jpg";

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
                <a href="tel:+17202242908" className="hover:text-primary-foreground transition-colors">
                  (720) 224-2908
                </a>
              </li>
              <li className="pt-2 font-semibold text-primary-foreground">Service Areas:</li>
              <li>Denver</li>
              <li>Southlands</li>
              <li>Fort Collins</li>
              <li>Broomfield</li>
              <li className="text-sm">All Denver metro (30-60 min radius)</li>
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

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Estate Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/80">
            <button className="hover:text-primary-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-primary-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
