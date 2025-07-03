import { useState, useEffect } from 'react';
import { FaChalkboardTeacher, FaSchool, FaUserGraduate, FaSignInAlt, FaChevronDown } from 'react-icons/fa';

const Homepage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <FaUserGraduate />, title: "Student Management", 
      desc: "Track placements, lesson plans, and progress throughout teaching practice." },
    { icon: <FaChalkboardTeacher />, title: "Lecturer Supervision", 
      desc: "Schedule visits with automated notifications and digital reporting." },
    { icon: <FaSchool />, title: "School Coordination", 
      desc: "Manage student placements and communication with partner schools." }
  ];

  const steps = [
    "Students register through their university portal.",
    "System assigns students to schools based on preferences.",
    "Real-time progress tracking with digital submissions."
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#05011c] text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-[#05011c]/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaChalkboardTeacher className="text-2xl text-indigo-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">TPMS</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Features', 'How It Works', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                 className="hover:text-indigo-300 transition">
                {item}
              </a>
            ))}
          </nav>
          <a href="/login" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md flex items-center">
            <FaSignInAlt className="mr-2" />
            <span className="hidden md:inline">Login</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="pt-32 pb-20 px-4 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-blend-overlay bg-[#05011c]/80">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Teaching Practice
              </span><br />Management System
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200">
              Streamlining teaching practice for students, lecturers, and schools in Kenya.
            </p>
            <a href="/login" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition hover:scale-105">
              <FaSignInAlt className="mr-2" />Login to Your Account
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-[#0a0729]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Key Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className={`bg-[#1a1449] p-6 rounded-xl transition-all ${activeFeature === index ? 'border-l-4 border-indigo-500' : ''}`}
                  onMouseEnter={() => setActiveFeature(index)}>
                  <div className="bg-indigo-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4 bg-[#05011c]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">How It Works</span>
            </h2>
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 group cursor-pointer">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="border-l-2 border-indigo-400 pl-6 pb-6 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-400 rounded-full"></div>
                  <p className="text-gray-300 group-hover:text-white transition">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Teaching Practice?</h2>
            <a href="/login" className="inline-flex items-center bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium hover:scale-105 transition">
              <FaSignInAlt className="mr-2" />Login Now
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#0a0729] py-12 px-4">
        <div className="container mx-auto text-center md:text-left">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Teaching Practice Management System</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;