import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { fetchStudents } from '../controllers/student.controller.js';

const router = express.Router();

router.get('/', authMiddleware, fetchStudents);

export default router;