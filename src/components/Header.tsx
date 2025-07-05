import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">DM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Dr. Maria Santos</h1>
              <p className="text-sm text-gray-600">Licensed Therapist</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-emerald-600 transition-colors">
              Resources
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              Book Session
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-emerald-600 transition-colors text-left">
                Resources
              </button>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-4">
                  <Mail size={16} />
                  <span>maria@therapyhealing.com</span>
                </div>
                <button onClick={() => scrollToSection('contact')} className="w-full bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700 transition-colors">
                  Book Session
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;