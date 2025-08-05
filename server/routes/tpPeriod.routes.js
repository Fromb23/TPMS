import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createTpPeriod, getTpPeriod } from '../controllers/tpPeriod.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/', createTpPeriod);
router.get('/', getTpPeriod);

export default router;