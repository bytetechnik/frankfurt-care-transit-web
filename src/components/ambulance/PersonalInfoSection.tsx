
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AmbulanceFormData } from '@/hooks/useAmbulanceBookingForm';

interface PersonalInfoSectionProps {
  formData: AmbulanceFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  t: (key: string) => string;
}

const PersonalInfoSection = ({ formData, onInputChange, t }: PersonalInfoSectionProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">{t('contact.common_fields.first_name')} *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={onInputChange}
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
            onChange={onInputChange}
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
          onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            placeholder="your.email@example.com"
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfoSection;
