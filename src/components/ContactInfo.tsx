
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactInfo = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.emergency_hotline'),
      info: "+49 17 84 26 87 86",
      subinfo: t('contact.available_24_7'),
      href: "tel:+491784268786",
      color: "emergency-amber"
    },
    {
      icon: Mail,
      title: t('contact.email_us'),
      info: "info@taxi-om-krankentransport.de",
      subinfo: t('contact.respond_2h'),
      href: "mailto:info@taxi-om-krankentransport.de",
      color: "medical-blue"
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      info: "Langstraße 37, 63486 Bruchköbel",
      subinfo: "Bruchköbel, Deutschland",
      href: "#",
      color: "medical-blue"
    },
    {
      icon: Clock,
      title: t('contact.office_hours'),
      info: t('contact.office_hours_time'),
      subinfo: t('contact.emergency_service'),
      href: "#",
      color: "medical-blue"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.get_in_touch')}</h3>
      
      {contactInfo.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${
                item.color === 'emergency-amber' 
                  ? 'bg-emergency-amber-light' 
                  : 'bg-medical-blue-light'
              }`}>
                <item.icon className={`h-6 w-6 ${
                  item.color === 'emergency-amber' 
                    ? 'text-emergency-amber' 
                    : 'text-medical-blue'
                }`} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                {item.href.startsWith('tel:') || item.href.startsWith('mailto:') ? (
                  <a 
                    href={item.href}
                    className={`${
                      item.color === 'emergency-amber' 
                        ? 'text-emergency-amber hover:text-emergency-amber-dark' 
                        : 'text-medical-blue hover:text-medical-blue-dark'
                    } font-medium transition-colors`}
                  >
                    {item.info}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium">{item.info}</p>
                )}
                <p className="text-sm text-gray-600">{item.subinfo}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
