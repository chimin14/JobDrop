const { Schema, model, Types } = require('mongoose');

const notificationSchema = new Schema(
  {
    user:   { type: Types.ObjectId, ref: 'User', required: true },
    type:   { type: String, enum: ['message', 'job', 'system'], required: true },
    payload:{ type: Schema.Types.Mixed },   // flexible data (jobId, msgId, etc.)
    read:   { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = model('Notification', notificationSchema);
