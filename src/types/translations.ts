export interface TranslationContextProps {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: string) => string;
}

export type SupportedLanguage = 'de' | 'en';

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: {
      private: string;
      ambulance: string;
      and: string;
      taxi: string;
    };
    description: string;
    feature: {
      '24_7': string;
      certified: string;
      patient_care: string;
      fast_response: string;
    };
    emergency_call: string;
    book_ambulance: string;
    licensed: string;
    professional: string;
  };
  services: {
    title: string;
    subtitle: string;
    ambulance: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      cta: string;
    };
    taxi: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      cta: string;
    };
    why_choose: string;
    availability: string;
    availability_desc: string;
    expertise: string;
    expertise_desc: string;
    coverage: string;
    coverage_desc: string;
    care: string;
    care_desc: string;
    service1: {
      title: string;
      description: string;
    };
    service2: {
      title: string;
      description: string;
    };
    service3: {
      title: string;
      description: string;
    };
    service4: {
      title: string;
      description: string;
    };
    service5: {
      title: string;
      description: string;
    };
    service6: {
      title: string;
      description: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    testimonial1: {
      name: string;
      text: string;
    };
    testimonial2: {
      name: string;
      text: string;
    };
    testimonial3: {
      name: string;
      text: string;
    };
  };
  header: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  footer: {
    company_name: string;
    professional_services: string;
    company_desc: string;
    quick_links: string;
    contact_info: string;
    address: string;
    phone: string;
    opening_hours: string;
    emergency_service: string;
    all_rights_reserved: string;
    rights_reserved: string;
    privacy: string;
    imprint: string;
  };
  about: {
    title: string;
    subtitle: string;
    introduction_title: string;
    expertise_title: string;
    advantages_title: string;
    intro: string;
    experience: string;
    choice: string;
    patient_transport: string;
    billing: string;
    coverage_title: string;
    coverage_description: string;
    coverage_areas: string;
    years_experience: string;
    years_experience_text: string;
    professional_service: string;
    transparent_billing: string;
    wide_coverage: string;
    advantage_1: string;
    advantage_2: string;
    advantage_3: string;
    advantage_4: string;
  };
  imprint: {
    title: string;
    company_info: string;
    telephone: string;
    email: string;
    responsible_title: string;
    dispute_resolution: string;
    dispute_text: string;
    email_reference: string;
    arbitration_disclaimer: string;
    copyright: string;
    copyright_text1: string;
    copyright_text2: string;
  };
}
