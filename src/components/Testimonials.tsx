import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Individual Therapy Client",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Dr. Santos helped me navigate through one of the most difficult periods of my life. Her compassionate approach and practical tools have been life-changing. I finally feel like I have the strength to face my challenges.",
      rating: 5
    },
    {
      name: "Michael & Jennifer T.",
      role: "Couples Therapy",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "We were on the brink of divorce when we started couples therapy. Dr. Santos helped us rebuild our communication and trust. We're now stronger than ever and grateful for the tools she gave us.",
      rating: 5
    },
    {
      name: "David R.",
      role: "Trauma Therapy Client",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "After years of struggling with PTSD, I found hope again through Dr. Santos' trauma-informed approach. The EMDR sessions were particularly helpful. I'm sleeping better and feeling more like myself.",
      rating: 5
    },
    {
      name: "Lisa K.",
      role: "Individual Therapy Client",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Dr. Santos creates such a safe and welcoming environment. I've struggled with anxiety for years, and her mindfulness techniques have been incredibly helpful. I highly recommend her services.",
      rating: 5
    },
    {
      name: "Robert & Maria C.",
      role: "Family Therapy",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "Our family was falling apart after our teenager started acting out. Dr. Santos helped us understand each other better and develop healthier ways to communicate. Our home is peaceful again.",
      rating: 5
    },
    {
      name: "Amanda J.",
      role: "Individual Therapy Client",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=200",
      content: "I was skeptical about therapy at first, but Dr. Santos made me feel so comfortable. She listens without judgment and provides practical strategies. I've grown so much as a person.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have found healing, growth, and hope through therapy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <div className="mb-4">
                <Quote className="text-emerald-600 mb-2" size={24} />
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>

              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-emerald-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of clients who have found healing and growth through therapy.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;