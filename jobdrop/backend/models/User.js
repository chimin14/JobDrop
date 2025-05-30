const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Use existing model if it already exists
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
