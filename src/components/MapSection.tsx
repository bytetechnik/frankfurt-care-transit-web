
import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const MapSection = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-16 animate-fade-in">
      <Card className="overflow-hidden">
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">{t('contact.map_placeholder')}</p>
            <p className="text-sm text-gray-500">Hauptstraße 123, 60313 Frankfurt am Main</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MapSection;
