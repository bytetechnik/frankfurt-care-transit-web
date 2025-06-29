
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Shield, Users, Award, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            {t('about.subtitle')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                Wir stellen uns vor
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('about.intro')}</p>
                <p>{t('about.experience')}</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                Unsere Expertise
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>{t('about.choice')}</p>
                <p>{t('about.patient_transport')}</p>
                <p>{t('about.billing')}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats and Features */}
          <div className="space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {t('about.years_experience')}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {t('about.years_experience_text')}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 flex flex-col items-center">
                  <Shield className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-sm text-gray-600 font-medium">
                    {t('about.professional_service')}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 flex flex-col items-center">
                  <Clock className="w-8 h-8 text-amber-600 mb-2" />
                  <div className="text-sm text-gray-600 font-medium">
                    {t('about.transparent_billing')}
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-600 mb-2" />
                  <div className="text-sm text-gray-600 font-medium">
                    {t('about.wide_coverage')}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Unsere Vorteile</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">24/7 Verfügbarkeit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Erfahrenes Fachpersonal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Moderne Fahrzeugflotte</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Transparente Abrechnung</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('about.coverage_title')}</h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir sind in der gesamten Region für Sie da und bieten zuverlässige Transportdienste in folgenden Gebieten:
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {t('about.coverage_areas').split(', ').map((area, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
