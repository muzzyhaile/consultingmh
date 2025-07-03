import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Zap, Target, Cog, TrendingUp, Compass } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Digital Strategy & Transformation",
    description: "Create a clear, step-by-step plan for your digital change. Know who does what and when."
  },
  {
    icon: Target,
    title: "Go-to-Market Strategy",
    description: "Find your best customers, set the right price, and launch with a simple checklist and targets."
  },
  {
    icon: BarChart3,
    title: "Growth Automation",
    description: "Run quick A/B tests, keep what works, cut costs, and lift sales."
  },
  {
    icon: Cog,
    title: "Marketing Automation",
    description: "Set up email, ads, and CRM so leads move on their own. Score, nurture, and track every deal."
  },
  {
    icon: Zap,
    title: "AI Product Integration",
    description: "Add AI features users love. Build small demos fast, test them, then launch at scale."
  },
  {
    icon: Users,
    title: "Cross-functional Alignment",
    description: "Get tech and business talking. Shared goals, weekly sprints, clear updates."
  },
  {
    icon: TrendingUp,
    title: "Data Analytics & KPIs",
    description: "Create live dashboards so you always know what works. Set KPIs, track cohorts, act fast."
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
            <span className="text-orange-400 font-semibold">Digital Strategy · Go-to-Market · Growth & Automation</span>
            <br />
            15+ years guiding teams through digital transformation with strategic automation. I turn complex business challenges into scalable, data-driven solutions by blending digital strategy, creative thinking, and cutting-edge technology.
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
