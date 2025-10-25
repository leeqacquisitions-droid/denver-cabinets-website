import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clientType: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you! We'll be in touch soon.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          clientType: "",
          projectType: "",
          message: "",
        });
        setStep(0);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.error || "Failed to send. Please call us at (720) 224-2908.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send. Please call (720) 224-2908.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const questions = [
    {
      greeting: "👋 Hi! We're Estate Solutions,",
      question: "What's Your Name?",
      placeholder: "Type your answer here...",
      field: "name" as keyof typeof formData,
      type: "text",
    },
    {
      question: "Great! What's your email?",
      placeholder: "your.email@example.com",
      field: "email" as keyof typeof formData,
      type: "email",
    },
    {
      question: "And your phone number?",
      placeholder: "(720) 555-1234",
      field: "phone" as keyof typeof formData,
      type: "tel",
    },
    {
      question: "Are you a contractor, property manager, or homeowner?",
      placeholder: "e.g., General Contractor, Homeowner, etc.",
      field: "clientType" as keyof typeof formData,
      type: "text",
    },
    {
      question: "What type of project are you working on?",
      placeholder: "e.g., Kitchen remodel, New construction, etc.",
      field: "projectType" as keyof typeof formData,
      type: "text",
    },
    {
      question: "Tell us a bit about your project",
      placeholder: "Type your project details here...",
      field: "message" as keyof typeof formData,
      type: "textarea",
    },
  ];

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;

  return (
    <section id="contact" className="py-0 bg-black text-white min-h-screen flex items-center">
      <div className="w-full max-w-3xl mx-auto px-6">
        <div className="min-h-screen flex items-center justify-center">
          {/* Conversational Form */}
          <div className="w-full py-16">
            <div className="max-w-2xl mx-auto">
              {currentQuestion.greeting && (
                <p className="text-xl mb-2 text-white/80">{currentQuestion.greeting}</p>
              )}
              <h2 className="font-heading text-2xl lg:text-4xl font-bold mb-8">
                {currentQuestion.question}
              </h2>

              <div className="space-y-4">
                {currentQuestion.type === "textarea" ? (
                  <Textarea
                    value={formData[currentQuestion.field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [currentQuestion.field]: e.target.value })
                    }
                    placeholder={currentQuestion.placeholder}
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/50 text-lg focus-visible:ring-0 focus-visible:border-cyan-500 resize-none"
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
                    className="bg-transparent border-0 border-b border-white/30 rounded-none text-white placeholder:text-white/50 text-lg focus-visible:ring-0 focus-visible:border-cyan-500 h-12"
                    data-testid={`input-${currentQuestion.field}`}
                  />
                )}

                {isLastStep ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData[currentQuestion.field]}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-md"
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={!formData[currentQuestion.field]}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-md"
                    data-testid="button-next"
                  >
                    OK
                  </Button>
                )}

                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-white/60 hover:text-white ml-4"
                    data-testid="button-back"
                  >
                    ← Back
                  </button>
                )}
              </div>

              {/* Progress indicator */}
              <div className="flex gap-2 mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
