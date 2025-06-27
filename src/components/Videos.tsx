
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Eye } from "lucide-react";

const videos = [
  {
    title: "Digital Transformation in 2024: Key Trends and Strategies",
    description: "Explore the latest trends shaping digital transformation and how businesses can adapt.",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
    duration: "12:34",
    views: "25.4K",
    category: "Strategy"
  },
  {
    title: "AI-Powered Analytics: Real-World Case Studies",
    description: "Discover how AI and machine learning are revolutionizing business analytics.",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    duration: "18:45",
    views: "18.2K",
    category: "AI/ML"
  },
  {
    title: "Cloud Migration Best Practices and Pitfalls to Avoid",
    description: "Learn from our experience migrating complex enterprise systems to the cloud.",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    duration: "15:22",
    views: "32.1K",
    category: "Cloud"
  },
  {
    title: "Building Secure Mobile Applications in the Modern Era",
    description: "Essential security practices for mobile app development and deployment.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    duration: "21:11",
    views: "14.8K",
    category: "Mobile"
  }
];

const Videos = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Expert Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay ahead with our latest video content covering digital trends, best practices, and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white rounded-full p-6">
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-4 text-white text-sm">
                  <div className="flex items-center gap-1 bg-black/60 rounded px-2 py-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                  <div className="flex items-center gap-1 bg-black/60 rounded px-2 py-1">
                    <Eye className="h-3 w-3" />
                    {video.views}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 leading-tight">{video.title}</h3>
                <p className="text-gray-400 leading-relaxed">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
