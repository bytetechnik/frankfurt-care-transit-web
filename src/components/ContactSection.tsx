import { useLanguage } from '@/contexts/LanguageContext';
import ContactInfo from '@/components/ContactInfo';
import EmergencyNotice from '@/components/EmergencyNotice';
import ContactTabs from '@/components/ContactTabs';
import MapSection from '@/components/MapSection';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 md:py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">{t('contact.title')}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <ContactInfo />
            <EmergencyNotice />
          </div>

          {/* Contact Forms */}
          <div className="order-1 lg:order-2">
            <ContactTabs />
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 md:mt-20">
          <MapSection />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
