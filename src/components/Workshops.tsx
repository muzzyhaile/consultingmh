
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Target, Zap, BarChart3, Cog } from "lucide-react";

const workshops = [
  {
    icon: Target,
    title: "Design Thinking Workshop",
    duration: "2 Days",
    participants: "8-12 Participants",
    description: "User-centered solution development through systematic ideation and prototyping.",
    highlights: [
      "Customer Journey Mapping",
      "Rapid Prototyping",
      "User Testing Methods",
      "Iterative Improvement"
    ],
    price: "From €2,500"
  },
  {
    icon: Zap,
    title: "Agile Transformation",
    duration: "3 Days",
    participants: "10-15 Participants", 
    description: "Practical introduction to Scrum, Kanban and Lean Startup methods for efficient teamwork.",
    highlights: [
      "Scrum Framework Setup",
      "Sprint Planning Techniques",
      "Velocity Tracking",
      "Retrospective Methods"
    ],
    price: "From €3,800"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Making",
    duration: "1 Day",
    participants: "6-10 Participants",
    description: "KPI definition, dashboard creation and data-based strategy development.",
    highlights: [
      "KPI Framework Development",
      "Google Analytics 4 Setup",
      "Dashboard Design",
      "A/B Testing Fundamentals"
    ],
    price: "From €1,800"
  },
  {
    icon: Cog,
    title: "Process Automation Workshop",
    duration: "2 Days",
    participants: "8-12 Participants",
    description: "Low-Code/No-Code solutions for workflow automation and efficiency improvement.",
    highlights: [
      "Workflow Analysis",
      "Automation Tools Selection",
      "Implementation Roadmap",
      "ROI Calculation"
    ],
    price: "From €2,200"
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
            Hands-on workshops for sustainable change in your organization
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
                  <h4 className="text-white font-medium">Content:</h4>
                  {workshop.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="text-green-400 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Request Workshop
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Custom Workshops</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Need a tailored solution? I'd be happy to develop a workshop 
              specifically for your company's needs.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
