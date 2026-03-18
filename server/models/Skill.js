const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
    icon: { type: String, required: true },
    subtext: { type: String },
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Skill', SkillSchema);
