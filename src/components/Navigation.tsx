
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-white font-bold text-xl">Digital</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">
              About
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors font-medium">
              Portfolio
            </a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-gray-400 text-sm">
              <span>📍 Digital Hub, 27 Dec 23</span>
            </div>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
