import { Card } from "@/components/ui/card";

export function ContactSection() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const project = formData.get('project') as string;
    
    const subject = `Cabinet Quote Request from ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\n\nProject Details:\n${project}`;
    
    const mailtoLink = `mailto:josue@denvercabinets.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    e.preventDefault();
  };

  return (
    <section id="quote" className="py-16 bg-background">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Get a Quote</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Let's discuss your cabinet project
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-black text-white border-white/10 p-8 lg:p-12">
            <div className="max-w-xl mx-auto">
              {currentQuestion.greeting && (
                <p className="text-lg mb-2 text-white/80">{currentQuestion.greeting}</p>
              )}
              <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-6">
                {currentQuestion.question}
              </h3>

              <div className="space-y-4">
                {currentQuestion.type === "textarea" ? (
                  <Textarea
                    value={formData[currentQuestion.field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [currentQuestion.field]: e.target.value })
                    }
                    placeholder={currentQuestion.placeholder}
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/50 text-base focus-visible:ring-0 focus-visible:border-cyan-500 resize-none"
                    rows={3}
                    data-testid={`input-${currentQuestion.field}`}
                  />
                ) : (
                  <Input
                    type={currentQuestion.type}
                    value={formData[currentQuestion.field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [currentQuestion.field]: e.target.value })
                    }
                    placeholder={currentQuestion.placeholder}
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/50 text-base focus-visible:ring-0 focus-visible:border-cyan-500 h-12"
                    data-testid={`input-${currentQuestion.field}`}
                  />
                )}

                {isLastStep ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData[currentQuestion.field]}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-5 text-base font-semibold rounded-md"
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={!formData[currentQuestion.field]}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-5 text-base font-semibold rounded-md"
                    data-testid="button-next"
                  >
                    OK
                  </Button>
                )}

                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-white/60 hover:text-white ml-4 text-sm"
                    data-testid="button-back"
                  >
                    ← Back
                  </button>
                )}
              </div>

              {/* Progress indicator */}
              <div className="flex gap-2 mt-6">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 flex-1 rounded ${
                      index <= step ? "bg-cyan-500" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
