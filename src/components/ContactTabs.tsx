
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TaxiBookingForm from '@/components/TaxiBookingForm';
import AmbulanceBookingForm from '@/components/AmbulanceBookingForm';
import GeneralContactForm from '@/components/GeneralContactForm';

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState('general');
  const { t } = useLanguage();

  return (
    <div className="animate-slide-in-right">
      {/* Tab Navigation */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('general')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'general'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          General Contact
        </button>
        <button
          onClick={() => setActiveTab('taxi')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'taxi'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🚕 {t('contact.taxi_booking')}
        </button>
        <button
          onClick={() => setActiveTab('ambulance')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'ambulance'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🚑 {t('contact.ambulance_booking')}
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'general' && <GeneralContactForm />}
      {activeTab === 'taxi' && <TaxiBookingForm />}
      {activeTab === 'ambulance' && <AmbulanceBookingForm />}
    </div>
  );
};

export default ContactTabs;
