import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createSupervisionSchedule, getSupervisionScheduleByStudent, confirmStudentSupervision } from '../controllers/supervision.controller.js';

const router = express.Router();

router.post('/', authMiddleware, createSupervisionSchedule);
router.get('/:studentUserId', authMiddleware, getSupervisionScheduleByStudent);
router.patch('/:supervisionId/confirm', authMiddleware, confirmStudentSupervision);

export default router;