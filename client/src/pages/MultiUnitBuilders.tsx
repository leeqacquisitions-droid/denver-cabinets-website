import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, Mail, Clock, CheckCircle2, ArrowLeft, Building2 } from "lucide-react";

export default function MultiUnitBuilders() {
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
              Multi-Unit & Builders — Denver Metro
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Specialized cabinet installation services for general contractors, property managers, and multi-unit developments throughout the Denver metro area. We understand the unique demands of commercial projects and deliver reliable, on-schedule installations at competitive rates.
            </p>

            <Card className="p-6 mb-8 bg-primary/5">
              <div className="flex gap-3 mb-4">
                <Building2 className="h-6 w-6 text-primary flex-shrink-0" />
                <h2 className="text-2xl font-semibold">Built for Scale</h2>
              </div>
              <p className="text-muted-foreground">
                Whether you're managing a single rental property upgrade or overseeing a 50-unit apartment complex renovation, our team has the capacity and experience to handle projects of any size while maintaining consistent quality across all units.
              </p>
            </Card>

            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Services for Professionals</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Volume pricing for multi-unit projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Coordinated scheduling with project timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Consistent quality across multiple installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Design renderings and cabinet sourcing assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Licensed and insured with general liability coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Clear communication and project management</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Who We Serve</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">General Contractors</h3>
                  <p className="text-sm text-muted-foreground">
                    Reliable subcontractor for new construction and renovation projects
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Property Managers</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick turnarounds for rental unit upgrades and tenant turnover
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Developers</h3>
                  <p className="text-sm text-muted-foreground">
                    Large-scale installations for multi-unit residential developments
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Home Flippers</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast, quality installations to maximize property value
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-8 bg-muted/30">
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <ol className="space-y-3 text-muted-foreground">
                <li><strong>1. Project Consultation:</strong> We review scope, timeline, and cabinet specifications</li>
                <li><strong>2. Detailed Quote:</strong> Transparent pricing with no hidden fees</li>
                <li><strong>3. Scheduling:</strong> Coordinated installation timeline that works with your project</li>
                <li><strong>4. Professional Installation:</strong> Expert crews complete installations efficiently</li>
                <li><strong>5. Final Walkthrough:</strong> Quality check and project completion confirmation</li>
              </ol>
            </Card>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Now</h3>
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
                Request Project Quote
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Get Your Project Quote</h2>
            <Card className="p-6">
              <p className="text-center text-muted-foreground mb-6">
                Call us at <a href="tel:+17202242908" className="text-primary font-semibold">(720) 224-2908</a> or email <a href="mailto:josue@denvercabinets.net" className="text-primary font-semibold">josue@denvercabinets.net</a> to discuss your multi-unit or builder project.
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
