import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();

export const createDocument = async (req, res) => {
  try {
    const userId = req.user.userId;
    console.log('User ID from request:', userId);

    // Parse schoolData (sent as JSON string via FormData)
    const schoolData = JSON.parse(req.body.schoolData);
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files provided.' });
    }

    // Ensure uploads directory exists
    const uploadDir = path.join('uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    // Save files to disk
    files.forEach((file) => {
      const uploadPath = path.join(uploadDir, file.originalname);
      fs.writeFileSync(uploadPath, file.buffer); // multer gives you the buffer directly
    });

    // Find the student
    const student = await prisma.student.findFirst({
      where: { userId: userId }
    });

    if (!student) {
      return res.status(403).json({ error: 'Only students can upload documents.' });
    }

    // Find or create zone
    let zone = await prisma.zone.findUnique({
      where: { name: schoolData.county }
    });

    if (!zone) {
      zone = await prisma.zone.create({
        data: { name: schoolData.county }
      });
    }

    // Create school
    const newSchool = await prisma.school.create({
      data: {
        name: schoolData.name,
        address: schoolData.address,
        contact: schoolData.contact,
        county: schoolData.county,
        subjectCombination: schoolData.subjectCombination,
        zone: {
          connect: { id: zone.id }
        }
      }
    });

    // Update student
    await prisma.student.update({
      where: { id: student.id },
      data: {
        schoolId: newSchool.id,
        subjectCombination: schoolData.subjectCombination
      }
    });

    // Save document records in DB
    for (const file of files) {
      await prisma.document.create({
        data: {
          name: file.originalname,
          type: file.mimetype,
          url: `/uploads/${file.originalname}`,
          student: {
            connect: { id: student.id },
          },
          school: {
            connect: { id: newSchool.id },
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
