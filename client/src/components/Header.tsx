import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial state based on current scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/90 border-b border-white/5 backdrop-blur-xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo - Text Only */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex flex-col leading-tight hover:opacity-90 transition-opacity flex-shrink-0"
          data-testid="link-home"
        >
          <span className="text-xl sm:text-2xl font-serif font-bold text-slate-50 tracking-tight">
            DENVER<span className="text-sky-500">.</span> Cabinets
          </span>
          <span className={`text-[10px] tracking-widest uppercase text-slate-400 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            Premium Supply & Install
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.slice(1).map((item) => {
            if (item.type === "page") {
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  data-testid={`link-${item.id}`}
                  className="text-slate-100/80 hover:text-slate-100 hover:bg-slate-800/60 gap-2"
                  asChild
                >
                  <Link href={`/${item.id}`}>
                    {item.label}
                    {item.isNew && (
                      <Badge className="text-[9px] px-1.5 py-0 h-3.5 bg-sky-400/20 text-sky-200 border-sky-300/30" data-testid="badge-new-desktop">
                        NEW
                      </Badge>
                    )}
                  </Link>
                </Button>
              );
            }
            if (!isHomePage) {
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  data-testid={`link-${item.id}`}
                  className="text-slate-100/80 hover:text-slate-100 hover:bg-slate-800/60"
                  asChild
                >
                  <Link href={`/#${item.id}`}>{item.label}</Link>
                </Button>
              );
            }
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`link-${item.id}`}
                className="text-slate-100/80 hover:text-slate-100 hover:bg-slate-800/60"
              >
                {item.label}
              </Button>
            );
          })}
        </nav>

        {/* Call CTA + Mobile Menu */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:+17202242908"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-studio-sm text-emerald-200 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400/20 hover:border-emerald-300/80 transition-all"
            data-testid="button-call-cta"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            Call (720) 224-2908
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-200 hover:bg-slate-800/60"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.slice(1).map((item) => {
              if (item.type === "page") {
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    data-testid={`link-mobile-${item.id}`}
                    className="w-full justify-start text-slate-200 hover:bg-slate-800/60 gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                  >
                    <Link href={`/${item.id}`}>
                      {item.label}
                      {item.isNew && (
                        <Badge className="text-[9px] px-1.5 py-0 h-3.5 bg-sky-400/20 text-sky-200 border-sky-300/30" data-testid="badge-new-mobile">
                          NEW
                        </Badge>
                      )}
                    </Link>
                  </Button>
                );
              }
              if (!isHomePage) {
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    data-testid={`link-mobile-${item.id}`}
                    className="w-full justify-start text-slate-200 hover:bg-slate-800/60"
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                  >
                    <Link href={`/#${item.id}`}>{item.label}</Link>
                  </Button>
                );
              }
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  data-testid={`link-mobile-${item.id}`}
                  className="w-full justify-start text-slate-200 hover:bg-slate-800/60"
                >
                  {item.label}
                </Button>
              );
            })}

            {/* Mobile Call CTA */}
            <a
              href="tel:+17202242908"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/60 bg-emerald-400/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-studio-sm text-emerald-200 shadow-lg shadow-emerald-500/20"
              data-testid="button-mobile-call-cta"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Call (720) 224-2908
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
