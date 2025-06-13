import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import documentRoutes from './routes/document.routes.js';
import schoolRoutes from './routes/school.routes.js';
import lessonPlanRoutes from './routes/lessonPlan.routes.js';
import recordOfWorkRoutes from './routes/recordOfWork.routes.js';
// import userRoutes from './routes/user.routes.js';
const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/lesson-plans', lessonPlanRoutes);
app.use('/api/record-of-work', recordOfWorkRoutes);
// app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
