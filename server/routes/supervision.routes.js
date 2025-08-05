import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createSupervisionSchedule, getSupervisionScheduleByStudent, confirmStudentSupervision, enableStudentSubmitFinalDocument } from '../controllers/supervision.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/', createSupervisionSchedule);
router.get('/:studentUserId', getSupervisionScheduleByStudent);
router.patch('/:supervisionId/confirm', confirmStudentSupervision);
router.patch('/:studentId/enable-final-docs', enableStudentSubmitFinalDocument);

export default router;