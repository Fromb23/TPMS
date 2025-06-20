import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { fetchStudents, updateStudentStatusById, fetchStudentById } from '../controllers/student.controller.js';

const router = express.Router();

router.get('/', authMiddleware, fetchStudents);
router.get('/:studentId', authMiddleware, fetchStudentById);
router.put('/:id/status', authMiddleware, updateStudentStatusById);

export default router;