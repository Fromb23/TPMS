import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import {
  FiX, FiFileText, FiDownload, FiCheck, FiEye,
  FiClock, FiAlertCircle, FiUser, FiMail, FiPhone,
  FiBook
} from 'react-icons/fi';
import { updateDocumentStatus } from '../services/documentServices';



const DocumentViewer = ({ student, onClose, userRole }) => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [approvalStatus, setApprovalStatus] = useState({});


  const documentMap = {
    TP_APPLICATION: 'Teaching Practice Report',
    TP_TIMETABLE: 'School Timetable',
    TP_ASSESSMENT: 'Assessment Documents',
    TP_RECORDS: 'Records of Work'
  };

  const documents = (student.documents || []).map(doc => ({
    id: doc.id,
    title: documentMap[doc.type] || doc.type,
    submitted: true,
    status: doc.status?.toLowerCase() || 'pending',
    file: doc.url || '',
    date: new Date(doc.createdAt).toLocaleDateString(),
    type: doc.type
  }));

  console.log("Student:", student);
  console.log("Documents:", documents);
  const filteredDocuments = documents.filter(doc => {
    if (userRole === 'ADMIN') return true;
    if (userRole === 'LECTURER') return doc.type !== 'TP_APPLICATION';
    return false;
  });

  const { mutate: updateDocStatus, isLoading } = useMutation({
    mutationFn: updateDocumentStatus,
    onSuccess: (data) => {
      alert(`Document status updated for ${student?.user?.fullName}`);
      window.location.reload();
    },
    onError: (error) => {
      console.error("Error updating document status:", error);
    }
  });

  const handleApprove = (docId) => {
    setApprovalStatus(prev => ({ ...prev, [docId]: 'approved' }));
    updateDocStatus({ documentId: docId, status: 'APPROVED' });
  };

  const handleReject = (docId) => {
    setApprovalStatus(prev => ({ ...prev, [docId]: 'rejected' }));
    updateDocStatus({ documentId: docId, status: 'REJECTED' });
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
            {student?.user?.fullName}'s Documents
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
            <span>{student?.user?.email || 'No email provided'}</span>
          </div>
          <div className="flex items-center">
            <FiPhone className="mr-2 text-gray-500" />
            <span>{student.phone || 'No phone provided'}</span>
          </div>
          <div className="flex items-center">
            <FiBook className="mr-2 text-gray-500" />
            <span>{student.school || 'No school assigned'}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Document List */}
          <div className="w-full md:w-1/3 border-r overflow-y-auto">
            <div className="p-4">
              <h3 className="font-medium text-gray-700 mb-3">Submitted Documents</h3>
              <div className="space-y-2">
                {filteredDocuments.map(doc => (
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
                      {/* --- Preview --- */}
                      <div className="bg-gray-100 rounded-lg p-4 mb-4 h-64">
                        {selectedDoc.file && (
                          selectedDoc.file.toLowerCase().endsWith('.pdf') ? (
                            <iframe
                              src={`http://localhost:3000/uploads/${encodeURIComponent(selectedDoc.file)}`}
                              title="PDF Preview"
                              className="w-full h-full rounded"
                            />
                          ) : (
                            <img
                              src={`http://localhost:3000/uploads/${encodeURIComponent(selectedDoc.file)}`}
                              alt="Document Preview"
                              className="w-full h-full object-contain rounded"
                            />
                          )
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        <a
                          href={`http://localhost:3000/uploads/${encodeURIComponent(selectedDoc.file)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View Document
                        </a>{" "}
                        - {selectedDoc.date}
                      </p>
                      <div className="flex justify-end space-x-3 mt-4">
                        {selectedDoc.status !== 'approved' && (
                          <button
                            onClick={() => handleApprove(selectedDoc.id)}
                            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                          >
                            <FiCheck className="mr-2" />
                            Approve
                          </button>
                        )}

                        {selectedDoc.status !== 'rejected' && (
                          <button
                            onClick={() => handleReject(selectedDoc.id)}
                            className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <FiAlertCircle className="mr-2" />
                            Reject
                          </button>
                        )}
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