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

module.exports = router;


