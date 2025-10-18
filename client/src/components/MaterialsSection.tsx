import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import img1 from "@assets/glossy material for cabinets_1760666768295.jpg";
import img2 from "@assets/material cabinet doors_1760666899185.jpg";
import cabinetFeatures from "@assets/image000000 6_1760745669766.jpg";

const materials = [
  {
    id: 1,
    name: "Glossy Finishes",
    category: "Cabinet Finishes",
    image: img1,
    description: "Modern high-gloss cabinet options in various colors"
  },
  {
    id: 2,
    name: "Shaker Style Doors",
    category: "Cabinet Doors",
    image: img2,
    description: "Classic and contemporary door styles"
  },
  {
    id: 3,
    name: "Shaker Cabinet Features",
    category: "Construction Details",
    image: cabinetFeatures,
    description: "Click to view full construction details - Premium quality with dovetail drawers and soft-close glides",
    zoomable: true
  },
];

export function MaterialsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const handleImageClick = (material: typeof materials[0]) => {
    if (material.zoomable) {
      setSelectedImage(material.image);
      setSelectedTitle(material.name);
    }
  };

  return (
    <section id="materials" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Premium Materials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with the finest materials to ensure lasting quality and beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Card
              key={material.id}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
              data-testid={`material-${material.id}`}
              onClick={() => handleImageClick(material)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {material.zoomable && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white dark:bg-black rounded-full p-3">
                      <ZoomIn className="h-6 w-6" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{material.category}</p>
                <h3 className="font-semibold mb-2">{material.name}</h3>
                <p className="text-sm text-muted-foreground">{material.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Zoom Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-full p-2" data-testid="dialog-image-zoom">
          <DialogTitle className="sr-only">{selectedTitle}</DialogTitle>
          {selectedImage && (
            <div className="w-full overflow-auto max-h-[90vh]">
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="w-full h-auto"
                data-testid="img-zoomed"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
