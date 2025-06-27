
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-50">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-7xl md:text-8xl font-bold text-black mb-6">
            visual
            <br />
            <span className="text-black">poetry</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-md leading-relaxed">
            Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-12">
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-sm font-medium">yt</span>
            </div>
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-sm font-medium">ig</span>
            </div>
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-sm font-medium">fb</span>
            </div>
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
              <span className="text-sm font-medium">x</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-black mb-2">+250k</div>
              <div className="text-gray-600 text-sm">Videos that reaching a wide audience and give lasting impression</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">+800k</div>
              <div className="text-gray-600 text-sm">Hours watched, engaging storytelling that captivates viewers</div>
            </div>
          </div>
        </div>

        {/* Right Content - Image Area */}
        <div className="relative">
          <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop')] bg-cover bg-center opacity-90 rounded-3xl"></div>
            
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

export default Hero;
