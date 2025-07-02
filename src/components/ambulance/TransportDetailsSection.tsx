import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AmbulanceFormData } from '@/hooks/useAmbulanceBookingForm';

interface TransportDetailsSectionProps {
  formData: AmbulanceFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (name: string, value: string) => void;
  t: (key: string) => string;
}

const TransportDetailsSection = ({ formData, onInputChange, onSelectChange, t }: TransportDetailsSectionProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="locationFrom">{t('contact.common_fields.location_from')} *</Label>
          <Input
            id="locationFrom"
            name="locationFrom"
            required
            value={formData.locationFrom}
            onChange={onInputChange}
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
            onChange={onInputChange}
            placeholder={t('contact.common_fields.location_to')}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="guests">{t('contact.ambulance_fields.guests')} *</Label>
          <Select value={formData.guests} onValueChange={(value) => onSelectChange('guests', value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('contact.form_messages.select_passengers')} />
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
          <Select value={formData.amenities} onValueChange={(value) => onSelectChange('amenities', value)}>
            <SelectTrigger>
              <SelectValue placeholder={t('contact.form_messages.select_transport')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stretcher">{t('contact.ambulance_fields.amenity_options.stretcher')}</SelectItem>
              <SelectItem value="seated">{t('contact.ambulance_fields.amenity_options.seated')}</SelectItem>
              <SelectItem value="walking">{t('contact.ambulance_fields.amenity_options.walking')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default TransportDetailsSection;
