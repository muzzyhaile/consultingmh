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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-orange-400 transition-colors">
              MH
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-300 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('expertise')} 
              className="text-gray-300 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-300 hover:text-orange-400 transition-colors font-medium text-sm"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm font-medium"
            >
              Contact
            </Button>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-2 text-gray-400 text-sm">
            <span className="text-orange-400">📍</span>
            <span>Berlin, Germany</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
