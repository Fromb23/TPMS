import express from 'express';
import morgan from 'morgan';
import path from "path";
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import requestLogger from './middleware/requestLogger.js';
import authMiddleware from './middleware/auth.middleware.js';

import errorHandler from './middleware/errorHandler.js';
import authRoutes from './routes/auth.routes.js';
import documentRoutes from './routes/document.routes.js';
import schoolRoutes from './routes/school.routes.js';
import lessonPlanRoutes from './routes/lessonPlan.routes.js';
import recordOfWorkRoutes from './routes/recordOfWork.routes.js';
import lecturerRoutes from './routes/lecturer.routes.js';
import studentRoutes from './routes/student.routes.js';
import zoneRoutes from './routes/zone.routes.js';
import supervisionRoutes from './routes/supervision.routes.js';
import tpPeriodRoutes from './routes/tpPeriod.routes.js';
import requestTracker from './middleware/requestTracker.js';

const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//File paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use(requestTracker);
app.use('/api/auth', authRoutes);

app.use(authMiddleware);
app.use('/api/documents', documentRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/lesson-plans', lessonPlanRoutes);
app.use('/api/record-of-work', recordOfWorkRoutes);
app.use('/api/lecturers', lecturerRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/zones', zoneRoutes);
app.use ('/api/supervision', supervisionRoutes);
app.use('/api/tp-period', tpPeriodRoutes);
app.use(requestLogger);

app.use(errorHandler);

app.listen(port, () =>  console.log(`Server is running on http://localhost:${port}`));
