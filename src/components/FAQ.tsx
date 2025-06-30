import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What's your process for working with AI/LLM prototypes?",
      answer: "I start by understanding your business goals and user needs, then help validate the AI use case through rapid prototyping and user testing. We focus on building MVPs that prove value before scaling, ensuring the AI actually solves real problems for your users."
    },
    {
      question: "How do you align product and marketing?",
      answer: "I bridge the gap by creating shared metrics and feedback loops between teams. This includes setting up experiment frameworks that inform both product decisions and marketing strategies, ensuring consistent messaging and user experience across the entire funnel."
    },
    {
      question: "Can you help us validate an idea fast?",
      answer: "Absolutely. I use lean validation techniques including user interviews, landing page tests, and rapid prototyping to validate assumptions quickly. Most validation cycles can be completed in 2-4 weeks, giving you clear direction on whether to pivot or proceed."
    },
    {
      question: "Do you work hands-on with our teams?",
      answer: "Yes, I work directly with your teams rather than just providing recommendations. This includes running workshops, setting up processes, and coaching team members. The goal is to build internal capability while delivering immediate results."
    },
    {
      question: "How long does it take to see traction?",
      answer: "Initial insights and quick wins typically within the first 2-3 weeks. Meaningful traction like improved conversion rates or validated product-market fit signals usually becomes evident within 6-8 weeks of systematic experimentation."
    },
    {
      question: "What makes your approach different from agencies?",
      answer: "I focus on building your team's capabilities rather than just delivering outputs. You get hands-on strategic work combined with knowledge transfer, so your team can continue the momentum after our engagement. Plus, I understand both the technical and business sides deeply."
    }
  ];

  const commonObjections = [
    {
      objection: "We're not ready for AI",
      response: "Most teams think they need perfect data or massive resources to start with AI. Actually, you can begin with simple automation and user research to identify where AI adds the most value. Starting small reduces risk and builds confidence."
    },
    {
      objection: "We already have a product manager",
      response: "Great! I work alongside your PM to add specialized expertise in AI/UX integration and growth experimentation. Think of it as augmenting your team's capabilities rather than replacing anyone."
    },
    {
      objection: "It's too early to think about growth",
      response: "Early is actually the perfect time to build growth into your product foundation. It's much harder (and more expensive) to retrofit growth mechanics later than to design them in from the start."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about working together and my approach
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-20">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Common Objections */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Addressing Common Concerns
          </h3>
          <div className="grid md:grid-cols-1 gap-6">
            {commonObjections.map((item, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">
                    "{item.objection}"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.response}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 