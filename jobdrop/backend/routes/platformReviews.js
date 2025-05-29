// routes/platformReviews.js
const express = require('express');
const router = express.Router();
const PlatformReview = require('../models/PlatformReview');

// Get all approved platform reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await PlatformReview.find({ approved: true })
      .sort({ createdAt: -1 })
      .select('-email'); // Don't expose emails publicly
    
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching platform reviews:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit a new platform review
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, comment } = req.body;

    // Validation
    if (!name || !email || !rating || !comment) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    if (comment.length < 10) {
      return res.status(400).json({ message: 'Comment must be at least 10 characters long' });
    }

    // Check if email already submitted a review
    const existingReview = await PlatformReview.findOne({ email });
    if (existingReview) {
      return res.status(400).json({ message: 'You have already submitted a review for JobDrop' });
    }

    // Create new review
    const review = new PlatformReview({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      rating: parseInt(rating),
      comment: comment.trim()
    });

    await review.save();

    // Return review without email
    const { email: _, ...reviewResponse } = review.toObject();
    res.status(201).json(reviewResponse);
  } catch (error) {
    console.error('Error submitting platform review:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({ message: 'You have already submitted a review for JobDrop' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;