import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { getLecturers,  getLecturerById, updateLecturerStatus } from '../controllers/lecturer.controller.js';

const router = express.Router();

router.get('/', authMiddleware, getLecturers);
router.get('/:lecturerId', authMiddleware, getLecturerById);
router.post('/:lecturerId', authMiddleware, updateLecturerStatus);

export default router;