
import { Phone, Clock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<any>();

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  const heroImages = [
    {
      src: "/resources/img/banner/1.png",
      alt: "Emergency ambulance responding to call"
    },
    {
      src: "/resources/img/banner/2.png",
      alt: "Professional taxi service"
    },
    {
      src: "/resources/img/banner/3.png",
      alt: "Medical personnel providing emergency care"
    },
    {
      src: "/resources/img/banner/4.png",
      alt: "Ambulance transport service"
    },
    {
      src: "/resources/img/banner/5.png",
      alt: "Ambulance transport service"
    },
    {
      src: "/resources/img/banner/6.png",
      alt: "Ambulance transport service"
    }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-r from-medical-blue-light to-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight break-words hyphens-auto">
              {t('hero.title.private')} <span className="text-medical-blue">{t('hero.title.ambulance')}</span> {t('hero.title.and')} 
              <span className="text-emergency-amber"> {t('hero.title.taxi')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed break-words">
              {t('hero.description')}
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-medical-blue flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 break-words">{t('hero.feature.24_7')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-medical-blue flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 break-words">{t('hero.feature.certified')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-medical-blue flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 break-words">{t('hero.feature.patient_care')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-medical-blue flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 break-words">{t('hero.feature.fast_response')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-emergency-amber hover:bg-emergency-amber-dark text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-pulse-glow break-words"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="break-words">{t('hero.emergency_call')}</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 break-words"
              >
                <span className="break-words">{t('hero.book_ambulance')}</span>
              </Button>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="animate-slide-in-right mt-8 lg:mt-0">
            <div className="relative">
              <Carousel 
                setApi={setApi}
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                          loading="eager"
                          onError={(e) => {
                            console.log(`Failed to load image: ${image.src}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 sm:left-4" />
                <CarouselNext className="right-2 sm:right-4" />
              </Carousel>
              
              {/* Floating Info Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6 bg-white p-3 sm:p-6 rounded-xl shadow-lg max-w-[200px] sm:max-w-none">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                    <Shield className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base break-words">{t('hero.licensed')}</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">{t('hero.professional')}</p>
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
