import prisma from '../utils/prismaClient.js';
import path from 'path';
import fs from 'fs';

const typeMap = {
  TP_APPLICATION: 'TP_APPLICATION',
  TP_TIMETABLE: 'TP_TIMETABLE',
  TP_ASSESSMENT: 'TP_ASSESSMENT',
  TP_RECORDS: 'TP_RECORDS'
};

export const saveFilesToDisk = (files) => {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('Created uploads directory at:', uploadDir);
  }

  files.forEach((file) => {
    const uploadPath = path.join(uploadDir, file.originalname);
    fs.writeFileSync(uploadPath, file.buffer);
  });

  return files.map(file => file.originalname);
};

export const createOrUpdateSchool = async (schoolData) => {
  return await prisma.school.upsert({
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
};

export const updateStudentSchool = async (studentId, schoolId, subjectCombination) => {
  return await prisma.student.update({
    where: { id: studentId },
    data: {
      schoolId,
      subjectCombination
    }
  });
};

export const getStudentByUserId = async (userId) => {
  return await prisma.student.findFirst({
    where: { userId }
  });
};

export const createDocuments = async (files, studentId, schoolId) => {
  const docs = files.map((file) => ({
    name: file.originalname,
    type: typeMap[file.fieldname] || 'TP_APPLICATION',
    url: file.originalname,
    student: { connect: { id: studentId } },
    school: { connect: { id: schoolId } },
  }));

  await Promise.all(docs.map(doc => prisma.document.create({ data: doc })));
};