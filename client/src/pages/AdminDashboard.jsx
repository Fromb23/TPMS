import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import DocumentViewer from '../components/DocumentViewer';
import {
    FiHome, FiUsers, FiUser, FiFileText, FiDownload, FiFilter,
    FiSearch, FiEye, FiLock, FiUnlock, FiMail, FiAlertTriangle,
    FiCheckCircle, FiClock, FiBook, FiCalendar, FiPieChart
} from 'react-icons/fi';
import { fetchAllLecturers } from '../services/lecturerServices';
import { fetchAllStudents } from '../services/studentServices';
import { StudentProfile } from '../components/StudentProfile';

const AdminDashboard = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [activeTab, setActiveTab] = useState('students');
    const [activeStat, setActiveStat] = useState('overview');
    const navigate = useNavigate();

    // Enhanced data with admin-specific fields
    const { data: students, isLoading: studentsLoading } = useQuery({
        queryKey: ['students'],
        queryFn: fetchAllStudents,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });
    const enhancedStudentData = students?.map(student => {
        // Map backend documents to { type => { status, type } }
        const docMap = {};
        (student.documents || []).forEach(doc => {
            if (doc?.type) {
                docMap[doc.type] = {
                    status: doc.status,
                    type: doc.type
                };
            }
        });

        return {
            ...student,
            documents: {
                tp: {
                    submitted: !!docMap['TP_APPLICATION'],
                    ...(docMap['TP_APPLICATION'] || {})
                },
                timetable: {
                    submitted: !!docMap['TP_TIMETABLE'],
                    ...(docMap['TP_TIMETABLE'] || {})
                },
                assessment: {
                    submitted: !!docMap['TP_ASSESSMENT'],
                    ...(docMap['TP_ASSESSMENT'] || {})
                },
                records: {
                    submitted: !!docMap['TP_RECORDS'],
                    ...(docMap['TP_RECORDS'] || {})
                }
            },
            isBlocked: Math.random() > 0.9,
            lastLogin: ['Today', '2 days ago', '1 week ago'][Math.floor(Math.random() * 3)]
        };
    }) || [];

    console.log("All students data:", students);


    const { data: lecturers, isLoading: lecturersLoading } = useQuery({
        queryKey: ['lecturers'],
        queryFn: fetchAllLecturers,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });

    const enhancedLecturerData = lecturers
        ? lecturers.map(lecturer => ({
            ...lecturer,
            studentsAssigned: Math.floor(Math.random() * 10),
            isBlocked: Math.random() > 0.95,
            lastActive: ['Today', '2 days ago', '1 week ago'][Math.floor(Math.random() * 3)]
        }))
        : [];

    const handleStudentClick = (student) => {
        // setSelectedStudent(student);
        navigate(`/admin-dashboard/${student?.user?.id}`);
    };
    const handleViewDocuments = (student) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const dashboardBase = user?.role === 'LECTURER' ? 'lecturer-dashboard' : 'admin-dashboard';
        navigate(`/${dashboardBase}/${student?.user?.id}/documents`);

    };
    // const closeStudentProfile = () => {
    //     setSelectedStudent(null);
    // };
    const activeData = activeTab === 'students' ? enhancedStudentData : enhancedLecturerData;

    // Stats calculations
    const stats = {
        students: {
            total: enhancedStudentData.length,
            active: enhancedStudentData.filter(s => !s.isBlocked).length,
            blocked: enhancedStudentData.filter(s => s.isBlocked).length,
            tpSubmitted: enhancedStudentData.filter(s => s.documents.tp).length,
            completeDocs: enhancedStudentData.filter(s => Object.values(s.documents).every(Boolean)).length
        },
        lecturers: {
            total: enhancedLecturerData.length,
            active: enhancedLecturerData.filter(l => !l.isBlocked).length,
            blocked: enhancedLecturerData.filter(l => l.isBlocked).length,
            activeToday: enhancedLecturerData.filter(l => l.lastActive === 'Today').length
        }
    };

    const studentColumns = [
        {
            Header: 'Student',
            accessor: 'student',
            Cell: ({ row }) => {
                const student = row.original;
                console.log("student in column", student?.documents)
                const initials = student?.user?.fullName
                    ?.split(' ')
                    .map(n => n[0])
                    .join('')
                    .toUpperCase();

                return (
                    <button
                        onClick={() => handleStudentClick(student)}
                        className="flex items-center space-x-3 hover:bg-gray-100 px-2 py-2 rounded transition w-full text-left"
                    >
                        <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
                            {initials}
                        </div>
                        <div className="text-left">
                            <p className="font-medium">{student?.user?.fullName}</p>
                            <p className="text-xs text-gray-500">{student?.user?.id}</p>
                        </div>
                    </button>
                );
            }
        },
        {
            Header: 'Documents',
            accessor: 'documents',
            Cell: ({ value }) => (
                <div className="flex space-x-1">
                    {Object.entries(value).map(([docKey, docData]) => {
                        const submitted = docData?.submitted;
                        const status = docData?.status?.toUpperCase() || 'Missing';
                        const color = submitted
                            ? status === 'APPROVED'
                                ? 'text-green-500'
                                : status === 'REJECTED'
                                    ? 'text-red-500'
                                    : 'text-yellow-500'
                            : 'text-gray-300';

                        return (
                            <FiFileText
                                key={docKey}
                                className={color}
                                title={`${docKey.toUpperCase()}: ${submitted ? status : 'Missing'}`}
                            />
                        );
                    })}
                </div>
            )
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }) => {
                const isActive = row.original?.user?.isActive;

                return (
                    <div className="flex items-center">
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${isActive
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}
                        >
                            {isActive ? 'Active' : 'Blocked'}
                        </span>
                    </div>
                );
            }
        },
        {
            Header: 'TP Application',
            accessor: 'tpApplication',
            Cell: ({ row }) => {
                const tpDoc = row.original?.documents?.tp;
                const status = tpDoc?.status?.toUpperCase();
                console.log("TP_APPLICATION Status:", status);

                let badgeText = 'Pending';
                let badgeClass = 'bg-yellow-100 text-yellow-800';

                if (status === 'APPROVED') {
                    badgeText = 'Approved';
                    badgeClass = 'bg-green-100 text-green-800';
                } else if (status === 'REJECTED') {
                    badgeText = 'Rejected';
                    badgeClass = 'bg-red-100 text-red-800';
                }

                return (
                    <div className="flex items-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}>
                            {badgeText}
                        </span>
                    </div>
                );
            }
        },
        {
            Header: 'Actions',
            accessor: 'id',
            Cell: ({ row }) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleViewDocuments(row.original)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                        title="View documents"
                    >
                        <FiEye />
                    </button>
                    <button
                        onClick={() => handleToggleBlock(row.original)}
                        className={row.original.isBlocked ? 'text-green-600 hover:text-green-800 p-1' : 'text-red-600 hover:text-red-800 p-1'}
                        title={row.original.isBlocked ? 'Unblock user' : 'Block user'}
                    >
                        {row.original.isBlocked ? <FiUnlock /> : <FiLock />}
                    </button>
                </div>
            )
        }
    ];

    const lecturerColumns = [
        {
            Header: 'Lecturer',
            accessor: 'name',
            Cell: ({ row }) => (
                <div className="flex items-center">
                    <FiUser className={`mr-2 ${row.original.isBlocked ? 'text-red-500' : 'text-blue-600'}`} />
                    <div>
                        <p className="font-medium">{row.original.user?.fullName}</p>
                        <p className="text-xs text-gray-500">{row.original.department}</p>
                    </div>
                </div>
            )
        },
        {
            Header: 'Students',
            accessor: 'studentsAssigned',
            Cell: ({ value }) => (
                <div className="flex items-center">
                    <FiUsers className="mr-2 text-purple-500" />
                    <span>{value}</span>
                </div>
            )
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }) => (
                <div className="flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.original.isBlocked ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                        {row.original.isBlocked ? 'Blocked' : 'Active'}
                    </span>
                </div>
            )
        },
        {
            Header: 'Actions',
            accessor: 'id',
            Cell: ({ row }) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleSendMessage(row.original)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                        title="Send message"
                    >
                        <FiMail />
                    </button>
                    <button
                        onClick={() => handleToggleBlock(row.original)}
                        className={row.original.isBlocked ? 'text-green-600 hover:text-green-800 p-1' : 'text-red-600 hover:text-red-800 p-1'}
                        title={row.original.isBlocked ? 'Unblock user' : 'Block user'}
                    >
                        {row.original.isBlocked ? <FiUnlock /> : <FiLock />}
                    </button>
                </div>
            )
        }
    ];

    const filteredData = activeData.filter(item => {
        const matchesSearch = Object.values(item).some(
            val => val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesStatus =
            statusFilter === 'all' ||
            (statusFilter === 'blocked' && item.isBlocked) ||
            (statusFilter === 'active' && !item.isBlocked) ||
            (statusFilter === 'tp' && item.documents?.tp) ||
            (statusFilter === 'verified' && item.user?.isVerified) ||
            (statusFilter === 'complete' && item.documents && Object.values(item.documents).every(Boolean)) ||
            (statusFilter === 'pending' && item.user?.isVerified === false) ||
            (statusFilter === 'incomplete' && item.documents && !Object.values(item.documents).every(Boolean));
        return matchesSearch && matchesStatus;
    });

    const handleToggleBlock = (user) => {
        console.log(`${user.isBlocked ? 'Unblocking' : 'Blocking'} ${user.name}`);
        // In a real app, you would update the state or make an API call here
    };

    const handleSendMessage = (user) => {
        console.log(`Messaging ${user.name}`);
    };

    const handleExportData = () => {
        console.log(`Exporting ${activeTab} data`);
    };

    return (
        <Layout
            title="Admin Dashboard"
            role="admin"
            breadcrumbs={[
                { label: 'Home', href: '/', icon: <FiHome /> },
                { label: 'Admin Dashboard', href: '/admin' }
            ]}
        >
            {/* {selectedStudent && !selectedDocument && (
                <DocumentViewer
                    student={selectedStudent}
                    onClose={() => setSelectedStudent(null)}
                    documents={selectedStudent.documents}
                    isBlocked={selectedStudent.isBlocked}
                />
            )} */}
            {/* Tabs for Students/Lecturers */}
            <div className="flex border-b mb-6">
                <button
                    className={`px-4 py-2 font-medium flex items-center ${activeTab === 'students' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('students')}
                >
                    <FiUser className="mr-2" />
                    Students ({stats.students.total})
                </button>
                <button
                    className={`px-4 py-2 font-medium flex items-center ${activeTab === 'lecturers' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('lecturers')}
                >
                    <FiUsers className="mr-2" />
                    Lecturers ({stats.lecturers.total})
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {activeTab === 'students' ? (
                    <>
                        <StatCard
                            icon={<FiUsers className="text-blue-500" />}
                            title="Total Students"
                            value={stats.students.total}
                            onClick={() => setActiveStat('overview')}
                            active={activeStat === 'overview'}
                        />
                        <StatCard
                            icon={<FiCheckCircle className="text-green-500" />}
                            title="Active"
                            value={stats.students.active}
                            onClick={() => setStatusFilter('active')}
                            active={statusFilter === 'active'}
                        />
                        <StatCard
                            icon={<FiAlertTriangle className="text-yellow-500" />}
                            title="TP Submitted"
                            value={stats.students.tpSubmitted}
                            onClick={() => setStatusFilter('tp')}
                            active={statusFilter === 'tp'}
                        />
                        <StatCard
                            icon={<FiLock className="text-red-500" />}
                            title="Blocked"
                            value={stats.students.blocked}
                            onClick={() => setStatusFilter('blocked')}
                            active={statusFilter === 'blocked'}
                        />
                    </>
                ) : (
                    <>
                        <StatCard
                            icon={<FiUsers className="text-purple-500" />}
                            title="Total Lecturers"
                            value={stats.lecturers.total}
                            onClick={() => setActiveStat('overview')}
                            active={activeStat === 'overview'}
                        />
                        <StatCard
                            icon={<FiCheckCircle className="text-green-500" />}
                            title="Active"
                            value={stats.lecturers.active}
                            onClick={() => setStatusFilter('active')}
                            active={statusFilter === 'active'}
                        />
                        <StatCard
                            icon={<FiClock className="text-blue-500" />}
                            title="Active Today"
                            value={stats.lecturers.activeToday}
                            onClick={() => { }}
                        />
                        <StatCard
                            icon={<FiLock className="text-red-500" />}
                            title="Blocked"
                            value={stats.lecturers.blocked}
                            onClick={() => setStatusFilter('blocked')}
                            active={statusFilter === 'blocked'}
                        />
                    </>
                )}
            </div>

            {/* Dashboard Controls */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder={`Search ${activeTab}...`}
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
                        <option value="all">All {activeTab}</option>
                        {activeTab === 'students' ? (
                            <>
                                <option value="active">Active</option>
                                <option value="blocked">Blocked</option>
                                <option value="tp">TP Submitted</option>
                                <option value="complete">Complete Docs</option>
                                <option value="verified">Verified</option>
                                <option value="pending">Pending TP</option>
                                <option value="incomplete">Incomplete Docs</option>
                            </>
                        ) : (
                            <>
                                <option value="active">Active</option>
                                <option value="blocked">Blocked</option>
                            </>
                        )}
                    </select>

                    <button
                        onClick={handleExportData}
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
                    columns={activeTab === 'students' ? studentColumns : lecturerColumns}
                    data={filteredData}
                    initialPageSize={5}
                />
            </div>

            {selectedDocument && (
                <DocumentViewer
                    user={selectedDocument}
                    documents={selectedDocument}
                    onClose={() => setSelectedDocument(null)}
                />
            )}
            {/* <Outlet /> */}
        </Layout>

    );
};

const StatCard = ({ icon, title, value, onClick, active = false }) => (
    <div
        className={`bg-white p-4 rounded-lg shadow cursor-pointer transition-all ${active ? 'border-l-4 border-blue-500' : ''}`}
        onClick={onClick}
    >
        <div className="flex items-center justify-between">
            <div>
                <p className="text-gray-500 text-sm font-medium">{title}</p>
                <p className="text-2xl font-bold">{value}</p>
            </div>
            <div className="text-2xl">
                {icon}
            </div>
        </div>
    </div>
);

export default AdminDashboard;