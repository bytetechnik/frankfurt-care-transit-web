
import { Ambulance, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-medical-blue p-2 rounded-lg">
                <Ambulance className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MediTransport Frankfurt</h3>
                <p className="text-gray-400 text-sm">Professional Transport Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for private ambulance and taxi services in Frankfurt and surrounding areas. 
              We provide professional, reliable, and compassionate transportation services 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emergency-amber" />
                <a href="tel:+4969123456789" className="text-gray-300 hover:text-white transition-colors">
                  +49 69 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emergency-amber" />
                <a href="mailto:info@meditransport-frankfurt.de" className="text-gray-300 hover:text-white transition-colors">
                  info@meditransport-frankfurt.de
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emergency-amber mt-1" />
                <span className="text-gray-300">
                  Hauptstraße 123<br />
                  60313 Frankfurt am Main<br />
                  Germany
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MediTransport Frankfurt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Datenschutzerklärung
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
