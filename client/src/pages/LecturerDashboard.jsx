import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import { StudentSupervisionSchedule } from '../components/StudentSupervisionSchedule';
import { StudentProfile } from '../components/StudentProfile';
import {
  FiHome, FiUser, FiBook, FiCalendar, FiFileText, FiEye,
  FiFilter, FiSearch, FiDownload, FiPlus, FiAlertTriangle,
  FiClock, FiCheck, FiMessageSquare
} from 'react-icons/fi';
import { fetchAllStudents } from '../services/studentServices';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';

const LecturerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const navigate = useNavigate();
  const { user, token } = useUser();

  // Enhanced dummy data with attention-needed flags
  const { data: allStudents = [], error, isLoading } = useQuery({
    queryKey: ['students'],
    queryFn: () => fetchAllStudents(token),
    refetchOnWindowFocus: false,
  });

  const enhancedStudentData = useMemo(() => {
    return allStudents.map(student => {
      const status = student?.user?.isVerified ? 'Active' : 'Pending';

      return {
        ...student,
        needsAttention: status === 'Pending',
        status,
        lastContact: ['Today', '2 days ago', '1 week ago'][Math.floor(Math.random() * 3)],
        pendingActions: Math.random() > 0.5
          ? ['Lesson Plan Review', 'Supervision', 'Incoming supervision'][Math.floor(Math.random() * 3)]
          : null,
        alertLevel: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)],
      };
    });
  }, [allStudents]);

  const studentsNeedingAttention = enhancedStudentData.filter(
    student => student.needsAttention
  );
  const getInitials = (fullName) => {
    return fullName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const columns = [
    {
      Header: 'Student',
      accessor: 'name',
      Cell: ({ row }) => {
        const initials = getInitials(row.original?.user.fullName);
        const handleProfileClick = () => {
          // Trigger showing the schedule component
          // You might set state or navigate depending on your setup
          setSelectedStudent(row.original);
          setShowSchedule(true);
        };

        return (
          <div className="flex items-center space-x-3">
            {/* Profile Circle */}
            <div
              onClick={handleProfileClick}
              className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer text-white font-bold
            ${row.original.needsAttention ? 'bg-red-500' : 'bg-blue-600'}
          `}
              title="View Supervision Schedule"
            >
              {initials}
            </div>

            <div>
              <p className="font-medium">{row.original?.user.fullName}</p>
              <p className="text-xs text-gray-500">{row.original.regNo}</p>
            </div>

            {row.original.needsAttention && (
              <FiAlertTriangle className="text-yellow-500" />
            )}
          </div>
        );
      }
    },
    {
      Header: 'School',
      accessor: 'school',
      Cell: ({ value, row }) => {
        const isUnassigned = !value?.name;

        return (
          <div className="flex items-center">
            <FiBook className="mr-2 text-green-600 md:hidden" />
            <span
              className={isUnassigned
                ? "italic text-gray-400 font-light"
                : "text-gray-800 font-medium"}
            >
              {isUnassigned ? 'No School Assigned yet' : value.name}
            </span>
            {row.original.pendingActions && (
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {row.original.pendingActions}
              </span>
            )}
          </div>
        );
      }
    },
    {
      Header: 'Last Contact',
      accessor: 'lastContact',
      Cell: ({ value }) => (
        <div className="flex items-center">
          <FiClock className="mr-2 text-gray-400 md:hidden" />
          <span>{value}</span>
        </div>
      )
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value, row }) => {
        const statusColors = {
          'Active': 'bg-green-100 text-green-800',
          'Pending': 'bg-yellow-100 text-yellow-800',
          'Inactive': 'bg-red-100 text-red-800'
        };
        return (
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[value] || 'bg-gray-100'}`}>
              {value}
            </span>
            {row.original.alertLevel === 'high' && (
              <span className="ml-2 h-2 w-2 rounded-full bg-red-500"></span>
            )}
          </div>
        );
      }
    },
    {
      Header: 'Actions',
      accessor: 'id',
      Cell: ({ value, row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleSendMessage(value)}
            className="text-blue-600 hover:text-blue-800 p-1"
            title="Send message"
          >
            <FiMessageSquare />
          </button>
          <button
            onClick={() => handleViewDetails(value)}
            className="text-blue-600 hover:text-blue-800 p-1"
            title="View details"
          >
            <FiEye />
          </button>
          {row.original.needsAttention && (
            <button
              onClick={() => handleMarkAsReviewed(value)}
              className="text-green-600 hover:text-green-800 p-1"
              title="Mark as reviewed"
            >
              <FiCheck />
            </button>
          )}
        </div>
      )
    }
  ];

  const getAllStringValues = (obj) => {
    let values = [];

    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      const val = obj[key];

      if (val === null || val === undefined) continue;

      if (typeof val === 'object' && !Array.isArray(val)) {
        values = values.concat(getAllStringValues(val));
      } else if (
        typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean'
      ) {
        values.push(val.toString().toLowerCase());
      }
    }

    return values;
  };

  const filteredData = enhancedStudentData.filter(student => {
    const stringValues = getAllStringValues(student);
    const matchesSearch = stringValues.some(val =>
      val.includes(searchTerm.toLowerCase())
    );

    const matchesStatus =
      statusFilter === 'all' || student.status?.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  console.log("Filtered Data:", filteredData);


  const handleViewDetails = (studentId) => {
    const student = enhancedStudentData.find(s => s.id === studentId);
    if (student) {
      setSelectedStudent(student);
      const user = JSON.parse(localStorage.getItem('user'));
      const dashboardBase = user?.role === 'LECTURER' ? 'lecturer-dashboard' : 'admin-dashboard';
      navigate(`/${dashboardBase}/${student.user.id}/documents`);
    } else {
      console.error("Student not found for ID:", studentId);
    }
  };

  const handleSendMessage = (studentId) => {
    console.log('Messaging student:', studentId);
  };

  const handleMarkAsReviewed = (studentId) => {
    console.log('Marking student as reviewed:', studentId);
  };

  const handleDownloadReport = () => {
    console.log('Downloading report');
  };

  return (

    <Layout
      title="Lecturer Dashboard"
      role="lecturer"
      breadcrumbs={[
        { label: 'Home', href: '/lecturer-dashboard', icon: <FiHome /> },
        { label: 'Dashboard', href: '/lecturer-dashboard' }
      ]}
    >
      <Helmet>
        <title>TPMS - Lecturer Dashboard</title>
        <meta name="description" content="Manage your students, view schedules, and track progress." />
      </Helmet>
      {selectedStudent && (
        <div className="space-y-6">
          < StudentSupervisionSchedule student={selectedStudent} onClose={() => setSelectedStudent(null)} />
        </div>
      )}
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden fixed bottom-20 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-20"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <FiPlus className="transform rotate-45" /> : <FiPlus />}
      </button>

      {/* Attention Needed Section */}
      {studentsNeedingAttention.length > 0 && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <div className="flex items-center">
            <FiAlertTriangle className="text-red-500 mr-2" />
            <h3 className="font-medium text-red-800">
              {studentsNeedingAttention.length} student(s) need your attention
            </h3>
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {studentsNeedingAttention.slice(0, 3).map(student => (
              <div key={student.id} className="bg-white p-3 rounded-lg shadow-sm border border-red-100">
                <div className="flex justify-between">
                  <h4 className="font-medium">{student.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${student.alertLevel === 'high' ? 'bg-red-100 text-red-800' :
                    student.alertLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                    {student.alertLevel} priority
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{student.pendingActions || 'Action required'}</p>
                <div className="flex justify-end mt-2 space-x-2">
                  <button
                    onClick={() => handleSendMessage(student.id)}
                    className="text-xs bg-white border border-blue-500 text-blue-500 px-2 py-1 rounded hover:bg-blue-50"
                  >
                    Message
                  </button>
                  <button
                    onClick={() => handleViewDetails(student.id)}
                    className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dashboard Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
          <p className="text-2xl font-bold">{enhancedStudentData.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Up to Date</h3>
          <p className="text-2xl font-bold">
            {enhancedStudentData.filter(s => !s.needsAttention).length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm font-medium">Needs Review</h3>
          <p className="text-2xl font-bold">
            {enhancedStudentData.filter(s => s.pendingActions === 'Lesson Plan Review').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
          <h3 className="text-gray-500 text-sm font-medium">Urgent Attention</h3>
          <p className="text-2xl font-bold">
            {enhancedStudentData.filter(s => s.alertLevel === 'high').length}
          </p>
        </div>
      </div>

      {/* Dashboard Controls */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-4">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Students</option>
            <option value="Needs Attention">Needs Attention</option>
            <option value="Pending">Pending</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button
            onClick={handleDownloadReport}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FiDownload className="mr-2" />
            <span className="hidden md:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table
          columns={columns}
          data={filteredData}
          initialPageSize={5}
        />
        {selectedStudent && (
          <StudentProfile
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        )}
      </div>
    </Layout>
  );
};

export default LecturerDashboard;