const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const uploadCtr = require('../controllers/uploadController');

router.post('/profile', auth, uploadCtr.uploadMiddleware, uploadCtr.uploadProfilePic);
router.post('/docs', auth, uploadCtr.uploadMiddleware, uploadCtr.uploadDocument);

module.exports = router;
