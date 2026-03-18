const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    school: { type: String, required: true },
    degree: { type: String, required: true },
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Education', EducationSchema);
