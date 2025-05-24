const router = require('express').Router();
const auth = require('../middleware/auth');
const notificationCtr = require('../controllers/notificationController');

router.get('/', auth, notificationCtr.list);
router.patch('/:id/read', auth, notificationCtr.markRead);

module.exports = router;
