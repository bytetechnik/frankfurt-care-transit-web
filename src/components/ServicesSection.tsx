
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
                <CardHeader className="text-center pb-3 sm:pb-4 px-3 sm:px-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-medical-blue to-emergency-amber rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight px-1 sm:px-2 min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                    <span className="text-center break-words hyphens-auto" style={{ wordBreak: 'break-word' }}>
                      {service.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0 px-3 sm:px-6 pb-4 sm:pb-6 flex flex-col justify-between h-full">
                  <CardDescription className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow min-h-[3rem] sm:min-h-[4rem] flex items-start">
                    <span className="break-words hyphens-auto" style={{ wordBreak: 'break-word' }}>
                      {service.description}
                    </span>
                  </CardDescription>
                  <Button
                    onClick={() => scrollToContactWithForm(service.formType)}
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors duration-300 text-xs sm:text-sm min-h-[2.5rem] sm:min-h-[2.75rem]"
                  >
                    <span className="break-words text-center leading-tight" style={{ wordBreak: 'break-word' }}>
                      {service.formType === 'ambulance' ? t('services.ambulance.cta') : t('services.taxi.cta')}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg">
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8 lg:mb-12 px-2">
            {t('services.why_choose')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="text-center group px-2">
                  <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emergency-amber to-emergency-amber-dark rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 break-words" style={{ wordBreak: 'break-word' }}>
                    {advantage.title}
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed break-words" style={{ wordBreak: 'break-word' }}>
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
