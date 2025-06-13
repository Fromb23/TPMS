import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { getSchoolDataByStudentId } from '../controllers/school.controller.js';

const router = express.Router();


router.get('/:userId', authMiddleware, getSchoolDataByStudentId);

export default router;