const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tech: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: "#"
    },
    category: {
        type: String,
        required: true,
        enum: ['Company Project', 'Self Project'],
        default: 'Company Project'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', ProjectSchema);
