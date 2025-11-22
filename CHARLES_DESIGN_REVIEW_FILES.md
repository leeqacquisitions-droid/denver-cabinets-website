# 🎨 DENVERCABINETS.NET - DESIGN REVIEW FILES FOR CHARLES

**Estate Solutions - Cabinet Supplier & Installer**  
**Denver Metro Area**  
**Prepared for: Creative Director Charles**

---

## 📋 TABLE OF CONTENTS

1. [App.tsx](#1-apptsx) - Global Layout & Routing
2. [Home.tsx](#2-hometsx) - Homepage Structure
3. [Header.tsx](#3-headertsx) - Navigation Component (Navbar)
4. [Footer.tsx](#4-footertsx) - Footer Component
5. [HeroSection.tsx](#5-herosectiontsx) - Hero Section Component
6. [index.css](#6-indexcss) - Global Styles & Design System
7. [Portfolio Components](#7-portfolio-components) - Gallery & Project Components

---

## 1. APP.TSX
**Purpose:** Global layout wrapper, routing, providers, and theme setup

```tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import RecentInstallations from "@/pages/RecentInstallations";
import KitchenCabinetInstallation from "@/pages/KitchenCabinetInstallation";
import WaterDamageCabinetRepair from "@/pages/WaterDamageCabinetRepair";
import MultiUnitBuilders from "@/pages/MultiUnitBuilders";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/recent-installations" component={RecentInstallations} />
      <Route path="/services/kitchen-cabinet-installation" component={KitchenCabinetInstallation} />
      <Route path="/services/water-damage-cabinet-repair" component={WaterDamageCabinetRepair} />
      <Route path="/services/multi-unit-builders" component={MultiUnitBuilders} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
```

**Notes for Charles:**
- Uses Wouter for routing (lightweight React Router alternative)
- QueryClientProvider wraps app for data fetching
- TooltipProvider enables tooltips globally
- Toaster for toast notifications

---

## 2. HOME.TSX
**Purpose:** Homepage rendering and section order

```tsx
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesSection } from "@/components/ServicesSection";
import { PopularStylesSection } from "@/components/PopularStylesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { MaterialsSection } from "@/components/MaterialsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { CallNowSection } from "@/components/CallNowSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen pt-[120px] overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <PopularStylesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <MaterialsSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <CallNowSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
```

**Notes for Charles:**
- **pt-[120px]** accounts for fixed header height
- **Section Order:**
  1. Hero + Trust Badges
  2. Services
  3. Popular Styles (13 cabinet door styles)
  4. Portfolio (40+ completed projects)
  5. Why Choose Us
  6. Materials
  7. Process
  8. About
  9. FAQ
  10. Call Now CTA
  11. Testimonials
  12. Contact Form

---

## 3. HEADER.TSX
**Purpose:** Navigation, mobile menu, and header animations

```tsx
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
```

**Notes for Charles:**
- **Fixed header** with scroll detection
- **Backdrop blur effect** when scrolled
- **Logo:** h-24 (96px) mobile, h-28 (112px) desktop
- **Navigation:** Centered flex layout
- **"NEW" badge** on Recent Installations
- **Smart navigation:** Scrolls on homepage, links to homepage sections when on other pages
- **Mobile menu:** Slide-down with hamburger icon

**Typography & Spacing:**
- Gap between nav items: `gap-1` (4px)
- Button min-height: `min-h-12` (48px)
- Padding: `px-6 py-4`

---

## 4. FOOTER.TSX
**Purpose:** Footer with contact info, links, BBB accreditation

```tsx
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
```

**Notes for Charles:**
- **Background:** Primary blue color
- **Layout:** 4-column grid (responsive)
- **BBB Integration:** Logo and review links
- **Contact Info:**
  - Phone: (720) 224-2908
  - Email: josue@denvercabinets.net
  - Service Area: Denver metro (30-60 mile radius)
- **Social Icons:** Facebook, Instagram, LinkedIn

---

## 5. HEROSECTION.TSX
**Purpose:** Homepage hero with background image and CTAs

```tsx
import { Button } from "@/components/ui/button";
import heroImage from "@assets/NEED TO SELL YOUR HOME LOOK AT THIS_1760666956139.webp";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Denver cabinet supplier & installations team for homeowners and contractors
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
            Licensed & insured. 4–6 day kitchen installs. Free on-site estimates. Professional pre-manufactured cabinet supply and installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              asChild
              data-testid="button-hero-call"
              className="text-base sm:text-lg min-h-12 sm:min-h-auto"
            >
              <a href="tel:+17202242908">Call Now: (720) 224-2908</a>
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("quote")}
              data-testid="button-hero-quote"
              className="text-base sm:text-lg min-h-12 sm:min-h-auto"
            >
              Get a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              data-testid="button-hero-portfolio"
              className="text-base sm:text-lg min-h-12 sm:min-h-auto backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Notes for Charles:**
- **Background Image:** Kitchen cabinet installation photo
- **Dark Overlay:** 40% black (`bg-black/40`)
- **Height:** 70vh minimum
- **Heading Hierarchy:**
  - H1: 3xl → 4xl → 5xl → 6xl (responsive)
  - Subheading: base → lg → xl → 2xl
- **3 CTAs:**
  1. Call Now (primary)
  2. Get Free Quote (primary)
  3. View Portfolio (outline with backdrop blur)

---

## 6. INDEX.CSS
**Purpose:** Global styles, color palette, spacing, typography, design system

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Prevent horizontal scroll on mobile */
html, body {
  overflow-x: hidden;
  width: 100%;
}

/* Enable smooth scrolling globally */
html {
  scroll-behavior: smooth;
}

/* LIGHT MODE */
:root {
  --button-outline: rgba(0,0,0, .10);
  --badge-outline: rgba(0,0,0, .05);

  /* Automatic computation of border around primary / danger buttons */
  --opaque-button-border-intensity: -8; /* In terms of percentages */

  /* Backgrounds applied on top of other backgrounds when hovered/active */
  --elevate-1: rgba(0,0,0, .03);
  --elevate-2: rgba(0,0,0, .08);

  --background: 0 0% 100%;

  --foreground: 220 45% 15%;

  --border: 220 10% 88%;

  --card: 45 15% 98%;

  --card-foreground: 220 40% 20%;

  --card-border: 45 12% 92%;

  --sidebar: 220 12% 96%;

  --sidebar-foreground: 220 45% 18%;

  --sidebar-border: 220 10% 90%;

  --sidebar-primary: 233 48% 45%;

  --sidebar-primary-foreground: 0 0% 100%;

  --sidebar-accent: 220 15% 92%;

  --sidebar-accent-foreground: 233 45% 30%;

  --sidebar-ring: 233 60% 50%;

  --popover: 220 15% 94%;

  --popover-foreground: 233 45% 30%;

  --popover-border: 220 12% 88%;

  --primary: 233 48% 45%;

  --primary-foreground: 0 0% 100%;

  --secondary: 220 15% 90%;

  --secondary-foreground: 220 45% 20%;

  --muted: 220 12% 93%;

  --muted-foreground: 220 30% 35%;

  --accent: 25 15% 91%;

  --accent-foreground: 25 40% 25%;

  --destructive: 0 65% 32%;

  --destructive-foreground: 0 20% 98%;

  --input: 220 20% 70%;
  --ring: 233 60% 50%;
  --chart-1: 233 48% 45%;
  --chart-2: 25 60% 40%;
  --chart-3: 200 50% 35%;
  --chart-4: 45 55% 35%;
  --chart-5: 280 40% 35%;

  --font-sans: Inter, sans-serif;
  --font-serif: Playfair Display, serif;
  --font-mono: Menlo, monospace;
  --radius: .5rem; /* 8px */
  --shadow-2xs: 0px 2px 0px 0px hsl(220 20% 20% / 0.00);
  --shadow-xs: 0px 2px 0px 0px hsl(220 20% 20% / 0.00);
  --shadow-sm: 0px 2px 0px 0px hsl(220 20% 20% / 0.00), 0px 1px 2px -1px hsl(220 20% 20% / 0.00);
  --shadow: 0px 2px 0px 0px hsl(220 20% 20% / 0.00), 0px 1px 2px -1px hsl(220 20% 20% / 0.00);
  --shadow-md: 0px 2px 0px 0px hsl(220 20% 20% / 0.00), 0px 2px 4px -1px hsl(220 20% 20% / 0.00);
  --shadow-lg: 0px 2px 0px 0px hsl(220 20% 20% / 0.00), 0px 4px 6px -1px hsl(220 20% 20% / 0.00);
  --shadow-xl: 0px 2px 0px 0px hsl(220 20% 20% / 0.00), 0px 8px 10px -1px hsl(220 20% 20% / 0.00);
  --shadow-2xl: 0px 2px 0px 0px hsl(220 20% 20% / 0.00);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --button-outline: rgba(255,255,255, .10);
  --badge-outline: rgba(255,255,255, .05);

  --opaque-button-border-intensity: 9;  /* In terms of percentages */

  /* Backgrounds applied on top of other backgrounds when hovered/active */
  --elevate-1: rgba(255,255,255, .04);
  --elevate-2: rgba(255,255,255, .09);

  --background: 220 20% 10%;

  --foreground: 45 10% 95%;

  --border: 220 15% 20%;

  --card: 220 15% 15%;

  --card-foreground: 45 10% 92%;

  --card-border: 220 15% 22%;

  --sidebar: 220 18% 13%;

  --sidebar-foreground: 45 12% 90%;

  --sidebar-border: 220 15% 20%;

  --sidebar-primary: 233 48% 50%;

  --sidebar-primary-foreground: 0 0% 100%;

  --sidebar-accent: 220 15% 18%;

  --sidebar-accent-foreground: 233 30% 75%;

  --sidebar-ring: 233 60% 60%;

  --popover: 220 18% 16%;

  --popover-foreground: 233 20% 80%;

  --popover-border: 220 15% 23%;

  --primary: 233 48% 50%;

  --primary-foreground: 0 0% 100%;

  --secondary: 220 15% 21%;

  --secondary-foreground: 45 15% 88%;

  --muted: 220 15% 19%;

  --muted-foreground: 220 10% 65%;

  --accent: 25 18% 20%;

  --accent-foreground: 25 20% 85%;

  --destructive: 0 65% 30%;

  --destructive-foreground: 0 15% 96%;

  --input: 220 15% 35%;
  --ring: 233 60% 60%;
  --chart-1: 233 50% 65%;
  --chart-2: 25 65% 65%;
  --chart-3: 200 55% 65%;
  --chart-4: 45 60% 70%;
  --chart-5: 280 45% 70%;

  --shadow-2xs: 0px 2px 0px 0px hsl(220 20% 5% / 0.00);
  --shadow-xs: 0px 2px 0px 0px hsl(220 20% 5% / 0.00);
  --shadow-sm: 0px 2px 0px 0px hsl(220 20% 5% / 0.00), 0px 1px 2px -1px hsl(220 20% 5% / 0.00);
  --shadow: 0px 2px 0px 0px hsl(220 20% 5% / 0.00), 0px 1px 2px -1px hsl(220 20% 5% / 0.00);
  --shadow-md: 0px 2px 0px 0px hsl(220 20% 5% / 0.00), 0px 2px 4px -1px hsl(220 20% 5% / 0.00);
  --shadow-lg: 0px 2px 0px 0px hsl(220 20% 5% / 0.00), 0px 4px 6px -1px hsl(220 20% 5% / 0.00);
  --shadow-xl: 0px 2px 0px 0px hsl(220 20% 5% / 0.00), 0px 8px 10px -1px hsl(220 20% 5% / 0.00);
  --shadow-2xl: 0px 2px 0px 0px hsl(220 20% 5% / 0.00);
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
}

/**
 * ELEVATION SYSTEM
 * Automatic contrast adjustment for hover/active states
 * 
 * Usage:
 * <element className="hover-elevate" />
 * <element className="active-elevate-2" />
 * <element className="toggle-elevate data-[state=on]:toggle-elevated" />
 */
@layer utilities {
  /* Hide ugly search cancel button in Chrome until we can style it properly */
  input[type="search"]::-webkit-search-cancel-button {
    @apply hidden;
  }

  /* Placeholder styling for contentEditable div */
  [contenteditable][data-placeholder]:empty::before {
    content: attr(data-placeholder);
    color: hsl(var(--muted-foreground));
    pointer-events: none;
  }

  .no-default-hover-elevate {}
  .no-default-active-elevate {}

  .toggle-elevate::before,
  .toggle-elevate-2::before {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    z-index: -1;
  }

  .toggle-elevate.toggle-elevated::before {
    background-color: var(--elevate-2);
  }

  .border.toggle-elevate::before {
    inset: -1px;
  }

  .hover-elevate:not(.no-default-hover-elevate),
  .active-elevate:not(.no-default-active-elevate),
  .hover-elevate-2:not(.no-default-hover-elevate),
  .active-elevate-2:not(.no-default-active-elevate) {
    position: relative;
    z-index: 0;
  }

  .hover-elevate:not(.no-default-hover-elevate)::after,
  .active-elevate:not(.no-default-active-elevate)::after,
  .hover-elevate-2:not(.no-default-hover-elevate)::after,
  .active-elevate-2:not(.no-default-active-elevate)::after {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    z-index: 999;
  }

  .hover-elevate:hover:not(.no-default-hover-elevate)::after,
  .active-elevate:active:not(.no-default-active-elevate)::after {
    background-color: var(--elevate-1);
  }

  .hover-elevate-2:hover:not(.no-default-hover-elevate)::after,
  .active-elevate-2:active:not(.no-default-active-elevate)::after {
    background-color: var(--elevate-2);
  }

  .border.hover-elevate:not(.no-hover-interaction-elevate)::after,
  .border.active-elevate:not(.no-active-interaction-elevate)::after,
  .border.hover-elevate-2:not(.no-hover-interaction-elevate)::after,
  .border.active-elevate-2:not(.no-active-interaction-elevate)::after,
  .border.hover-elevate:not(.no-hover-interaction-elevate)::after {
    inset: -1px;
  }
}
```

**DESIGN SYSTEM NOTES FOR CHARLES:**

### Color Palette:
- **Primary:** `233 48% 45%` (Blue - Brand color)
- **Background:** `0 0% 100%` (White)
- **Foreground:** `220 45% 15%` (Dark blue-grey text)
- **Card:** `45 15% 98%` (Off-white)
- **Muted:** `220 12% 93%` (Light grey)
- **Accent:** `25 15% 91%` (Warm grey/tan)

### Typography:
- **Font Sans:** Inter
- **Font Serif:** Playfair Display
- **Font Mono:** Menlo

### Spacing:
- **Base spacing:** `0.25rem` (4px)
- **Border radius:** `0.5rem` (8px)

### Elevation System:
- **hover-elevate:** Subtle overlay on hover (3% opacity)
- **active-elevate-2:** Stronger overlay on click (8% opacity)
- **toggle-elevate:** For toggle buttons

### Shadows:
- Currently minimal (set to 0 opacity)
- Can be adjusted for depth

### Dark Mode:
- Full dark mode support via `.dark` class
- Automatic color inversion
- Primary stays consistent

---

## 7. PORTFOLIO COMPONENTS

### A. PortfolioSection.tsx (Homepage Portfolio)
**Purpose:** Main portfolio gallery with filtering and lightbox

**Key Features:**
- 40+ completed project images
- Category filters: All, Kitchens, Bathrooms, Pantries, Living Rooms, Mudrooms, Commercial
- Lightbox for full-size viewing
- "Show More" functionality
- Contact form integration

**Layout:**
- Grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop)
- Cards with 4:3 aspect ratio images
- Hover scale effect (`group-hover:scale-105`)
- Number badge on each image

**Categories:**
1. **Kitchens** (majority) - Various shaker styles, two-tone, navy, sage green
2. **Bathrooms** - Vanities
3. **Pantries** - Storage solutions
4. **Living Rooms** - Entertainment centers (before/after)
5. **Mudrooms** - Organization systems
6. **Commercial** - Happy Cones ice cream shop installation

---

### B. RecentInstallations.tsx (Dedicated Page)
**Purpose:** November 2025 completed projects showcase

**Featured Projects (6 total):**

1. **Custom Mudroom & Utility Space**
   - Wood grain shaker cabinets
   - Built-in bench seating
   - Shiplap accent wall

2. **Professional Design Consultation**
   - On-site 3D design process
   - Shows consultation with homeowners

3. **Modern Black Shaker Kitchen**
   - Sleek black cabinets
   - Modern hardware
   - Contemporary design

4. **Two-Tone Kitchen Installation**
   - White upper cabinets
   - Sage green lower cabinets
   - Brass hardware accents

5. **Two-Tone Kitchen Completion**
   - Same project, different angle
   - Shows island and full layout
   - Installation completed in 6 days

6. **White Built-In Window Seat**
   - Custom white shaker built-in
   - Window seat with storage
   - Open shelving + drawers

**Layout:**
- "NEW" badge at top
- 3-column grid (responsive)
- Each card shows:
  - 4:3 aspect ratio image
  - Project title
  - Description
  - Location (Denver Metro)
  - Date (November 2025)
- Lightbox feature (click to enlarge)
- CTA section at bottom

---

## 🎯 KEY DESIGN ELEMENTS TO MAINTAIN

### Brand Identity:
- **Primary Blue:** HSL(233, 48%, 45%) - Professional, trustworthy
- **Clean, Modern Aesthetic:** Minimal shadows, flat design
- **Professional Photography:** Real project photos (not stock)

### User Experience:
- **Mobile-First:** Responsive at all breakpoints
- **Fast Navigation:** Fixed header with smooth scroll
- **Clear CTAs:** Phone number and quote form prominent
- **Trust Signals:** BBB accreditation, testimonials, real photos

### Typography Hierarchy:
- **H1:** 3xl → 6xl (responsive)
- **H2:** 3xl → 5xl
- **H3:** xl → 2xl
- **Body:** base → lg
- **Small:** sm (14px)

### Spacing Consistency:
- **Section padding:** py-12 → py-16
- **Container:** max-w-7xl mx-auto px-6
- **Card padding:** p-6
- **Gap between elements:** gap-4 → gap-8

---

## 📞 CONTACT INFORMATION

**Business:** Estate Solutions  
**Phone:** (720) 224-2908  
**Email:** josue@denvercabinets.net  
**Service Area:** Denver metro (30-60 mile radius)  
**BBB:** https://www.bbb.org/us/co/denver/profile/kitchen-cabinets/estate-solution-llc-1296-1000188702

---

## 🚀 CURRENT FEATURES

✅ 40+ portfolio images with filtering  
✅ 13 cabinet door styles showcase  
✅ Recent Installations page (NEW)  
✅ Lightbox image viewer  
✅ Mobile-responsive navigation  
✅ Dark mode support  
✅ BBB integration  
✅ Contact forms  
✅ SEO-optimized alt tags  
✅ Smooth scroll navigation  
✅ Professional photography  

---

**END OF DESIGN REVIEW DOCUMENT**

*Prepared for Creative Director Charles*  
*Estate Solutions - DenverCabinets.net*  
*November 22, 2025*
