// models/PlatformReview.js
const mongoose = require('mongoose');

const PlatformReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true,
    trim: true
  },
  approved: {
    type: Boolean,
    default: true // Auto-approve for now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Prevent duplicate reviews from same email
PlatformReviewSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.models.PlatformReview || mongoose.model('PlatformReview', PlatformReviewSchema);