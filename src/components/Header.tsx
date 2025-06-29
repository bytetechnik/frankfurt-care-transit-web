
import { useState } from 'react';
import { Menu, X, Phone, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-medical-blue p-2 rounded-lg">
              <Ambulance className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-medical-blue">Taxi OM Krankentransport</h1>
              <p className="text-sm text-gray-600">Frankfurt</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
              {t('nav.services')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Desktop CTA and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="tel:+4969123456789" className="flex items-center space-x-2 text-emergency-amber hover:text-emergency-amber-dark transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{t('footer.phone')}</span>
            </a>
            <Button className="bg-emergency-amber hover:bg-emergency-amber-dark text-white">
              {t('hero.emergency_call')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
                {t('nav.home')}
              </a>
              <a href="#services" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
                {t('nav.services')}
              </a>
              <a href="#about" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-medical-blue transition-colors font-medium">
                {t('nav.contact')}
              </a>
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher />
                <a href="tel:+4969123456789" className="flex items-center space-x-2 text-emergency-amber mb-3 mt-3">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">{t('footer.phone')}</span>
                </a>
                <Button className="w-full bg-emergency-amber hover:bg-emergency-amber-dark text-white">
                  {t('hero.emergency_call')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
