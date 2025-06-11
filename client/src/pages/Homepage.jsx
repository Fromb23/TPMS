import { useState, useEffect } from 'react';
import { FaChalkboardTeacher, FaSchool, FaUserGraduate, FaSignInAlt } from 'react-icons/fa';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#05011c] text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05011c]/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaChalkboardTeacher className="text-2xl text-indigo-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              TPMS
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-indigo-300 transition">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-300 transition">How It Works</a>
            <a href="#contact" className="hover:text-indigo-300 transition">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-[#1a1449] transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white my-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1449] py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-indigo-300 transition" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="hover:text-indigo-300 transition" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#contact" className="hover:text-indigo-300 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a 
                href="/login" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 transition"
              >
                <FaSignInAlt />
                <span>Login</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative pt-32 pb-20 px-4 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-blend-overlay bg-[#05011c]/80">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Teaching Practice
              </span><br />
              Management System
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
              Streamlining the teaching practice process for students, lecturers, and schools in Kenya.
              Track lesson plans, supervision visits, and grading all in one platform.
            </p>
            <a 
              href="/login" 
              className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
            >
              <FaSignInAlt className="mr-2" />
              Login to Your Account
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-[#0a0729]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#1a1449] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-indigo-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaUserGraduate className="text-2xl text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Student Management</h3>
                <p className="text-gray-300">
                  Easily track student placements, lesson plans, and progress throughout their teaching practice.
                </p>
              </div>
              
              <div className="bg-[#1a1449] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-indigo-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaChalkboardTeacher className="text-2xl text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lecturer Supervision</h3>
                <p className="text-gray-300">
                  Schedule and record supervision visits with automated notifications and reporting.
                </p>
              </div>
              
              <div className="bg-[#1a1449] p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-indigo-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <FaSchool className="text-2xl text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">School Coordination</h3>
                <p className="text-gray-300">
                  Connect with partner schools and manage student placements efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4 bg-[#05011c]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3 text-center md:text-right mb-4 md:mb-0 md:pr-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Student Registration</h3>
                  <p className="text-gray-300">
                    Students register and provide their details through their university portal.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-12">
                <div className="md:w-1/3 text-center md:text-right mb-4 md:mb-0 md:pr-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">School Placement</h3>
                  <p className="text-gray-300">
                    The system automatically assigns students to schools based on their preferences and availability.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 text-center md:text-right mb-4 md:mb-0 md:pr-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-gray-300">
                    Students submit lesson plans, lecturers conduct supervision visits, and grades are recorded in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Teaching Practice Management?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join universities across Kenya in modernizing the teaching practice experience.
            </p>
            <a 
              href="/login" 
              className="inline-flex items-center justify-center bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium transition transform hover:scale-105"
            >
              <FaSignInAlt className="mr-2" />
              Login Now
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#0a0729] py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaChalkboardTeacher className="text-2xl text-indigo-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  TPMS
                </span>
              </div>
              <p className="text-gray-400">
                Teaching Practice Management System for Kenyan universities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-indigo-300 transition">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-indigo-300 transition">How It Works</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-indigo-300 transition">Contact</a></li>
                <li><a href="/login" className="text-gray-400 hover:text-indigo-300 transition">Login</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                <p>Email: info@tpms.ac.ke</p>
                <p>Phone: +254 700 000000</p>
                <p>Nairobi, Kenya</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-[#1a1449] mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Teaching Practice Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;