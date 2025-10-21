import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import logoImage from "@assets/estate solutions logo _1760720586570.jpg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Materials", id: "materials" },
    { label: "Process", id: "process" },
    { label: "Reviews", id: "reviews" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:gap-4">
          <button
            onClick={() => scrollToSection("home")}
            className="hover-elevate active-elevate-2 px-2 py-1 rounded-md md:justify-self-start"
            data-testid="link-home"
          >
            <img src={logoImage} alt="Estate Solutions" className="h-24 md:h-28 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 justify-self-center">
            {navItems.slice(1).map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`link-${item.id}`}
                className="hover-elevate active-elevate-2 min-h-12"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:justify-self-end">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-get-quote"
              className="hidden md:inline-flex"
            >
              Get Quote
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate active-elevate-2 min-h-12 min-w-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  data-testid={`link-mobile-${item.id}`}
                  className="justify-start hover-elevate active-elevate-2 min-h-12 text-base"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                data-testid="button-mobile-quote"
                className="mt-2 min-h-12 text-base"
              >
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
