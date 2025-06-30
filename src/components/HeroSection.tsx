
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
    <section id="home" className="relative bg-gradient-to-r from-medical-blue-light to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title.private')} <span className="text-medical-blue">{t('hero.title.ambulance')}</span> {t('hero.title.and')} 
              <span className="text-emergency-amber"> {t('hero.title.taxi')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">{t('hero.feature.24_7')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">{t('hero.feature.certified')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">{t('hero.feature.patient_care')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-medical-blue" />
                <span className="text-gray-700">{t('hero.feature.fast_response')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-emergency-amber hover:bg-emergency-amber-dark text-white text-lg px-8 py-4 animate-pulse-glow"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t('hero.emergency_call')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white text-lg px-8 py-4"
              >
                {t('hero.book_ambulance')}
              </Button>
            </div>
          </div>

          {/* Hero Image Slider */}
          <div className="animate-slide-in-right">
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
                          className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
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
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              
              {/* Floating Info Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t('hero.licensed')}</p>
                    <p className="text-sm text-gray-600">{t('hero.professional')}</p>
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
