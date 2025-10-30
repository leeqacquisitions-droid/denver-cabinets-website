import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

// Import all portfolio images
import img1 from "@assets/black shaker 10_1760717059430.jpg";
import img2 from "@assets/black shaker 11_1760717063232.jpg";
import img3 from "@assets/black shaker 21_1760717067317.jpg";
import img4 from "@assets/black shaker 30_1760717071196.jpg";
import img5 from "@assets/black shaker 37_1760717075950.jpg";
import img6 from "@assets/black sherk 44_1760717081772.jpg";
import img7 from "@assets/black_shaker_1760717088967.webp";
import img8 from "@assets/black_shaker1_1760717094685.webp";
import img9 from "@assets/black_shaker4_1760717101818.webp";
import img10 from "@assets/blue kitchen 2_1760717109551.jpg";
import img11 from "@assets/blue kitchen_1760717117533.jpg";
import img12 from "@assets/brown shaker 31_1760717130103.jpg";
import img13 from "@assets/brown shaker 38_1760717138399.jpg";
import img14 from "@assets/bathrom shaker 41_1760717039753.jpg";
import img15 from "@assets/bathroom_white_shaker_2_1760717045213.webp";
import img16 from "@assets/bathroom_white_shaker_3_1760717051961.webp";
import img17 from "@assets/closet white shaker_1760717144739.jpg";
import img18 from "@assets/best quality work in the metro area _1760665661487.jpg";
import img19 from "@assets/black and white crown molding mix_1760665666821.jpg";
import img20 from "@assets/black kitchen white counter tops_1760665672520.jpg";
import img21 from "@assets/black kitchen with grey top_1760665677958.jpg";
import img22 from "@assets/black pantries_1760665684123.jpg";
import img23 from "@assets/blue kiotchen white counter top_1760665691434.jpg";
import img24 from "@assets/brown kicthen white counter top_1760665705715.jpg";
import img25 from "@assets/Brown kitchen with white top_1760665709979.jpg";
import img26 from "@assets/clean grey cabinets_1760665718488.jpg";
import img27 from "@assets/clean sleek affordable_1760665724960.jpg";
import img28 from "@assets/custom dog cabinet with bowl_1760665736157.jpg";
import img29 from "@assets/custom window cabinets_1760665751120.jpg";
import img30 from "@assets/denver 2025 selling property_1760665756666.webp";
import img31 from "@assets/exclelent black shaker combo with black marble counter tops_1760666667882.webp";
import img32 from "@assets/grey remodel kicthen_1760666782648.jpg";
import img33 from "@assets/grey remodel with island in middle_1760666799098.jpg";
import img34 from "@assets/high end bathroom sink_1760666806401.jpg";
import img35 from "@assets/kitchens that last_1760666876778.jpg";
import img36 from "@assets/need counter tops for these new cabinets here we are _1760666920187.jpg";
import img37 from "@assets/need remodeling assitance he we are_1760666930898.jpg";
import img38 from "@assets/NEED TO SELL YOUR HOME LOOK AT THIS_1760666956139.webp";

// Additional completed projects
import img39 from "@assets/blue kiotchen white counter top_1760665698336.jpg";
import img40 from "@assets/design 2 installed_1760665770904.jpg";

// New portfolio images
import img41 from "@assets/image000001_1760742017149.jpg";
import img42 from "@assets/image000002_1760742028889.jpg";
import img43 from "@assets/image000003_1760742050621.jpg";
import img44 from "@assets/image000004_1760742069723.jpg";
import img45 from "@assets/image000005_1760742080817.jpg";
import img46 from "@assets/image000009_1760742150114.jpg";
import img47 from "@assets/image000010_1760742173784.jpg";
import img48 from "@assets/sage_green_1760721577808.webp";
import img49 from "@assets/grey shaker 24_1760721776173.jpg";

// Projects of the Month images
import img50 from "@assets/IMG_2951 2_1761700443565.jpg";
import img51 from "@assets/IMG_3037_1761700500526.jpg";
import img52 from "@assets/IMG_3038_1761700532373.jpg";
import img53 from "@assets/IMG_3035_1761700547671.jpg";
import img54 from "@assets/IMG_3049_1761701315198.jpg";
import img55 from "@assets/IMG_3052_1761701348687.jpg";
import img56 from "@assets/IMG_2974_1761702593125.jpg";
import img57 from "@assets/IMG_2985_1761702608837.jpg";

// Water Damage Restoration images
import img58 from "@assets/IMG_3065_1761766571579.jpeg";
import img59 from "@assets/IMG_3067_1761766690867.jpeg";

