import { Button } from "@/components/ui/button";
import { Phone, MapPin, Linkedin, Twitter, Github, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact & CV Download Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Bj7G1WwKOxqc9oRvokdLnGpujel-zI_0P9_7UXh-0XFWNcV4y5DByz_2mO41lJqijnhDwRJyS', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Meeting
            </Button>
            <button 
              className="text-gray-400 hover:text-gray-300 transition-colors text-sm underline"
              onClick={() => window.open('https://guidingventures.substack.com/', '_blank')}
            >
              Join me on Substack
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          {/* Footer Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-8 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link 
                to="/site-notice" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Impressum
              </Link>
            </div>
            <p className="text-orange-400 font-medium">
              Digital Strategy · Go-to-Market · Growth & Experimentation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
