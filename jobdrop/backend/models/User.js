const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['seeker', 'provider'],
    required: true,
  },
  name: String,
  bio: String,
  companyName: String,
  avatar: String,
}, { timestamps: true });
module.exports = mongoose.model('User', userSchema);