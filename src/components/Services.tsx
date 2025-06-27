import { Card, CardContent } from "@/components/ui/card";
import { Code, BarChart3, Smartphone, Cloud, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions."
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that engage users and drive business growth."
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamless transition to cloud infrastructure with improved scalability, security, and cost efficiency."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and maintain customer trust."
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Strategic consulting to align technology initiatives with business objectives and market opportunities."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
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
