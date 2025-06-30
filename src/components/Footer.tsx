import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Removed heading and blurb to keep footer minimal */}

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
