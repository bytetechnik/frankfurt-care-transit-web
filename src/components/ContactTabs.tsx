import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TaxiBookingForm from '@/components/TaxiBookingForm';
import AmbulanceBookingForm from '@/components/AmbulanceBookingForm';

const ContactTabs = () => {
  const [activeTab, setActiveTab] = useState('ambulance');
  const { t } = useLanguage();

  const handleTabSwitch = useCallback((tab: 'ambulance' | 'taxi') => {
    setActiveTab(tab);
    // Ensure the form is visible after tab switch
    const formElement = document.querySelector('.booking-form-container');
    if (formElement) {
      setTimeout(() => {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleTabSwitchEvent = (event: CustomEvent) => {
      const newTab = event.detail.activeTab;
      if (newTab && (newTab === 'ambulance' || newTab === 'taxi')) {
        handleTabSwitch(newTab);
      }
    };

    window.addEventListener('switchContactTab', handleTabSwitchEvent as EventListener);

    // Check if there's a stored tab preference
    const storedTab = sessionStorage.getItem('scrollToService');
    if (storedTab && (storedTab === 'ambulance' || storedTab === 'taxi')) {
      handleTabSwitch(storedTab);
    }

    return () => {
      window.removeEventListener('switchContactTab', handleTabSwitchEvent as EventListener);
    };
  }, [handleTabSwitch]);

  return (
    <div className="animate-slide-in-right booking-form-container">
      {/* Tab Navigation */}
      <div className="flex mb-4 md:mb-6 bg-gray-100 rounded-lg p-1 sticky top-0 z-10">
        <button
          onClick={() => handleTabSwitch('ambulance')}
          className={`flex-1 py-2 px-3 md:px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'ambulance'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🚑 {t('contact.ambulance_booking')}
        </button>
        <button
          onClick={() => handleTabSwitch('taxi')}
          className={`flex-1 py-2 px-3 md:px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'taxi'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🚕 {t('contact.taxi_booking')}
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
        {activeTab === 'ambulance' && <AmbulanceBookingForm />}
        {activeTab === 'taxi' && <TaxiBookingForm />}
      </div>
    </div>
  );
};

export default ContactTabs;
