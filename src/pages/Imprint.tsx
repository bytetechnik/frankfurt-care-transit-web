
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Imprint = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('imprint.title')}</h1>
            
            {/* Company Information */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('imprint.company_info')}</h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="font-medium">Taxi OM Ambulance</p>
                <p>Lange Str. 37</p>
                <p>63486 Bruchköbel</p>
                <p className="mt-4">
                  <strong>{t('imprint.telephone')}:</strong> +49 17 84 26 87 86
                </p>
                <p>
                  <strong>{t('imprint.email')}:</strong> info@taxiom.de / info@omkrankentransport.de
                </p>
              </div>
            </section>

            {/* Responsible Person */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('imprint.responsible_title')}</h2>
              <p className="text-gray-700">Vikash Chopra</p>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('imprint.dispute_resolution')}</h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  {t('imprint.dispute_text')} 
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-medical-blue hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="mb-4">{t('imprint.email_reference')}</p>
                <p>{t('imprint.arbitration_disclaimer')}</p>
              </div>
            </section>

            {/* Copyright */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('imprint.copyright')}</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{t('imprint.copyright_text1')}</p>
                <p>{t('imprint.copyright_text2')}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Imprint;
