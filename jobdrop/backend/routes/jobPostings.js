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

// READ ALL
router.get('/', async (req, res) => {
  try {
    const jobs = await JobPosting.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const job = await JobPosting.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Not found' });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const job = await JobPosting.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: 'Not found' });
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const result = await JobPosting.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
