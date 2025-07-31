import { PrismaClient } from "@prisma/client";
import { BadRequestError, ForbiddenError } from '../utils/errors.js';
import * as documentService from '../services/document.service.js';
import catchAsync from '../utils/catchAsync.js';
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createDocument = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const files = req.files;
  const schoolData = JSON.parse(req.body.schoolData);

  if (!files || files.length === 0) {
    throw new BadRequestError('No files provided.');
  }

  const uploadDir = documentService.ensureUploadDirectory();

  documentService.saveFilesToDisk(files, uploadDir);

  const student = await documentService.findStudentByUserId(userId);
  if (!student) {
    throw new ForbiddenError('Only students can upload documents.');
  }

  const school = await documentService.upsertSchool(schoolData);

  await documentService.updateStudent(student.id, school.id, schoolData.subjectCombination);

  await documentService.createDocuments(files, student.id, school.id);

  res.status(201).json({ message: 'Documents uploaded successfully' });
});


export const getDocumentStatusByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;

    const student = await prisma.student.findFirst({
      where: { userId },
      include: {
        documents: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!student) {
      return res.status(404).json({ error: 'Student not found.' });
    }

    const latestDocument = student.documents[0];

    const documentStatus = latestDocument ? latestDocument.status : null;

    return res.status(200).json({ status: documentStatus });
  } catch (err) {
    console.error('Error fetching document status:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getFinalDocumentStatus = async (req, res) => {
  try {
    const userId = req.params.userId;
    const student = await prisma.student.findFirst({
      where: { userId },
      include: {
        finalDocument: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });
    if (!student) {
      return res.status(404).json({ error: 'Student not found.' });
    }
    const latestFinalDocument = student.finalDocument[0];
    const finalDocumentStatus = latestFinalDocument ? latestFinalDocument.status : null;
    return res.status(200).json({ status: finalDocumentStatus });
  } catch (err) {
    console.error('Error fetching final document status:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateDocumentStatus = async (req, res) => {
  const { status } = req.body;
  const documentId = req.params.documentId;

  if (!documentId || !status) {
    return res.status(400).json({ error: 'Document ID and status are required.' });
  }

  if (!['APPROVED', 'REJECTED'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value.' });
  }

  try {
    const document = await prisma.document.findUnique({
      where: { id: documentId },
      include: { school: true }
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found.' });
    }

    if (!document.school) {
      return res.status(403).json({ error: 'This student is not linked to any school or the school has been deleted.' });
    }

    if (!document.school || document.school.approved === false) {
      return res.status(403).json({ error: 'School must be approved before updating document status.' });
    }

    // handle REJECTED logic
    if (status === 'REJECTED') {
      const filePath = path.join('public', document.url);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      await prisma.document.update({
        where: { id: documentId },
        data: { status: 'REJECTED'},
      });

      return res.status(200).json({ message: 'Document rejected and file deleted.' });
    }

    // handle APPROVED logic
    const updated = await prisma.document.update({
      where: { id: documentId },
      data: { status: 'APPROVED' },
    });

    return res.status(200).json(updated);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update document status.' });
  }
};

export const submitFinalTPDocument = async (req, res) => {

  try {
    const userId = req.user.userId;
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }

    if (!req.file) {
      console.error("No file provided in request:", req.file);
      return res.status(400).json({ error: 'File is required.' });
    }

    const uploadDir = path.join(__dirname, '..', 'public', 'uploads', 'final_tp');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uploadedFile = req.file;
    const fileName = `${Date.now()}-${uploadedFile.originalname}`;
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, uploadedFile.buffer);

    const student = await prisma.student.findFirst({ where: { userId } });
    if (!student) {
      return res.status(403).json({ error: 'Only students can submit final documents.' });
    }

    const document = await prisma.finalDocument.create({
      data: {
        title,
        content,
        fileUrl: fileName,
        student: { connect: { id: student.id } },
      },
    });

    return res.status(201).json(document);
  } catch (error) {
    console.error("Error submitting final TP document:", error);
    return res.status(500).json({ error: 'Failed to submit final TP document.' });
  }
};

export const updateFinalDocumentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const documentId = req.params.documentId;

    if (!documentId || !status) {
      return res.status(400).json({ error: 'Document ID and status are required.' });
    }

    if (!['APPROVED', 'REJECTED'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value.' });
    }

    const updatedDocument = await prisma.finalDocument.update({
      where: { id: documentId },
      data: { status },
    });

    return res.status(200).json(updatedDocument);
  } catch (error) {
    console.error("Error updating final document status:", error);
    return res.status(500).json({ error: 'Failed to update final document status.' });
  }
};