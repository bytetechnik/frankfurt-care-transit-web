
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { sendBookingEmail } from '@/services/emailService';

export interface AmbulanceFormData {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  locationFrom: string;
  locationTo: string;
  guests: string;
  healthInsurance: string;
  customInsurance: string;
  amenities: string;
  additionalInfo: string;
}

export const useAmbulanceBookingForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AmbulanceFormData>({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    locationFrom: '',
    locationTo: '',
    guests: '1',
    healthInsurance: '',
    customInsurance: '',
    amenities: '',
    additionalInfo: ''
  });

  const [showCustomInsurance, setShowCustomInsurance] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'healthInsurance') {
      setShowCustomInsurance(value === 'other');
      if (value !== 'other') {
        setFormData(prev => ({
          ...prev,
          customInsurance: ''
        }));
      }
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      email: '',
      locationFrom: '',
      locationTo: '',
      guests: '1',
      healthInsurance: '',
      customInsurance: '',
      amenities: '',
      additionalInfo: ''
    });
    setShowCustomInsurance(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        pickupLocation: formData.locationFrom,
        destination: formData.locationTo,
        date: '',
        time: '',
        passengers: formData.guests,
        serviceType: 'ambulance' as const,
        medicalCondition: `Krankenkasse: ${formData.healthInsurance === 'other' ? formData.customInsurance : formData.healthInsurance}`,
        specialRequirements: `Transport-Art: ${formData.amenities}, Zusätzliche Informationen: ${formData.additionalInfo}`
      };

      const success = await sendBookingEmail(emailData);

      if (success) {
        toast({
          title: "Krankentransport-Buchung erfolgreich gesendet!",
          description: "Vielen Dank für Ihre Buchungsanfrage. Wir werden uns in Kürze bei Ihnen melden, um die Details zu bestätigen.",
        });
        resetForm();
      } else {
        toast({
          title: "Fehler beim Senden",
          description: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Email sending error:', error);
      toast({
        title: "Fehler beim Senden",
        description: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    showCustomInsurance,
    isSubmitting,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    t
  };
};
