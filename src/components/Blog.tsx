import React from 'react';
import { Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "5 Effective Strategies for Managing Anxiety in Daily Life",
      excerpt: "Learn practical techniques to reduce anxiety and build resilience in your everyday routine.",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Anxiety",
      readTime: "5 min read",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "The Power of Mindfulness in Healing Trauma",
      excerpt: "Discover how mindfulness practices can support trauma recovery and emotional regulation.",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Trauma",
      readTime: "7 min read",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "Building Stronger Relationships Through Communication",
      excerpt: "Essential communication skills that can transform your relationships and deepen connections.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Relationships",
      readTime: "6 min read",
      date: "March 5, 2024"
    },
    {
      id: 4,
      title: "Understanding Depression: Signs, Symptoms, and Hope",
      excerpt: "A comprehensive guide to recognizing depression and the path to recovery and healing.",
      image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Depression",
      readTime: "8 min read",
      date: "February 28, 2024"
    },
    {
      id: 5,
      title: "Navigating Life Transitions with Grace and Resilience",
      excerpt: "How to cope with major life changes and use them as opportunities for growth.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Life Transitions",
      readTime: "6 min read",
      date: "February 22, 2024"
    },
    {
      id: 6,
      title: "Self-Care Strategies for Mental Health and Wellbeing",
      excerpt: "Practical self-care techniques that you can implement today to improve your mental health.",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Self-Care",
      readTime: "5 min read",
      date: "February 15, 2024"
    }
  ];

  const categories = ["All", "Anxiety", "Trauma", "Relationships", "Depression", "Life Transitions", "Self-Care"];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helpful articles, insights, and practical tips to support your mental health journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                index === 0 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{article.readTime}</span>
                  </div>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                
                <button className="flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 group">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors duration-200">
            View All Articles
          </button>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get weekly mental health tips, insights, and resources delivered to your inbox.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Mental health resources"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;