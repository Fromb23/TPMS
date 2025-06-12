import express from 'express';
import multer from 'multer';
import authMiddleware from '../middleware/auth.middleware.js';
import { createDocument } from '../controllers/document.controller.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  '/create/school-documents',
  authMiddleware,
  upload.array('files'),
  createDocument
);

export default router;
