const Review = require('../models/Review');
const Message = require('../models/Message');
const User = require('../models/User');

exports.deleteReview = (req, res) => Review.findByIdAndDelete(req.params.id).then(() => res.sendStatus(204));
exports.deleteMessage = (req, res) => Message.findByIdAndDelete(req.params.id).then(() => res.sendStatus(204));
exports.listUsers = (req, res) => User.find().select('-password').then((u) => res.json(u));
