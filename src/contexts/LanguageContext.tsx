import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations = {
  de: {
    // Header
    nav: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      contact: 'Kontakt'
    },
    // Hero Section
    hero: {
      title: {
        private: 'Taxi OM',
        ambulance: 'Krankentransport',
        and: '&',
        taxi: 'Taxi Service'
      },
      description: 'Professioneller privater Krankentransport und Taxi-Service in Frankfurt. 24/7 verfügbar mit geschultem Personal und schneller Reaktionszeit.',
      feature: {
        '24_7': '24/7 Verfügbar',
        certified: 'Zertifiziert',
        patient_care: 'Patientenbetreuung',
        fast_response: 'Schnelle Reaktion'
      },
      emergency_call: 'Notruf',
      book_ambulance: 'Krankenwagen buchen',
      licensed: 'Lizenziert',
      professional: 'Professionell'
    },
    // Services Section
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Wir bieten eine breite Palette an Transportdienstleistungen, um Ihren Bedürfnissen gerecht zu werden.',
      ambulance: {
        title: 'Krankentransport',
        description: 'Sicherer und komfortabler Transport für Patienten zu medizinischen Terminen und Einrichtungen.',
        feature1: 'Professionelle medizinische Betreuung',
        feature2: 'Moderne Fahrzeuge mit medizinischer Ausstattung',
        feature3: '24/7 Verfügbarkeit',
        feature4: 'Erfahrenes Fachpersonal',
        cta: 'Krankentransport buchen'
      },
      taxi: {
        title: 'Taxi Service',
        description: 'Zuverlässiger und komfortabler Taxi-Service für alle Ihre Transportbedürfnisse.',
        feature1: 'Pünktliche Abholung',
        feature2: 'Saubere und komfortable Fahrzeuge',
        feature3: 'Faire Preise',
        feature4: 'Freundliche Fahrer',
        cta: 'Taxi buchen'
      },
      why_choose: 'Warum uns wählen?',
      availability: '24/7 Verfügbarkeit',
      availability_desc: 'Rund um die Uhr für Sie da',
      expertise: 'Fachkompetenz',
      expertise_desc: 'Geschultes medizinisches Personal',
      coverage: 'Abdeckung',
      coverage_desc: 'Frankfurt und Umgebung',
      care: 'Betreuung',
      care_desc: 'Einfühlsame Patientenbetreuung',
      service1: {
        title: 'Krankentransport',
        description: 'Sicherer und komfortabler Transport für Patienten zu medizinischen Terminen und Einrichtungen.',
      },
      service2: {
        title: 'Rollstuhltransport',
        description: 'Barrierefreier Transport für Rollstuhlfahrer mit speziell ausgestatteten Fahrzeugen.',
      },
      service3: {
        title: 'Dialysefahrten',
        description: 'Regelmäßige und zuverlässige Fahrten für Dialysepatienten.',
      },
      service4: {
        title: 'Flughafentransfer',
        description: 'Pünktlicher und bequemer Transfer zum und vom Flughafen Frankfurt.',
      },
      service5: {
        title: 'Kurierfahrten',
        description: 'Schnelle und zuverlässige Lieferung von Dokumenten und Paketen.',
      },
      service6: {
        title: 'Besorgungsfahrten',
        description: 'Erledigung von Einkäufen und Besorgungen für Menschen mit eingeschränkter Mobilität.',
      },
    },
    // Testimonials Section
    testimonials: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Erfahrungen unserer Kunden mit unseren Transportdienstleistungen.',
      testimonial1: {
        name: 'Maria Schmidt',
        text: 'Der Krankentransport war pünktlich und sehr angenehm. Das Personal war freundlich und hilfsbereit.',
      },
      testimonial2: {
        name: 'Hans Müller',
        text: 'Ich bin sehr zufrieden mit dem Rollstuhltransport. Das Fahrzeug war sauber und gut ausgestattet.',
      },
      testimonial3: {
        name: 'Julia Weber',
        text: 'Die Dialysefahrten sind immer zuverlässig und pünktlich. Ich kann mich voll und ganz darauf verlassen.',
      },
    },
    // Footer Section
    footer: {
      company_name: 'Taxi OM Krankentransport',
      address: 'Hauptstraße 123, 60313 Frankfurt am Main',
      contact_info: 'info@taxi-om-krankentransport.de',
      phone: '+49 69 123 456 789',
      opening_hours: 'Mo-Fr: 8:00-18:00',
      emergency_service: '24/7 Notdienst',
      all_rights_reserved: 'Alle Rechte vorbehalten',
    },
    // Contact Section
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Benötigen Sie einen Krankentransport oder Taxi-Service? Wir sind hier, um zu helfen.',
      get_in_touch: 'Kontakt aufnehmen',
      emergency_hotline: 'Notfall-Hotline',
      email_us: 'E-Mail senden',
      location: 'Standort',
      office_hours: 'Bürozeiten',
      office_hours_time: 'Mo-Fr: 8:00-18:00',
      available_24_7: '24/7 Verfügbar',
      respond_2h: 'Antwort innerhalb von 2 Stunden',
      emergency_service: 'Notfalldienst rund um die Uhr',
      emergency_services: 'Notfalldienste',
      emergency_notice: 'Für lebensbedrohliche Notfälle rufen Sie bitte 112 an. Unser Service ist für geplante Transporte und nicht-kritische medizinische Situationen.',
      send_message: 'Nachricht senden',
      full_name: 'Vollständiger Name',
      phone_number: 'Telefonnummer',
      email_address: 'E-Mail-Adresse',
      message: 'Nachricht',
      message_placeholder: 'Beschreiben Sie Ihre Transportanforderungen...',
      send: 'Senden',
      map_placeholder: 'Karte wird hier angezeigt',
      taxi_booking: 'Taxi Buchung',
      ambulance_booking: 'Krankenwagen Buchung',
      common_fields: {
        first_name: 'Vorname',
        last_name: 'Nachname',
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail',
        location_from: 'Abholort',
        location_to: 'Zielort'
      },
      taxi_fields: {
        time: 'Gewünschte Zeit',
        additional_info: 'Zusätzliche Informationen'
      },
      ambulance_fields: {
        guests: 'Anzahl Passagiere',
        health_insurance: 'Krankenversicherung',
        amenities: 'Transportart',
        additional_info: 'Zusätzliche Informationen',
        insurance_options: {
          public: 'Gesetzliche Krankenversicherung',
          private: 'Private Krankenversicherung',
          self_pay: 'Selbstzahler',
          other: 'Andere'
        },
        amenity_options: {
          sitting: 'Sitzend',
          laying: 'Liegend',
          wheelchair: 'Rollstuhl'
        }
      }
    }
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      title: {
        private: 'Taxi OM',
        ambulance: 'Medical Transport',
        and: '&',
        taxi: 'Taxi Service'
      },
      description: 'Professional private medical transport and taxi service in Frankfurt. Available 24/7 with trained staff and fast response times.',
      feature: {
        '24_7': '24/7 Available',
        certified: 'Certified',
        patient_care: 'Patient Care',
        fast_response: 'Fast Response'
      },
      emergency_call: 'Emergency Call',
      book_ambulance: 'Book Ambulance',
      licensed: 'Licensed',
      professional: 'Professional'
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'We offer a wide range of transport services to meet your needs.',
      ambulance: {
        title: 'Medical Transport',
        description: 'Safe and comfortable transport for patients to medical appointments and facilities.',
        feature1: 'Professional medical care',
        feature2: 'Modern vehicles with medical equipment',
        feature3: '24/7 availability',
        feature4: 'Experienced medical staff',
        cta: 'Book Medical Transport'
      },
      taxi: {
        title: 'Taxi Service',
        description: 'Reliable and comfortable taxi service for all your transport needs.',
        feature1: 'Punctual pickup',
        feature2: 'Clean and comfortable vehicles',
        feature3: 'Fair prices',
        feature4: 'Friendly drivers',
        cta: 'Book Taxi'
      },
      why_choose: 'Why Choose Us?',
      availability: '24/7 Availability',
      availability_desc: 'Around the clock service',
      expertise: 'Expertise',
      expertise_desc: 'Trained medical personnel',
      coverage: 'Coverage',
      coverage_desc: 'Frankfurt and surrounding areas',
      care: 'Care',
      care_desc: 'Compassionate patient care',
      service1: {
        title: 'Medical Transport',
        description: 'Safe and comfortable transport for patients to medical appointments and facilities.',
      },
      service2: {
        title: 'Wheelchair Transport',
        description: 'Accessible transport for wheelchair users with specially equipped vehicles.',
      },
      service3: {
        title: 'Dialysis Transport',
        description: 'Regular and reliable transport for dialysis patients.',
      },
      service4: {
        title: 'Airport Transfer',
        description: 'Punctual and convenient transfer to and from Frankfurt Airport.',
      },
      service5: {
        title: 'Courier Services',
        description: 'Fast and reliable delivery of documents and packages.',
      },
      service6: {
        title: 'Errand Services',
        description: 'Running errands and shopping for people with limited mobility.',
      },
    },
    // Testimonials Section
    testimonials: {
      title: 'What our customers say',
      subtitle: 'Experiences of our customers with our transport services.',
      testimonial1: {
        name: 'Maria Schmidt',
        text: 'The medical transport was on time and very pleasant. The staff was friendly and helpful.',
      },
      testimonial2: {
        name: 'Hans Müller',
        text: 'I am very satisfied with the wheelchair transport. The vehicle was clean and well equipped.',
      },
      testimonial3: {
        name: 'Julia Weber',
        text: 'The dialysis trips are always reliable and punctual. I can fully rely on it.',
      },
    },
    // Footer Section
    footer: {
      company_name: 'Taxi OM Krankentransport',
      address: 'Hauptstraße 123, 60313 Frankfurt am Main',
      contact_info: 'info@taxi-om-krankentransport.de',
      phone: '+49 69 123 456 789',
      opening_hours: 'Mon-Fri: 8:00-18:00',
      emergency_service: '24/7 Emergency Service',
      all_rights_reserved: 'All rights reserved',
    },
    // Contact Section
    contact: {
      title: 'Contact Us',
      subtitle: 'Need medical transport or taxi service? We\'re here to help.',
      get_in_touch: 'Get in Touch',
      emergency_hotline: 'Emergency Hotline',
      email_us: 'Email Us',
      location: 'Location',
      office_hours: 'Office Hours',
      office_hours_time: 'Mon-Fri: 8:00-18:00',
      available_24_7: '24/7 Available',
      respond_2h: 'Response within 2 hours',
      emergency_service: '24/7 Emergency Service',
      emergency_services: 'Emergency Services',
      emergency_notice: 'For life-threatening emergencies, please call 112. Our service is for scheduled transports and non-critical medical situations.',
      send_message: 'Send Message',
      full_name: 'Full Name',
      phone_number: 'Phone Number',
      email_address: 'Email Address',
      message: 'Message',
      message_placeholder: 'Describe your transport requirements...',
      send: 'Send',
      map_placeholder: 'Map will be displayed here',
      taxi_booking: 'Taxi Booking',
      ambulance_booking: 'Ambulance Booking',
      common_fields: {
        first_name: 'First Name',
        last_name: 'Last Name',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        location_from: 'Pickup Location',
        location_to: 'Destination'
      },
      taxi_fields: {
        time: 'Preferred Time',
        additional_info: 'Additional Information'
      },
      ambulance_fields: {
        guests: 'Number of Passengers',
        health_insurance: 'Health Insurance',
        amenities: 'Transport Type',
        additional_info: 'Additional Information',
        insurance_options: {
          public: 'Public Health Insurance',
          private: 'Private Health Insurance',
          self_pay: 'Self-Pay',
          other: 'Other'
        },
        amenity_options: {
          sitting: 'Sitting',
          laying: 'Lying Down',
          wheelchair: 'Wheelchair'
        }
      }
    }
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'de');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
