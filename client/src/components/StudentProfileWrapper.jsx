// StudentProfileWrapper.jsx
import { useParams, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getStudentById } from '../services/studentServices';
import { StudentProfile } from './StudentProfile';
import DocumentViewer from './DocumentViewer';
import { useUser } from '../context/userContext';

const StudentProfileWrapper = () => {
  const { user } = useUser();
  const { studentId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: student, isLoading, error } = useQuery({
    queryKey: ['student', studentId],
    queryFn: () => getStudentById(studentId),
  });
 const userRole = user?.role

  const handleClose = () => {
    const dashboardBase = user?.role === 'LECTURER' ? 'lecturer-dashboard' : 'admin-dashboard';
    navigate(`/${dashboardBase}`);
  };


  if (isLoading) return <div className="p-4">Loading student...</div>;
  if (error || !student) return <div className="p-4">Student not found</div>;

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <StudentProfile
              onClose={handleClose}
            />
          }
        />
        <Route
          path="documents"
          element={
            <DocumentViewer
              userRole={userRole}
              student={student}
              onClose={handleClose}
            />
          }
        />
      </Routes>
    </>
  );
};

export default StudentProfileWrapper;
