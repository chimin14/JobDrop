const Notification = require('../models/Notification');

exports.list = async (req, res) => {
  const items = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(items);
};

exports.markRead = async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { read: true });
  res.sendStatus(204);
};
