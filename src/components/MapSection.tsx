

import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const MapSection = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-16 animate-fade-in">
      <Card className="overflow-hidden">
        <div className="h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.163773155602!2d8.950940976817389!3d50.19546960568988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd19b15f718c6b%3A0x5ff20828ebba18b8!2sLangstra%C3%9Fe%2037%2C%2063486%20Bruchk%C3%B6bel!5e0!3m2!1sen!2sde!4v1751235590666!5m2!1sen!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="OM Krankentransport und Taxi Location"
          />
        </div>
      </Card>
    </div>
  );
};

export default MapSection;

