import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { createZone, getAllZones, updateAZone, deleteZone } from '../controllers/zone.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', getAllZones);
router.post('/', createZone);
router.put('/:id', updateAZone);
router.delete('/:id', deleteZone);

export default router;