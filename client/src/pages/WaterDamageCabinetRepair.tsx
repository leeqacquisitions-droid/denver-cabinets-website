import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, Mail, Clock, CheckCircle2, ArrowLeft, AlertTriangle } from "lucide-react";

export default function WaterDamageCabinetRepair() {
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-[120px]">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <Link href="/">
              <Button variant="ghost" className="mb-6" data-testid="button-back-home">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Water-Damage Cabinet Repair — Denver Metro
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Expert repair and replacement of water-damaged cabinets throughout the Denver metro area. When water damage strikes, fast professional response is critical. We assess, repair, and replace damaged cabinets to restore your kitchen or bathroom quickly and efficiently.
            </p>

            <Card className="p-6 mb-8 bg-destructive/10 border-destructive/20">
              <div className="flex gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                <h2 className="text-2xl font-semibold">Quick Response for Water Emergencies</h2>
              </div>
              <p className="text-muted-foreground">
                Water damage to cabinets requires immediate attention to prevent mold growth and structural deterioration. Our team responds quickly to assess damage and provide solutions that fit your timeline and budget.
              </p>
            </Card>

            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Water-Damage Services</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Complete damage assessment and inspection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cabinet repair or replacement recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Water-damaged cabinet removal and disposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Installation of new pre-manufactured replacement cabinets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Insurance claim documentation support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Fast turnaround times to minimize disruption</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">Common Water-Damage Scenarios</h2>
              <p className="text-muted-foreground mb-4">
                We've helped Denver metro homeowners and property managers recover from various water-damage situations:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dishwasher or refrigerator leaks</li>
                <li>• Pipe bursts and plumbing failures</li>
                <li>• Sink overflow and drain backups</li>
                <li>• Roof leaks affecting upper cabinets</li>
                <li>• Flooding from storms or water heater failures</li>
              </ul>
            </Card>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Emergency Contact</h3>
                <a href="tel:+17202242908" className="text-primary hover:underline">
                  (720) 224-2908
                </a>
              </Card>
              <Card className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:josue@denvercabinets.net" className="text-primary hover:underline text-sm">
                  josue@denvercabinets.net
                </a>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">Mon-Fri: 8am-5pm</p>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={scrollToContact} data-testid="button-get-quote">
                Get a Free Damage Assessment
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Schedule Your Free Assessment</h2>
            <Card className="p-6">
              <p className="text-center text-muted-foreground mb-6">
                Call us at <a href="tel:+17202242908" className="text-primary font-semibold">(720) 224-2908</a> or email <a href="mailto:josue@denvercabinets.net" className="text-primary font-semibold">josue@denvercabinets.net</a> for immediate assistance with water-damaged cabinets.
              </p>
              <p className="text-center text-sm text-muted-foreground">
                Serving Denver, Aurora, Broomfield, Fort Collins, and all surrounding Denver metro communities.
              </p>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
