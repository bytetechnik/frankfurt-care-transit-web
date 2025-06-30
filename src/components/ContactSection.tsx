
import { useLanguage } from '@/contexts/LanguageContext';
import ContactInfo from '@/components/ContactInfo';
import EmergencyNotice from '@/components/EmergencyNotice';
import ContactTabs from '@/components/ContactTabs';
import MapSection from '@/components/MapSection';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <ContactInfo />
            <EmergencyNotice />
          </div>

          {/* Contact Forms */}
          <ContactTabs />
        </div>

        {/* Map Placeholder */}
        <MapSection />
      </div>
    </section>
  );
};

export default ContactSection;
