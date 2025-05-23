const Review = require('../models/Review');

exports.submitReview = async (req, res) => {
  const review = await Review.create({
    ...req.body,
    rater: req.user._id
  });
  res.status(201).json(review);
};

exports.getUserReviews = async (req, res) => {
  const { userId } = req.params;
  const reviews = await Review.find({ ratee: userId }).sort({ createdAt: -1 });
  const [stat] = await Review.avgForUser(userId);
  res.json({ avg: stat?.avg ?? 0, count: stat?.count ?? 0, reviews });
};
