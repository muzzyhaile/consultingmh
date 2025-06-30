import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
      <nav className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              MH
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-800 hover:text-orange-500 transition-colors font-medium text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-800 hover:text-orange-500 transition-colors font-medium text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-800 hover:text-orange-500 transition-colors font-medium text-sm"
            >
              Capabilities
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-800 hover:text-orange-500 transition-colors font-medium text-sm"
            >
              Experience
            </button>
            <Link 
              to="/cv"
              className="text-gray-800 hover:text-orange-500 transition-colors font-medium text-sm"
            >
              Full CV
            </Link>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-800 hover:text-orange-500 transition-colors font-medium text-sm"
            >
              Contact
            </button>
          </div>

          {/* Contact Info */}
          <div className="hidden sm:flex items-center space-x-2 text-gray-600 text-sm">
            <span className="text-orange-500">📍</span>
            <span>Berlin, Germany</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
