import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuCategories = [
  {
    category: "Appetizers",
    items: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with black truffle and parmesan", price: "$18" },
      { name: "Seared Scallops", description: "Pan-seared with cauliflower puree and pancetta", price: "$24" },
      { name: "Burrata", description: "Fresh burrata with heirloom tomatoes and basil oil", price: "$16" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Prime Ribeye Steak", description: "28-day aged ribeye with roasted vegetables and red wine reduction", price: "$48" },
      { name: "Truffle Pasta", description: "Hand-made fettuccine with black truffle cream sauce", price: "$32" },
      { name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon herb butter and quinoa", price: "$36" },
      { name: "Duck Confit", description: "Slow-cooked duck leg with cherry gastrique", price: "$38" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Symphony", description: "Dark chocolate mousse with gold leaf and raspberry coulis", price: "$16" },
      { name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar", price: "$12" },
      { name: "Tiramisu", description: "Traditional Italian dessert with espresso and mascarpone", price: "$14" }
    ]
  }
];

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="font-heading text-3xl text-primary">Our Menu</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-8">
          {menuCategories.map((category) => (
            <div key={category.category}>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4 border-b border-border pb-2">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <Card key={item.name} className="shadow-warm">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-primary mb-2">{item.name}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <span className="text-xl font-bold text-accent">{item.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-6 border-t border-border">
          <p className="text-muted-foreground mb-4">Ready to make a reservation?</p>
          <Button variant="restaurant" size="lg" onClick={onClose}>
            Reserve Your Table
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;