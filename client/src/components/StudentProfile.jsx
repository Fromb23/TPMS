import {
  FiUser, FiBook, FiFileText, FiCalendar, FiMapPin, FiMail,
  FiPhone, FiCheckCircle, FiXCircle, FiEdit2, FiLock, FiUnlock
} from 'react-icons/fi';
import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { updateStudentStatusById } from '../services/studentServices';

export const StudentProfile = ({ student={}, onClose, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('info');
  const [editingSubjects, setEditingSubjects] = useState(false);
  const [isBlocked, setIsBlocked] = useState(student?.isBlocked ?? student.isBlocked ?? false);
  const [isActive, setIsActive] = useState(student?.isActive ?? student.isActive ?? true);
  const [subjects, setSubjects] = useState(student.subjects || '');

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-t font-medium text-sm ${activeTab === tab ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`;

  const { mutate: updateStudentStatus } = useMutation({
    mutationFn: updateStudentStatusById,
    onSuccess: (data) => {
      alert(`Student status updated to ${data.isActive ? 'active' : 'inactive'}`);
      // onUpdate(data);
    },
    onError: (error) => {
      console.error("Error updating student status:", error);
      alert("Failed to update student status.");
    }
  });

  const handleStatusChange = (type) => {
    if (type === 'block') {
      updateStudentStatus({ id: student?.user.id, isBlocked: !isBlocked });
    } else {
      updateStudentStatus({ id: student?.user.id, isActive: !isActive });
    }
  };

  const saveSubjects = () => {
    onUpdate({ ...student, subjects });
    setEditingSubjects(false);
  };

  const getInitials = (fullName) => fullName.split(' ').map(n => n[0]).join('').toUpperCase();

    if (!student ) return <div className="p-4">Loading student...</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-2">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <span className="text-blue-700 font-bold text-lg">
                {student.profileIcon || getInitials(student?.user.fullName)}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-700">{student.fullName}</h2>
              <p className="text-gray-500 text-sm">
                Last login: {student.lastLogin || 'Never logged in'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-2xl">&times;</button>
        </div>

        <div className="flex border-b px-4">
          <button className={tabStyle('info')} onClick={() => setActiveTab('info')}>Profile</button>
          <button className={tabStyle('feedback')} onClick={() => setActiveTab('feedback')}>Recent Comments</button>
        </div>

        <div className="p-4 max-h-[70vh] overflow-y-auto text-sm">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p><strong>Reg No:</strong> {student.id}</p>
                  <p className="flex items-center mt-1">
                    Status:
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${student.isVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {student.isVerified ? 'Verified' : 'Pending Verification'}
                    </span>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleStatusChange('block')}
                    className={`px-3 py-1 rounded-md text-sm flex items-center ${isBlocked ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {isBlocked ? <FiLock className="mr-1" /> : <FiUnlock className="mr-1" />}
                    {isBlocked ? 'Blocked' : 'Block'}
                  </button>
                  <button
                    onClick={() => handleStatusChange('active')}
                    className={`px-3 py-1 rounded-md text-sm flex items-center ${isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {isActive ? 'Active' : 'Inactive'}
                  </button>
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex items-center justify-between">
                  <p className="flex items-center"><FiBook className="mr-2 text-green-600" /> School: {student.school}</p>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">Subjects:</span>
                    {editingSubjects ? (
                      <div className="flex space-x-2">
                        <input
                          value={subjects}
                          onChange={(e) => setSubjects(e.target.value)}
                          className="border rounded px-2 py-1 w-64"
                        />
                        <button onClick={saveSubjects} className="text-blue-600">Save</button>
                        <button onClick={() => setEditingSubjects(false)} className="text-gray-500">Cancel</button>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="text-gray-600">{student.subjectCombination}</span>
                        <button onClick={() => setEditingSubjects(true)} className="ml-2 text-blue-600">
                          <FiEdit2 size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="flex items-center"><FiMapPin className="mr-2 text-red-600" /> Placement School: {student.placementSchool || "N/A"}</p>
                <p className="flex items-center mt-2"><FiUser className="mr-2 text-purple-600" /> Supervisor: {student.supervisor || "Not assigned"}</p>
              </div>

              <div className="border-t pt-3">
                <h3 className="font-medium flex items-center"><FiMail className="mr-2" /> Contact</h3>
                <p className="mt-1 ml-6">Email: {student?.user.email}</p>
                <p className="mt-1 ml-6">Phone: {student?.user.phone || "Not provided"}</p>
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-3">
              {student.comments?.length ? (
                student.comments.map((comment, i) => (
                  <div key={i} className="border p-3 rounded bg-gray-50">
                    <div className="flex justify-between">
                      <p className="font-medium">{comment.by}</p>
                      <p className="text-xs text-gray-500">{comment.date}</p>
                    </div>
                    <p className="text-gray-600 mt-1">{comment.text}</p>
                  </div>
                ))
              ) : <p>No comments recorded.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};