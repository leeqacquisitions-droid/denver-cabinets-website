import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/NEED TO SELL YOUR HOME LOOK AT THIS_1760666956139.webp";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      {/* Background image + gradient */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Denver kitchen cabinetry"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.14),_transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
        {/* Left copy */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300 tracking-studio-sm uppercase">
              The Denver Standard
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-50 leading-tight tracking-tight">
            Estate Solutions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 italic">
              Denver Cabinets Premium Supplier and Installations
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            We don't do custom. We do efficient, premium pre-manufactured installs for homeowners and investors who want it done right.
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300/80">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>BBB Accredited • A+ Rating</span>
            </div>
            <span className="hidden sm:inline h-4 w-px bg-slate-600" />
            <span>40+ completed projects in the Denver metro</span>
          </div>

          {/* CTAs - Lead generation prioritized */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button className="btn-primary" data-testid="button-hero-quote" asChild>
              <a href="#quote">Schedule a Free Measure</a>
            </Button>

            <Button className="btn-outline-light" data-testid="button-hero-portfolio" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>

            <a
              href="tel:+17202242908"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-300/90 hover:text-slate-50 transition-colors"
              data-testid="button-hero-call"
            >
              Or call <span className="font-semibold">(720) 224-2908</span>
            </a>
          </div>
        </div>

        {/* Right visual card */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl border border-white/5 bg-slate-950/70 backdrop-blur-xl shadow-[0_28px_80px_rgba(15,23,42,0.85)] overflow-hidden">
            <div className="aspect-[4/3]">
              <img
                src={heroImage}
                alt="Custom Denver kitchen cabinetry installation"
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* overlay badge row */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 text-xs flex-wrap">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-slate-200 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Installed by Denver Cabinets • Colorado</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 text-[11px] text-sky-100 backdrop-blur-sm">
                <span>Avg. project timeline:</span>
                <span className="font-semibold">4–6 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
