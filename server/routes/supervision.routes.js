import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createSupervisionSchedule, getSupervisionScheduleByStudent } from '../controllers/supervision.controller.js';

const router = express.Router();

router.post('/', authMiddleware, createSupervisionSchedule);
router.get('/:studentUserId', authMiddleware, getSupervisionScheduleByStudent);

export default router;