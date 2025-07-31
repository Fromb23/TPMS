import express from 'express';
import { register, login, verifyEmail, resetPassword, confirmHasAgreedTerms } from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import { getCurrentPhase } from '../controllers/tpPhase.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-email', verifyEmail);


router.use(authMiddleware);
router.post('/reset-password', resetPassword);
router.post('/tp-guidelines/confirm', confirmHasAgreedTerms);
router.get('/tpPhase/:userId', getCurrentPhase);

router.get('/me', (req, res) => {
  res.json({ message: "You are authenticated", user: req.user });
});

export default router;
