
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  passengers?: string;
  serviceType: 'taxi' | 'ambulance';
  medicalCondition?: string;
  specialRequirements?: string;
}

export const sendBookingEmail = async (formData: BookingFormData): Promise<boolean> => {
  try {
    // Convert service type to German
    const serviceTypeGerman = formData.serviceType === 'taxi' ? 'Taxi' : 'Krankentransport';
    
    const templateParams = {
      to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      pickup_location: formData.pickupLocation,
      destination: formData.destination,
      date: formData.date,
      time: formData.time,
      passengers: formData.passengers || 'Nicht angegeben',
      service_type: serviceTypeGerman,
      medical_condition: formData.medicalCondition || 'Nicht angegeben',
      special_requirements: formData.specialRequirements || 'Keine',
      message: `Neue ${serviceTypeGerman} Buchungsanfrage von ${formData.name}`
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
