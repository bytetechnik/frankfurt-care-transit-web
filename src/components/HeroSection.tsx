
import React from 'react';
import { Phone, Shield, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+4917842687786';
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-medical-blue-light via-white to-emergency-amber-light flex items-center">
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-medical-blue block sm:inline">
                  {t('hero.title.private')}
                </span>
                <br className="hidden sm:block lg:hidden" />
                <span className="text-emergency-amber mx-2 hidden sm:inline lg:inline">
                  {t('hero.title.and')}
                </span>
                <br className="sm:hidden" />
                <span className="text-emergency-amber sm:hidden">
                  {t('hero.title.and')}
                </span>
                <br />
                <span className="text-medical-blue-dark block">
                  {t('hero.title.ambulance')}
                </span>
                <span className="text-gray-700 block mt-2">
                  {t('hero.title.taxi')}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                {t('hero.description')}
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 px-4 sm:px-0">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm">
                <Clock className="h-4 w-4 text-medical-blue mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                  {t('hero.feature.24_7')}
                </span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm">
                <Shield className="h-4 w-4 text-emergency-amber mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                  {t('hero.licensed')}
                </span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-sm">
                <Heart className="h-4 w-4 text-medical-blue mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                  {t('hero.professional')}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <Button
                onClick={handleEmergencyCall}
                size="lg"
                className="bg-emergency-amber hover:bg-emergency-amber-dark text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="truncate">{t('hero.emergency_call')}</span>
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <span className="truncate">{t('hero.book_ambulance')}</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 animate-fade-in">
              <img
                src="/resources/img/banner/1.png"
                alt="OM Krankenwagen und Taxi - Professional Medical Transport"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/20 to-emergency-amber/20 rounded-2xl blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
