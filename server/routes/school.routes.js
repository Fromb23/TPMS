import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { getSchoolDataByStudentId, createSchool, fetchAllSchools, updateRegisteredSchool, deleteRegisteredSchool } from '../controllers/school.controller.js';

const router = express.Router();

router.use(authMiddleware);
router.get('/', fetchAllSchools);
router.post('/', createSchool);
router.get('/:userId', getSchoolDataByStudentId);
router.put('/:schoolId', updateRegisteredSchool);
router.delete('/:schoolId', deleteRegisteredSchool);

export default router;