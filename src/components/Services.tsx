import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Zap, Target, Cog, TrendingUp, Compass } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Digital Strategy & Transformation",
    description: "Develop comprehensive digital transformation roadmaps that align technology, processes, and people. Strategic planning, digital maturity assessments, and implementation frameworks for sustainable growth."
  },
  {
    icon: Target,
    title: "Go-to-Market Strategy",
    description: "Build data-driven GTM frameworks with customer segmentation, pricing models, and launch sequences. From MVP validation to market penetration with measurable conversion funnels."
  },
  {
    icon: BarChart3,
    title: "Growth Experimentation",
    description: "Design and execute systematic A/B testing programs. Statistical analysis, hypothesis-driven experiments, and rapid iteration cycles to optimize CAC/LTV ratios."
  },
  {
    icon: Cog,
    title: "Marketing Automation",
    description: "Implement multi-channel automation workflows using HubSpot, Zapier, and custom APIs. Lead scoring, nurture sequences, and attribution modeling for performance marketing."
  },
  {
    icon: Zap,
    title: "AI Product Integration",
    description: "Translate AI/LLM capabilities into user-centered product features. Prototype development, UX design for AI workflows, and technical feasibility assessments."
  },
  {
    icon: Users,
    title: "Cross-functional Alignment",
    description: "Bridge technical and business teams through shared metrics, sprint planning, and stakeholder communication. Agile coaching with 100% on-time delivery track record."
  },
  {
    icon: TrendingUp,
    title: "Data Analytics & KPIs",
    description: "Build custom dashboards and reporting systems. Google Analytics setup, cohort analysis, and business intelligence tools for data-driven decision making."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            <span className="text-orange-400 font-semibold">Digital Strategy · Go-to-Market · Growth & Experimentation</span>
            <br />
            15+ years guiding teams through digital transformation with strategic experimentation. I turn complex business challenges into scalable, data-driven solutions by blending digital strategy, creative thinking, and cutting-edge technology.
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
