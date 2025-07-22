import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { assignLecturerToZone } from '../controllers/lectureZone.controller.js';

const router = express.Router();

router.post('/create', authMiddleware, assignLecturerToZone);
// router.get('/all', authMiddleware, getAllLecturersInZone);
// router.put('/update/:id', authMiddleware, updateLecturerInZone);
// router.delete('/delete/:id', authMiddleware, deleteLecturerFromZone);

export default router;