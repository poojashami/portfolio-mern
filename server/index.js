const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load routes & controllers
const projectRoutes = require('./routes/projectRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const { seedProjects } = require('./controllers/projectController');
const { seedPortfolio } = require('./controllers/portfolioController');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/portfolio', portfolioRoutes);

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
        await seedPortfolio();

        if (process.env.NODE_ENV !== 'production') {
            app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        }
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        if (process.env.NODE_ENV !== 'production') {
            app.listen(PORT, () => console.log(`Server running on port ${PORT} (DB Offline)`));
        }
    });

module.exports = app;
