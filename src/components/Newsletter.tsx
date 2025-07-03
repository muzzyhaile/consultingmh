import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ExternalLink, TrendingUp, Users, BookOpen } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Ahead of Digital Transformation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get exclusive insights, proven strategies, and actionable frameworks delivered directly to your inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Newsletter Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold text-white">Guiding Ventures Newsletter</h3>
            </div>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We're here for marketers and operators who are tired of the noise. Each edition of Guiding Ventures gives you practical strategies, proven frameworks, and ideas that actually help you grow. No fluff. No hype. Just the good stuff that works in the real world.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Digital strategy insights and frameworks</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Go-to-market strategies that convert</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Real-world case studies and examples</span>
              </div>
            </div>

            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              onClick={() => window.open('https://guidingventures.substack.com/', '_blank')}
            >
              Subscribe to Guiding Ventures
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right: Newsletter Preview Card */}
          <div className="relative">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Guiding Ventures</CardTitle>
                  <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                    WEEKLY
                  </div>
                </div>
                <CardDescription className="text-gray-300">
                  Digital Business in Times of Change
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-white font-semibold mb-2">This Week's Focus:</h4>
                    <p className="text-gray-300 text-sm">
                      Digital Marketing, Growth Strategies, and the Future of Business in a Shifting World
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <span className="text-gray-400 text-sm">By Mussie Haile</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
