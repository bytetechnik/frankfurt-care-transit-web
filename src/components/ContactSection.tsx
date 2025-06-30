
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactInfo from './ContactInfo';
import ContactTabs from './ContactTabs';
import EmergencyNotice from './EmergencyNotice';
import MapSection from './MapSection';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4 leading-relaxed break-words" style={{ wordBreak: 'break-word' }}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 lg:space-y-8">
            <ContactInfo />
            <EmergencyNotice />
          </div>

          {/* Right Column - Contact Forms */}
          <div className="lg:col-span-2">
            <ContactTabs />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <MapSection />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
