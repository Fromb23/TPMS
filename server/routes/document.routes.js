import express from 'express';
import multer from 'multer';
import authMiddleware from '../middleware/auth.middleware.js';
import { createDocument, getDocumentStatusByUserId, updateDocumentStatus, submitFinalTPDocument, updateFinalDocumentStatus, getFinalDocumentStatus } from '../controllers/document.controller.js';


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.use(authMiddleware);
router.post(
  '/create/school-documents',
  upload.array('files'),
  createDocument
);

router.get('/status/:userId', getDocumentStatusByUserId);
router.patch('/:documentId/status', updateDocumentStatus);
router.patch('/:documentId/final-doc-update', updateFinalDocumentStatus);
router.post('/final-tp', upload.single('file'), submitFinalTPDocument);
router.get('/final-status/:userId', getFinalDocumentStatus);

export default router;
