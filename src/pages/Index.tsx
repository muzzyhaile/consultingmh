
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import News from '../components/News';
import Videos from '../components/Videos';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Services />
      <Portfolio />
      <Videos />
      <News />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
