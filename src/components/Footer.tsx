import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact & CV Download Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Let's Work Together</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to turn your AI ideas into user-centered products? Let's discuss how we can 
            accelerate your growth through strategic experimentation and smart automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              onClick={() => window.open('mailto:hello@mussiehaile.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:text-white px-8 py-3"
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

        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-orange-400 font-medium">
            Go-to-Market · Experimentation · Growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
