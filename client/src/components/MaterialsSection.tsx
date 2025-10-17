import { Card } from "@/components/ui/card";
import img1 from "@assets/black and white crown molding mix_1760665666821.jpg";
import img2 from "@assets/black kitchen white counter tops_1760665672520.jpg";
import img3 from "@assets/brown kicthen white counter top_1760665705715.jpg";
import img4 from "@assets/clean grey cabinets_1760665718488.jpg";

const materials = [
  {
    id: 1,
    name: "Black Matte Finish",
    category: "Cabinet Finishes",
    image: img1,
    description: "Sleek contemporary black cabinetry"
  },
  {
    id: 2,
    name: "White Quartz",
    category: "Countertops",
    image: img2,
    description: "Durable marble-look countertops"
  },
  {
    id: 3,
    name: "Natural Wood Grain",
    category: "Cabinet Finishes",
    image: img3,
    description: "Warm wood tone cabinetry"
  },
  {
    id: 4,
    name: "Grey Shaker",
    category: "Cabinet Finishes",
    image: img4,
    description: "Classic grey shaker style"
  },
];

export function MaterialsSection() {
  return (
    <section id="materials" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-4">Premium Materials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with the finest materials to ensure lasting quality and beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <Card
              key={material.id}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group"
              data-testid={`material-${material.id}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
    </section>
  );
}
