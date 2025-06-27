import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced analytics and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "AI/ML", "AWS"],
    results: "300% increase in conversion rate"
  },
  {
    title: "Healthcare Analytics Dashboard",
    category: "Data Analytics",
    description: "Real-time healthcare data visualization platform for improved patient outcomes.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    tech: ["Python", "D3.js", "PostgreSQL", "Docker"],
    results: "50% reduction in diagnosis time"
  },
  {
    title: "FinTech Mobile App",
    category: "Mobile Development",
    description: "Secure financial management app with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    tech: ["React Native", "Blockchain", "Biometrics", "Cloud"],
    results: "1M+ active users"
  },
  {
    title: "IoT Manufacturing System",
    category: "IoT Solutions",
    description: "Smart manufacturing system with predictive maintenance and quality control.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    tech: ["IoT", "Machine Learning", "Edge Computing", "5G"],
    results: "40% efficiency improvement"
  },
  {
    title: "Cloud Migration Project",
    category: "Cloud Solutions",
    description: "Enterprise-wide cloud migration with zero downtime and enhanced security.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    tech: ["AWS", "Kubernetes", "Terraform", "DevOps"],
    results: "60% cost reduction"
  },
  {
    title: "AI Customer Service Bot",
    category: "AI/ML",
    description: "Intelligent chatbot with natural language processing and sentiment analysis.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    tech: ["NLP", "TensorFlow", "Python", "API"],
    results: "85% resolution rate"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 overflow-hidden hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-green-400 font-semibold mb-4 text-sm">
                  {project.results}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
