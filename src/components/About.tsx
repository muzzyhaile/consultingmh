
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Über mich
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Als Digital Consultant & Business Analyst mit über 15 Jahren Erfahrung helfe ich Unternehmen dabei, 
            ihre digitale Transformation erfolgreich zu gestalten. Meine Expertise liegt in der praktischen 
            Umsetzung von Strategien durch bewährte Methoden und interaktive Workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategische Beratung</h3>
              <p className="text-gray-600">
                Entwicklung datengetriebener Strategien und Roadmaps für nachhaltige digitale Transformation
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Coaching</h3>
              <p className="text-gray-600">
                Agile Methoden und Lean Startup Prinzipien für cross-funktionale Teams implementieren
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Messbare Ergebnisse</h3>
              <p className="text-gray-600">
                KPI-basierte Erfolgsmessung und kontinuierliche Optimierung von Geschäftsprozessen
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
