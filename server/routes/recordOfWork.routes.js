import express from 'express';
import authMiddleware  from '../middleware/auth.middleware.js';
import { submitRecordOfWork, getRecordOfWorkStatusToday } from '../controllers/recordOfWork.controller.js';

const router = express.Router();

router.post('/create', authMiddleware, submitRecordOfWork);
router.get('/check-today', authMiddleware, getRecordOfWorkStatusToday);

export default router;