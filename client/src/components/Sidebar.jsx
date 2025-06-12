import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiX, FiHome, FiFileText, FiCalendar, FiFolder,
  FiUsers, FiEdit, FiClock, FiMap, FiBarChart2, FiAward
} from 'react-icons/fi';

export const Sidebar = ({ role, setSidebarOpen }) => {
  const studentLinks = [
    { name: 'Dashboard', href: '/student-dashboard', icon: <FiHome /> },
    { name: 'Lesson Plans', href: '/student/lesson-plans', icon: <FiFileText /> },
    { name: 'Supervision', href: '/student/supervision', icon: <FiCalendar /> },
    { name: 'Documents', href: '/student/documents', icon: <FiFolder /> },
  ];

  const lecturerLinks = [
    { name: 'Dashboard', href: '/lecturer/dashboard', icon: <FiHome /> },
    { name: 'Students', href: '/lecturer/students', icon: <FiUsers /> },
    { name: 'Supervision', href: '/lecturer/supervision', icon: <FiCalendar /> },
    { name: 'Grading', href: '/lecturer/grading', icon: <FiEdit /> },
  ];

  const adminLinks = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: <FiHome /> },
    { name: 'Students', href: '/admin/students', icon: <FiUsers /> },
    { name: 'Lecturers', href: '/admin/lecturers', icon: <FiAward /> },
    { name: 'TP Period', href: '/admin/tp-period', icon: <FiClock /> },
    { name: 'Zones', href: '/admin/zones', icon: <FiMap /> },
    { name: 'Reports', href: '/admin/reports', icon: <FiBarChart2 /> },
  ];

  const links = role === 'admin' ? adminLinks : 
                role === 'lecturer' ? lecturerLinks : 
                studentLinks;

  const SidebarContent = () => (
    <div className="flex flex-col w-64 border-r border-gray-200 bg-white h-full">
      <div className="md:hidden flex justify-end p-4">
        <FiX
          onClick={() => setSidebarOpen(false)}
          className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700"
        />
      </div>
      <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav className="flex-1 px-2 space-y-1">
          {links.map((item) => (
            <NavLink
              key={`${role}-${item.name}`}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <span className={`mr-3 ${
                window.location.pathname === item.href
                  ? 'text-blue-500'
                  : 'text-gray-400 group-hover:text-gray-500'
              }`}>
                {item.icon}
              </span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );

  return <SidebarContent />;
};