const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  location: String,
  salary: String,
  skills: [String],
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  deadline: Date,
}, { timestamps: true });
module.exports = mongoose.model('Job', jobSchema);