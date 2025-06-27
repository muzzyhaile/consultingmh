
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Digital <span className="text-blue-400">Consultant</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transforming businesses through innovative digital solutions, cutting-edge technology, 
              and strategic insights that drive sustainable growth and competitive advantage.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Data Analytics", 
                "Mobile Solutions",
                "Cloud Migration",
                "Cybersecurity",
                "Digital Strategy"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hello@digitalconsultant.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <Button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Digital Consultant. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
