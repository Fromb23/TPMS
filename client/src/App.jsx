import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import LecturerDashboard from './pages/LecturerDashboard';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import TpPeriod from './components/TpPeriod';
import ZoneDashboard from './pages/Zone';
import NotAuthorized from './pages/NotAuthorized';

import { Outlet } from 'react-router-dom';
import StudentProfileWrapper from './components/StudentProfileWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin-dashboard" element={<PrivateRoute allowedRoles={['ADMIN', 'LECTURER']} />}>
          <Route index element={<AdminDashboard />} />
          <Route path=":studentId/*" element={<StudentProfileWrapper />} />
        </Route>

        <Route
          path="/admin/zones"
          element={
            <PrivateRoute allowedRoles={['LECTURER', 'STUDENT', 'ADMIN']}>
              <ZoneDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/admin/tp-period" element={
          <PrivateRoute allowedRoles={['ADMIN', 'LECTURER']}>
            <Outlet />
          </PrivateRoute>
        }>
          <Route index element={<TpPeriod />} />
        </Route>

        {/* Lecturer */}
        <Route path="/lecturer-dashboard" element={<PrivateRoute allowedRoles={['LECTURER']} />} >
          <Route index element={<LecturerDashboard />} />
          <Route path=":studentId/*" element={<StudentProfileWrapper />} />
        </Route>

        {/* Student */}
        <Route path="/student-dashboard" element={
          <PrivateRoute allowedRoles={['STUDENT', 'LECTURER', 'ADMIN']}>
            <StudentDashboard />
          </PrivateRoute>
        } />

        <Route path="/unauthorized" element={<NotAuthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
