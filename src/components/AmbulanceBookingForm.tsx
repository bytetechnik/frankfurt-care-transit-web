
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const AmbulanceBookingForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ambulance Booking Submitted!",
      description: "Thank you for your booking request. We'll contact you shortly to confirm the details.",
    });
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

  return (
    <Card className="shadow-xl">
      <CardHeader className="bg-medical-blue text-white">
        <CardTitle className="text-2xl flex items-center">
          <span className="mr-2">🚑</span>
          {t('contact.ambulance_booking')}
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
                placeholder="+49 69 ..."
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

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="guests">{t('contact.ambulance_fields.guests')} *</Label>
              <Select value={formData.guests} onValueChange={(value) => handleSelectChange('guests', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of passengers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="amenities">{t('contact.ambulance_fields.amenities')} *</Label>
              <Select value={formData.amenities} onValueChange={(value) => handleSelectChange('amenities', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select transport type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stretcher">{t('contact.ambulance_fields.amenity_options.stretcher')}</SelectItem>
                  <SelectItem value="seated">{t('contact.ambulance_fields.amenity_options.seated')}</SelectItem>
                  <SelectItem value="walking">{t('contact.ambulance_fields.amenity_options.walking')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="healthInsurance">{t('contact.ambulance_fields.health_insurance')} *</Label>
            <Select value={formData.healthInsurance} onValueChange={(value) => handleSelectChange('healthInsurance', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select health insurance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aok">{t('contact.ambulance_fields.insurance_options.aok')}</SelectItem>
                <SelectItem value="tk">{t('contact.ambulance_fields.insurance_options.tk')}</SelectItem>
                <SelectItem value="barmer">{t('contact.ambulance_fields.insurance_options.barmer')}</SelectItem>
                <SelectItem value="dak">{t('contact.ambulance_fields.insurance_options.dak')}</SelectItem>
                <SelectItem value="kkh">{t('contact.ambulance_fields.insurance_options.kkh')}</SelectItem>
                <SelectItem value="ik">{t('contact.ambulance_fields.insurance_options.ik')}</SelectItem>
                <SelectItem value="bkk">{t('contact.ambulance_fields.insurance_options.bkk')}</SelectItem>
                <SelectItem value="knappschaft">{t('contact.ambulance_fields.insurance_options.knappschaft')}</SelectItem>
                <SelectItem value="private">{t('contact.ambulance_fields.insurance_options.private')}</SelectItem>
                <SelectItem value="other">{t('contact.ambulance_fields.insurance_options.other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {showCustomInsurance && (
            <div>
              <Label htmlFor="customInsurance">Please specify your insurance type *</Label>
              <Input
                id="customInsurance"
                name="customInsurance"
                required
                value={formData.customInsurance}
                onChange={handleInputChange}
                placeholder="Please specify your insurance type"
              />
            </div>
          )}

          <div>
            <Label htmlFor="additionalInfo">{t('contact.ambulance_fields.additional_info')}</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
              placeholder="Medical requirements, special equipment needed, or other important information..."
            />
          </div>

          <Button type="submit" className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white py-3" size="lg">
            <Send className="mr-2 h-5 w-5" />
            {t('contact.send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AmbulanceBookingForm;
