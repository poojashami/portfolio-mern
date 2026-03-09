import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Card, Form, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code, ExternalLink, Moon, Sun, Smartphone, Server, Database, Layers } from 'lucide-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const SkillsData = [
  { name: 'React', level: 90, icon: <Layers size={20} /> },
  { name: 'Node.js', level: 85, icon: <Server size={20} /> },
  { name: 'MongoDB', level: 80, icon: <Database size={20} /> },
  { name: 'JavaScript', level: 95, icon: <Code size={20} /> },
  { name: 'UI/UX Design', level: 75, icon: <Smartphone size={20} /> },
];

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects').catch(() => ({
          data: [
            {
              id: 1,
              title: 'E-commerce App',
              description: 'A full-stack e-commerce platform using MERN',
              tech: ['React', 'Node.js', 'MongoDB'],
              image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
              link: '#'
            },
            {
              id: 2,
              title: 'Social Media Dashboard',
              description: 'Interactive dashboard for managing social media',
              tech: ['React', 'Chart.js', 'Firebase'],
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
              link: '#'
            },
            {
              id: 3,
              title: 'Health Tracking Web App',
              description: 'Real-time health monitoring and data visualization',
              tech: ['React', 'Socket.io', 'PostgreSQL'],
              image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=1000&auto=format&fit=crop',
              link: '#'
            }
          ]
        }));
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="portfolio-app">
      {/* Header / Navbar */}
      <Navbar expand="lg" variant="light" fixed="top" className="py-3 px-4 glass-card mx-2 my-2 border-0 rounded-pill">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4 gradient-text">PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center py-5">
            <Col lg={6} className="text-center text-lg-start">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <div className="mb-3">
                  <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fw-semibold">
                    Available for Projects
                  </span>
                </div>
                <h1 className="display-2 fw-bold mb-3" style={{ color: '#154259', letterSpacing: '-1px' }}>
                  Crafting Digital <br />
                  <span className="gradient-text">Experiences That Wow</span>
                </h1>
                <p className="lead text-secondary mb-5 fs-4" style={{ maxWidth: '600px' }}>
                  I am a MERN stack developer dedicated to building high-performance,
                  scalable, and visually stunning web applications.
                </p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-5">
                  <Button variant="primary" size="lg" className="rounded-pill shadow px-5 py-3">Explore Projects</Button>
                  <Button variant="outline-dark" size="lg" className="rounded-pill px-5 py-3">Let's Talk</Button>
                </div>

                <div className="d-flex align-items-center gap-4 justify-content-center justify-content-lg-start">
                  <div className="d-flex">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="rounded-circle border border-2 border-white ms-n3" style={{ width: '40px', height: '40px', overflow: 'hidden', marginLeft: i === 1 ? '0' : '-12px', zIndex: 10 - i }}>
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-100 h-100 object-fit-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="small text-secondary fw-medium">
                    Trusted by <span className="text-dark fw-bold">20+</span> clients worldwide
                  </div>
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

                <div className="img-container">
                  <div className="p-3 rounded-circle overflow-hidden bg-white shadow-2xl" style={{ width: '400px', height: '400px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                      alt="Profile"
                      className="w-100 h-100 object-fit-cover rounded-circle shadow-inner"
                    />
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        <div className="scroll-indicator d-none d-md-flex">
          <div className="mouse"></div>
          <span>Scroll Down</span>
        </div>
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
      <section id="skills">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">Technical Expertise</h2>
            <Row className="g-4">
              {SkillsData.map((skill, index) => (
                <Col md={6} lg={4} key={index}>
                  <div className="glass-card h-100 shadow-sm border-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="p-2 rounded bg-primary text-white me-3 shadow-sm">{skill.icon}</div>
                      <h4 className="mb-0 fw-bold" style={{ color: '#154259' }}>{skill.name}</h4>
                    </div>
                    <ProgressBar now={skill.level} variant="primary" style={{ height: '8px' }} className="bg-light" />
                    <div className="text-end mt-2 small text-secondary">{skill.level}% Proficiency</div>
                  </div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">Featured Projects</h2>
            <Row className="g-4">
              {projects.map((project, index) => (
                <Col md={6} lg={4} key={index}>
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                    <Card className="h-100 overflow-hidden border-0 shadow-sm bg-white" style={{ borderRadius: '1.5rem' }}>
                      <div style={{ height: '220px', overflow: 'hidden' }}>
                        <Card.Img variant="top" src={project.image} alt={project.title} style={{ transition: 'transform 0.5s ease' }} className="hover-zoom" />
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold mb-2" style={{ color: '#154259' }}>{project.title}</Card.Title>
                        <Card.Text className="text-secondary small mb-3">{project.description}</Card.Text>
                        <div className="mb-3 d-flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="badge bg-light text-primary border border-primary-subtle p-2">{t}</span>
                          ))}
                        </div>
                        <Button variant="outline-primary" size="sm" className="w-100 rounded-pill">View Details <ExternalLink size={14} /></Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">Get In Touch</h2>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="glass-card shadow-sm">
                  <Form>
                    <Form.Group className="mb-4">
                      <Form.Label className="text-secondary small fw-bold">FULL NAME</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" className="bg-light border-0 p-3 shadow-none rounded-3" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="text-secondary small fw-bold">EMAIL ADDRESS</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" className="bg-light border-0 p-3 shadow-none rounded-3" />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label className="text-secondary small fw-bold">YOUR MESSAGE</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Your message here..." className="bg-light border-0 p-3 shadow-none rounded-3" />
                    </Form.Group>
                    <Button variant="primary" className="w-100 py-3 rounded-pill fw-bold shadow-sm" type="submit">
                      Send Message <Mail size={18} className="ms-2" />
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
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
