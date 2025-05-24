const multer = require('multer');
const path = require('path');
const cloudinary = process.env.CLOUDINARY_URL ? require('../config/cloudinary') : null;
const FileUpload = require('../models/FileUpload');

const local = multer.diskStorage({
  destination: (_, __, cb) => cb(null, 'uploads/'),
  filename: (_, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: local });

module.exports.uploadMiddleware = upload.single('file');

async function storeFile(user, type, file) {
  if (cloudinary) {
    const res = await cloudinary.uploader.upload(file.path, {
      folder: 'jobdrop',
      resource_type: 'auto'
    });
    return FileUpload.create({ user, type, url: res.secure_url, key: res.public_id });
  }
  return FileUpload.create({ user, type, url: `/uploads/${file.filename}` });
}

module.exports.uploadProfilePic = async (req, res) => {
  const record = await storeFile(req.user._id, 'profile', req.file);
  res.status(201).json(record);
};

module.exports.uploadDocument = async (req, res) => {
  const record = await storeFile(req.user._id, 'doc', req.file);
  res.status(201).json(record);
};
