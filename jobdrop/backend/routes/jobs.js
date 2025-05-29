// routes/jobs.js
const express = require('express');
const Job = require('../models/JobPosting');
const auth = require('../middleware/auth');
const router = express.Router();

// Get jobs posted by the current user
router.get('/my-posted', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ poster: req.user.id })
      .populate('poster', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching posted jobs:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get jobs the current user has applied to
router.get('/my-applications', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ applicants: req.user.id })
      .populate('poster', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Apply to a job
router.post('/:jobId/apply', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if user is trying to apply to their own job
    if (job.poster.toString() === req.user.id) {
      return res.status(400).json({ message: 'You cannot apply to your own job' });
    }

    // Check if user has already applied
    if (job.applicants.includes(req.user.id)) {
      return res.status(400).json({ message: 'You have already applied to this job' });
    }

    // Add user to applicants
    job.applicants.push(req.user.id);
    job.updatedAt = new Date();
    await job.save();

    res.json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error applying to job:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all jobs (for browsing)
router.get('/', async (req, res) => {
  try {
    const { category, location, search } = req.query;
    let query = { status: 'active' };

    // Add filters
    if (category) query.Category = category;
    if (location) query.Location = new RegExp(location, 'i');
    if (search) {
      query.$or = [
        { JobTitle: new RegExp(search, 'i') },
        { Description: new RegExp(search, 'i') }
      ];
    }

    const jobs = await Job.find(query)
      .populate('poster', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new job
router.post('/', auth, async (req, res) => {
  try {
    const {
      JobTitle,
      Description,
      Location,
      Category,
      Pay,
      Time,
      WorkFromLocation,
      notes
    } = req.body;

    if (!JobTitle || !Description || !Location) {
      return res.status(400).json({ message: 'Job title, description, and location are required' });
    }

    const newJob = new Job({
      JobTitle,
      Description,
      Location,
      Category,
      Pay,
      Time,
      WorkFromLocation,
      notes,
      poster: req.user.id
    });

    await newJob.save();
    
    const populatedJob = await Job.findById(newJob._id).populate('poster', 'name email');
    res.status(201).json(populatedJob);
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a job (only by poster)
router.put('/:jobId', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if user is the poster
    if (job.poster.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You can only edit your own job postings' });
    }

    const {
      JobTitle,
      Description,
      Location,
      Category,
      Pay,
      Time,
      WorkFromLocation,
      notes,
      status
    } = req.body;

    // Update fields
    if (JobTitle) job.JobTitle = JobTitle;
    if (Description) job.Description = Description;
    if (Location) job.Location = Location;
    if (Category) job.Category = Category;
    if (Pay !== undefined) job.Pay = Pay;
    if (Time) job.Time = Time;
    if (WorkFromLocation) job.WorkFromLocation = WorkFromLocation;
    if (notes !== undefined) job.notes = notes;
    if (status) job.status = status;
    job.updatedAt = new Date();

    await job.save();
    
    const updatedJob = await Job.findById(job._id).populate('poster', 'name email');
    res.json(updatedJob);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a job (only by poster)
router.delete('/:jobId', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if user is the poster
    if (job.poster.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You can only delete your own job postings' });
    }

    await Job.findByIdAndDelete(req.params.jobId);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get applicants for a job (only by poster)
router.get('/:jobId/applicants', auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId)
      .populate('applicants', 'name email phone bio location')
      .populate('poster', 'name email');
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    // Check if user is the poster
    if (job.poster._id.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You can only view applicants for your own job postings' });
    }

    res.json({
      job: {
        _id: job._id,
        JobTitle: job.JobTitle,
        Description: job.Description,
        Location: job.Location
      },
      applicants: job.applicants
    });
  } catch (error) {
    console.error('Error fetching applicants:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;