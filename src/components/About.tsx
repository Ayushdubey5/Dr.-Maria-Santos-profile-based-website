import React from 'react';
import { Award, Book, Heart, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const credentials = [
    { icon: Award, title: "Licensed Clinical Social Worker", desc: "MA in Clinical Psychology, Licensed in California" },
    { icon: Book, title: "15+ Years Experience", desc: "Specializing in anxiety, depression, and relationship therapy" },
    { icon: Users, title: "500+ Clients Helped", desc: "Transforming lives through evidence-based therapy" },
    { icon: Heart, title: "Holistic Approach", desc: "Mind, body, and spirit integration in healing" }
  ];

  const specialties = [
    "Anxiety & Panic Disorders",
    "Depression & Mood Disorders",
    "Relationship & Couples Therapy",
    "Trauma & PTSD",
    "Grief & Loss Counseling",
    "Life Transitions",
    "Self-Esteem & Confidence",
    "Mindfulness & Stress Management"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Dr. Maria Santos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to helping individuals and couples navigate life's challenges with compassion, 
            expertise, and evidence-based therapeutic approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 15 years of experience in clinical psychology, I believe that everyone deserves 
                a safe space to explore their thoughts, feelings, and experiences. My approach combines 
                evidence-based therapeutic techniques with genuine compassion and understanding.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in working with individuals and couples who are dealing with anxiety, 
                depression, relationship challenges, trauma, and life transitions. My goal is to help 
                you develop the tools and insights needed to create positive, lasting change in your life.
              </p>

              <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
                <div className="flex items-start space-x-3">
                  <Heart className="text-emerald-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">My Philosophy</h3>
                    <p className="text-gray-700">
                      "Healing happens in relationship. I believe in creating a warm, non-judgmental space 
                      where you can feel heard, understood, and supported on your journey toward growth and healing."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl transform -rotate-3 opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dr. Maria Santos in her therapy office" 
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="text-emerald-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Available</p>
                    <p className="text-sm text-gray-600">Mon-Fri 9AM-7PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <credential.icon className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{credential.title}</h3>
              <p className="text-gray-600 text-sm">{credential.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas of Specialization</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;