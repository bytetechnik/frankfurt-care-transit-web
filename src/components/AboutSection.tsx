
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{t('about.intro')}</p>
              <p className="text-gray-700 leading-relaxed">{t('about.experience')}</p>
              <p className="text-gray-700 leading-relaxed">{t('about.choice')}</p>
              <p className="text-gray-700 leading-relaxed">{t('about.patient_transport')}</p>
              <p className="text-gray-700 leading-relaxed">{t('about.billing')}</p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">
                  {t('about.years_experience')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('about.years_experience_text')}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0 flex flex-col items-center">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <div className="text-sm text-gray-600">
                  {t('about.professional_service')}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0 flex flex-col items-center">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <div className="text-sm text-gray-600">
                  {t('about.transparent_billing')}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0 flex flex-col items-center">
                <Users className="w-8 h-8 text-primary mb-2" />
                <div className="text-sm text-gray-600">
                  {t('about.wide_coverage')}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Area */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <MapPin className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{t('about.coverage_title')}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {t('about.coverage_areas').split(', ').map((area, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
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