const portfolioItems = [
  { id: 1, image: img4, category: "Kitchens", title: "White & Onyx Shaker Combo", alt: "Professional white and onyx shaker kitchen cabinet installation Denver metro area" },
  { id: 2, image: img6, category: "Kitchens", title: "Two-Tone Onyx Shaker", alt: "Two-tone onyx shaker kitchen cabinets Denver Colorado" },
  { id: 3, image: img8, category: "Kitchens", title: "Luxury Onyx Shaker Kitchen", alt: "Luxury onyx shaker kitchen cabinet installation Denver" },
  { id: 4, image: img9, category: "Kitchens", title: "Modern Onyx Shaker Design", alt: "Modern black shaker kitchen cabinets Denver metro remodel" },
  { id: 5, image: img10, category: "Kitchens", title: "White & Signature Blue Shaker", alt: "White and blue shaker kitchen cabinet installation Denver" },
  { id: 6, image: img11, category: "Kitchens", title: "Signature Blue Shaker Kitchen", alt: "Blue shaker kitchen cabinets Denver Colorado installation" },
  { id: 7, image: img12, category: "Kitchens", title: "Espresso Shaker Kitchen", alt: "Espresso brown shaker kitchen cabinets Denver" },
  { id: 8, image: img15, category: "Bathrooms", title: "White Shaker Bath Vanity", alt: "White shaker bathroom vanity cabinet installation Denver" },
  { id: 9, image: img18, category: "Kitchens", title: "Onyx Shaker Kitchen", alt: "Quality onyx shaker kitchen cabinet installation Denver metro" },
  { id: 10, image: img21, category: "Kitchens", title: "Onyx Shaker Grey Countertops", alt: "Black shaker kitchen cabinets grey countertops Denver" },
  { id: 11, image: img22, category: "Pantries", title: "Onyx Shaker Pantry", alt: "Black shaker pantry cabinet installation Denver Colorado" },
  { id: 12, image: img23, category: "Kitchens", title: "Signature Blue Shaker Design", alt: "Blue shaker kitchen design Denver metro area" },
  { id: 13, image: img24, category: "Kitchens", title: "Espresso Shaker Kitchen", alt: "Brown espresso shaker kitchen cabinets Denver" },
  { id: 14, image: img25, category: "Kitchens", title: "Mountain Timber & White", alt: "Mountain timber and white kitchen cabinet installation Denver" },
  { id: 15, image: img27, category: "Kitchens", title: "Contemporary Grey Shaker", alt: "Contemporary grey shaker kitchen cabinets Denver Colorado" },
  { id: 16, image: img30, category: "Bathrooms", title: "White Shaker Vanity", alt: "Professional white shaker bathroom vanity Denver" },
  { id: 17, image: img31, category: "Kitchens", title: "Onyx Shaker Marble Counters", alt: "Black shaker kitchen cabinets marble countertops Denver" },
  { id: 18, image: img32, category: "Kitchens", title: "Grey Shaker Remodel", alt: "Grey shaker kitchen cabinet remodel Denver metro" },
  { id: 19, image: img33, category: "Kitchens", title: "Grey Shaker with Island", alt: "Grey shaker kitchen cabinets with island Denver Colorado" },
  { id: 20, image: img34, category: "Bathrooms", title: "White Shaker High-End Vanity", alt: "High-end white shaker bathroom vanity installation Denver" },
  { id: 21, image: img35, category: "Kitchens", title: "Durable White Shaker", alt: "Durable white shaker kitchen cabinets Denver" },
  { id: 22, image: img37, category: "Kitchens", title: "White Shaker Remodel", alt: "White shaker kitchen cabinet remodel Denver metro area" },
  { id: 23, image: img38, category: "Kitchens", title: "White Shaker Property Value", alt: "White shaker kitchen cabinets increase property value Denver" },
  { id: 24, image: img40, category: "Kitchens", title: "Grey Shaker Installation", alt: "Professional grey shaker kitchen cabinet installation Denver" },
  { id: 25, image: img41, category: "Kitchens", title: "Navy Shaker Gold Hardware", alt: "Navy blue shaker kitchen cabinets gold hardware Denver" },
  { id: 26, image: img42, category: "Kitchens", title: "White & Navy Shaker Island", alt: "White and navy shaker kitchen island cabinets Denver Colorado" },
  { id: 27, image: img43, category: "Pantries", title: "White Shaker Pantry System", alt: "White shaker pantry cabinet system installation Denver" },
  { id: 28, image: img44, category: "Kitchens", title: "White Shaker Gold Pulls", alt: "White shaker kitchen cabinets gold pulls Denver metro" },
  { id: 29, image: img45, category: "Kitchens", title: "Large White Shaker Kitchen", alt: "Large white shaker kitchen cabinet installation Denver" },
  { id: 30, image: img46, category: "Kitchens", title: "Whitewashed Shaker Kitchen", alt: "Whitewashed shaker kitchen cabinets Denver Colorado" },
  { id: 31, image: img47, category: "Kitchens", title: "Whitewashed Island Kitchen", alt: "Whitewashed shaker kitchen island cabinets Denver" },
  { id: 32, image: img48, category: "Kitchens", title: "Sage Green Shaker Kitchen", alt: "Sage green shaker kitchen cabinet installation Denver" },
  { id: 33, image: img49, category: "Kitchens", title: "Grey Shaker Installation", alt: "Grey shaker kitchen cabinets professional installation Denver" },
  { id: 34, image: img51, category: "Living Rooms", title: "Entertainment Center with Fireplace", alt: "Custom entertainment center cabinets fireplace Denver" },
  { id: 35, image: img52, category: "Mudrooms", title: "Mudroom Organization System", alt: "Mudroom cabinet organization system Denver Colorado" },
  { id: 36, image: img53, category: "Kitchens", title: "Premium Cabinet Lighting Detail", alt: "Premium kitchen cabinet integrated lighting Denver" },
  { id: 37, image: img54, category: "Water Damage Restoration", title: "Water Damage Kitchen Before", alt: "Before water damaged kitchen cabinets Aurora Colorado repair" },
  { id: 38, image: img55, category: "Water Damage Restoration", title: "Water Damage Kitchen After", alt: "After water damage kitchen cabinet restoration Denver Aurora" },
  { id: 39, image: img58, category: "Water Damage Restoration", title: "Water Damage Restoration Before", alt: "Before water damaged kitchen cabinets Denver Colorado" },
  { id: 40, image: img59, category: "Water Damage Restoration", title: "Water Damage Restoration After", alt: "After water damage kitchen cabinet replacement Denver metro area" },
  { id: 41, image: img57, category: "Commercial", title: "Happy Cones Ice Cream Shop", alt: "Commercial refrigeration cabinet installation Denver Colorado" },
];

