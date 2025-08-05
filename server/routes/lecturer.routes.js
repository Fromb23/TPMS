import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { getLecturers,  getLecturerById, updateLecturerStatus } from '../controllers/lecturer.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getLecturers);
router.get('/:lecturerId', getLecturerById);
router.post('/:lecturerId', updateLecturerStatus);

export default router;