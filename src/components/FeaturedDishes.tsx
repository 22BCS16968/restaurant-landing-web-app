import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import steakImage from "@/assets/dish-steak.jpg";
import pastaImage from "@/assets/dish-pasta.jpg";
import dessertImage from "@/assets/dish-dessert.jpg";

const dishes = [
  {
    id: 1,
    name: "Prime Ribeye Steak",
    description: "Perfectly aged 28-day dry-aged ribeye, served with roasted vegetables and signature red wine reduction",
    price: "$48",
    image: steakImage
  },
  {
    id: 2,
    name: "Truffle Pasta",
    description: "Hand-made fettuccine with black truffle cream sauce, parmesan, and fresh herbs",
    price: "$32",
    image: pastaImage
  },
  {
    id: 3,
    name: "Chocolate Symphony",
    description: "Decadent dark chocolate mousse with gold leaf, raspberry coulis, and vanilla bean ice cream",
    price: "$16",
    image: dessertImage
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-20 warm-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-4">
            Signature Dishes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each dish is a masterpiece, crafted with passion and the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card 
              key={dish.id} 
              className="group overflow-hidden shadow-warm hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {dish.name}
                  </h3>
                  <span className="text-2xl font-bold text-accent">
                    {dish.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {dish.description}
                </p>
                
                <Button variant="restaurant-outline" className="w-full">
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up">
          <Button variant="restaurant" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;