
import { Ambulance, Car, Clock, MapPin, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Ambulance,
      title: t('services.ambulance.title'),
      description: t('services.ambulance.description'),
      features: [
        t('services.ambulance.feature1'),
        t('services.ambulance.feature2'),
        t('services.ambulance.feature3'),
        t('services.ambulance.feature4')
      ],
      color: "medical-blue",
      cta: t('services.ambulance.cta')
    },
    {
      icon: Car,
      title: t('services.taxi.title'),
      description: t('services.taxi.description'),
      features: [
        t('services.taxi.feature1'),
        t('services.taxi.feature2'),
        t('services.taxi.feature3'),
        t('services.taxi.feature4')
      ],
      color: "emergency-amber",
      cta: t('services.taxi.cta')
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
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
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">{t('services.why_choose')}</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: t('services.availability'),
                description: t('services.availability_desc')
              },
              {
                icon: Heart,
                title: t('services.expertise'),
                description: t('services.expertise_desc')
              },
              {
                icon: MapPin,
                title: t('services.coverage'),
                description: t('services.coverage_desc')
              },
              {
                icon: Users,
                title: t('services.care'),
                description: t('services.care_desc')
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
