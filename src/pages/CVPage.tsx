
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const CVPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CVPage;
