const multer = require('multer');
const path = require('path');

// Configure multer storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // directory where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // unique filename with original extension
  }
});

const upload = multer({ storage });

// Middleware to handle single file upload with field name 'file'
const uploadMiddleware = upload.single('file');

// Controller to handle profile picture upload
const uploadProfilePic = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ message: 'Profile picture uploaded successfully', filename: req.file.filename });
};

// Controller to handle document upload
const uploadDocument = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ message: 'Document uploaded successfully', filename: req.file.filename });
};

module.exports = {
  uploadMiddleware,
  uploadProfilePic,
  uploadDocument
};
