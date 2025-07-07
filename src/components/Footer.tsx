import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold mb-4">Tasty Bite</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Where every bite tells a story of culinary excellence and warm hospitality.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div><a href="#menu" className="text-primary-foreground/80 hover:text-secondary transition-colors">Menu</a></div>
              <div><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></div>
              <div><a href="#reservations" className="text-primary-foreground/80 hover:text-secondary transition-colors">Reservations</a></div>
              <div><a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>(555) 123-4567</div>
              <div>reservations@tastybite.com</div>
              <div>123 Gourmet Street</div>
              <div>Downtown District</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-secondary fill-current" /> for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;