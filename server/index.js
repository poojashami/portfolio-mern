const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load routes & controllers
const projectRoutes = require('./routes/projectRoutes');
const { seedProjects } = require('./controllers/projectController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/projects', projectRoutes);

// Basic Route
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-mern';

mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('MongoDB connected successfully');

        // Seed initial data
        await seedProjects();

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        // Fallback for demo: Still start the server even if DB fails
        console.log('Starting server in fallback mode...');
        app.listen(PORT, () => console.log(`Server running on port ${PORT} (DB Offline)`));
    });
