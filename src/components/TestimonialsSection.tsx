
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Maria Schmidt",
      location: "Frankfurt",
      rating: 5,
      text: "Excellent service! The paramedics were professional and caring during my mother's transport to the hospital. Highly recommended for anyone needing medical transport in Frankfurt.",
      service: "Private Ambulance"
    },
    {
      name: "Hans Mueller",
      location: "Offenbach",
      rating: 5,
      text: "Reliable taxi service for airport transfers. Always on time and comfortable vehicles. The drivers are courteous and know the Frankfurt area very well.",
      service: "Taxi Service"
    },
    {
      name: "Elena Petrov",
      location: "Bad Vilbel",
      rating: 5,
      text: "When my elderly father needed regular transport to dialysis, Om Krankenwagen was there for us. Professional, punctual, and compassionate service every time.",
      service: "Private Ambulance"
    },
    {
      name: "Thomas Weber",
      location: "Frankfurt",
      rating: 5,
      text: "Used their taxi service multiple times for business trips. Clean vehicles, professional drivers, and excellent knowledge of Frankfurt traffic patterns.",
      service: "Taxi Service"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-medical-blue-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-medical-blue opacity-20" />
            </div>
            
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].service}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full p-2 hover:bg-medical-blue hover:text-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-2 hover:bg-medical-blue hover:text-white transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-medical-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
