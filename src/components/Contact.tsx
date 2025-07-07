import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    requests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Reservation Submitted!",
      description: `Thank you ${formData.name}! We'll confirm your reservation for ${formData.guests} ${formData.guests === '1' ? 'guest' : 'guests'} on ${formData.date} at ${formData.time}.`,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      requests: ''
    });
  };

  return (
    <section id="contact" className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Visit Us
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Experience the finest dining in the heart of the city
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p>123 Gourmet Street<br />Downtown District<br />City, State 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <div className="space-y-1">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p>reservations@tastybite.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Reservation Form */}
          <div className="animate-fade-in-right">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-glow">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
                  Make a Reservation
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-secondary focus:outline-none"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-secondary focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:border-secondary focus:outline-none"
                      required
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:border-secondary focus:outline-none"
                      required
                    />
                  </div>
                  
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Number of Guests"
                    min="1"
                    max="12"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-secondary focus:outline-none"
                    required
                  />
                  
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleInputChange}
                    placeholder="Special Requests (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:border-secondary focus:outline-none resize-none"
                  ></textarea>
                  
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="w-full"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Reserve Table
                  </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;