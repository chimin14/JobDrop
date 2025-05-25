const express = require('express');
const router = express.Router();
const User = require('../models/user');

// CREATE
router.post('/', async (req, res) => {
  try {
    const { fname, lname } = req.body;
    const user = new User({ name: { fname, lname } });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ by Name (Fname & Optional Lname)
router.get('/', async (req, res) => {
  const { fname, lname } = req.query;

  const query = { 'name.fname': fname };
  if (lname) query['name.lname'] = lname;

  try {
    const users = await User.find(query);
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE by ID
router.put('/:id', async (req, res) => {
  try {
    const { fname, lname } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name: { fname, lname } },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE by ID
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
