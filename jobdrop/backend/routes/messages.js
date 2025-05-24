const router = require('express').Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { z } = require('zod');
const messageCtr = require('../controllers/messageController');

const msgSchema = z.object({
  recipient: z.string().length(24),
  text: z.string().min(1),
  jobId: z.string().length(24).optional()
});

router.post('/', auth, validate(msgSchema), messageCtr.sendMessage);
router.get('/:userId', auth, messageCtr.getConversation);

module.exports = router;
