import { useState } from 'react';
import {
  FiX, FiFileText, FiDownload, FiCheck, FiEye,
  FiClock, FiAlertCircle, FiUser, FiMail, FiPhone,
  FiBook
} from 'react-icons/fi';
import { StudentProfile } from './StudentProfile';

const DocumentViewer = ({ user, onClose }) => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState({});

  // Mock document data - in a real app this would come from props or API
  const documents = [
    {
      id: 'tp',
      title: 'Teaching Practice Report',
      submitted: user.documents?.tp || false,
      date: '2023-05-15',
      status: approvalStatus.tp || 'pending',
      file: '/sample-docs/tp-report.pdf'
    },
    {
      id: 'timetable',
      title: 'School Timetable',
      submitted: user.documents?.timetable || false,
      date: '2023-05-10',
      status: approvalStatus.timetable || 'pending',
      file: '/sample-docs/timetable.pdf'
    },
    {
      id: 'assessment',
      title: 'Assessment Documents',
      submitted: user.documents?.assessment || false,
      date: '2023-05-12',
      status: approvalStatus.assessment || 'pending',
      file: '/sample-docs/assessment.pdf'
    },
    {
      id: 'records',
      title: 'Records of Work',
      submitted: user.documents?.records || false,
      date: '2023-05-08',
      status: approvalStatus.records || 'pending',
      file: '/sample-docs/records.pdf'
    }
  ];

  const handleApprove = (docId) => {
    setApprovalStatus(prev => ({ ...prev, [docId]: 'approved' }));
    // In a real app, you would make an API call here
    console.log(`Approved ${docId} for ${user.name}`);
  };

  const handleReject = (docId) => {
    setApprovalStatus(prev => ({ ...prev, [docId]: 'rejected' }));
    // In a real app, you would make an API call here
    console.log(`Rejected ${docId} for ${user.name}`);
  };

  const handleDownload = (file) => {
    console.log(`Downloading ${file}`);
    // In a real app, this would trigger a file download
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold flex items-center">
            <FiUser className="mr-2 text-blue-500" />
            {user.name}'s Documents
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50">
          {/* <StudentProfile student={user} /> */}
          <div className="flex items-center">
            <FiMail className="mr-2 text-gray-500" />
            <span>{user.email || 'No email provided'}</span>
          </div>
          <div className="flex items-center">
            <FiPhone className="mr-2 text-gray-500" />
            <span>{user.phone || 'No phone provided'}</span>
          </div>
          <div className="flex items-center">
            <FiBook className="mr-2 text-gray-500" />
            <span>{user.school || 'No school assigned'}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Document List */}
          <div className="w-full md:w-1/3 border-r overflow-y-auto">
            <div className="p-4">
              <h3 className="font-medium text-gray-700 mb-3">Submitted Documents</h3>
              <div className="space-y-2">
                {documents.map(doc => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoc(doc)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${selectedDoc?.id === doc.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50 border border-transparent'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <FiFileText className={`mr-2 ${doc.submitted ? 'text-blue-500' : 'text-gray-300'}`} />
                        <div>
                          <p className="font-medium">{doc.title}</p>
                          <p className="text-xs text-gray-500 flex items-center">
                            <FiClock className="mr-1" />
                            {doc.submitted ? `Submitted on ${doc.date}` : 'Not submitted'}
                          </p>
                        </div>
                      </div>
                      {doc.submitted && (
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(doc.status)}`}>
                          {doc.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Document Preview */}
          <div className="w-full md:w-2/3 flex flex-col">
            {selectedDoc ? (
              <>
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="font-medium text-lg">{selectedDoc.title}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDownload(selectedDoc.file)}
                      className="flex items-center text-blue-600 hover:text-blue-800 p-2"
                      title="Download"
                    >
                      <FiDownload />
                    </button>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto">
                  {selectedDoc.submitted ? (
                    <>
                      <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-64">
                        <div className="text-center">
                          <FiEye className="mx-auto text-4xl text-gray-400 mb-2" />
                          <p className="text-gray-600">Document preview would appear here</p>
                          <p className="text-sm text-gray-500 mt-2">
                            {selectedDoc.file} - {selectedDoc.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end space-x-3 mt-4">
                        <button
                          onClick={() => handleReject(selectedDoc.id)}
                          className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <FiAlertCircle className="mr-2" />
                          Reject
                        </button>
                        <button
                          onClick={() => handleApprove(selectedDoc.id)}
                          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <FiCheck className="mr-2" />
                          Approve
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FiAlertCircle className="mx-auto text-3xl mb-3" />
                      <p>This document has not been submitted yet</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <FiFileText className="mx-auto text-4xl mb-3" />
                  <p>Select a document to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;