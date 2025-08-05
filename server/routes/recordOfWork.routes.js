import express from 'express';
import authMiddleware  from '../middleware/auth.middleware.js';
import { submitRecordOfWork, getRecordOfWorkStatusToday } from '../controllers/recordOfWork.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/create', submitRecordOfWork);
router.get('/check-today', getRecordOfWorkStatusToday);

export default router;