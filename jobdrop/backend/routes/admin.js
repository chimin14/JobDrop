const router = require('express').Router();
const auth = require('../middleware/auth');
const requireRole = require('../middleware/requireRole');
const adminCtr = require('../controllers/adminController');

router.use(auth, requireRole('admin'));

router.delete('/reviews/:id', adminCtr.deleteReview);
router.delete('/messages/:id', adminCtr.deleteMessage);
router.get('/users', adminCtr.listUsers);

module.exports = router;
