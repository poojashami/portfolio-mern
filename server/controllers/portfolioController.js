const Experience = require('../models/Experience');
const Education = require('../models/Education');
const Skill = require('../models/Skill');

// Seeder function for all portfolio data
exports.seedPortfolio = async () => {
    try {
        // Seed Experience
        const expCount = await Experience.countDocuments();
        if (expCount === 0) {
            const expData = [
                {
                    company: 'IndiCorp IT Solutions Pvt. Ltd.',
                    role: 'Software Developer',
                    duration: '01/2024 – present',
                    location: 'Noida, India',
                    order: 1
                },
                {
                    company: 'BlueZone Online Marketing Solution Pvt. Ltd.',
                    role: 'Front-End Developer',
                    duration: '08/2023 – 11/2023',
                    location: 'Bengaluru, India',
                    order: 2
                },
                {
                    company: 'Mityung Infotech Pvt. Ltd.',
                    role: 'Associate Software Engineer',
                    duration: '02/2022 – 06/2023',
                    location: 'Noida, India',
                    order: 3
                }
            ];
            await Experience.insertMany(expData);
            console.log('Experience data seeded');
        }

        // Seed Education
        const eduCount = await Education.countDocuments();
        if (eduCount === 0) {
            const eduData = [
                {
                    school: 'Kamala Nehru Institute of Technology, Sultanpur',
                    degree: 'Master of Computer Applications (2020)',
                    order: 1
                },
                {
                    school: 'Dharam Samaj College, Dr. BR Ambedkar University',
                    degree: 'Bachelor of Computer Applications (2017)',
                    order: 2
                },
                {
                    school: 'VV Girls Inter College, Aligarh, UP Board',
                    degree: 'Intermediate & High School (2011-2013)',
                    order: 3
                }
            ];
            await Education.insertMany(eduData);
            console.log('Education data seeded');
        }

        // Seed Skills
        const skillCount = await Skill.countDocuments();
        if (skillCount === 0) {
            const skillData = [
                { name: 'React', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', order: 1 },
                { name: 'Next.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', order: 2 },
                { name: 'Node.js', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', order: 3 },
                { name: 'PHP Laravel', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', subtext: 'Module Based', order: 4 },
                { name: 'MongoDB', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', order: 5 },
                { name: 'JavaScript', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', order: 6 },
                { name: 'Redux', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', order: 7 }
            ];
            await Skill.insertMany(skillData);
            console.log('Skills data seeded');
        }
    } catch (err) {
        console.error('Error seeding portfolio data:', err);
    }
};

// Controllers for fetching data
exports.getExperience = async (req, res) => {
    try {
        const data = await Experience.find().sort({ order: 1 });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching experience' });
    }
};

exports.getEducation = async (req, res) => {
    try {
        const data = await Education.find().sort({ order: 1 });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching education' });
    }
};

exports.getSkills = async (req, res) => {
    try {
        const data = await Skill.find().sort({ order: 1 });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching skills' });
    }
};
