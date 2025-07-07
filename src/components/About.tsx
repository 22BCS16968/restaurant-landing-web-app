import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToAbout = () => {
    // Could open a detailed about page or modal
    alert("Coming soon: Detailed story about our restaurant's journey!");
  };

  const scrollToChef = () => {
    // Could open chef bio modal or page
    alert("Coming soon: Meet our talented culinary team!");
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              For over two decades, Tasty Bite has been the cornerstone of fine dining, 
              where culinary artistry meets warm hospitality.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our master chefs combine traditional techniques with innovative flavors, 
              creating an unforgettable dining experience that celebrates the art of gastronomy. 
              Every ingredient is carefully selected, every dish thoughtfully prepared.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From intimate dinners to grand celebrations, we create moments that linger 
              in memory long after the last bite.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="restaurant" 
                size="lg"
                onClick={scrollToAbout}
              >
                Our Story
              </Button>
              <Button 
                variant="restaurant-outline" 
                size="lg"
                onClick={scrollToChef}
              >
                Meet the Chef
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-lg warm-gradient shadow-warm">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground font-medium">Years of Excellence</div>
              </div>
              <div className="text-center p-6 rounded-lg warm-gradient shadow-warm">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground font-medium">Signature Dishes</div>
              </div>
              <div className="text-center p-6 rounded-lg warm-gradient shadow-warm">
                <div className="text-4xl font-bold text-primary mb-2">15K+</div>
                <div className="text-muted-foreground font-medium">Happy Guests</div>
              </div>
              <div className="text-center p-6 rounded-lg warm-gradient shadow-warm">
                <div className="text-4xl font-bold text-primary mb-2">5⭐</div>
                <div className="text-muted-foreground font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;