import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useAmbulanceBookingForm } from '@/hooks/useAmbulanceBookingForm';
import PersonalInfoSection from '@/components/ambulance/PersonalInfoSection';
import TransportDetailsSection from '@/components/ambulance/TransportDetailsSection';
import InsuranceSection from '@/components/ambulance/InsuranceSection';

const AmbulanceBookingForm = () => {
  const {
    formData,
    showCustomInsurance,
    isSubmitting,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    t
  } = useAmbulanceBookingForm();

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
          <PersonalInfoSection
            formData={formData}
            onInputChange={handleInputChange}
            t={t}
          />

          <TransportDetailsSection
            formData={formData}
            onInputChange={handleInputChange}
            onSelectChange={handleSelectChange}
            t={t}
          />

          <InsuranceSection
            formData={formData}
            showCustomInsurance={showCustomInsurance}
            onInputChange={handleInputChange}
            onSelectChange={handleSelectChange}
            t={t}
          />

          <div>
            <Label htmlFor="additionalInfo">{t('contact.ambulance_fields.additional_info')}</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
              placeholder={t('contact.ambulance_fields.additional_info')}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white py-3" 
            size="lg"
          >
            <Send className="mr-2 h-5 w-5" />
            {isSubmitting ? t('contact.form_messages.sending') : t('contact.send')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AmbulanceBookingForm;
