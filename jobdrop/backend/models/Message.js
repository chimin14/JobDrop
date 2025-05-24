const { Schema, model, Types } = require('mongoose');

const messageSchema = new Schema(
  {
    sender:   { type: Types.ObjectId, ref: 'User', required: true },
    recipient:{ type: Types.ObjectId, ref: 'User', required: true },
    jobId:    { type: Types.ObjectId, ref: 'Job' },
    text:     { type: String, required: true },
  },
  { timestamps: true }
);

messageSchema.index({ sender: 1, recipient: 1, createdAt: -1 });

module.exports = model('Message', messageSchema);
