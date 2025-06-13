// components/DocumentSubmissionPhase.jsx
import { FiAlertCircle, FiUpload, FiCheckCircle } from 'react-icons/fi';

const DocumentSubmissionPhase = ({ documentStatus, handleUpload }) => {
  if (documentStatus?.submitted) {
    return (
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-lg flex items-center mb-2">
          <FiCheckCircle className="mr-2 text-green-600" />
          Documents Submitted
        </h3>
        <p>Your documents have been received and are awaiting verification by the university.</p>
      </div>
    );
  }

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
};

export default DocumentSubmissionPhase;
