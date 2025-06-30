import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Zap, FlaskConical, Megaphone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a results oriented business analyst and growth consultant with a record of translating complexity into clear experiments and live products. From leading digital rollouts for E.ON across five countries to founding Guiding-Ventures and validating multiple value propositions, I align stakeholders, surface actionable insights and deliver automated solutions that scale. My toolkit spans AI powered marketing, data analytics, process optimisation and agile coaching. The outcome is faster learning cycles, higher conversion and confident teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: 'Growth',
              desc: 'Data-driven KPIs and continuous optimisation that accelerate sustainable growth',
            },
            {
              icon: Zap,
              title: 'AI Integration',
              desc: 'Practical AI product integration and prototyping that drive customer-centric value',
            },
            {
              icon: Target,
              title: 'Go-to-Market',
              desc: 'Data-driven GTM frameworks and strategic roadmaps for sustainable growth',
            },
            {
              icon: Users,
              title: 'Team Workshops',
              desc: 'Interactive workshops focused on experimentation that empower cross-functional teams',
            },
            {
              icon: FlaskConical,
              title: 'Experimentation',
              desc: 'Hypothesis-driven rapid experimentation to de-risk product and marketing decisions',
            },
            {
              icon: Megaphone,
              title: 'Digital Marketing',
              desc: 'Integrated performance marketing strategies to drive acquisition and retention',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <item.icon className="h-10 w-10 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900" >{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
