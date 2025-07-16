import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import LecturerDashboard from './pages/LecturerDashboard';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import RegisterSchools from './components/RegisterSchools';
import PrivateRoute from './components/PrivateRoute';
import TpPeriod from './components/TpPeriod';
import ZoneDashboard from './pages/Zone';
import NotAuthorized from './pages/NotAuthorized';
import TpGuideline from './components/TpGuideline';

import { Outlet } from 'react-router-dom';
import StudentProfileWrapper from './components/StudentProfileWrapper';
import TpWelcome from './components/TpWelcome';

function App() {

  useEffect(() => {
  const saveScrollPosition = () => {
    sessionStorage.setItem('scrollY', window.scrollY);
  };

  const restoreScrollPosition = () => {
    const scrollY = sessionStorage.getItem('scrollY');
    if (scrollY !== null) {
      window.scrollTo(0, parseInt(scrollY, 10));
    }
  };

  window.addEventListener('beforeunload', saveScrollPosition);
  restoreScrollPosition();

  return () => window.removeEventListener('beforeunload', saveScrollPosition);
}, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin-dashboard" element={<PrivateRoute allowedRoles={['ADMIN']} />}>
          <Route index element={<AdminDashboard />} />
          <Route path=":studentId/*" element={<StudentProfileWrapper />} />
        </Route>

        <Route path="/admin/schools" element={
          <PrivateRoute allowedRoles={['ADMIN']}>
            <RegisterSchools />
          </PrivateRoute>
        } />

        <Route
          path="/admin/zones"
          element={
            <PrivateRoute allowedRoles={['ADMIN']}>
              <ZoneDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/admin/tp-period" element={
          <PrivateRoute allowedRoles={['ADMIN']}>
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
          <PrivateRoute allowedRoles={['STUDENT']}>
            <StudentDashboard />
          </PrivateRoute>
        } />
        <Route
          path="/resources/guidelines"
          element={
            <PrivateRoute allowedRoles={['STUDENT']}>
              <TpGuideline />
            </PrivateRoute>
          }
        />
        <Route path="tp/welcome" element={
          <PrivateRoute allowedRoles={['STUDENT']}>
            <TpWelcome />
          </PrivateRoute>
        } />
        

        <Route path="/unauthorized" element={<NotAuthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
