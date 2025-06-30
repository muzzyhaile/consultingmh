
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PublicHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
            Mussie
            <br />
            <span className="text-orange-500">Haile</span>
          </h1>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Digital Transformation Expert & Workshop Facilitator
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
            Transform your business through hands-on workshops and proven methodologies. 
            Over 15 years of experience in digital innovation and team leadership.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 mb-8 text-gray-600">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Berlin, Germany</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-8">
            <Link to="/cv">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3">
                View Full CV
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content - Profile Image Area */}
        <div className="relative">
          <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop')] bg-cover bg-center opacity-90 rounded-3xl"></div>
            
            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-600 rounded"></div>
            </div>
            <div className="absolute bottom-20 right-12 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-orange-700 rounded-full"></div>
            </div>
            <div className="absolute bottom-8 right-20 w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PublicHero;
