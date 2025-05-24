const router = require('express').Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { z } = require('zod');
const reviewCtr = require('../controllers/reviewController');

const reviewSchema = z.object({
  ratee: z.string().length(24),
  jobId: z.string().length(24),
  rating: z.number().int().min(1).max(5),
  comment: z.string().optional()
});

router.post('/', auth, validate(reviewSchema), reviewCtr.submitReview);
router.get('/:userId', reviewCtr.getUserReviews);

module.exports = router;
