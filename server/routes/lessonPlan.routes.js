import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createStudentLessonPlan, getLessonPlanStatusToday } from '../controllers/lessonPlan.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/create', createStudentLessonPlan);
router.get('/check-today', getLessonPlanStatusToday);

export default router;