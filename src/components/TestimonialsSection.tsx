
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.testimonial1.name'),
      text: t('testimonials.testimonial1.text'),
      rating: 5
    },
    {
      name: t('testimonials.testimonial2.name'), 
      text: t('testimonials.testimonial2.text'),
      rating: 5
    },
    {
      name: t('testimonials.testimonial3.name'),
      text: t('testimonials.testimonial3.text'),
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-medical-blue-light via-white to-emergency-amber-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t('testimonials.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4 leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm h-full">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center flex flex-col justify-between h-full">
                {/* Quote Icon */}
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-medical-blue mx-auto opacity-60" />
                </div>
                
                {/* Testimonial Text */}
                <div className="flex-grow mb-3 sm:mb-4 lg:mb-6">
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed italic px-1 sm:px-2 break-words hyphens-auto" style={{ wordBreak: 'break-word' }}>
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Rating */}
                <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Customer Name */}
                <div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 break-words" style={{ wordBreak: 'break-word' }}>
                    {testimonial.name}
                  </h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
