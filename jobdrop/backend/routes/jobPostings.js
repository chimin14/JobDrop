const express = require('express');
const router = express.Router();
const JobPosting = require('../models/JobPosting');

// CREATE 
router.post('/', async (req, res) => {
  try {
    const job = new JobPosting(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all job postings 
router.get('/', async (req, res) => {
  try {
    const jobs = await JobPosting.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
