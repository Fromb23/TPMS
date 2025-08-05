import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { assignLecturerToZone } from '../controllers/lectureZone.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.post('/create', assignLecturerToZone);
// router.get('/all', getAllLecturersInZone);
// router.put('/update/:id', updateLecturerInZone);
// router.delete('/delete/:id', deleteLecturerFromZone);

export default router;