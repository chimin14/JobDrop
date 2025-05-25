const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { z } = require('zod');
const messageCtr = require('../controllers/messageController');



const msgSchema = z.object({
  recipient: z.string().length(24),
  text: z.string().min(1),
  jobId: z.string().length(24).optional()
});

//console.log('validate is:', typeof validate);
//console.log('auth is:', typeof auth);
//console.log('validate(msgSchema):', typeof validate(msgSchema));

router.post('/', auth, validate(msgSchema), messageCtr.sendMessage);
router.get('/:userId', auth, messageCtr.getConversation);

module.exports = router;
