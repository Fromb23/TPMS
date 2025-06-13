import React from 'react';
import { FiAlertCircle, FiCheckCircle, FiUpload } from 'react-icons/fi';

export const DocumentSubmissionPhase = ({ documentStatus, isLoading, isError, error, handleUpload }) => {
  if (isLoading) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg mb-6 flex items-start space-x-4">
        <svg className="animate-spin h-6 w-6 text-gray-600 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <div>
          <h3 className="font-semibold text-lg flex items-center mb-1">
            <FiAlertCircle className="mr-2 text-gray-600" />
            Loading Document Status...
          </h3>
          <p className="text-sm text-gray-600">Please wait while we fetch your document status.</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-100 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lg flex items-center mb-2 text-red-700">
          <FiAlertCircle className="mr-2" />
          Failed to Fetch Status
        </h3>
        <p className="text-sm text-red-600">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
      </div>
    );
  }

  if (!documentStatus || documentStatus.status === null) {
    return (
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lg flex items-center mb-2">
          <FiAlertCircle className="mr-2 text-red-600" />
          Action Required
        </h3>
        <p>Please submit your school documents and TP acceptance letter to begin the process.</p>
        <button 
          onClick={() => handleUpload('school-documents')}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FiUpload className="mr-2" />
          Upload School Documents
        </button>
      </div>
    );
  }

  // Render based on actual status
  switch (documentStatus.status) {
    case 'PENDING':
      return (
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-lg flex items-center mb-2">
            <FiAlertCircle className="mr-2 text-yellow-600" />
            Documents Submitted
          </h3>
          <p>Your documents have been received and are awaiting verification.</p>
        </div>
      );
    case 'APPROVED':
      return (
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-lg flex items-center mb-2">
            <FiCheckCircle className="mr-2 text-green-600" />
            Documents Verified
          </h3>
          <p>Your documents have been approved. You may now proceed to the next phase.</p>
        </div>
      );
    case 'REJECTED':
      return (
        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-lg flex items-center mb-2">
            <FiAlertCircle className="mr-2 text-red-600" />
            Documents Rejected
          </h3>
          <p>Your submitted documents were rejected. Please re-upload them for verification.</p>
          <button 
            onClick={() => handleUpload('school-documents')}
            className="mt-3 bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FiUpload className="mr-2" />
            Re-upload Documents
          </button>
        </div>
      );
    default:
      return null;
  }
};
