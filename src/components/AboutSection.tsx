
import React from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Award,
      number: t('about.years_experience'),
      label: t('about.years_experience_text'),
      color: 'from-medical-blue to-medical-blue-dark'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: t('about.advantage_1'),
      color: 'from-emergency-amber to-emergency-amber-dark'
    },
    {
      icon: Users,
      title: t('about.advantage_2'),
      color: 'from-medical-blue to-medical-blue-dark'
    },
    {
      icon: Award,
      title: t('about.advantage_3'),
      color: 'from-emergency-amber to-emergency-amber-dark'
    },
    {
      icon: MapPin,
      title: t('about.advantage_4'),
      color: 'from-medical-blue to-medical-blue-dark'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {t('about.introduction_title')}
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>{t('about.intro')}</p>
                <p>{t('about.experience')}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-0 bg-gradient-to-r from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className={`mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="/resources/img/banner/2.png"
              alt="About OM Krankentransport"
              className="w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/10 to-emergency-amber/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Expertise Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
              {t('about.expertise_title')}
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>{t('about.choice')}</p>
              <p>{t('about.patient_transport')}</p>
              <p>{t('about.billing')}</p>
            </div>
          </div>

          {/* Coverage Area */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
              {t('about.coverage_title')}
            </h3>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t('about.coverage_description')}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {t('about.coverage_areas')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 lg:mb-12">
            {t('about.advantages_title')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm text-center h-full">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight px-2">
                      {advantage.title}
                    </h4>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
