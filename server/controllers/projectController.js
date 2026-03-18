const Project = require('../models/Project');

// Create multiple seed projects if none exist
exports.seedProjects = async () => {
    try {
        // Forcefully clear old template projects and insert user's actual resume projects
        await Project.deleteMany({});
        
        // Seed the initial set
        const seedData = [
            {
                title: 'Flowt360',
                description: 'Admin Panel with dynamic forms and multi-role UI for Users and Vendors.',
                tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI'],
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Company Project'
            },
            {
                title: 'OTT Platform',
                description: 'Responsive UI for OTT content with reusable video player and search components.',
                tech: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS'],
                image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Company Project'
            },
            {
                title: 'ShipTotal',
                description: 'Logistics/shipping dashboard with NDR Management and Delivery Tracking modules.',
                tech: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery'],
                image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Company Project'
            },
            {
                title: 'Richkardz',
                description: 'Digital smart business card platform with CRUD and API-based file handling.',
                tech: ['Next.js', 'React.js', 'JavaScript', 'Axios'],
                image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Company Project'
            },
            {
                title: 'Parakaram',
                description: 'Admin dashboard for team hiring with role-based UI and custom permissions.',
                tech: ['React.js', 'PrimeReact', 'CoreUI', 'Axios'],
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Company Project'
            },
            {
                title: 'Medzinc',
                description: 'Healthcare web platform for managing medical records and patient/doctor data.',
                tech: ['React.js', 'PrimeReact', 'CoreUI', 'CSS3'],
                image: 'https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Company Project'
            },
            {
                title: 'Leave Management System',
                description: 'A comprehensive system for employee leave requests, approvals, and balance tracking.',
                tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
                image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Self Project'
            },
            {
                title: 'Interactive World Map',
                description: 'Dynamic world map with data visualization and location-based insights.',
                tech: ['React.js', 'D3.js', 'SVG', 'JavaScript'],
                image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop',
                link: '#',
                category: 'Self Project'
            }
        ];
        await Project.insertMany(seedData);
        console.log('Database seeded with projects');
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
