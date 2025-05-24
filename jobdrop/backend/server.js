require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));       // serve local files

// ---- ROUTES ----
app.use('/api/auth', require('./routes/auth'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/uploads', require('./routes/uploads'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/protected', require('./routes/protected'));
app.use('/api/jobPostings', require('./routes/jobPostings'));


// ---- DB & SERVER ----
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Successfully Connected'))
  .catch((e) => console.error('MongoDB Connection Error:', e));

// ---- SOCKET.IO ----
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http, { cors: { origin: '*' } });

require('./config/socket')(io);
require('./services/socketService').init(io);

// ---- START ----
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => console.log(`Server on ${PORT}`));
