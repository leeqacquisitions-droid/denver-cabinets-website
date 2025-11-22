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
    <footer>
      {/* Main Footer - Dark Background */}
      <div className="bg-slate-950/95 text-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <img 
                src={logoImage} 
                alt="Estate Solutions" 
                className="h-32 w-auto mb-4 rounded-lg" 
              />
              <p className="text-slate-300 mb-4">
                Professional supplier, designer & installer of pre-manufactured cabinets serving the Denver metro area.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-800 text-slate-100"
                  data-testid="link-facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-800 text-slate-100"
                  data-testid="link-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-slate-800 text-slate-100"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-50">Quick Links</h3>
              <ul className="space-y-2">
                {["Portfolio", "Materials", "Process", "Reviews"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-300 hover:text-slate-100 transition-colors"
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
              <h3 className="font-semibold mb-4 text-slate-50">Contact</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <strong className="text-slate-100">Estate Solutions</strong>
                </li>
                <li>
                  <a href="tel:+17202242908" className="hover:text-slate-100 transition-colors" data-testid="footer-phone">
                    (720) 224-2908
                  </a>
                </li>
                <li>
                  <a href="mailto:josue@denvercabinets.net" className="hover:text-slate-100 transition-colors" data-testid="footer-email">
                    josue@denvercabinets.net
                  </a>
                </li>
                <li className="pt-2 font-semibold text-slate-100">Service Areas:</li>
                <li>Denver metro (30-60 mile radius)</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4 text-slate-50">Newsletter</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Get design inspiration & tips
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400"
                  data-testid="input-newsletter"
                />
                <Button
                  className="bg-sky-600 hover:bg-sky-700 text-white"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Brand Blue Accent */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* BBB Badge & Links */}
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
                  className="h-16 w-auto object-contain max-h-16 bg-white rounded px-2 py-1"
                  data-testid="img-footer-bbb-logo"
                />
              </a>
              <div className="text-sm text-center md:text-left">
                <a 
                  href="https://www.bbb.org/us/co/denver/profile/kitchen-cabinets/estate-solution-llc-1296-1000188702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium"
                  data-testid="link-footer-bbb-text"
                >
                  BBB Accredited - Leave a Review
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm">
                © {new Date().getFullYear()} Estate Solutions. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs mt-1 justify-center md:justify-end">
                <button className="hover:underline">Privacy Policy</button>
                <button className="hover:underline">Terms of Service</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
