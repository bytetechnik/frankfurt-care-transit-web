import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AmbulanceFormData } from '@/hooks/useAmbulanceBookingForm';

interface InsuranceSectionProps {
  formData: AmbulanceFormData;
  showCustomInsurance: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (name: string, value: string) => void;
  t: (key: string) => string;
}

const InsuranceSection = ({ formData, showCustomInsurance, onInputChange, onSelectChange, t }: InsuranceSectionProps) => {
  return (
    <>
      <div>
        <Label htmlFor="healthInsurance">{t('contact.ambulance_fields.health_insurance')} *</Label>
        <Select value={formData.healthInsurance} onValueChange={(value) => onSelectChange('healthInsurance', value)}>
          <SelectTrigger>
            <SelectValue placeholder={t('contact.form_messages.select_insurance')} />
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
            <SelectItem value="other">{t('contact.ambulance_fields.insurance_options.other')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {showCustomInsurance && (
        <div>
          <Label htmlFor="customInsurance">{t('contact.ambulance_fields.specify_insurance')} *</Label>
          <Input
            id="customInsurance"
            name="customInsurance"
            required
            value={formData.customInsurance}
            onChange={onInputChange}
            placeholder={t('contact.ambulance_fields.specify_insurance')}
          />
        </div>
      )}
    </>
  );
};

export default InsuranceSection;
