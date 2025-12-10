import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Layers, Terminal, Smartphone, Palette, Download, Phone, ArrowRight, Briefcase } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Developer", "Designer", "Creator", "Innovator"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // CUSTOMIZE YOUR INFO HERE
  const portfolioData = {
    name: "Arnab Dutta",
    title: "Web Developer",
    subtitle: "Full Stack Developer & UI/UX Designer",
    bio: "Passionate about creating elegant solutions to complex problems. I specialize in building exceptional digital experiences that combine beautiful design with powerful functionality.",
    description: "I transform ideas into reality through clean code and thoughtful design. With a focus on user experience and modern technologies, I create web applications that not only look great but perform flawlessly.",
    email: "arnabdutta453@gmail.com",
    phone: "+91 8348436484",
    github: "https://github.com/arnabdutta04",
    linkedin: "https://www.linkedin.com/in/arnab-dutta-589354291/",
    profileImage: `${process.env.PUBLIC_URL}/MyPhoto.png`,
    
    skills: [
      { 
        name: "Java", 
        icon: <Code className="w-7 h-7" />, 
        level: 90,
        description: "50+ Leetcode Problems"
      },
      { 
        name: "React", 
        icon: <Database className="w-7 h-7" />, 
        level: 80,
        description: "10+ Projects"
      },
      { 
        name: "UI/UX Design", 
        icon: <Palette className="w-7 h-7" />, 
        level: 92,
        description: "Figma, Adobe XD"
      },
      { 
        name: "JavaScript", 
        icon: <Smartphone className="w-7 h-7" />, 
        level: 85,
        description: "..."
      },
      { 
        name: "Python", 
        icon: <Layers className="w-7 h-7" />, 
        level: 80,
        description: "Cyber Security, ML"
      },
      { 
        name: "APIs", 
        icon: <Terminal className="w-7 h-7" />, 
        level: 70,
        description: "Stremlit, FastAPI"
      }
    ],
    
    projects: [
      {
        title: "___",
        description: "A comprehensive e-commerce solution with advanced features including real-time inventory management, secure payment processing, and personalized recommendations.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://github.com/arnabdutta04",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop"
      },
      {
        title: "Context-aware Translation using ML",
        description: "Enterprise-grade project management tool with real-time collaboration, advanced analytics, and seamless team coordination features.",
        tags: ["React", "Firebase", "Material-UI"],
        link: "https://github.com/arnabdutta04",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop"
      },
      {
        title: "Plant-Disease Detection using CNN-Architecture",
        description: "Comprehensive data visualization platform with interactive charts, real-time updates, and customizable reporting features.",
        tags: ["Vue.js", "D3.js", "Express"],
        link: "https://github.com/arnabdutta04",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
      },
    ],

    experience: [
      {
        company: "Tech Innovators Inc.",
        position: "Senior Full Stack Developer",
        period: "2022 - Present",
        description: "Leading development of scalable web applications and mentoring junior developers."
      },
      {
        company: "Digital Solutions Co.",
        position: "Frontend Developer",
        period: "2020 - 2022",
        description: "Developed responsive user interfaces and improved application performance by 40%."
      },
      {
        company: "StartUp Labs",
        position: "Junior Developer",
        period: "2019 - 2020",
        description: "Built features for multiple client projects and contributed to open-source initiatives."
      }
    ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-wrapper">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-overlay"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container-custom">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-text">{portfolioData.name.split(' ')[0]}</span>
              <span className="logo-dot">.</span>
            </div>
            
            <div className="nav-menu">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-item"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="mobile-menu">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="mobile-menu-item">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container-custom">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Available for freelance</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-line">Hello, I'm</span>
                <span className="title-name">{portfolioData.name}</span>
                <span className="title-role">
                  <span className="role-text">
                    {words[currentWord]}
                  </span>
                </span>
              </h1>
              
              <p className="hero-description">
                {portfolioData.description}
              </p>
              
              <div className="hero-actions">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  <span>Get In Touch</span>
                  <ArrowRight className="btn-icon" />
                </button>
                <button className="btn-secondary">
                  <Download className="btn-icon" />
                  <a href={process.env.PUBLIC_URL + "/ArnabCV.pdf"} download="Arnab-Dutta-CV.pdf">
                    <span>Download CV</span>
                  </a>
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="image-decoration">
                <div className="deco-ring ring-1"></div>
                <div className="deco-ring ring-2"></div>
                <div className="deco-ring ring-3"></div>
              </div>
              <div className="profile-image-container">
                <img src={portfolioData.profileImage} alt={portfolioData.name} className="profile-image" />
                <div className="image-glow"></div>
              </div>
              <div className="floating-card card-1">
                <Code className="w-6 h-6 text-orange-400" />
                <span>Clean Code</span>
              </div>
              <div className="floating-card card-2">
                <Palette className="w-6 h-6 text-orange-400" />
                <span>UI/UX Design</span>
              </div>
              <div className="floating-card card-3">
                <Terminal className="w-6 h-6 text-orange-400" />
                <span>Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-subtitle">Get to know me</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="about-content">
            <p className="about-text">{portfolioData.bio}</p>
            <div className="about-social">
              <a href={portfolioData.github} className="social-link">
                <Github />
              </a>
              <a href={portfolioData.linkedin} className="social-link">
                <Linkedin />
              </a>
              <a href={`mailto:${portfolioData.email}`} className="social-link">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding section-dark">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-subtitle">My expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            {portfolioData.skills.map((skill, idx) => (
              <div key={idx} className="skill-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-desc">{skill.description}</p>
                  </div>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <span className="progress-text">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-subtitle">My work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {portfolioData.projects.map((project, idx) => (
              <div key={idx} className="project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link-btn">
                      <span>View Project</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding section-dark">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-subtitle">My journey</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="timeline">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="timeline-item" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-position">{exp.position}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="section-header">
            <span className="section-subtitle">Get in touch</span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-description">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          <div className="contact-grid">
            <a href={`mailto:${portfolioData.email}`} className="contact-card">
              <div className="contact-icon">
                <Mail />
              </div>
              <h3 className="contact-title">Email Me</h3>
              <p className="contact-info">{portfolioData.email}</p>
            </a>
            <a href={`tel:${portfolioData.phone}`} className="contact-card">
              <div className="contact-icon">
                <Phone />
              </div>
              <h3 className="contact-title">Call Me</h3>
              <p className="contact-info">{portfolioData.phone}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-custom">
          <p className="footer-text">© 2024 {portfolioData.name}. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;