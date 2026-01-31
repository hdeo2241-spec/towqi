
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Facebook, Instagram, Linkedin, Code, Layout, Cpu, Target, Users, 
  ArrowRight, Github, Mail, MapPin, ChevronRight, CheckCircle, Phone, Video,
  Terminal, Monitor, Figma, Quote, BarChart, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, EXPERIENCES, SKILLS, SERVICES, BLOG_POSTS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('HOME');
  const [scrollProgress, setScrollProgress] = useState(0);

  const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/twaqi.hasan",
    instagram: "https://www.instagram.com/twaqi",
    linkedin: "#" // User didn't specify, keeping as placeholder
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navLinks = [
    { name: 'HOME', id: 'HOME' },
    { name: 'FEATURES', id: 'FEATURES' },
    { name: 'PORTFOLIO', id: 'PORTFOLIO' },
    { name: 'RESUME', id: 'RESUME' },
    { name: 'SKILLS', id: 'SKILLS' },
    { name: 'BLOG', id: 'BLOG' },
    { name: 'CONTACT', id: 'CONTACT' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code': return <Code className="w-8 h-8" />;
      case 'layout': return <Layout className="w-8 h-8" />;
      case 'cpu': return <Cpu className="w-8 h-8" />;
      case 'target': return <Target className="w-8 h-8" />;
      case 'users': return <Users className="w-8 h-8" />;
      case 'zap': return <Video className="w-8 h-8" />;
      case 'bar-chart': return <BarChart className="w-8 h-8" />;
      case 'search': return <FileText className="w-8 h-8" />;
      default: return <Code className="w-8 h-8" />;
    }
  };

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const Hero = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-16 py-10 lg:py-20">
      <div className="lg:w-3/5">
        <div className="tracking-[3px] uppercase text-[14px] font-medium text-[#c4cfde] mb-6">WELCOME TO MY WORLD</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Hi, I'm <span className="text-[#00d166]">Twaqi Hasan</span><br />
          <span className="text-3xl md:text-5xl">a Computer Specialist.</span>
        </h1>
        <p className="text-lg text-[#c4cfde] leading-8 max-w-2xl mb-12 opacity-80">
          Passionate Science student based in Dhaka, seeking part-time professional opportunities. 
          Expert in documentation, fast typing, and basic video editing. 
          I focus on delivering high-quality results with teamwork and effective communication.
        </p>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 pt-10">
          <div>
            <h4 className="text-[14px] tracking-widest uppercase font-medium text-white mb-6">FIND WITH ME</h4>
            <div className="flex gap-5">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Facebook size={20} /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Instagram size={20} /></a>
              <a href={SOCIAL_LINKS.linkedin} className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-[14px] tracking-widest uppercase font-medium text-white mb-6">BEST SKILL ON</h4>
            <div className="flex gap-5">
              <div title="Documentation" className="inbio-card w-14 h-14 flex items-center justify-center text-[#00d166]"><FileText size={20} /></div>
              <div title="Video Editing" className="inbio-card w-14 h-14 flex items-center justify-center text-[#00d166]"><Video size={20} /></div>
              <div title="Fast Typing" className="inbio-card w-14 h-14 flex items-center justify-center text-[#00d166]"><Monitor size={20} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 w-full flex justify-center">
        <div className="relative group max-w-md w-full">
          <div className="inbio-card w-full aspect-[4/5] overflow-hidden rounded-xl border border-[#32363b]">
            <img src="th.png" alt="Twaqi Hasan" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-12 p-8 inbio-card hidden md:block">
            <span className="text-[#00d166] font-bold text-lg block">Science Background</span>
            <span className="text-xs uppercase tracking-widest font-bold">Academic Focus</span>
          </div>
        </div>
      </div>
    </div>
  );

  const Features = () => (
    <div className="py-20 border-t border-[#121415]">
      <div className="text-center mb-16">
        <span className="text-[#00d166] tracking-[2px] font-medium uppercase">FEATURES</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase">What I Do</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="inbio-card p-10 group cursor-default">
            <div className="text-[#00d166] mb-8 transition-transform group-hover:-translate-y-2">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-white">{service.title}</h3>
            <p className="leading-7 opacity-80">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const Portfolio = () => (
    <div className="py-20 border-t border-[#121415]">
      <div className="text-center mb-16">
        <span className="text-[#00d166] tracking-[2px] font-medium uppercase">VISIT MY WORK AND PROJECTS</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase">My Portfolio</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="inbio-card p-8 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-6 aspect-video">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#00d166] text-[12px] font-medium tracking-widest uppercase">{project.category}</span>
              <div className="flex items-center space-x-2 text-xs opacity-60">
                <Target size={14} /> <span>{project.tags[0]}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00d166] transition-colors">
              {project.title} <ArrowRight size={18} className="inline ml-1" />
            </h3>
          </div>
        ))}
      </div>
    </div>
  );

  const Resume = () => (
    <div className="py-20 border-t border-[#121415]">
      <div className="text-center mb-16">
        <span className="text-[#00d166] tracking-[2px] font-medium uppercase">EDUCATIONAL BACKGROUND</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase">My Resume</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <h3 className="text-3xl font-bold text-white mb-10 border-l-4 border-[#00d166] pl-6 uppercase">Education</h3>
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="inbio-card p-10 relative before:absolute before:w-5 before:h-[2px] before:bg-[#00d166] before:left-[-20px] before:top-14">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                  <span className="text-sm opacity-60 mt-1 block">{exp.company}</span>
                </div>
                <span className="px-4 py-1 inbio-btn-accent text-xs font-bold rounded-md">{exp.duration}</span>
              </div>
              <ul className="space-y-3 opacity-80">
                {exp.achievements.map((a, idx) => (
                  <li key={idx} className="text-sm">• {a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-10">
          <h3 className="text-3xl font-bold text-white mb-10 border-l-4 border-[#00d166] pl-6 uppercase">Goals</h3>
          <div className="inbio-card p-10">
            <h4 className="text-2xl font-bold text-white mb-6">Career Objective</h4>
            <p className="opacity-80 leading-relaxed mb-6">
              Seeking a part-time job that allows me to utilize my technical expertise in Computer Operations, Office Suite management, and Video Editing.
            </p>
            <div className="flex items-center space-x-3 text-[#00d166]">
              <CheckCircle size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Available for Remote/On-site</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Skills = () => (
    <div className="py-20 border-t border-[#121415]">
      <div className="text-center mb-16">
        <span className="text-[#00d166] tracking-[2px] font-medium uppercase">MY PROFESSIONAL SKILLS</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase">My Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {SKILLS.map((skill, idx) => (
          <div key={skill.name}>
            <div className="flex justify-between items-end mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-xs tracking-widest uppercase font-bold text-white">{skill.name}</span>
              </div>
              <span className="text-[#00d166] font-bold text-sm tracking-widest">{skill.level}%</span>
            </div>
            <div className="h-3 w-full bg-[#121415] rounded-full p-1 shadow-inner">
              <div 
                style={{ width: `${skill.level}%` }}
                className="h-full bg-gradient-to-r from-[#00d166] to-[#008f4a] rounded-full transition-all duration-1000"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Blog = () => (
    <div className="py-20 border-t border-[#121415]">
      <div className="text-center mb-16">
        <span className="text-[#00d166] tracking-[2px] font-medium uppercase">LATEST ARTICLES</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase">My Blog</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="inbio-card p-8 group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-6 aspect-video">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#00d166] text-[12px] font-medium tracking-widest uppercase">{post.category}</span>
              <span className="text-xs opacity-60 uppercase">{post.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00d166] transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-sm line-clamp-2 opacity-70 mb-6">{post.excerpt}</p>
            <button className="text-[12px] font-bold tracking-widest uppercase text-[#00d166] flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
              <span>Read More</span> <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const Contact = () => (
    <div className="py-20 border-t border-[#121415]">
      <div className="text-center mb-16">
        <span className="text-[#00d166] tracking-[2px] font-medium uppercase">CONTACT</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 uppercase">Contact With Me</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 inbio-card p-10">
          <div className="rounded-xl overflow-hidden mb-8 shadow-inner border border-[#32363b]">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Contact" className="w-full grayscale hover:grayscale-0 transition-all" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4 uppercase">Twaqi Hasan</h3>
          <p className="text-lg opacity-60 mb-8 uppercase">Computer Specialist & Video Editor</p>
          <div className="space-y-5 mb-10">
            <div className="flex items-center space-x-4">
              <MapPin className="text-[#00d166]" size={20} />
              <span className="text-white">Uttara, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-[#00d166]" size={20} />
              <span className="text-white">Available on Request</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-[#00d166]" size={20} />
              <span className="text-white lowercase">twaqihasan@gmail.com</span>
            </div>
          </div>
          <div className="mt-12">
            <span className="text-sm tracking-widest uppercase font-medium text-white mb-6 block">FIND WITH ME</span>
            <div className="flex gap-5">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Facebook size={20} /></a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Instagram size={20} /></a>
              <a href={SOCIAL_LINKS.linkedin} className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 inbio-card p-10">
          <form className="space-y-8" action={`mailto:twaqihasan@gmail.com`} method="post" encType="text/plain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-xs font-bold tracking-widest uppercase text-[#c4cfde] opacity-60">Your Name</label>
                <input type="text" className="w-full bg-[#191b1e] border-2 border-[#191b1e] rounded-md px-6 py-4 focus:border-[#00d166] transition-all text-white outline-none" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-bold tracking-widest uppercase text-[#c4cfde] opacity-60">Phone Number</label>
                <input type="text" className="w-full bg-[#191b1e] border-2 border-[#191b1e] rounded-md px-6 py-4 focus:border-[#00d166] transition-all text-white outline-none" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold tracking-widest uppercase text-[#c4cfde] opacity-60">Email</label>
              <input type="email" className="w-full bg-[#191b1e] border-2 border-[#191b1e] rounded-md px-6 py-4 focus:border-[#00d166] transition-all text-white outline-none" />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold tracking-widest uppercase text-[#c4cfde] opacity-60">Subject</label>
              <input type="text" className="w-full bg-[#191b1e] border-2 border-[#191b1e] rounded-md px-6 py-4 focus:border-[#00d166] transition-all text-white outline-none" />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-bold tracking-widest uppercase text-[#c4cfde] opacity-60">Your Message</label>
              <textarea rows={6} className="w-full bg-[#191b1e] border-2 border-[#191b1e] rounded-md px-6 py-4 focus:border-[#00d166] transition-all text-white outline-none resize-none"></textarea>
            </div>
            <button type="submit" className="inbio-btn-accent w-full font-bold py-5 rounded-md text-[14px] tracking-widest transition-all">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#212428] text-[#c4cfde] font-sans min-h-screen flex flex-col">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollProgress > 20 || currentPage !== 'HOME' ? 'bg-[#212428]/95 backdrop-blur-md shadow-2xl py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => handlePageChange('HOME')}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#32363b] shadow-lg flex items-center justify-center bg-[#191b1e]">
                <span className="text-[#00d166] font-bold text-xl">TH</span>
              </div>
              <span className="text-lg md:text-xl font-bold tracking-widest text-white group-hover:text-[#00d166] transition-colors uppercase">TWAQI</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => handlePageChange(link.id)}
                  className={`text-[13px] font-medium tracking-widest transition-colors ${currentPage === link.id ? 'text-[#00d166]' : 'text-[#c4cfde] hover:text-[#00d166]'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handlePageChange('CONTACT')}
                className="inbio-btn-accent px-6 py-3 rounded-md text-[13px] font-bold tracking-widest transition-all duration-300"
              >
                HIRE ME
              </button>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inbio-card p-3 text-[#00d166]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="lg:hidden fixed inset-0 z-50 bg-[#212428] p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-2xl font-bold tracking-widest text-white">TWAQI</span>
                <button onClick={() => setIsMenuOpen(false)} className="inbio-card p-3 text-[#00d166]">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handlePageChange(link.id)}
                    className={`block w-full text-left text-lg font-medium tracking-widest transition-colors ${currentPage === link.id ? 'text-[#00d166]' : 'text-[#c4cfde] hover:text-[#00d166]'}`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              <div className="mt-20 border-t border-[#121415] pt-10">
                <span className="text-sm tracking-widest uppercase font-medium text-white mb-6 block">FIND WITH ME</span>
                <div className="flex gap-5">
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Facebook size={20} /></a>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Instagram size={20} /></a>
                  <a href={SOCIAL_LINKS.linkedin} className="inbio-card w-14 h-14 flex items-center justify-center text-white hover:text-[#00d166] transition-all"><Linkedin size={20} /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {currentPage === 'HOME' && (
              <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Hero />
                <Features />
                <Portfolio />
                <Resume />
                <Skills />
                <Blog />
                <Contact />
              </motion.div>
            )}

            {currentPage === 'FEATURES' && (
              <motion.div key="features" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Features />
              </motion.div>
            )}

            {currentPage === 'PORTFOLIO' && (
              <motion.div key="portfolio" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Portfolio />
              </motion.div>
            )}

            {currentPage === 'RESUME' && (
              <motion.div key="resume" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Resume />
              </motion.div>
            )}

            {currentPage === 'SKILLS' && (
              <motion.div key="skills" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Skills />
              </motion.div>
            )}

            {currentPage === 'BLOG' && (
              <motion.div key="blog" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Blog />
              </motion.div>
            )}

            {currentPage === 'CONTACT' && (
              <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5 }}>
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="py-20 border-t border-[#121415] text-center mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div 
            className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#32363b] shadow-lg mx-auto mb-6 cursor-pointer flex items-center justify-center bg-[#191b1e]"
            onClick={() => handlePageChange('HOME')}
          >
             <span className="text-[#00d166] font-bold text-2xl">TH</span>
          </div>
          <span className="text-2xl font-bold tracking-widest text-white mb-10 block uppercase">TWAQI<span className="text-[#00d166]">HASAN</span></span>
          <p className="text-sm tracking-widest opacity-40 uppercase">© {new Date().getFullYear()}. All rights reserved by Twaqi Hasan.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
