
import Navigation from '../components/Navigation';
import PublicHero from '../components/PublicHero';
import Workshops from '../components/Workshops';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const PublicHome = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <PublicHero />
      <About />
      <Workshops />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PublicHome;
