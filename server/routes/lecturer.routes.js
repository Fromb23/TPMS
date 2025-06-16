import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { getLecturers } from '../controllers/lecturer.controller.js';

const router = express.Router();

router.get('/', authMiddleware, getLecturers);

export default router;