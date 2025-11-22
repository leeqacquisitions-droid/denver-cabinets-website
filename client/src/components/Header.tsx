import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import logoImage from "@assets/estate solutions logo _1760720586570.jpg";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location === "/";

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
    { label: "Home", id: "home", type: "scroll" as const },
    { label: "Portfolio", id: "portfolio", type: "scroll" as const },
    { label: "Recent Installations", id: "recent-installations", type: "page" as const, isNew: true },
    { label: "Materials", id: "materials", type: "scroll" as const },
    { label: "Process", id: "process", type: "scroll" as const },
    { label: "Reviews", id: "reviews", type: "scroll" as const },
    { label: "About", id: "about", type: "scroll" as const },
    { label: "Contact", id: "quote", type: "scroll" as const },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        isScrolled ? "bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-black/10 shadow-sm" : "bg-white/70 dark:bg-background/70 backdrop-blur-sm border-b border-black/10 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Fixed left */}
          <button
            onClick={() => scrollToSection("home")}
            className="hover-elevate active-elevate-2 px-2 py-1 rounded-md flex-shrink-0"
            data-testid="link-home"
          >
            <img src={logoImage} alt="Estate Solutions" className="h-24 md:h-28 w-auto rounded-lg" />
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-1 flex-1">
            {navItems.slice(1).map((item) => {
              if (item.type === "page") {
                return (
                  <Link key={item.id} href={`/${item.id}`}>
                    <Button
                      variant="ghost"
                      data-testid={`link-${item.id}`}
                      className="hover-elevate active-elevate-2 min-h-12 gap-2"
                    >
                      {item.label}
                      {item.isNew && (
                        <Badge className="text-[10px] px-1.5 py-0 h-4" data-testid="badge-new-desktop">
                          NEW
                        </Badge>
                      )}
                    </Button>
                  </Link>
                );
              }
              if (!isHomePage) {
                return (
                  <Link key={item.id} href={`/#${item.id}`}>
                    <Button
                      variant="ghost"
                      data-testid={`link-${item.id}`}
                      className="hover-elevate active-elevate-2 min-h-12"
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              }
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  data-testid={`link-${item.id}`}
                  className="hover-elevate active-elevate-2 min-h-12"
                >
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Right side buttons - Fixed right */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <ThemeToggle />
            {isHomePage ? (
              <Button
                onClick={() => scrollToSection("quote")}
                data-testid="button-get-quote"
                className="hidden md:inline-flex"
              >
                Get Quote
              </Button>
            ) : (
              <Link href="/#quote">
                <Button
                  data-testid="button-get-quote"
                  className="hidden md:inline-flex"
                >
                  Get Quote
                </Button>
              </Link>
            )}
            
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
              {navItems.slice(1).map((item) => {
                if (item.type === "page") {
                  return (
                    <Link key={item.id} href={`/${item.id}`}>
                      <Button
                        variant="ghost"
                        data-testid={`link-mobile-${item.id}`}
                        className="justify-start hover-elevate active-elevate-2 min-h-12 text-base w-full gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                        {item.isNew && (
                          <Badge className="text-[10px] px-1.5 py-0 h-4" data-testid="badge-new-mobile">
                            NEW
                          </Badge>
                        )}
                      </Button>
                    </Link>
                  );
                }
                if (!isHomePage) {
                  return (
                    <Link key={item.id} href={`/#${item.id}`}>
                      <Button
                        variant="ghost"
                        data-testid={`link-mobile-${item.id}`}
                        className="justify-start hover-elevate active-elevate-2 min-h-12 text-base w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    data-testid={`link-mobile-${item.id}`}
                    className="justify-start hover-elevate active-elevate-2 min-h-12 text-base"
                  >
                    {item.label}
                  </Button>
                );
              })}
              {isHomePage ? (
                <Button
                  onClick={() => scrollToSection("quote")}
                  data-testid="button-mobile-quote"
                  className="mt-2 min-h-12 text-base"
                >
                  Get Quote
                </Button>
              ) : (
                <Link href="/#quote">
                  <Button
                    data-testid="button-mobile-quote"
                    className="mt-2 min-h-12 text-base w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
