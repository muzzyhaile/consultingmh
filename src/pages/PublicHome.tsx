import Navigation from '../components/Navigation';
import PublicHero from '../components/PublicHero';
import About from '../components/About';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const PublicHome = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <PublicHero />
      <About />
      <Services />
      <Expertise />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PublicHome;
