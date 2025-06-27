
import { Button } from "@/components/ui/button";

const Navigation = () => {
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
            <div className="w-10 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-800 hover:text-black transition-colors font-medium text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-800 hover:text-black transition-colors font-medium text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-800 hover:text-black transition-colors font-medium text-sm"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-800 hover:text-black transition-colors font-medium text-sm"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-800 hover:text-black transition-colors font-medium text-sm"
            >
              Contact
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-gray-600 text-sm">
              <span className="text-orange-400">📍</span>
              <span>Sala Canal, 22 Nov 23</span>
            </div>
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">A</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
