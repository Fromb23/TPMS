import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { fetchStudents, updateStudentStatusById, fetchStudentById, confirmStudentWelcome, getStudentsByZone } from '../controllers/student.controller.js';

const router = express.Router();

router.get('/', authMiddleware, fetchStudents);
router.get('/zone', authMiddleware, getStudentsByZone);
router.get('/:studentId', authMiddleware, fetchStudentById);
router.put('/:id/status', authMiddleware, updateStudentStatusById);
router.post('/confirmWelcome', authMiddleware, confirmStudentWelcome);

export default router;