
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.emergency_hotline'),
      info: "+49 69 123 456 789",
      subinfo: t('contact.available_24_7'),
      href: "tel:+4969123456789",
      color: "emergency-amber"
    },
    {
      icon: Mail,
      title: t('contact.email_us'),
      info: "info@meditransport-frankfurt.de",
      subinfo: t('contact.respond_2h'),
      href: "mailto:info@meditransport-frankfurt.de",
      color: "medical-blue"
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      info: "Hauptstraße 123, 60313 Frankfurt",
      subinfo: "Frankfurt am Main, Germany",
      href: "#",
      color: "medical-blue"
    },
    {
      icon: Clock,
      title: t('contact.office_hours'),
      info: t('contact.office_hours_time'),
      subinfo: t('contact.emergency_service'),
      href: "#",
      color: "medical-blue"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.get_in_touch')}</h3>
            
            {contactInfo.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      item.color === 'emergency-amber' 
                        ? 'bg-emergency-amber-light' 
                        : 'bg-medical-blue-light'
                    }`}>
                      <item.icon className={`h-6 w-6 ${
                        item.color === 'emergency-amber' 
                          ? 'text-emergency-amber' 
                          : 'text-medical-blue'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      {item.href.startsWith('tel:') || item.href.startsWith('mailto:') ? (
                        <a 
                          href={item.href}
                          className={`${
                            item.color === 'emergency-amber' 
                              ? 'text-emergency-amber hover:text-emergency-amber-dark' 
                              : 'text-medical-blue hover:text-medical-blue-dark'
                          } font-medium transition-colors`}
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{item.info}</p>
                      )}
                      <p className="text-sm text-gray-600">{item.subinfo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Notice */}
            <div className="bg-emergency-amber-light border border-emergency-amber rounded-lg p-6 mt-8">
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="h-5 w-5 text-emergency-amber" />
                <h4 className="font-semibold text-emergency-amber">{t('contact.emergency_services')}</h4>
              </div>
              <p className="text-gray-700">
                {t('contact.emergency_notice')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{t('contact.send_message')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.full_name')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder={t('contact.full_name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.phone_number')}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+49 69 ..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.email_address')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full"
                      placeholder={t('contact.message_placeholder')}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white py-3"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t('contact.send')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 animate-fade-in">
          <Card className="overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">{t('contact.map_placeholder')}</p>
                <p className="text-sm text-gray-500">Hauptstraße 123, 60313 Frankfurt am Main</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
