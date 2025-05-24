const mongoose = require('mongoose');

const JobPostingSchema = new mongoose.Schema({
  PostingID: { type: String, required: true, unique: true },
  Pay: { type: Number },
  JobTitle: { type: String },
  Description: { type: String, required: true },
  Time: { type: String },
  Location: { type: String, required: true },
  WorkFromLocation: { type: String, required: true },
  Category: { type: String, required: true }
});

module.exports = mongoose.model('JobPosting', JobPostingSchema);