const categories = ["All", "Kitchens", "Bathrooms", "Pantries", "Living Rooms", "Mudrooms", "Water Damage Restoration", "Commercial"];

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof portfolioItems[0] | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  // Compact contact form state
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 9);
  const hasMoreItems = filteredItems.length > 9;
  
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
        body: JSON.stringify({
          ...formData,
          clientType: "Portfolio Form",
          projectType: "Quick Contact"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you! We'll be in touch soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
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
      greeting: "👋 Inspired by our work?",
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
      question: "Tell us about your project",
      placeholder: "Type your project details here...",
      field: "message" as keyof typeof formData,
      type: "textarea",
    },
  ];

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completed cabinet installations for new builds, remodels, and property renovations
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover-elevate active-elevate-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer group hover-elevate rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setLightboxImage(item)}
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-semibold text-sm shadow-lg">
                  {item.id}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreItems && (
          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              data-testid="button-show-more"
              className="hover-elevate active-elevate-2 min-h-12"
            >
              {showAll ? "Show Less" : `Show More (${filteredItems.length - 9} more)`}
            </Button>
          </div>
        )}

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            data-testid="lightbox-overlay"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setLightboxImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="max-w-6xl w-full">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-md touch-auto select-none"
                onClick={(e) => e.stopPropagation()}
                style={{ touchAction: 'auto' }}
              />
              <div className="mt-4 text-center">
                <Badge className="mb-2">{lightboxImage.category}</Badge>
                <h3 className="text-white text-xl font-semibold">{lightboxImage.title}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Compact Contact Form */}
        <div className="mt-16 max-w-2xl mx-auto">
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
                    data-testid={`input-portfolio-${currentQuestion.field}`}
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
                    data-testid={`input-portfolio-${currentQuestion.field}`}
                  />
                )}

                {isLastStep ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData[currentQuestion.field]}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-5 text-base font-semibold rounded-md"
                    data-testid="button-submit-portfolio-contact"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={!formData[currentQuestion.field]}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-5 text-base font-semibold rounded-md"
                    data-testid="button-portfolio-next"
                  >
                    OK
                  </Button>
                )}

                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-white/60 hover:text-white ml-4 text-sm"
                    data-testid="button-portfolio-back"
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
