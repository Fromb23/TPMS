// auth.routes.js
import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/me', authMiddleware, (req, res) => {
  res.json({ message: "You are authenticated", user: req.user });
});

export default router;
