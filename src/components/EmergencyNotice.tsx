
import { Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EmergencyNotice = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-emergency-amber-light border border-emergency-amber rounded-lg p-6 mt-8">
      <div className="flex items-center space-x-3 mb-2">
        <Phone className="h-5 w-5 text-emergency-amber" />
        <h4 className="font-semibold text-emergency-amber">{t('contact.emergency_services')}</h4>
      </div>
      <p className="text-gray-700">
        {t('contact.emergency_notice')}
      </p>
    </div>
  );
};

export default EmergencyNotice;
