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
    intro: string;
    experience: string;
    choice: string;
    patient_transport: string;
    billing: string;
    coverage_title: string;
    coverage_areas: string;
    years_experience: string;
    years_experience_text: string;
    professional_service: string;
    transparent_billing: string;
    wide_coverage: string;
  };
  contact: {
    title: string;
    subtitle: string;
    get_in_touch: string;
    emergency_hotline: string;
    email_us: string;
    location: string;
    office_hours: string;
    office_hours_time: string;
    available_24_7: string;
    respond_2h: string;
    emergency_service: string;
    emergency_services: string;
    emergency_notice: string;
    send_message: string;
    full_name: string;
    phone_number: string;
    email_address: string;
    message: string;
    message_placeholder: string;
    send: string;
    map_placeholder: string;
    taxi_booking: string;
    ambulance_booking: string;
    common_fields: {
      first_name: string;
      last_name: string;
      address: string;
      phone: string;
      email: string;
      location_from: string;
      location_to: string;
    };
    taxi_fields: {
      time: string;
      additional_info: string;
    };
    ambulance_fields: {
      guests: string;
      health_insurance: string;
      amenities: string;
      additional_info: string;
      specify_insurance: string;
      insurance_options: {
        aok: string;
        tk: string;
        barmer: string;
        dak: string;
        kkh: string;
        ik: string;
        bkk: string;
        knappschaft: string;
        private: string;
        other: string;
      };
      amenity_options: {
        stretcher: string;
        seated: string;
        walking: string;
      };
    };
  };
}
