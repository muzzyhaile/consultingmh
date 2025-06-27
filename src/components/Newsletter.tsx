
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex p-4 bg-blue-600/20 rounded-full mb-6">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Stay Ahead of the Curve
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Join 10,000+ industry leaders receiving our exclusive insights on digital transformation, 
                emerging technologies, and strategic innovations delivered weekly.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span>Industry Insights</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Expert Analysis</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Zap className="h-5 w-5 text-purple-400" />
                <span>Early Access</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4 mb-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 font-semibold whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </form>

            {isSubscribed && (
              <div className="flex items-center justify-center gap-2 text-green-400 animate-fade-in">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Successfully subscribed! Welcome aboard.</span>
              </div>
            )}

            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">Trusted by leading companies worldwide</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-gray-600">TECH</div>
                <div className="text-2xl font-bold text-gray-600">INNOVATE</div>
                <div className="text-2xl font-bold text-gray-600">FUTURE</div>
                <div className="text-2xl font-bold text-gray-600">DIGITAL</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
