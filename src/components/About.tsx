import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, Zap, FlaskConical, Megaphone, Compass } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a results-oriented digital strategy consultant with a proven track record of transforming complex business challenges into scalable digital solutions. I align stakeholders around strategic vision, surface actionable insights, and deliver automated solutions that scale. My toolkit spans digital strategy, AI-powered marketing, data analytics, process optimization, and agile coaching. The outcome is accelerated digital transformation, higher conversion rates, and confident teams ready for the digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Compass,
              title: 'Digital Strategy',
              desc: 'Develop comprehensive digital transformation roadmaps that align technology, processes, and people to achieve strategic business objectives.',
            },
            {
              icon: TrendingUp,
              title: 'Growth',
              desc: 'Establish growth loops with metric-driven dashboards, cohort analysis, and iterative optimisation to compound revenue.',
            },
            {
              icon: Zap,
              title: 'AI Integration',
              desc: 'Embed LLM capabilities into your product with user tested workflows, rapid prototypes, and scalable deployment architectures.',
            },
            {
              icon: Target,
              title: 'Go-to-Market',
              desc: 'Craft evidence based GTM playbooks covering segmentation, positioning, pricing, and launch sequencing that move products from zero to traction.',
            },
            {
              icon: Users,
              title: 'Team Workshops',
              desc: 'Facilitated workshops that instil experimentation culture, aligning cross-functional teams around hypotheses, sprints, and measurable outcomes.',
            },
            {
              icon: FlaskConical,
              title: 'Experimentation',
              desc: 'Run statistically sound A/B and multivariate tests at high velocity to validate ideas, reduce risk, and unlock incremental growth.',
            },
            {
              icon: Megaphone,
              title: 'Digital Marketing',
              desc: 'Design full funnel acquisition engines across organic, paid, and automated channels to drive acquisition and retention.',
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
