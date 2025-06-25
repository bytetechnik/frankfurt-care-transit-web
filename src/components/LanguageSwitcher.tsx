
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex space-x-1">
        <Button
          variant={language === 'de' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('de')}
          className="text-xs px-2 py-1"
        >
          DE
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="text-xs px-2 py-1"
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
