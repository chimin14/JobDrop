const express = require('express');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Welcome to your profile!', user: req.user });
});

router.get('/seeker-area', auth, requireRole('seeker'), (req, res) => {
  res.json({ message: 'Hello, Job Seeker!' });
});

router.get('/provider-area', auth, requireRole('provider'), (req, res) => {
  res.json({ message: 'Hello, Job Provider!' });
});

module.exports = router;