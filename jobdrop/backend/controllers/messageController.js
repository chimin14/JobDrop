const Message = require('../models/Message');
const Notification = require('../models/Notification');
const socket = require('../services/socketService');
const messageCtr = require('../controllers/messageController');

//console.log('messageCtr:', messageCtr);

exports.sendMessage = async (req, res) => {
  const { recipient, text, jobId } = req.body;
  const msg = await Message.create({
    sender: req.user._id,
    recipient,
    text,
    jobId
  });

  // real-time push
  socket.emitTo(recipient, 'message', msg);

  // notification
  await Notification.create({
    user: recipient,
    type: 'message',
    payload: { messageId: msg._id }
  });

  res.status(201).json(msg);
};

exports.getConversation = async (req, res) => {
  const { userId } = req.params;
  const convo = await Message.find({
    $or: [
      { sender: req.user._id, recipient: userId },
      { sender: userId, recipient: req.user._id }
    ]
  }).sort({ createdAt: 1 });
  res.json(convo);
};
