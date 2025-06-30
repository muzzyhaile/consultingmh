
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, Award, Users, Zap } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex p-4 bg-orange-600/20 rounded-full mb-6">
                <Mail className="h-8 w-8 text-orange-400" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Lassen Sie uns zusammenarbeiten
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Bereit für Ihre digitale Transformation? Kontaktieren Sie mich für eine 
                unverbindliche Beratung zu Ihren Digitalisierungsvorhaben.
              </p>
            </div>

            {/* Qualifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Award className="h-5 w-5 text-orange-400" />
                <span>15+ Zertifizierungen</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Cross-funktionale Teams</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Zap className="h-5 w-5 text-green-400" />
                <span>MVP zu Go-Live</span>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4 mb-6">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 font-semibold whitespace-nowrap"
                >
                  Kontakt
                </Button>
              </div>
            </form>

            {isSubscribed && (
              <div className="flex items-center justify-center gap-2 text-green-400 animate-fade-in">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Vielen Dank! Ich melde mich zeitnah bei Ihnen.</span>
              </div>
            )}

            <p className="text-sm text-gray-500 mt-4">
              Oder kontaktieren Sie mich direkt: haile.mussie@googlemail.com | +4915203252062
            </p>

            {/* Certifications */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">Aktuelle Zertifizierungen</p>
              <div className="flex justify-center items-center gap-8 opacity-60 flex-wrap">
                <div className="text-sm font-semibold text-gray-600">Meta Front-End Developer</div>
                <div className="text-sm font-semibold text-gray-600">Google Analytics Professional</div>
                <div className="text-sm font-semibold text-gray-600">Scrum Master</div>
                <div className="text-sm font-semibold text-gray-600">Product Owner</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
