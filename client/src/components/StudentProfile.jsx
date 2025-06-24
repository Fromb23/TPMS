import {
  FiUser, FiBook, FiMapPin, FiMail,
  FiEdit2, FiLock, FiUnlock
} from 'react-icons/fi';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getStudentById, updateStudentStatusById } from '../services/studentServices';

export const StudentProfile = ({ onClose }) => {
  const { studentId } = useParams();
  const queryClient = useQueryClient();

  const { data: student, isLoading } = useQuery({
    queryKey: ['student', studentId],
    queryFn: () => getStudentById(studentId),
  });
  const [activeTab, setActiveTab] = useState('info');
  const [editingSubjects, setEditingSubjects] = useState(false);
  const [subjects, setSubjects] = useState('');

  const { mutate: updateStudentStatus } = useMutation({
    mutationFn: updateStudentStatusById,
    onSuccess: (updatedStudent) => {
      queryClient.setQueryData(['student', updatedStudent.id], updatedStudent);
      queryClient.invalidateQueries(['students']);
    },
    onError: () => alert('Failed to update student status.')
  });

  const handleStatusChange = (type) => {
    if (!student) return;
    const updatedStatus = {
      id: student.id,
      ...(type === 'block' ? { isBlocked: !student?.user?.isBlocked } : { isActive: !student?.user?.isActive }),
    };
    updateStudentStatus(updatedStatus);
  };

  const getInitials = (fullName) => fullName.split(' ').map(n => n[0]).join('').toUpperCase();

  if (isLoading || !student) return <div className="p-4">Loading student...</div>;

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
          <button className={`px-4 py-2 rounded-t font-medium text-sm ${activeTab === 'info' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`} onClick={() => setActiveTab('info')}>Profile</button>
          <button className={`px-4 py-2 rounded-t font-medium text-sm ${activeTab === 'feedback' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`} onClick={() => setActiveTab('feedback')}>Recent Comments</button>
        </div>

        <div className="p-4 max-h-[70vh] overflow-y-auto text-sm">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p><strong>Reg No:</strong> {student.id}</p>
                  <p className="flex items-center mt-1">
                    Status:
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${student?.user.isVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {student?.user.isVerified ? 'Verified' : 'Pending Verification'}
                    </span>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleStatusChange('block')}
                    className={`px-3 py-1 rounded-md text-sm flex items-center ${student?.user.isBlocked ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}
                  >
                    {student?.user.isBlocked ? <FiLock className="mr-1" /> : <FiUnlock className="mr-1" />}
                    {student?.user.isBlocked ? 'Blocked' : 'Block'}
                  </button>
                  <button
                    onClick={() => handleStatusChange('active')}
                    className={`px-3 py-1 rounded-md text-sm flex items-center ${student?.user?.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    {student?.user?.isActive ? 'Active' : 'Inactive'}
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
                        <button onClick={() => setEditingSubjects(false)} className="text-blue-600">Save</button>
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
                <p className="flex items-center"><FiMapPin className="mr-2 text-red-600" /> Placement School: {student.placementSchool || 'N/A'}</p>
                <p className="flex items-center mt-2"><FiUser className="mr-2 text-purple-600" /> Supervisor: {student.supervisor || 'Not assigned'}</p>
              </div>

              <div className="border-t pt-3">
                <h3 className="font-medium flex items-center"><FiMail className="mr-2" /> Contact</h3>
                <p className="mt-1 ml-6">Email: {student?.user?.email}</p>
                <p className="mt-1 ml-6">Phone: {student?.user?.phone || 'Not provided'}</p>
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
