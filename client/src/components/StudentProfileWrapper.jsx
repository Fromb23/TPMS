// StudentProfileWrapper.jsx
import { useParams, useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getStudentById } from '@/services/studentServices';
import { StudentProfile } from '@/components/StudentProfile';
import DocumentViewer from '@/components/DocumentViewer';
import { useUser } from '@/contexts/userContext';
import LoadingComponent from '@/components/LoadingComponent';

const StudentProfileWrapper = () => {
  const { user } = useUser();
  const { studentId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: student, isLoading, error, refetch } = useQuery({
    queryKey: ['student', studentId],
    queryFn: () => getStudentById(studentId),
  });
  const userRole = user?.role

  const handleClose = () => {
    const dashboardBase = user?.role === 'LECTURER' ? 'lecturer-dashboard' : 'admin-dashboard';
    navigate(`/${dashboardBase}`);
  };


  if (isLoading) return <LoadingComponent message="Loading student profile..." />;
  if (!student && error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded relative">
        <p className="font-semibold">Student not found.</p>
        <p className="text-sm mt-1">{error.message || 'An error occurred.'}</p>
        <button
          onClick={refetch}
          className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

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
