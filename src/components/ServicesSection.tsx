
import React from 'react';
import { Ambulance, Car, Accessibility, Heart, Plane, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const scrollToContactWithForm = (formType: 'ambulance' | 'taxi') => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Dispatch custom event to switch to the correct form
      setTimeout(() => {
        const event = new CustomEvent('switchToForm', { detail: { formType } });
        window.dispatchEvent(event);
      }, 100);
    }
  };

  const services = [
    {
      icon: Ambulance,
      title: t('services.service1.title'),
      description: t('services.service1.description'),
      formType: 'ambulance' as const
    },
    {
      icon: Accessibility,
      title: t('services.service2.title'),
      description: t('services.service2.description'),
      formType: 'ambulance' as const
    },
    {
      icon: Heart,
      title: t('services.service3.title'),
      description: t('services.service3.description'),
      formType: 'ambulance' as const
    },
    {
      icon: Car,
      title: t('services.service4.title'),
      description: t('services.service4.description'),
      formType: 'taxi' as const
    },
    {
      icon: Package,
      title: t('services.service5.title'),
      description: t('services.service5.description'),
      formType: 'taxi' as const
    },
    {
      icon: Plane,
      title: t('services.service6.title'),
      description: t('services.service6.description'),
      formType: 'taxi' as const
    }
  ];

  const advantages = [
    {
      icon: Heart,
      title: t('services.availability'),
      description: t('services.availability_desc')
    },
    {
      icon: Ambulance,
      title: t('services.expertise'),
      description: t('services.expertise_desc')
    },
    {
      icon: Car,
      title: t('services.coverage'),
      description: t('services.coverage_desc')
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-medical-blue to-emergency-amber rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight px-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 flex flex-col justify-between h-full">
                  <CardDescription className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed px-2 flex-grow">
                    {service.description}
                  </CardDescription>
                  <Button
                    onClick={() => scrollToContactWithForm(service.formType)}
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <span className="truncate">
                      {service.formType === 'ambulance' ? t('services.ambulance.cta') : t('services.taxi.cta')}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">
            {t('services.why_choose')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emergency-amber to-emergency-amber-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
