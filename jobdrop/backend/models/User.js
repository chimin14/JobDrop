const mongoose = require('mongoose');

const nameSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: nameSchema, required: true }
}, { timestamps: true });

userSchema.virtual('userID').get(function () {
  return this._id.toHexString();
});

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
