
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('privacy.title')}</h1>
            
            {/* Data Protection at a Glance */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.data_protection_glance')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.general_info')}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{t('privacy.general_info_text')}</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.data_collection_website')}</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p><strong>{t('privacy.who_responsible')}</strong></p>
                <p>{t('privacy.who_responsible_text')}</p>
                
                <p><strong>{t('privacy.how_collect')}</strong></p>
                <p>{t('privacy.how_collect_text1')}</p>
                <p>{t('privacy.how_collect_text2')}</p>
                
                <p><strong>{t('privacy.what_use_data')}</strong></p>
                <p>{t('privacy.what_use_data_text')}</p>
                
                <p><strong>{t('privacy.what_rights')}</strong></p>
                <p>{t('privacy.what_rights_text')}</p>
              </div>
            </section>

            {/* Hosting */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.hosting')}</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.external_hosting')}</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{t('privacy.external_hosting_text1')}</p>
                <p>{t('privacy.external_hosting_text2')}</p>
                <p><strong>{t('privacy.processing_contract')}</strong></p>
                <p>{t('privacy.processing_contract_text')}</p>
              </div>
            </section>

            {/* General Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.general_mandatory_info')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.data_protection')}</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{t('privacy.data_protection_text1')}</p>
                <p>{t('privacy.data_protection_text2')}</p>
                <p>{t('privacy.data_protection_text3')}</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.responsible_body')}</h3>
              <div className="text-gray-700 leading-relaxed">
                <p className="font-medium">Taxi OM Ambulance</p>
                <p>Langstraße 37</p>
                <p>63486 Bruchköbel</p>
                <p className="mt-4">
                  <strong>{t('privacy.telephone')}:</strong> +49 17 84 26 87 86
                </p>
                <p>
                  <strong>{t('privacy.email')}:</strong> info@taxiom.de / info@omkrankentransport.de
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.consent_revocation')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.consent_revocation_text')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.right_object')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.right_object_text')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.complaint_right')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.complaint_right_text')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.data_portability')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.data_portability_text')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.ssl_encryption')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.ssl_encryption_text')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.info_deletion_correction')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.info_deletion_correction_text')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.processing_restriction')}</h3>
              <div className="text-gray-700 leading-relaxed">
                <p>{t('privacy.processing_restriction_text')}</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>{t('privacy.restriction_case1')}</li>
                  <li>{t('privacy.restriction_case2')}</li>
                  <li>{t('privacy.restriction_case3')}</li>
                  <li>{t('privacy.restriction_case4')}</li>
                </ul>
                <p className="mt-4">{t('privacy.restriction_final')}</p>
              </div>
            </section>

            {/* Data Collection */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.data_collection_section')}</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.cookies')}</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{t('privacy.cookies_text1')}</p>
                <p>{t('privacy.cookies_text2')}</p>
                <p>{t('privacy.cookies_text3')}</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.server_logs')}</h3>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{t('privacy.server_logs_text')}</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('privacy.browser_type')}</li>
                  <li>{t('privacy.operating_system')}</li>
                  <li>{t('privacy.referrer_url')}</li>
                  <li>{t('privacy.hostname')}</li>
                  <li>{t('privacy.request_time')}</li>
                  <li>{t('privacy.ip_address')}</li>
                </ul>
                <p>{t('privacy.server_logs_use')}</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.contact_form')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.contact_form_text')}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{t('privacy.inquiry_contact')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('privacy.inquiry_contact_text')}</p>
            </section>

            {/* Third Party Content */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('privacy.third_party_content')}</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{t('privacy.third_party_text')}</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.bing_maps')}</h3>
                <p>{t('privacy.bing_maps_text')}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
