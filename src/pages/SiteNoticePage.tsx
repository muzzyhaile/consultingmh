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
                <p className="mb-2"><strong>Mussie Haile - Digital Strategy · Go-to-Market · Growth & Automation</strong></p>
                <p className="mb-2">Lohmühlenstraße 65</p>
                <p className="mb-4">12435 Berlin</p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Vertreten durch:</h3>
              <p className="text-gray-700 mb-6">Mussie Haile</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kontakt:</h3>
              <div className="text-gray-700 mb-6">
                <p className="mb-2">E-Mail: mussiehle@gmail.com</p>
                <p className="mb-2">Telefon: +49 (0) 30 12345678</p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tätigkeitsbereich:</h3>
              <p className="text-gray-700 mb-6">
                Digital Strategy · Go-to-Market · Growth & Automation
              </p>
              
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
              <p className="text-gray-700 mb-6">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Haftung für Inhalte</h3>
              <p className="text-gray-700 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Haftung für Links</h3>
              <p className="text-gray-700 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Urheberrecht</h3>
              <p className="text-gray-700 mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Berufsrechtliche Angaben</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Berufsbezeichnung</h3>
              <p className="text-gray-700 mb-4">
                Digital Strategy · Go-to-Market · Growth & Automation Consultant
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Berufshaftpflichtversicherung</h3>
              <p className="text-gray-700 mb-4">
                Versicherer: Hiscox SA<br />
                Geltungsbereich: Deutschland und Europa<br />
                Deckungssumme: 1.000.000 EUR
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Umsatzsteuer-ID</h3>
              <p className="text-gray-700 mb-4">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789 (Beispiel - bitte durch echte USt-IdNr. ersetzen)
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