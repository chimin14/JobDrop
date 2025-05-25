const { Schema, model, Types } = require('mongoose');

const fileUploadSchema = new Schema(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    url:  { type: String, required: true },
    key:  { type: String },    // cloudinary public_id or S3 object key
    type: { type: String, enum: ['profile', 'doc'], required: true }
  },
  { timestamps: true }
);

module.exports = model('FileUpload', fileUploadSchema);
