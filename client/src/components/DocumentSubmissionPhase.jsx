import React from 'react';
import { FiAlertCircle, FiCheckCircle, FiUpload } from 'react-icons/fi';
import LoadingComponent from '@/components/LoadingComponent';
import Button from '@/components/ui/Button/Button';

export const DocumentSubmissionPhase = ({ documentStatus, isLoading, isError, error, handleUpload }) => {
  if (isLoading) {
    return <LoadingComponent message="Please wait while we fetch your document status..." />;
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
        <Button
          onClick={() => handleUpload('school-documents')}
          variant="primary"
        >
          <FiUpload className="mr-2" />
          Upload School Documents
        </Button>
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
          <Button
            fullWidth={false}
            onClick={() => handleUpload('school-documents')}
            variant="danger"
          >
            <FiUpload className="mr-2" />
            Re-upload Documents
          </Button>
        </div>
      );
    default:
      return null;
  }
};
