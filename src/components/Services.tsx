
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Zap, Target, Cog, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Business Analysis",
    description: "Übersetze komplexe Geschäftsanforderungen in umsetzbare digitale Strategien mit messbaren KPIs und ROI-Tracking."
  },
  {
    icon: Target,
    title: "Digital Strategy",
    description: "Entwicklung datengetriebener MVP-Tests und Lean-Startup-Methoden für nachhaltiges Wachstum von Start-ups bis Konzern."
  },
  {
    icon: Users,
    title: "Agile Coaching",
    description: "Führung internationaler, cross-funktionaler Teams mit optimierten Sprint-Prozessen und 100% termingerechten Releases."
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Low-/No-Code-Automatisierung und Implementierung von KPI-Dashboards für effiziente Workflows und Reporting."
  },
  {
    icon: TrendingUp,
    title: "Product Development",
    description: "Nutzerzentrierte Produktentwicklung vom MVP bis Go-Live mit A/B-Testing und kontinuierlicher Optimierung."
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    Description: "Ganzheitliche Digitalisierung von Geschäftsprozessen mit bewährten Frameworks und Change Management."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fachkompetenzen
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Spezialisiert auf digitale Transformation, Produktstrategie und datengetriebene Geschäftslösungen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
