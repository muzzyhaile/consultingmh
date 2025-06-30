import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Track Record
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Combining deep technical expertise with strategic business acumen to deliver measurable results.
              </p>
            </div>

            {/* Qualifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Award className="h-5 w-5 text-orange-400" />
                <span>15+ Certifications</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Cross-functional Teams</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Zap className="h-5 w-5 text-green-400" />
                <span>MVP to Go-Live</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-4">Current Certifications</p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                <div className="text-sm font-semibold text-gray-300">Meta Front-End Developer</div>
                <div className="text-sm font-semibold text-gray-300">Google Analytics Professional</div>
                <div className="text-sm font-semibold text-gray-300">Scrum Master</div>
                <div className="text-sm font-semibold text-gray-300">Product Owner</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
