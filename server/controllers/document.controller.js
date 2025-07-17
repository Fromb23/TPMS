import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createDocument = async (req, res) => {
  try {
    const userId = req.user.userId;
    const typeMap = ['TP_APPLICATION', 'TP_TIMETABLE', 'TP_ASSESSMENT', 'TP_RECORDS'];

    const schoolData = JSON.parse(req.body.schoolData);
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files provided.' });
    }

    // Ensure uploads directory exists
    const uploadDir = path.join(__dirname, '..', 'public', 'uploads');

    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
      console.log("Created uploads directory at:", uploadDir);
    } else {
      console.log("Uploads directory exists:", uploadDir);
    }

    // Save files to disk
    files.forEach((file) => {
      const uploadPath = path.join(uploadDir, file.originalname);
      fs.writeFileSync(uploadPath, file.buffer);
    });

    // Find the student
    const student = await prisma.student.findFirst({
      where: { userId: userId }
    });

    if (!student) {
      return res.status(403).json({ error: 'Only students can upload documents.' });
    }

    // Create school
    const school = await prisma.school.upsert({
      where: { name: schoolData.name },
      update: {},
      create: {
        name: schoolData.name,
        address: schoolData.address,
        contact: schoolData.contact,
        county: schoolData.county,
        constituency: schoolData.constituency,
        subjectCombination: schoolData.subjectCombination,
      }
    });

    // Update student
    await prisma.student.update({
      where: { id: student.id },
      data: {
        schoolId: school.id,
        subjectCombination: schoolData.subjectCombination
      }
    });

    for (const file of files) {
      await prisma.document.create({
        data: {
          name: file.originalname,
          type: typeMap[file.fieldname] || 'TP_APPLICATION',
          url: `${file.originalname}`,
          student: {
            connect: { id: student.id },
          },
          school: {
            connect: { id: school.id },
          },
        },
      });
    }

    return res.status(201).json({ message: 'Documents uploaded successfully' });

  } catch (err) {
    console.error('Error uploading documents:', err);
    res.status(500).json({ error: 'Server error' });
  }
};


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