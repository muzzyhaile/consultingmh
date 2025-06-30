import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Download, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact & CV Download Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3Bj7G1WwKOxqc9oRvokdLnGpujel-zI_0P9_7UXh-0XFWNcV4y5DByz_2mO41lJqijnhDwRJyS', '_blank')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Meeting
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-black hover:text-black bg-white hover:bg-gray-100 px-8 py-3"
              onClick={() => {
                // This will need to be updated with the actual CV file path
                const link = document.createElement('a');
                link.href = '/cv-mussie-haile.pdf'; // You'll need to add this file to public folder
                link.download = 'Mussie-Haile-CV.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          {/* Footer Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-8 text-sm">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a 
                href="/site-notice" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Site Notice
              </a>
            </div>
            <p className="text-orange-400 font-medium">
              Go-to-Market · Experimentation · Growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
