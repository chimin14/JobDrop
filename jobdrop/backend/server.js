const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Login, Register, Security Check and Job Routes
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const jobPostingsRoutes = require('./routes/jobPostings');

const app = express();
app.use(cors());
app.use(express.json());

// Check for Database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api', authRoutes);
app.use('/api', protectedRoutes);
app.use('/api/jobPostings', jobPostingsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});