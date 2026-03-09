const Project = require('../models/Project');

// Create multiple seed projects if none exist
exports.seedProjects = async () => {
    try {
        const count = await Project.countDocuments();
        if (count === 0) {
            const seedData = [
                {
                    title: 'E-commerce App',
                    description: 'A full-stack e-commerce platform using MERN',
                    tech: ['React', 'Node.js', 'MongoDB'],
                    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
                    link: '#'
                },
                {
                    title: 'Social Media Dashboard',
                    description: 'Interactive dashboard for managing social media',
                    tech: ['React', 'Chart.js', 'Firebase'],
                    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
                    link: '#'
                },
                {
                    title: 'Health Tracking Web App',
                    description: 'Real-time health monitoring and data visualization',
                    tech: ['React', 'Socket.io', 'PostgreSQL'],
                    image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=1000&auto=format&fit=crop',
                    link: '#'
                }
            ];
            await Project.insertMany(seedData);
            console.log('Database seeded with projects');
        }
    } catch (err) {
        console.error('Error seeding data:', err);
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching projects' });
    }
};

exports.createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const savedProject = await newProject.save();
        res.status(201).json(savedProject);
    } catch (err) {
        res.status(400).json({ message: 'Error creating project' });
    }
};
