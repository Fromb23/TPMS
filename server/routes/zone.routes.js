import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createZone, getAllZones, updateAZone } from '../controllers/zone.controller.js';

const router = express.Router();

router.get('/', authMiddleware, getAllZones);
router.post('/', authMiddleware, createZone);
router.put('/:id', authMiddleware, updateAZone);

export default router;