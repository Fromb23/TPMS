import express from 'express';
import { register, login, verifyEmail, resetPassword, confirmHasAgreedTerms } from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-email', verifyEmail);
router.post('/reset-password', authMiddleware, resetPassword);
router.post('/tp-guidelines/confirm', authMiddleware, confirmHasAgreedTerms);

router.get('/me', authMiddleware, (req, res) => {
  res.json({ message: "You are authenticated", user: req.user });
});

export default router;
