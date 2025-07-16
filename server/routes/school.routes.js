import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { getSchoolDataByStudentId, createSchool, fetchAllSchools } from '../controllers/school.controller.js';

const router = express.Router();

router.get('/', authMiddleware, fetchAllSchools);
router.post('/', authMiddleware, createSchool);
router.get('/:userId', authMiddleware, getSchoolDataByStudentId);

export default router;