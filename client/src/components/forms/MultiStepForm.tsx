import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronRight, 
  Check, 
  Briefcase, 
  Home, 
  Clock, 
  MessageSquare,
  User,
  ArrowLeft
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  clientType: z.enum(["Residential", "Commercial", "Contractor"]),
  projectScope: z.enum(["Kitchen", "Bathroom", "Multi-Unit", "Other"]),
  timeline: z.enum(["ASAP", "1-3 Months", "Planning Phase"]),
  phone: z.string().min(10, "Phone number required for callback"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const STEPS = [
  { id: 1, title: "Introduction", icon: User },
  { id: 2, title: "Project Scope", icon: Home },
  { id: 3, title: "Timeline", icon: Clock },
  { id: 4, title: "Final Details", icon: MessageSquare },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, trigger, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientType: "Residential",
      projectScope: "Kitchen",
      timeline: "ASAP"
    }
  });

  const formData = watch();

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) isValid = await trigger(["name", "email"]);
    if (step === 2) isValid = await trigger(["clientType", "projectScope"]);
    if (step === 3) isValid = await trigger(["timeline"]);
    
    if (isValid) setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await fetch('https://hooks.zapier.com/hooks/catch/25504746/ukokpge/', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: "Denver Cabinets Website",
          leadType: data.clientType === "Commercial" || data.projectScope === "Multi-Unit" ? "HIGH VALUE" : "STANDARD"
        })
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0 })
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto estate-card-dark p-12 text-center">
        <div className="mb-6 inline-flex p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <Check className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
        <p className="text-slate-400 mb-8">
          Thanks, {formData.name}. The team at <span className="text-white font-medium">Denver Cabinets</span> is reviewing your details. 
          Expect a call at <span className="text-sky-400">{formData.phone}</span> shortly to schedule your measure.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
          Start New Quote
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="estate-card-dark overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* LEFT SIDE: Progress */}
        <div className="w-full md:w-1/3 bg-slate-900/80 p-8 flex flex-col justify-between border-r border-slate-800">
          <div>
            <div className="mb-8">
              <h4 className="text-sky-500 text-xs font-bold tracking-studio-sm uppercase mb-2">Start Your Project</h4>
              <h2 className="text-2xl font-serif text-white">Get a Quote</h2>
            </div>
            <div className="space-y-6">
              {STEPS.map((s) => (
                <div key={s.id} className="flex items-center gap-4 relative">
                  {s.id !== STEPS.length && (
                    <div className={`absolute left-4 top-8 w-0.5 h-6 ${step > s.id ? 'bg-sky-500' : 'bg-slate-800'}`} />
                  )}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${step === s.id ? 'bg-sky-500/10 border-sky-500 text-sky-400' : step > s.id ? 'bg-sky-500 border-sky-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                    {step > s.id ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                  </div>
                  <span className={`text-sm font-medium transition-colors ${step === s.id ? 'text-white' : 'text-slate-500'}`}>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-slate-500 mt-8"><p>Guaranteed response within 24 hours.</p></div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="w-full md:w-2/3 p-8 md:p-12 relative flex flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={step}>
              
              {step === 1 && (
                <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" custom={step} className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-slate-300 text-sm font-medium">What's your name?</label>
                    <Input {...register("name")} placeholder="First & Last Name" className="bg-slate-950/50 border-slate-800 h-12 text-lg text-white focus:ring-sky-500/50 focus:border-sky-500" data-testid="input-name" />
                    {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-300 text-sm font-medium">Email Address</label>
                    <Input {...register("email")} placeholder="you@example.com" className="bg-slate-950/50 border-slate-800 h-12 text-lg text-white focus:ring-sky-500/50 focus:border-sky-500" data-testid="input-email" />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" custom={step} className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-slate-300 text-sm font-medium">I am a...</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Residential', 'Contractor'].map((type) => (
                        <div key={type} onClick={() => { const e = { target: { value: type, name: 'clientType' } }; register('clientType').onChange(e); }} className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 text-center ${formData.clientType === type ? 'bg-sky-500/10 border-sky-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]' : 'bg-slate-950/30 border-slate-800 text-slate-400 hover:border-slate-600'}`} data-testid={`option-client-${type.toLowerCase()}`}>
                          <span className="font-medium">{type === 'Residential' ? 'Homeowner' : type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-300 text-sm font-medium">I need cabinets for...</label>
                    <select {...register("projectScope")} className="w-full bg-slate-950/50 border border-slate-800 rounded-md h-12 px-4 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none appearance-none" data-testid="select-project-scope">
                      <option value="Kitchen">Kitchen Remodel</option>
                      <option value="Bathroom">Bathroom Vanity</option>
                      <option value="Multi-Unit">Multi-Unit / Commercial</option>
                      <option value="Other">Garage / Pantry / Other</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" custom={step} className="space-y-6">
                  <label className="text-slate-300 text-sm font-medium">When are you looking to start?</label>
                  <div className="space-y-3">
                    {['ASAP', '1-3 Months', 'Planning Phase'].map((time) => (
                      <div key={time} onClick={() => { const e = { target: { value: time, name: 'timeline' } }; register('timeline').onChange(e); }} className={`cursor-pointer p-4 rounded-xl border flex items-center justify-between transition-all duration-200 ${formData.timeline === time ? 'bg-emerald-500/10 border-emerald-500 text-white' : 'bg-slate-950/30 border-slate-800 text-slate-400 hover:border-slate-600'}`} data-testid={`option-timeline-${time.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="font-medium">{time}</span>
                        {formData.timeline === time && <Check className="w-4 h-4 text-emerald-500" />}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" variants={slideVariants} initial="enter" animate="center" exit="exit" custom={step} className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-slate-300 text-sm font-medium">Phone Number (For Quote)</label>
                    <Input {...register("phone")} placeholder="(720) 555-0123" className="bg-slate-950/50 border-slate-800 h-12 text-lg text-white focus:ring-cyan-500/50 focus:border-cyan-500" data-testid="input-phone" />
                    {errors.phone && <p className="text-red-400 text-xs">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-300 text-sm font-medium">Any specific details?</label>
                    <Textarea {...register("message")} placeholder="I have the measurements ready..." className="bg-slate-950/50 border-slate-800 min-h-[100px] text-white focus:ring-cyan-500/50 focus:border-cyan-500" data-testid="textarea-message" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-800/50">
              {step > 1 ? (
                <Button type="button" variant="ghost" onClick={prevStep} className="text-slate-400 hover:text-white hover:bg-slate-800" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
              ) : (
                <div></div>
              )}
              {step < 4 ? (
                <Button type="button" onClick={nextStep} className="bg-sky-600 hover:bg-sky-500 text-white px-8 rounded-full" data-testid="button-next">
                  Next Step <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 text-white px-8 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300" data-testid="button-submit">
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
