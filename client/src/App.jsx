import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Card, Form, ProgressBar, Carousel } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code, ExternalLink, Moon, Sun, Smartphone, Server, Database, Layers, Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import profileImg from './assets/profile.jpeg';

const SkillsData = [
  { name: 'React', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PHP Laravel', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', subtext: 'Module Based' },
  { name: 'MongoDB', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'JavaScript', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Redux', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
];

const ExperienceData = [
  {
    company: 'IndiCorp IT Solutions Pvt. Ltd.',
    role: 'Software Developer',
    duration: '01/2024 – present',
    location: 'Noida, India'
  },
  {
    company: 'BlueZone Online Marketing Solution Pvt. Ltd.',
    role: 'Front-End Developer',
    duration: '08/2023 – 11/2023',
    location: 'Bengaluru, India'
  },
  {
    company: 'Mityung Infotech Pvt. Ltd.',
    role: 'Associate Software Engineer',
    duration: '02/2022 – 06/2023',
    location: 'Noida, India'
  }
];

const CertificatesData = [
  {
    title: 'UI Technology',
    issuer: 'Naresh IT Technologies',
    date: 'June 2019',
    location: 'Hyderabad'
  },
  {
    title: 'Core Java',
    issuer: 'OAIT India Education',
    date: 'May 2017',
    location: 'Aligarh'
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    date: 'June 2025',
    location: 'Online'
  },
  {
    title: 'CoRover Certified AI Professional (C-CAP)',
    issuer: 'Udemy (CoRover Pvt. Ltd.)',
    date: 'January 2025',
    location: 'Online'
  },
  {
    title: 'AWS Technical Essentials',
    issuer: 'AWS Training & Certification',
    date: 'June 2025',
    location: 'Online'
  }
];

const EducationData = [
  {
    school: 'Kamala Nehru Institute of Technology, Sultanpur',
    degree: 'Master of Computer Applications (2020)'
  },
  {
    school: 'Dharam Samaj College, Dr. BR Ambedkar University',
    degree: 'Bachelor of Computer Applications (2017)'
  },
  {
    school: 'VV Girls Inter College, Aligarh, UP Board',
    degree: 'Intermediate & High School (2011-2013)'
  }
];

const ProjectsData = [
    {
      id: 1,
      title: 'Flowt360',
      description: 'Admin Panel with dynamic forms and multi-role UI for Users and Vendors.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Company Project'
    },
    {
      id: 2,
      title: 'OTT Platform',
      description: 'Responsive UI for OTT content with reusable video player and search components.',
      tech: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Company Project'
    },
    {
      id: 3,
      title: 'ShipTotal',
      description: 'Logistics/shipping dashboard with NDR Management and Delivery Tracking modules.',
      tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'],
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Company Project'
    },
    {
      id: 4,
      title: 'Richkardz',
      description: 'Digital smart business card platform with CRUD and API-based file handling.',
      tech: ['Next.js', 'React.js', 'JavaScript', 'Axios'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Company Project'
    },
    {
      id: 5,
      title: 'Parakaram',
      description: 'Admin dashboard for team hiring with role-based UI and custom permissions.',
      tech: ['React.js', 'PrimeReact', 'CoreUI', 'Axios'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Company Project'
    },
    {
      id: 6,
      title: 'Medzinc',
      description: 'Healthcare web platform for managing medical records and patient/doctor data.',
      tech: ['React.js', 'PrimeReact', 'CoreUI', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Company Project'
    },
    {
      id: 7,
      title: 'Leave Management System',
      description: 'A comprehensive system for employee leave requests, approvals, and balance tracking.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Self Project'
    },
    {
      id: 8,
      title: 'Interactive World Map',
      description: 'Dynamic world map with data visualization and location-based insights.',
      tech: ['React.js', 'D3.js', 'SVG', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop',
      link: '#',
      category: 'Self Project'
    }
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  
  // Dynamic Data State
  const [skills, setSkills] = useState(SkillsData);
  const [experience, setExperience] = useState(ExperienceData);
  const [education, setEducation] = useState(EducationData);
  const [projects, setProjects] = useState(ProjectsData);
  const [certificates, setCertificates] = useState(CertificatesData);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerSlide(1);
      else if (window.innerWidth < 992) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const fetchData = async () => {
      try {
        const [skillsRes, expRes, eduRes, projRes] = await Promise.all([
          axios.get('/api/portfolio/skills'),
          axios.get('/api/portfolio/experience'),
          axios.get('/api/portfolio/education'),
          axios.get('/api/projects')
        ]);
        
        if(skillsRes.data.length > 0) setSkills(skillsRes.data);
        if(expRes.data.length > 0) setExperience(expRes.data);
        if(eduRes.data.length > 0) setEducation(eduRes.data);
        if(projRes.data.length > 0) setProjects(projRes.data);
      } catch (err) {
        console.error('Error fetching data from API:', err);
      }
    };
    fetchData();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const certificateChunks = [];
  for (let i = 0; i < certificates.length; i += itemsPerSlide) {
    certificateChunks.push(certificates.slice(i, i + itemsPerSlide));
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="portfolio-app">
      {/* Header / Navbar */}
      <Navbar expand="lg" variant="light" fixed="top" className="py-2 px-4 glass-card border-0 border-bottom shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-5 gradient-text">POOJA SHAMI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#certificates">Certificates</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section pt-5 pb-3">
        <Container>
          <Row className="align-items-center pt-5">
            <Col lg={6} className="text-center text-lg-start">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <div className="mb-3">
                  <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fw-semibold">
                    Available for Projects
                  </span>
                </div>
                <h1 className="display-4 fw-bold mb-3 mt-4" style={{ color: '#154259', letterSpacing: '-1px' }}>
                  Pooja Shami <br />
                  <span className="gradient-text fs-2">MERN Stack Developer</span>
                </h1>
                <p className="lead text-secondary mb-4 fs-6" style={{ maxWidth: '600px' }}>
                  MERN Stack Developer with 3+ years of experience building scalable and responsive full-stack web applications. Skilled in creating reusable components, RESTful APIs, and dynamic UIs.
                </p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-4">
                  <Button variant="primary" size="md" className="rounded-pill shadow px-4 py-2">Explore Projects</Button>
                  <Button variant="outline-dark" size="md" className="rounded-pill px-4 py-2">Let's Talk</Button>
                </div>

               
              </motion.div>
            </Col>

            <Col lg={6} className="mt-5 mt-lg-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="position-relative d-flex justify-content-center"
              >
                {/* Floating Elements */}
                <div className="floating-element e1 shadow-lg">
                  <Code size={24} className="text-primary" />
                </div>
                <div className="floating-element e2 shadow-lg">
                  <Server size={24} className="text-success" />
                </div>
                <div className="floating-element e3 shadow-lg">
                  <div className="d-flex align-items-center gap-2 px-2">
                    <Database size={18} className="text-warning" />
                    <span className="fw-bold small">MongoDB</span>
                  </div>
                </div>

                <div className="img-container mt-4">
                  <div className="p-2 rounded-circle overflow-hidden bg-white shadow-lg mx-auto" style={{ width: '320px', height: '320px' }}>
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-100 h-100 object-fit-cover rounded-circle shadow-inner"
                    />
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

       
      </section>

      {/* About Section */}
      <section id="about" className="bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">About Me</h2>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <p className="fs-5 text-secondary">
                  I have a strong foundation in modern web technologies and a keen eye for design.
                  My goal is to bridge the gap between complex backend systems and intuitive user interfaces.
                  Whether it's building robust APIs or crafting pixel-perfect frontend components, I bring
                  innovation and passion to every project.
                </p>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5 mt-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="display-6 fw-bold mb-3" style={{ color: '#154259', letterSpacing: '-0.5px' }}>Technical Expertise</h2>
              <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#0d6efd' }}></div>
            </motion.div>
          </div>

          <Row className="g-4 justify-content-center mb-5">
            {skills.map((skill, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="h-100"
                >
                  <div className="skill-card h-100 p-4 bg-white border" style={{ borderRadius: '10px', transition: 'all 0.3s ease', borderColor: '#eaeaea' }}
                    onMouseEnter={(e) => { e.currentTarget.classList.add('shadow-sm'); e.currentTarget.style.borderColor = '#3b82f6' }}
                    onMouseLeave={(e) => { e.currentTarget.classList.remove('shadow-sm'); e.currentTarget.style.borderColor = '#eaeaea' }}>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center gap-3">
                        <img src={skill.icon} alt={skill.name} style={{ width: '28px', height: '28px' }} />
                        <div>
                          <h5 className="mb-0 fw-bold" style={{ color: '#2c3e50', fontSize: '1.25rem' }}>{skill.name}</h5>
                          {skill.subtext && <small className="text-primary fw-medium">{skill.subtext}</small>}
                        </div>
                      </div>
                      <span className="fw-bold fs-6" style={{ color: '#3b82f6' }}>{skill.level}%</span>
                    </div>

                    <div className="progress" style={{ height: '8px', backgroundColor: '#f0f4f8', borderRadius: '10px' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                        className="progress-bar"
                        style={{ backgroundColor: '#3b82f6', borderRadius: '10px' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5 mt-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="display-6 fw-bold mb-3" style={{ color: '#154259', letterSpacing: '-0.5px' }}>Experience & Education</h2>
              <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#0d6efd' }}></div>
            </motion.div>
          </div>

          <Row className="g-4">
            <Col lg={6}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle" style={{ width: '45px', height: '45px' }}>
                  <Briefcase size={22} />
                </div>
                <h3 className="fw-bold mb-0" style={{ color: '#154259' }}>Experience</h3>
              </div>
              
              <div className="experience-timeline position-relative ps-4 ms-2" style={{ borderLeft: '2px dashed #dee2e6' }}>
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-4 position-relative"
                  >
                    {/* Timeline Dot */}
                    <div className="position-absolute bg-primary rounded-circle shadow-sm" style={{ width: '16px', height: '16px', left: '-33px', top: '10px', border: '3px solid white' }}></div>
                    
                    <div className="p-4 bg-white border shadow-sm hover-lift" style={{ borderRadius: '1rem', transition: 'all 0.3s ease', borderColor: '#eaeaea' }}
                         onMouseEnter={(e) => { e.currentTarget.classList.add('shadow'); e.currentTarget.style.borderColor = '#0d6efd' }}
                         onMouseLeave={(e) => { e.currentTarget.classList.remove('shadow'); e.currentTarget.style.borderColor = '#eaeaea' }}>
                      <div className="d-flex justify-content-between align-items-lg-center flex-column flex-lg-row mb-2 gap-2">
                        <h5 className="fw-bold mb-0 text-dark">{exp.role}</h5>
                        <span className="badge bg-light text-primary border border-primary-subtle py-1 px-3 rounded-pill fw-medium d-flex align-items-center gap-1" style={{ fontSize: '0.75rem' }}>
                          <Calendar size={12} /> {exp.duration}
                        </span>
                      </div>
                      <h6 className="fw-semibold text-primary mb-2">{exp.company}</h6>
                      <div className="text-secondary small d-flex align-items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>

            <Col lg={6}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="d-flex align-items-center justify-content-center bg-success-subtle text-success rounded-circle" style={{ width: '45px', height: '45px' }}>
                  <GraduationCap size={22} />
                </div>
                <h3 className="fw-bold mb-0" style={{ color: '#154259' }}>Education</h3>
              </div>
              
              <div className="education-list">
                {education.map((edu, index) => (
                   <motion.div
                   key={index}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="mb-3 p-4 bg-white border shadow-sm d-flex gap-3 align-items-center hover-lift"
                   style={{ borderRadius: '1rem', transition: 'all 0.3s ease', borderColor: '#eaeaea', borderLeft: '4px solid #198754' }}
                   onMouseEnter={(e) => { e.currentTarget.classList.add('shadow'); e.currentTarget.style.transform = 'translateY(-2px)' }}
                   onMouseLeave={(e) => { e.currentTarget.classList.remove('shadow'); e.currentTarget.style.transform = 'translateY(0)' }}>
                     <div className="flex-grow-1">
                       <h6 className="fw-bold mb-2 text-dark" style={{ fontSize: '1.1rem' }}>{edu.degree}</h6>
                       <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem' }}>{edu.school}</p>
                     </div>
                 </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-5 bg-white border-top">
        <Container>
          <div className="text-center mb-5 mt-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="display-6 fw-bold mb-3" style={{ color: '#154259', letterSpacing: '-0.5px' }}>Licenses & Certifications</h2>
              <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#0d6efd' }}></div>
            </motion.div>
          </div>

          <Carousel 
            variant="dark"
            indicators={true} 
            controls={true} 
            className="certificate-carousel pb-5"
            interval={3000}
          >
            {certificateChunks.map((chunk, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <div className="px-4 px-md-5">
                  <Row className="g-4 justify-content-center">
                  {chunk.map((cert, index) => (
                    <Col md={6} lg={4} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="h-100"
                      >
                        <div className="p-4 bg-white border shadow-sm h-100 hover-lift text-center d-flex flex-column align-items-center position-relative overflow-hidden" 
                             style={{ borderRadius: '1.2rem', transition: 'all 0.3s ease', borderColor: '#eaeaea' }}
                             onMouseEnter={(e) => { e.currentTarget.classList.add('shadow-lg'); e.currentTarget.style.borderColor = '#ffb703'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                             onMouseLeave={(e) => { e.currentTarget.classList.remove('shadow-lg'); e.currentTarget.style.borderColor = '#eaeaea'; e.currentTarget.style.transform = 'translateY(0)' }}>
                          
                          {/* Decorative Top Accent */}
                          <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', backgroundColor: '#ffb703' }}></div>

                          <div className="d-flex align-items-center justify-content-center bg-warning-subtle text-warning rounded-circle mb-3 mt-2" style={{ width: '60px', height: '60px' }}>
                            <Award size={28} />
                          </div>
                          
                          <h5 className="fw-bold mb-2 text-dark" style={{ fontSize: '1.1rem' }}>{cert.title}</h5>
                          <p className="text-secondary fw-medium mb-1 small">{cert.issuer}</p>
                          <p className="text-muted small mb-auto d-flex align-items-center gap-1 justify-content-center"><MapPin size={12}/> {cert.location}</p>
                          
                          <div className="badge bg-light text-dark border mt-4 px-3 py-2 rounded-pill w-100 fw-medium">Issued {cert.date}</div>
                        </div>
                      </motion.div>
                    </Col>
                  ))}
                  </Row>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="d-flex justify-content-center gap-3 mb-5">
              {['All', 'Company Project', 'Self Project'].map(cat => (
                <button 
                  key={cat}
                  className={`btn rounded-pill px-4 py-2 fw-semibold ${selectedCategory === cat ? 'btn-primary shadow-lg' : 'btn-outline-primary bg-white text-primary'}`}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ transition: 'all 0.3s ease', letterSpacing: '0.5px', border: selectedCategory === cat ? 'none' : '1px solid #0d6efd' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="row g-4">
              {projects
                .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
                .map((project) => (
                <div className="col-md-6 col-lg-4" key={project.id}>
                  <Card className="h-100 overflow-hidden border-0 bg-white" style={{ borderRadius: '1.2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transition: 'all 0.3s ease' }}>
                    <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                      <Card.Img variant="top" src={project.image} alt={project.title} style={{ transition: 'transform 0.6s ease' }} className="hover-zoom" />
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className={`badge ${project.category === 'Self Project' ? 'bg-success' : 'bg-primary'} shadow-sm px-3 py-2 rounded-pill fw-medium`} style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="fw-bold mb-2" style={{ color: '#154259' }}>{project.title}</Card.Title>
                      <Card.Text className="text-secondary small mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {project.description}
                      </Card.Text>
                      <div className="mb-4 d-flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="badge bg-light text-primary border border-primary-subtle py-1 px-2 rounded-1 fw-normal" style={{ fontSize: '0.75rem' }}>{t}</span>
                        ))}
                      </div>
                      <Button variant="outline-primary" className="w-100 rounded-pill fw-semibold py-2 mt-auto d-flex justify-content-center align-items-center gap-2" style={{ transition: 'all 0.3s ease' }}>
                        View Details <ExternalLink size={16} />
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-white">
        <Container>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <Github className="social-icon" />
            <Linkedin className="social-icon" />
            <Twitter className="social-icon" />
          </div>
          <p className="mb-0 text-secondary">© 2026 Developed with Passion • MERN Stack</p>
        </Container>
      </footer>
    </div>
  );
};

export default App;
