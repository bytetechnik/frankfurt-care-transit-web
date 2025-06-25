
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Header
    'header.home': 'Startseite',
    'header.services': 'Dienstleistungen',
    'header.about': 'Über uns',
    'header.contact': 'Kontakt',
    'header.emergency': 'Notruf',
    'header.phone': '069 123 456 789',
    
    // Hero Section
    'hero.title.private': 'Privater',
    'hero.title.ambulance': 'Krankenwagen',
    'hero.title.and': '&',
    'hero.title.taxi': 'Taxi Service',
    'hero.description': 'Professioneller medizinischer Transport und Taxiservice in Frankfurt und Umgebung. Rund um die Uhr verfügbar mit geschultem Personal und schnellen Reaktionszeiten.',
    'hero.feature.24_7': '24/7 Verfügbar',
    'hero.feature.certified': 'Zertifiziertes Personal',
    'hero.feature.patient_care': 'Patientenbetreuung',
    'hero.feature.fast_response': 'Schnelle Reaktion',
    'hero.emergency_call': 'Notruf Jetzt',
    'hero.book_ambulance': 'Krankenwagen Buchen',
    'hero.licensed': 'Lizenziert & Versichert',
    'hero.professional': 'Professioneller Service',
    
    // Services Section
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Professionelle Transportdienstleistungen zugeschnitten auf Ihre medizinischen und Mobilitätsbedürfnisse in Frankfurt',
    'services.ambulance.title': 'Privater Krankenwagen',
    'services.ambulance.description': 'Professioneller medizinischer Transport mit ausgebildeten Sanitätern',
    'services.ambulance.feature1': 'Nicht-Notfall Patiententransport',
    'services.ambulance.feature2': 'Medizinische Betreuung während Transport',
    'services.ambulance.feature3': 'Lokal & Fernstrecken Abdeckung',
    'services.ambulance.feature4': 'Rollstuhlgerechte Fahrzeuge',
    'services.ambulance.cta': 'Krankenwagen Anfragen',
    'services.taxi.title': 'Taxi Service',
    'services.taxi.description': 'Zuverlässiger Taxiservice für alle Ihre Transportbedürfnisse',
    'services.taxi.feature1': 'Flughafentransfers',
    'services.taxi.feature2': 'Seniorenbetreuung',
    'services.taxi.feature3': 'Lokaler Frankfurt Transport',
    'services.taxi.feature4': 'Komfortable & saubere Fahrzeuge',
    'services.taxi.cta': 'Taxi Buchen',
    'services.why_choose': 'Warum MediTransport Frankfurt wählen?',
    'services.availability': '24/7 Verfügbarkeit',
    'services.availability_desc': 'Rund-um-die-Uhr Service wenn Sie uns am meisten brauchen',
    'services.expertise': 'Medizinische Expertise',
    'services.expertise_desc': 'Geschulte Fachkräfte mit medizinischem Wissen',
    'services.coverage': 'Lokale Abdeckung',
    'services.coverage_desc': 'Bedienung Frankfurt und Umgebung',
    'services.care': 'Patientenzentrierte Betreuung',
    'services.care_desc': 'Komfort und Sicherheit sind unsere obersten Prioritäten',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.subtitle': 'Lesen Sie Erfahrungsberichte von zufriedenen Kunden, die uns mit ihren Transportbedürfnissen vertrauen',
    
    // Contact Section
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Kontaktieren Sie uns für Notfalltransport oder um unsere Dienstleistungen zu buchen. Wir sind rund um die Uhr für Sie da.',
    'contact.get_in_touch': 'Kontakt aufnehmen',
    'contact.emergency_hotline': 'Notfall-Hotline',
    'contact.available_24_7': 'Verfügbar 24/7',
    'contact.email_us': 'E-Mail an uns',
    'contact.respond_2h': 'Wir antworten innerhalb von 2 Stunden',
    'contact.location': 'Unser Standort',
    'contact.office_hours': 'Bürozeiten',
    'contact.office_hours_time': 'Mo-Fr: 8:00 - 18:00',
    'contact.emergency_service': 'Notfalldienst: 24/7',
    'contact.emergency_services': 'Notfalldienste',
    'contact.emergency_notice': 'Für sofortigen medizinischen Transport oder Notfallsituationen rufen Sie direkt unsere 24/7-Hotline an.',
    'contact.send_message': 'Senden Sie uns eine Nachricht',
    'contact.full_name': 'Vollständiger Name',
    'contact.phone_number': 'Telefonnummer',
    'contact.email_address': 'E-Mail-Adresse',
    'contact.message': 'Nachricht',
    'contact.message_placeholder': 'Bitte beschreiben Sie Ihre Transportbedürfnisse oder Anfrage...',
    'contact.send': 'Nachricht senden',
    'contact.map_placeholder': 'Interaktive Karte würde hier eingebettet werden',
    
    // Footer
    'footer.company_desc': 'Ihr vertrauensvoller Partner für private Krankenwagen- und Taxiservices in Frankfurt und Umgebung. Wir bieten professionelle, zuverlässige und mitfühlende Transportdienstleistungen rund um die Uhr.',
    'footer.quick_links': 'Schnelllinks',
    'footer.contact_info': 'Kontakt Info',
    'footer.professional_services': 'Professionelle Transportdienstleistungen',
    'footer.rights_reserved': '© 2024 MediTransport Frankfurt. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.imprint': 'Impressum'
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.services': 'Services',
    'header.about': 'About Us',
    'header.contact': 'Contact',
    'header.emergency': 'Emergency Call',
    'header.phone': '069 123 456 789',
    
    // Hero Section
    'hero.title.private': 'Private',
    'hero.title.ambulance': 'Ambulance',
    'hero.title.and': '&',
    'hero.title.taxi': 'Taxi Service',
    'hero.description': 'Professional medical transport and taxi services in Frankfurt and surrounding areas. Available 24/7 with trained staff and fast response times.',
    'hero.feature.24_7': '24/7 Available',
    'hero.feature.certified': 'Certified Staff',
    'hero.feature.patient_care': 'Patient Care',
    'hero.feature.fast_response': 'Fast Response',
    'hero.emergency_call': 'Emergency Call Now',
    'hero.book_ambulance': 'Book Ambulance',
    'hero.licensed': 'Licensed & Insured',
    'hero.professional': 'Professional Service',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Professional transportation services tailored to your medical and mobility needs in Frankfurt',
    'services.ambulance.title': 'Private Ambulance',
    'services.ambulance.description': 'Professional medical transport with trained paramedics',
    'services.ambulance.feature1': 'Non-emergency patient transport',
    'services.ambulance.feature2': 'Medical supervision during transport',
    'services.ambulance.feature3': 'Local & long-distance coverage',
    'services.ambulance.feature4': 'Wheelchair accessible vehicles',
    'services.ambulance.cta': 'Request Ambulance',
    'services.taxi.title': 'Taxi Service',
    'services.taxi.description': 'Reliable taxi service for all your transportation needs',
    'services.taxi.feature1': 'Airport transfers',
    'services.taxi.feature2': 'Senior citizen support',
    'services.taxi.feature3': 'Local Frankfurt transport',
    'services.taxi.feature4': 'Comfortable & clean vehicles',
    'services.taxi.cta': 'Book Taxi',
    'services.why_choose': 'Why Choose MediTransport Frankfurt?',
    'services.availability': '24/7 Availability',
    'services.availability_desc': 'Round-the-clock service when you need us most',
    'services.expertise': 'Medical Expertise',
    'services.expertise_desc': 'Trained professionals with medical knowledge',
    'services.coverage': 'Local Coverage',
    'services.coverage_desc': 'Serving Frankfurt and surrounding areas',
    'services.care': 'Patient-Centered Care',
    'services.care_desc': 'Comfort and safety are our top priorities',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Read testimonials from satisfied customers who trust us with their transportation needs',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for emergency transport or to book our services. We\'re here to help 24/7.',
    'contact.get_in_touch': 'Get in Touch',
    'contact.emergency_hotline': 'Emergency Hotline',
    'contact.available_24_7': 'Available 24/7',
    'contact.email_us': 'Email Us',
    'contact.respond_2h': 'We\'ll respond within 2 hours',
    'contact.location': 'Our Location',
    'contact.office_hours': 'Office Hours',
    'contact.office_hours_time': 'Mon-Fri: 8:00 - 18:00',
    'contact.emergency_service': 'Emergency service: 24/7',
    'contact.emergency_services': 'Emergency Services',
    'contact.emergency_notice': 'For immediate medical transport or emergency situations, call our 24/7 hotline directly.',
    'contact.send_message': 'Send us a Message',
    'contact.full_name': 'Full Name',
    'contact.phone_number': 'Phone Number',
    'contact.email_address': 'Email Address',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Please describe your transport needs or inquiry...',
    'contact.send': 'Send Message',
    'contact.map_placeholder': 'Interactive map would be embedded here',
    
    // Footer
    'footer.company_desc': 'Your trusted partner for private ambulance and taxi services in Frankfurt and surrounding areas. We provide professional, reliable, and compassionate transportation services 24/7.',
    'footer.quick_links': 'Quick Links',
    'footer.contact_info': 'Contact Info',
    'footer.professional_services': 'Professional Transport Services',
    'footer.rights_reserved': '© 2024 MediTransport Frankfurt. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de'); // German as default

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
