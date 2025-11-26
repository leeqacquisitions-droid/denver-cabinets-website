import MultiStepForm from "@/components/forms/MultiStepForm";

export function ContactSection() {
  return (
    <section id="quote" className="py-20 lg:py-28 bg-slate-950/95">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sky-500 text-xs font-bold tracking-studio-sm uppercase mb-3">
            Ready to Start?
          </p>
          <h2 className="text-slate-50 tracking-tight text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us about your project and we'll schedule a free measure
          </p>
        </div>
        
        <MultiStepForm />
      </div>
    </section>
  );
}
