import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import MenuModal from "@/components/MenuModal";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onOpenMenu={openMenu} />
      <FeaturedDishes onOpenMenu={openMenu} />
      <About />
      <Contact />
      <Footer />
      <MenuModal isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default Index;