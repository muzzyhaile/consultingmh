import { Link } from "react-router-dom";

const posts = [
  {
    slug: "agents-are-here",
    title: "Agents Are Here. Is the Web changing?",
    description: "How ChatGPT Agents and tools like Manus, Dia, and GenSpark may replace traditional web UI, plus security risks Sam Altman warns about.",
    date: "Jul 18, 2025",
  },
];

const BlogIndex = () => (
  <main className="min-h-screen bg-white py-20">
    <div className="max-w-3xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <Link to="/" className="text-orange-500 hover:underline text-sm">← Back to Home</Link>
      </div>
      <ul className="space-y-8">
        {posts.map((p) => (
          <li key={p.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              <Link to={`/blog/${p.slug}`} className="text-orange-500 hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-1">{p.date}</p>
            <p className="text-gray-700">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </main>
);

export default BlogIndex; 