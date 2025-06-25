
import { Phone, Clock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-medical-blue-light to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Private <span className="text-medical-blue">Ambulance</span> & 
              <span className="text-emergency-amber"> Taxi Service</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional medical transport and taxi services in Frankfurt and surrounding areas. 
              Available 24/7 with trained staff and fast response times.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">Certified Staff</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">Patient Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">Fast Response</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-emergency-amber hover:bg-emergency-amber-dark text-white text-lg px-8 py-4 animate-pulse-glow"
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white text-lg px-8 py-4"
              >
                Book Ambulance
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1587826080692-f439cd0b70da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional ambulance service in Frankfurt"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Licensed & Insured</p>
                    <p className="text-sm text-gray-600">Professional Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
