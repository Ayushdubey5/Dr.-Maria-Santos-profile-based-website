import React from 'react';
import { User, Users, Heart, Brain, Clock, DollarSign } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      description: "One-on-one sessions focused on your personal growth, mental health, and life challenges.",
      duration: "50 minutes",
      price: "$150",
      features: [
        "Personalized treatment plan",
        "Anxiety & depression support",
        "Trauma-informed care",
        "Cognitive behavioral therapy",
        "Mindfulness integration"
      ]
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description: "Relationship counseling to strengthen communication, resolve conflicts, and deepen intimacy.",
      duration: "75 minutes",
      price: "$200",
      features: [
        "Communication skills training",
        "Conflict resolution strategies",
        "Intimacy and connection building",
        "Pre-marital counseling",
        "Relationship assessment tools"
      ]
    },
    {
      icon: Heart,
      title: "Family Therapy",
      description: "Family systems therapy to improve relationships and resolve conflicts within the family unit.",
      duration: "60 minutes",
      price: "$180",
      features: [
        "Family dynamics assessment",
        "Parent-child relationship support",
        "Sibling conflict resolution",
        "Blended family counseling",
        "Communication improvement"
      ]
    },
    {
      icon: Brain,
      title: "Trauma Therapy",
      description: "Specialized treatment for trauma, PTSD, and other stress-related conditions using evidence-based approaches.",
      duration: "50 minutes",
      price: "$160",
      features: [
        "EMDR therapy",
        "Trauma-focused CBT",
        "Body-based healing",
        "Safety and stabilization",
        "Post-traumatic growth"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Therapeutic Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health services tailored to meet your unique needs and support your journey toward healing and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                  <service.icon className="text-emerald-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign size={16} />
                      <span>{service.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={scrollToContact}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
              >
                Schedule Session
              </button>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Insurance Accepted</h4>
              <p className="text-gray-600">Blue Cross Blue Shield, Aetna, Cigna, United Healthcare</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Payment Methods</h4>
              <p className="text-gray-600">Cash, Credit Cards, HSA/FSA, Payment Plans Available</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Free Consultation</h4>
              <p className="text-gray-600">15-minute phone consultation to discuss your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;