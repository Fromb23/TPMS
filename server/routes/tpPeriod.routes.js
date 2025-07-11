import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createTpPeriod, getTpPeriod } from '../controllers/tpPeriod.controller.js';

const router = express.Router();

router.post('/', authMiddleware, createTpPeriod);
router.get('/', authMiddleware, getTpPeriod);

export default router;