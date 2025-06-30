import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SiteNoticePage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Site Notice</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
              
              <div className="text-gray-700 mb-6">
                <p className="mb-2"><strong>Mussie Haile</strong></p>
                <p className="mb-2">Guiding-Ventures</p>
                <p className="mb-2">Lohmühlenstraße 65</p>
                <p className="mb-4">12435 Berlin</p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact</h3>
              <div className="text-gray-700 mb-6">
                <p className="mb-2">Phone: +4917687053245</p>
                <p className="mb-2">E-mail: admin@guidingventures.com</p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">VAT ID</h3>
              <p className="text-gray-700 mb-6">
                Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
                DE348867516
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Person responsible for editorial</h3>
              <p className="text-gray-700 mb-6">Mussie Haile</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU dispute resolution</h2>
              <p className="text-gray-700 mb-4">
                The European Commission provides a platform for online dispute resolution (ODR): 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-orange-500 hover:text-orange-600 ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>.
              </p>
              <p className="text-gray-700 mb-6">
                Our e-mail address can be found above in the site notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute resolution proceedings in front of a consumer arbitration board</h2>
              <p className="text-gray-700">
                We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
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