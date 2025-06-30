
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Target, Zap, BarChart3, Cog } from "lucide-react";

const workshops = [
  {
    icon: Target,
    title: "Design Thinking Workshop",
    duration: "2 Tage",
    participants: "8-12 Teilnehmer",
    description: "Nutzerorientierte Lösungsentwicklung durch systematische Ideenfindung und Prototyping.",
    highlights: [
      "Customer Journey Mapping",
      "Rapid Prototyping",
      "User Testing Methoden",
      "Iterative Verbesserung"
    ],
    price: "Ab 2.500€"
  },
  {
    icon: Zap,
    title: "Agile Transformation",
    duration: "3 Tage",
    participants: "10-15 Teilnehmer", 
    description: "Praktische Einführung in Scrum, Kanban und Lean Startup Methoden für effiziente Teamarbeit.",
    highlights: [
      "Scrum Framework Setup",
      "Sprint Planning Techniken",
      "Velocity Tracking",
      "Retrospektive Methoden"
    ],
    price: "Ab 3.800€"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    duration: "1 Tag",
    participants: "6-10 Teilnehmer",
    description: "KPI-Definition, Dashboard-Erstellung und datenbasierte Strategieentwicklung.",
    highlights: [
      "KPI Framework Entwicklung",
      "Google Analytics 4 Setup",
      "Dashboard Design",
      "A/B Testing Grundlagen"
    ],
    price: "Ab 1.800€"
  },
  {
    icon: Cog,
    title: "Process Automation Workshop",
    duration: "2 Tage",
    participants: "8-12 Teilnehmer",
    description: "Low-Code/No-Code Lösungen für Workflow-Automatisierung und Effizienzsteigerung.",
    highlights: [
      "Workflow Analyse",
      "Automation Tools Auswahl",
      "Implementation Roadmap",
      "ROI Berechnung"
    ],
    price: "Ab 2.200€"
  }
];

const Workshops = () => {
  return (
    <section id="workshops" className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Workshops & Training
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Praxisnahe Workshops für nachhaltige Veränderung in deinem Unternehmen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {workshops.map((workshop, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <workshop.icon className="h-12 w-12 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                  <span className="text-2xl font-bold text-orange-400">{workshop.price}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{workshop.title}</h3>
                
                <div className="flex items-center gap-6 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{workshop.participants}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">{workshop.description}</p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-white font-medium">Inhalte:</h4>
                  {workshop.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="text-green-400 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Workshop anfragen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Individuelle Workshops</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Benötigst du eine maßgeschneiderte Lösung? Ich entwickle gerne einen Workshop 
              speziell für die Bedürfnisse deines Unternehmens.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3">
              Kostenloses Beratungsgespräch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
