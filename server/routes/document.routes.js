import express from 'express';
import multer from 'multer';
import authMiddleware from '../middleware/auth.middleware.js';
import { createDocument, getDocumentStatusByUserId, updateDocumentStatus, submitFinalTPDocument } from '../controllers/document.controller.js';


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  '/create/school-documents',
  authMiddleware,
  upload.array('files'),
  createDocument
);

router.get('/status/:userId', authMiddleware, getDocumentStatusByUserId);
router.patch('/:documentId/status', authMiddleware, updateDocumentStatus);
router.post('/final-tp', authMiddleware, upload.single('file'), submitFinalTPDocument);

export default router;
