import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, Mail, Clock, CheckCircle2, ArrowLeft } from "lucide-react";

export default function KitchenCabinetInstallation() {
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
              Kitchen Cabinet Installation — Denver Metro
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Professional installation of pre-manufactured kitchen cabinets throughout the Denver metro area. Our expert installers complete most kitchen projects in just 4–6 days, with meticulous attention to detail and quality craftsmanship.
            </p>

            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Complete kitchen cabinet installation with pre-manufactured cabinets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Professional assembly and precise installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>4–6 day completion timeline for most kitchens</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Free on-site estimates and design consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Licensed and insured professional installers</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-8 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Estate Solutions?</h2>
              <p className="text-muted-foreground mb-4">
                With years of experience serving Denver metro homeowners, contractors, and property managers, we deliver reliable, high-quality cabinet installation services. We specialize in working with pre-manufactured cabinets from trusted suppliers, ensuring consistent quality and efficient installation timelines.
              </p>
              <p className="text-muted-foreground">
                Whether you're renovating a single-family home, upgrading rental properties, or managing a multi-unit development, our team has the expertise to handle projects of any scale.
              </p>
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
                Get Your Free Quote Today
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Request a Free Estimate</h2>
            <Card className="p-6">
              <p className="text-center text-muted-foreground mb-6">
                Call us at <a href="tel:+17202242908" className="text-primary font-semibold">(720) 224-2908</a> or email <a href="mailto:josue@denvercabinets.net" className="text-primary font-semibold">josue@denvercabinets.net</a> to schedule your free on-site consultation.
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
