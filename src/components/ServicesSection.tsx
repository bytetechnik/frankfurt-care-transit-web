
import { Ambulance, Car, Clock, MapPin, Heart, Users, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Ambulance,
      title: "Private Ambulance",
      description: "Professional medical transport with trained paramedics",
      features: [
        "Non-emergency patient transport",
        "Medical supervision during transport",
        "Local & long-distance coverage",
        "Wheelchair accessible vehicles"
      ],
      color: "medical-blue",
      cta: "Request Ambulance"
    },
    {
      icon: Car,
      title: "Taxi Service",
      description: "Reliable taxi service for all your transportation needs",
      features: [
        "Airport transfers",
        "Senior citizen support",
        "Local Frankfurt transport",
        "Comfortable & clean vehicles"
      ],
      color: "emergency-amber",
      cta: "Book Taxi"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional transportation services tailored to your medical and mobility needs in Frankfurt
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex p-4 rounded-full bg-${service.color === 'medical-blue' ? 'medical-blue' : 'emergency-amber'} mb-4 mx-auto`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-${service.color === 'medical-blue' ? 'medical-blue' : 'emergency-amber'}`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${service.color === 'medical-blue' 
                    ? 'bg-medical-blue hover:bg-medical-blue-dark' 
                    : 'bg-emergency-amber hover:bg-emergency-amber-dark'
                  } text-white`}
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose MediTransport Frankfurt?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock service when you need us most"
              },
              {
                icon: Heart,
                title: "Medical Expertise",
                description: "Trained professionals with medical knowledge"
              },
              {
                icon: MapPin,
                title: "Local Coverage",
                description: "Serving Frankfurt and surrounding areas"
              },
              {
                icon: Users,
                title: "Patient-Centered Care",
                description: "Comfort and safety are our top priorities"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-medical-blue-light p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-medical-blue" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
