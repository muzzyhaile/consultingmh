import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SiteNoticePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
              
              <div className="text-gray-700 mb-6">
                <p className="mb-2"><strong>Mussie Haile - Growth & Go-to-Market Consultant</strong></p>
                <p className="mb-2">Lohmühlenstraße 65</p>
                <p className="mb-4">12435 Berlin</p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Vertreten durch:</h3>
              <p className="text-gray-700 mb-6">Mussie Haile</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kontakt:</h3>
              <div className="text-gray-700 mb-6">
                <p className="mb-2">Telefon: +4917687053245</p>
                <p className="mb-2">E-Mail: admin@guidingventures.com</p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Redaktionell verantwortlich:</h3>
              <p className="text-gray-700 mb-6">Mussie Haile</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-700 mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-orange-500 hover:text-orange-600 ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>.
              </p>
              <p className="text-gray-700 mb-6">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p className="text-gray-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SiteNoticePage; 