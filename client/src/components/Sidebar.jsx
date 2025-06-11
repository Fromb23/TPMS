import { NavLink } from 'react-router-dom';

export const Sidebar = ({ role }) => {
  const studentLinks = [
    { name: 'Dashboard', href: '/student/dashboard', icon: 'home' },
    { name: 'Lesson Plans', href: '/student/lesson-plans', icon: 'document-text' },
    { name: 'Supervision', href: '/student/supervision', icon: 'calendar' },
    { name: 'Documents', href: '/student/documents', icon: 'folder' },
  ];

  const lecturerLinks = [
    { name: 'Dashboard', href: '/lecturer/dashboard', icon: 'home' },
    { name: 'Students', href: '/lecturer/students', icon: 'users' },
    { name: 'Supervision', href: '/lecturer/supervision', icon: 'calendar' },
    { name: 'Grading', href: '/lecturer/grading', icon: 'pencil' },
  ];

  const adminLinks = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: 'home' },
    { name: 'Students', href: '/admin/students', icon: 'users' },
    { name: 'Lecturers', href: '/admin/lecturers', icon: 'academic-cap' },
    { name: 'TP Period', href: '/admin/tp-period', icon: 'clock' },
    { name: 'Zones', href: '/admin/zones', icon: 'map' },
    { name: 'Reports', href: '/admin/reports', icon: 'chart-bar' },
  ];

  const links = role === 'admin' ? adminLinks : 
                role === 'lecturer' ? lecturerLinks : 
                studentLinks;

  const getIcon = (iconName) => {
    const icons = {
      home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      'document-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      folder: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
      users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      pencil: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
      clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      map: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      'chart-bar': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      'academic-cap': 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    };
    return icons[iconName] || icons.home;
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="flex-1 px-2 space-y-1">
            {links.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <svg
                  className={`mr-3 h-5 w-5 ${
                    window.location.pathname === item.href 
                      ? 'text-blue-500' 
                      : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getIcon(item.icon)} />
                </svg>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};