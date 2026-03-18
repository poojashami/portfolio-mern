const express = require('express');
const router = express.Router();
const { getExperience, getEducation, getSkills } = require('../controllers/portfolioController');

router.get('/experience', getExperience);
router.get('/education', getEducation);
router.get('/skills', getSkills);

module.exports = router;
