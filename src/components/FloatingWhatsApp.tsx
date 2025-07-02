import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  const whatsappNumber = "+491784268786"; // Updated WhatsApp number
  const whatsappMessage = encodeURIComponent(t('whatsapp.default_message') || "Hello, I would like to book a service.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="relative w-7 h-7">
        <MessageCircle className="w-7 h-7 absolute transform -rotate-12" strokeWidth={2.5} />
      </div>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium">
        {t('whatsapp.chat_now')}
      </span>
    </a>
  );
};

export default FloatingWhatsApp; 