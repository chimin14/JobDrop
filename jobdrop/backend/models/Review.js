const { Schema, model, Types } = require('mongoose');

const reviewSchema = new Schema(
  {
    rater:  { type: Types.ObjectId, ref: 'User', required: true },
    ratee:  { type: Types.ObjectId, ref: 'User', required: true },
    jobId:  { type: Types.ObjectId, ref: 'Job', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment:{ type: String }
  },
  { timestamps: true }
);

reviewSchema.statics.avgForUser = function (userId) {
  return this.aggregate([
    { $match: { ratee: Types.ObjectId(userId) } },
    { $group: { _id: '$ratee', avg: { $avg: '$rating' }, count: { $sum: 1 } } }
  ]);
};

module.exports = model('Review', reviewSchema);
