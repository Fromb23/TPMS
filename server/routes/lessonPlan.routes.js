import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createStudentLessonPlan, getLessonPlanStatusToday } from '../controllers/lessonPlan.controller.js';

const router = express.Router();

router.post('/create', authMiddleware, createStudentLessonPlan);
router.get('/check-today', authMiddleware, getLessonPlanStatusToday);

export default router;