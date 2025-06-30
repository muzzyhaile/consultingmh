import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Expertise = () => {
  const pillarTopics = [
    {
      title: "AI & Product Innovation",
      description: "Turning AI concepts into user-centered products that deliver real business value",
      subtopics: [
        "Translating AI into usable products",
        "AI + UX workflows",
        "Building MVPs with LLMs"
      ]
    },
    {
      title: "Growth Strategy",
      description: "Building systematic approaches to sustainable growth through experimentation",
      subtopics: [
        "Lean growth strategy",
        "Experiment-led org design",
        "Brand + performance integration"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Modernizing operations and enabling teams through smart automation and tooling",
      subtopics: [
        "Marketing automation",
        "UX tooling + design ops",
        "Founder enablement + venture building"
      ]
    }
  ];

  const clientOutcomes = [
    "A validated AI use case that delivers business value",
    "Clear UX strategy for complex AI products",
    "Improved CAC/LTV from smarter, integrated marketing funnels",
    "Confidence that they're not falling behind competitors on AI",
    "A GTM strategy that turns vision into traction",
    "Support in aligning tech and business teams"
  ];

  const currentLearning = [
    "Multi-modal LLM applications",
    "How to design voice and chat-based UX",
    "AI-native product orgs and how to scale them",
    "Systemic experimentation for early-stage companies",
    "Ethical implications of AI automation in decision-making"
  ];

  const actionTriggers = [
    "They have an AI prototype but no idea how to ship it",
    "Their marketing team is underperforming and drowning in tools",
    "Their org is stuck in 'strategy paralysis'",
    "They know AI is critical but don't have time to explore 20 tools",
    "They want to raise or scale but need narrative and traction"
  ];

  return (
    <section id="expertise" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Expertise & Brand Positioning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across AI innovation, growth strategy, and digital transformation—
            helping teams navigate uncertainty with confidence and clarity.
          </p>
        </div>

        {/* Pillar Topics */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Expertise Areas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pillarTopics.map((pillar, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{pillar.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pillar.subtopics.map((subtopic, subIndex) => (
                      <Badge key={subIndex} variant="secondary" className="mr-2 mb-2">
                        {subtopic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Outcomes */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Clients Achieve</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {clientOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When They Take Action */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">When Teams Reach Out</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionTriggers.map((trigger, index) => (
              <Card key={index} className="p-6">
                <p className="text-gray-700 italic">"{trigger}"</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Learning */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentLearning.map((topic, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                {topic}
              </Badge>
            ))}
          </div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Staying ahead of the curve in AI, UX, and growth—because the landscape changes fast, 
            and your strategy needs to evolve with it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise; 