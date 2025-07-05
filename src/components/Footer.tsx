import React from 'react';
import { Phone, Mail, MapPin, Heart, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Maria Santos</h3>
                <p className="text-gray-400 text-sm">Licensed Therapist</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Helping individuals and families heal, grow, and thrive through compassionate, 
              evidence-based therapy services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-emerald-400 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-emerald-400 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-emerald-400 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-emerald-400 transition-colors text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-400 hover:text-emerald-400 transition-colors text-left">
                Resources
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Individual Therapy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Couples Therapy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Family Therapy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Trauma Therapy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Group Therapy</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300">(555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 9AM-7PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300">maria@therapyhealing.com</p>
                  <p className="text-gray-500 text-sm">Response within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300">123 Wellness Ave</p>
                  <p className="text-gray-300">San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Maria Santos Therapy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-600 text-center py-3">
        <p className="text-white text-sm">
          🌟 New clients welcome - Free 15-minute consultation available 🌟
        </p>
      </div>
    </footer>
  );
};

export default Footer;