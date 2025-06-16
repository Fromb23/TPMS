import {
  FiUser, FiBook, FiFileText, FiCalendar, FiMapPin, FiMail, FiPhone, FiCheckCircle
} from 'react-icons/fi';
import { StudentSupervisionSchedule } from './StudentSupervisionSchedule';
import { useState } from 'react';

export const StudentProfile = ({ student, onClose }) => {
  const [activeTab, setActiveTab] = useState('info');
  const [showSupervisionModal, setShowSupervisionModal] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  if (!student) return null;

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-t font-medium text-sm ${activeTab === tab ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
    }`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-2">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold flex items-center text-blue-700">
            <FiUser className="mr-2" />
            {student.name}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-2xl">&times;</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b px-4">
          <button className={tabStyle('info')} onClick={() => setActiveTab('info')}>Profile</button>
          <button className={tabStyle('assessment')} onClick={() => setActiveTab('assessment')}>Assessment</button>
          <button className={tabStyle('feedback')} onClick={() => setActiveTab('feedback')}>Feedback</button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[70vh] overflow-y-auto text-sm">
          {activeTab === 'info' && (
            <div className="space-y-4">
              <p><strong>Reg No:</strong> {student.regNo}</p>
              <p className="flex items-center"><FiBook className="mr-2 text-green-600" /> School: {student.school}</p>
              <p className="ml-6 text-gray-600">Subjects: {student.subjects || "Not assigned"}</p>
              <p className="flex items-center"><FiMapPin className="mr-2 text-red-600" /> Placement: {student.placement || "N/A"}</p>

              <div>
                <h3 className="font-medium text-gray-700">Documents</h3>
                {student.documents?.length ? (
                  <ul className="list-disc ml-6 text-blue-600">
                    {student.documents.map((doc, i) => (
                      <li key={i}><a href={doc.url} target="_blank" rel="noreferrer">{doc.name}</a></li>
                    ))}
                  </ul>
                ) : <p className="ml-6 text-gray-500">No documents available.</p>}
              </div>

              <p className="flex items-center text-blue-600 hover:underline">
                <FiCalendar className="mr-2" />
                <a
                  href="#"
                  onClick={() => setShowSupervisionModal(true)} // new state handler
                  className="text-sm flex items-center text-blue-600 hover:underline"
                >
                  <FiCalendar className="mr-2" /> View Supervision Schedule
                </a>
              </p>

              <div className="text-gray-600">
                <h3 className="font-medium">Contact</h3>
                <p className="flex items-center"><FiMail className="mr-2" /> {student.email || "Not provided"}</p>
                <p className="flex items-center"><FiPhone className="mr-2" /> {student.phone || "Not provided"}</p>
              </div>
            </div>
          )}

          {activeTab === 'assessment' && (
            <div className="space-y-3">
              {student.assessments?.length ? (
                <ul className="list-disc ml-4 text-gray-700">
                  {student.assessments.map((a, i) => (
                    <li key={i}>
                      <span className="font-medium">{a.title}</span>: {a.score}/100
                    </li>
                  ))}
                </ul>
              ) : <p>No assessment data available.</p>}
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="space-y-3">
              {student.feedback?.length ? (
                student.feedback.map((entry, i) => (
                  <div key={i} className="border p-2 rounded bg-gray-50">
                    <p className="font-medium text-gray-800">{entry.by}</p>
                    <p className="text-gray-600 italic">{entry.comment}</p>
                  </div>
                ))
              ) : <p>No feedback recorded.</p>}
            </div>
          )}
        </div>
        {showSupervisionModal && (
          <StudentSupervisionSchedule
            studentId={student.id}
            lecturerId={user.id}
            onClose={() => setShowSupervisionModal(false)}
          />
        )}

      </div>
    </div>
  );
};
