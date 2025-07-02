import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { sendBookingEmail } from '@/services/emailService';

const TaxiBookingForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    locationFrom: '',
    locationTo: '',
    time: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        date: formData.time ? new Date(formData.time).toLocaleDateString('de-DE') : '',
        time: formData.time ? new Date(formData.time).toLocaleTimeString('de-DE') : '',
        serviceType: 'taxi' as const,
        specialRequirements: formData.additionalInfo
      };

      const success = await sendBookingEmail(emailData);

      if (success) {
        toast({
          title: t('contact.form_messages.taxi_success_title'),
          description: t('contact.form_messages.taxi_success_desc'),
        });
        setFormData({
          firstName: '',
          lastName: '',
          address: '',
          phone: '',
          email: '',
          locationFrom: '',
          locationTo: '',
          time: '',
          additionalInfo: ''
        });
      } else {
        toast({
          title: t('contact.form_messages.error_title'),
          description: t('contact.form_messages.error_desc'),
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Email sending error:', error);
      toast({
        title: t('contact.form_messages.error_title'),
        description: t('contact.form_messages.error_desc'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader className="bg-emergency-amber text-white">
        <CardTitle className="text-2xl flex items-center">
          <span className="mr-2">🚕</span>
          {t('contact.taxi_booking')}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">{t('contact.common_fields.first_name')} *</Label>
              <Input
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t('contact.common_fields.first_name')}
              />
            </div>
            <div>
              <Label htmlFor="lastName">{t('contact.common_fields.last_name')} *</Label>
              <Input
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t('contact.common_fields.last_name')}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">{t('contact.common_fields.address')} *</Label>
            <Input
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              placeholder={t('contact.common_fields.address')}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{t('contact.common_fields.phone')} *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+49 ..."
              />
            </div>
            <div>
              <Label htmlFor="email">{t('contact.common_fields.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="locationFrom">{t('contact.common_fields.location_from')} *</Label>
              <Input
                id="locationFrom"
                name="locationFrom"
                required
                value={formData.locationFrom}
                onChange={handleInputChange}
                placeholder={t('contact.common_fields.location_from')}
              />
            </div>
            <div>
              <Label htmlFor="locationTo">{t('contact.common_fields.location_to')} *</Label>
              <Input
                id="locationTo"
                name="locationTo"
                required
                value={formData.locationTo}
                onChange={handleInputChange}
                placeholder={t('contact.common_fields.location_to')}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="time">{t('contact.taxi_fields.time')}</Label>
            <Input
              id="time"
              name="time"
              type="datetime-local"
              value={formData.time}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <Label htmlFor="additionalInfo">{t('contact.taxi_fields.additional_info')}</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
              placeholder="Any special requirements or additional information..."
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-emergency-amber hover:bg-emergency-amber-dark text-white py-3" 
            size="lg"
          >
            <Send className="mr-2 h-5 w-5" />
            {isSubmitting ? 'Wird gesendet...' : t('contact.send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TaxiBookingForm;
