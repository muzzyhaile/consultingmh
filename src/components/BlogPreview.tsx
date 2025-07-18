import { Link } from "react-router-dom";

const posts = [
  {
    slug: "agents-are-here",
    title: "Agents Are Here. Is the Web changing?",
  },
];

const BlogPreview = () => (
  <section id="blog" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-center">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="w-full md:w-60 h-80 rounded-3xl bg-orange-500 hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center p-4"
          >
            <span className="block w-full h-full flex items-center justify-center bg-white text-gray-900 rounded-2xl p-4">
              {p.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/blog" className="inline-block px-6 py-3 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-colors">
          More Articles →
        </Link>
      </div>
    </div>
  </section>
);

export default BlogPreview; 