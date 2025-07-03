import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <button 
            className="text-gray-400 hover:text-gray-300 transition-colors text-sm underline"
            onClick={() => window.open('', '_blank')}
          >
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
