
import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to replace these with your actual values
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

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
    const templateParams = {
      to_email: 'rafayet.cse@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      pickup_location: formData.pickupLocation,
      destination: formData.destination,
      date: formData.date,
      time: formData.time,
      passengers: formData.passengers || 'Not specified',
      service_type: formData.serviceType,
      medical_condition: formData.medicalCondition || 'Not specified',
      special_requirements: formData.specialRequirements || 'None',
      message: `New ${formData.serviceType} booking request from ${formData.name}`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
