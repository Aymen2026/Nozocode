import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              nozocode
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 ${
                  scrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-900' : 'text-slate-900'}`} // Always dark on mobile as bg is usually light or handled by menu overlay
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 font-medium hover:text-indigo-600 px-2 py-2 block"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium text-center block"
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-purple-500 rounded-full blur-3xl mix-blend-multiply filter"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-500 rounded-full blur-3xl mix-blend-multiply filter"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Masterpieces</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nozocode is a premium web development agency led by Aymen Bader Aissaoui. We transform complex ideas into elegant, high-performance web solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-slate-600 rounded-full hover:bg-slate-800 transition-all">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-indigo-600 font-semibold uppercase tracking-wide text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Web Solutions</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We don't just write code; we build business tools that drive growth and engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe className="h-8 w-8 text-indigo-600" />}
              title="Custom Web Development"
              description="Tailor-made websites built from scratch using React, Node.js, and modern frameworks to fit your specific business needs."
            />
            <ServiceCard 
              icon={<Smartphone className="h-8 w-8 text-indigo-600" />}
              title="Responsive & Mobile-First"
              description="Ensuring your site looks and performs perfectly on every device, from 4k monitors to smartphones."
            />
            <ServiceCard 
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="E-Commerce Solutions"
              description="Secure, scalable online stores that simplify management and maximize sales conversion."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-tl-3xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-br-3xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet the Lead Developer</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Hello, I'm <span className="font-bold text-indigo-600">Aymen Bader Aissaoui</span>. 
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                As the founder of Nozocode, I bring a passion for clean architecture and user-centric design to every project. Based in Algeria, we serve clients globally, focusing on reliability, speed, and modern aesthetics.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you need a simple landing page or a complex web application, my goal is to deliver code that helps your business thrive in the digital economy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Fast Delivery', 'Modern Tech Stack', 'SEO Optimized', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Stats Section */}
      <section id="portfolio" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">A glimpse into the digital experiences we've crafted.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              category="Corporate"
              title="FinanceFlow Dashboard"
              description="A real-time data visualization dashboard for a fintech startup."
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              category="E-Commerce"
              title="Luxe Apparel"
              description="Custom Shopify theme development with integrated inventory management."
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              category="SaaS"
              title="TaskMaster App"
              description="A productivity application built with React and Firebase."
            />
          </div>

          <div className="mt-16 bg-indigo-600 rounded-2xl p-8 md:p-12 text-center md:flex md:justify-between md:items-center">
            <div className="md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Have a project in mind?</h3>
              <p className="text-indigo-100">Let's discuss how we can help your business grow.</p>
            </div>
            <a href="#contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-indigo-600 font-semibold uppercase tracking-wide text-sm mb-2">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Let's build something great together.</h3>
              <p className="text-slate-600 mb-8">
                Ready to start your next project? Call us, email us, or fill out the form and we will get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <a href="tel:+213554990466" className="text-lg text-indigo-600 hover:underline">
                      +213 554 990 466
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a href="mailto:contact@nozocode.com" className="text-lg text-slate-600 hover:text-indigo-600">
                      contact@nozocode.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Headquarters</p>
                    <p className="text-lg text-slate-600">
                      Oran, Algeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex space-x-4">
                 <SocialIcon icon={<Linkedin size={20} />} />
                 <SocialIcon icon={<Twitter size={20} />} />
                 <SocialIcon icon={<Github size={20} />} />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white px-4 py-3"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white px-4 py-3"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white px-4 py-3"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                  onClick={() => alert('Thank you for contacting Nozocode! We will get back to you shortly.')}
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-indigo-500" />
                <span className="text-xl font-bold text-white">nozocode</span>
              </div>
              <p className="max-w-xs text-sm">
                Professional web development solutions tailored to your business needs. 
                Quality, performance, and reliability.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">E-Commerce</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Nozocode. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built by Aymen Bader Aissaoui</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-slate-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 group">
    <div className="bg-white p-4 rounded-xl inline-block shadow-sm mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const ProjectCard = ({ image, category, title, description }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700">
    <div className="aspect-w-16 aspect-h-12 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2 block">{category}</span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300">
        <p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {description}
        </p>
        <button className="flex items-center text-sm font-bold text-white hover:text-indigo-400 transition-colors">
          View Case Study <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="bg-white p-3 rounded-full text-slate-600 hover:text-indigo-600 hover:shadow-md transition-all border border-slate-200">
    {icon}
  </a>
);

export default App;

