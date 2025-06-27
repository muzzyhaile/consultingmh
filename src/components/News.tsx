
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

const news = [
  {
    title: "Revolutionary AI Framework Transforms Enterprise Analytics",
    excerpt: "Our latest AI-powered analytics framework has helped Fortune 500 companies achieve unprecedented insights, leading to average revenue increases of 35%.",
    date: "December 20, 2024",
    category: "AI Innovation",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    readTime: "5 min read"
  },
  {
    title: "Digital Transformation Success: $50M Saved in Cloud Migration",
    excerpt: "We successfully migrated a global manufacturing company's entire infrastructure to the cloud, resulting in 60% cost reduction and improved scalability.",
    date: "December 18, 2024",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    readTime: "7 min read"
  },
  {
    title: "Cybersecurity Excellence: Zero-Breach Track Record Continues",
    excerpt: "For the fifth consecutive year, all our client implementations maintained perfect security records with zero successful breach attempts.",
    date: "December 15, 2024",
    category: "Security",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    readTime: "4 min read"
  },
  {
    title: "Mobile-First Strategy Drives 400% User Engagement Growth",
    excerpt: "Our mobile-first approach for a leading retailer resulted in remarkable user engagement improvements and record-breaking sales figures.",
    date: "December 12, 2024",
    category: "Mobile Strategy",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    readTime: "6 min read"
  }
];

const News = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay informed about our latest achievements, industry insights, and breakthrough innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 p-0 h-auto font-semibold group/btn">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-3">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
