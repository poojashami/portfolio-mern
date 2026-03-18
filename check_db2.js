const mongoose = require('mongoose');
const Project = require('./server/models/Project');
require('dotenv').config({ path: './server/.env' });

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-mern';

mongoose.connect(MONGO_URI)
  .then(async () => {
    const projects = await Project.find();
    console.log(`Found ${projects.length} projects in DB`);
    console.log(JSON.stringify(projects, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
