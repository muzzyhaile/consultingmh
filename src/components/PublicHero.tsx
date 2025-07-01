import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            Go-to-Market · Experimentation · Growth
          </h2>
          
          <p className="text-lg text-gray-700 mb-4 max-w-lg leading-relaxed">
            15+ years guiding teams through uncertainty with bold experiments. I turn complex business needs into simple, automated, customer-centric solutions by blending data, creativity and technology.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 mb-8 text-gray-600">
            <div className="flex items-center space-x-3">
              <Globe className="w-4 h-4 text-orange-500" />
              <span>Based in Berlin · Working Worldwide</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-8">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3"
              onClick={() => {
                const elem = document.getElementById('contact');
                if (elem) {
                  elem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in touch
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex items-center justify-center">
          <img
            src="/Mussie.jpg"
            alt="Mussie Haile Portrait"
            className="rounded-3xl object-contain max-h-[500px] shadow-lg"
          />
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
