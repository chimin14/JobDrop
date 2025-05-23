const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

router.get('/jobs', async (req, res) => {
  const { location, minSalary, maxSalary, skills, search } = req.query;
  const query = {};
  if (location) {
    query.location = new RegExp(location, 'i');
  }
  if (minSalary || maxSalary) {
    query.salary = {};
    if (minSalary) {
      query.salary.$gte = parseInt(minSalary);
    }
    if (maxSalary) {
      query.salary.$lte = parseInt(maxSalary);
    }
  }
  if (skills) {
    const skillArray = skills.split(',').map(s => s.trim());
    query.skills = { $all: skillArray };
  }
  if (search) {
    query.$or = [
      { title: new RegExp(search, 'i') },
      { description: new RegExp(search, 'i') }
    ];
  }
  try {
    const jobs = await Job.find(query).populate('postedBy', 'email companyName');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});
module.exports = router;