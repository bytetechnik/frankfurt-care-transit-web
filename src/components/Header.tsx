
import { useState } from 'react';
import { Menu, X, Phone, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-medical-blue p-2 rounded-lg">
              <Ambulance className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-medical-blue">Taxi OM Krankentransport</h1>
              <p className="text-sm text-gray-600">Rhein-Main Gebiet</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-gray-700 hover:text-medical-blue transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Desktop CTA and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a href="tel:+4917842687786" className="flex items-center space-x-2 text-emergency-amber hover:text-emergency-amber-dark transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+49 17 84 26 87 86</span>
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
              <button 
                onClick={() => handleNavClick('home')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-left"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-left"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-left"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-gray-700 hover:text-medical-blue transition-colors font-medium text-left"
              >
                {t('nav.contact')}
              </button>
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher />
                <a href="tel:+4917842687786" className="flex items-center space-x-2 text-emergency-amber mb-3 mt-3">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">+49 17 84 26 87 86</span>
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
