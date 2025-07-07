import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

interface HeroProps {
  onOpenMenu: () => void;
}

const Hero = ({ onOpenMenu }: HeroProps) => {
  const scrollToReservations = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant restaurant dining room" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          Tasty Bite
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-4 font-light animate-fade-in-up opacity-90">
          Where Every Bite Tells a Story
        </p>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-80 leading-relaxed">
          Experience culinary excellence in an atmosphere of refined elegance. 
          Our master chefs craft each dish with passion, precision, and the finest ingredients.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button 
            variant="restaurant" 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={scrollToReservations}
          >
            Reserve Your Table
          </Button>
          <Button 
            variant="outline-light" 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={onOpenMenu}
          >
            View Menu
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;