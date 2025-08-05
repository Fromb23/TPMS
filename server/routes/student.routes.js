import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { fetchStudents, updateStudentStatusById, fetchStudentById, confirmStudentWelcome, getStudentsByZone } from '../controllers/student.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', fetchStudents);
router.get('/zone', getStudentsByZone);
router.get('/:studentId', fetchStudentById);
router.put('/:id/status', updateStudentStatusById);
router.post('/confirmWelcome', confirmStudentWelcome);

export default router;