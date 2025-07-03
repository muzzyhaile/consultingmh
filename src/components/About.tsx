import { Card, CardContent } from "@/components/ui/card";

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
      </div>
    </section>
  );
};

export default About;
