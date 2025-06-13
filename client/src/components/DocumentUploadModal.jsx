import { useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { FiUpload, FiX, FiFile, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import DocumentFileInput from './DocumentFileInput';
import { submitSchoolDocuments } from '../services/schoolServices';
import { submitLessonPlan } from '../services/lessonPlanServices';
import LessonPlanTemplate from './LessonPlanTemplate';
import RecordOfWorkTemplate from './RecordOfWorkTemplate';

const DocumentUploadModal = ({ isOpen, onClose, type, onUpload, documentStatus }) => {
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // school-documents
    schoolName: "",
    schoolAddress: "",
    schoolContact: "",
    schoolCounty: "",
    subjectCombination: "",

    // lesson-plan
    subject: "",
    lessonTitle: "",
    startTime: "",
    endTime: "",
    comments: "",

    // record-of-work
    school: "",
    learningArea: "",
    teacherName: "",
    records: [],
  });

  const user = localStorage.getItem("user");
  const userId = user ? JSON.parse(user).id : null;

  const handleClose = useCallback(() => {
    setFiles([]);
    setIsUploading(false);
    setUploadError(null);
    setUploadSuccess(false);
    onClose();
  }, [onClose]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setUploadError(null);
  };

  const mutation = useMutation({
    mutationFn: submitSchoolDocuments,
    onSuccess: (data) => {
      setUploadSuccess(true);
      onUpload(files);
      setTimeout(handleClose, 5000);
    },
    onError: (error) => {
      setUploadError("Upload failed. Please try again.");
      setIsUploading(false);
    },
  });

  const lessonPlanMutation = useMutation({
  mutationFn: (lessonData) => submitLessonPlan(lessonData),
  onSuccess: (data) => {
    setUploadSuccess(true);
    onUpload(files);
    setTimeout(handleClose, 5000);
  },
  onError: (error) => {
    setUploadError("Lesson plan submission failed. Please try again.");
    setIsUploading(false);
  },
});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId) {
      setUploadError("User not authenticated");
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    if (type === 'school-documents') {
      if (files.length === 0) {
        setUploadError("Please select at least one file");
        setIsUploading(false);
        return;
      }

      const schoolData = {
        name: formData.schoolName,
        address: formData.schoolAddress,
        contact: formData.schoolContact,
        county: formData.schoolCounty,
        subjectCombination: formData.subjectCombination,
      };

      mutation.mutate({ userId, schoolData, files });
    }
    else if (type === 'lesson-plan') {
      const lessonData = {
        userId,
        subject: formData.subject,
        lessonTitle: formData.lessonTitle,
        startTime: formData.startTime,
        endTime: formData.endTime,
        comments: formData.comments,
      };
      lessonPlanMutation.mutate(lessonData);
    }
    else if (type === 'record-of-work') {
      const recordData = {
        userId,
        school: formData.school,
        learningArea: formData.learningArea,
        teacherName: formData.teacherName,
        records: formData.records,
      };
      // recordMutation.mutate(recordData);
    }
    else {
      setUploadError("Unsupported document type");
      setIsUploading(false);
    }
  };

  // Determine if submit button should be disabled
  const isSubmitDisabled = () => {
    if (isUploading) return true;
    if (type === 'school-documents') return files.length === 0;
    if (type === 'lesson-plan') return !formData.subject
    if (type === 'record-of-work') return !formData.school || !formData.learningArea;
    return true;
  };

  const { title, description, accept, multiple } = (() => {
    switch (type) {
      case 'school-documents':
        return {
          title: 'School Documents Submission',
          description: 'Please upload your school acceptance letter and other required documents in PDF format.',
          accept: '.pdf',
          multiple: true
        };
      case 'lesson-plan':
        return {
          title: 'Lesson Plan Submission',
          description: 'Submit your daily lesson plan details.',
          accept: '',
          multiple: false
        };
      case 'record-of-work':
        return {
          title: 'Record of Work Submission',
          description: 'Submit your teaching records.',
          accept: '',
          multiple: false
        };
      default:
        return {
          title: 'Document Upload',
          description: 'Please select files to upload.',
          accept: '*',
          multiple: true
        };
    }
  })();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isUploading}
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-4">
          <p className="mb-4 text-gray-600">{description}</p>

          {uploadSuccess ? (
            <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4 flex items-center">
              <FiCheckCircle className="mr-2" />
              Documents uploaded successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              {type === 'school-documents' && (
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="School Name"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="School Address"
                    value={formData.schoolAddress}
                    onChange={(e) => setFormData({ ...formData, schoolAddress: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="School Contact"
                    value={formData.schoolContact}
                    onChange={(e) => setFormData({ ...formData, schoolContact: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="School County"
                    value={formData.schoolCounty}
                    onChange={(e) => setFormData({ ...formData, schoolCounty: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Subject Combination"
                    value={formData.subjectCombination}
                    onChange={(e) => setFormData({ ...formData, subjectCombination: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              )}

              {type === 'record-of-work' && (
                <RecordOfWorkTemplate formData={formData} setFormData={setFormData} />
              )}

              {type === 'lesson-plan' && (
                <LessonPlanTemplate formData={formData} setFormData={setFormData} />
              )}

              {type !== 'record-of-work' && type !== 'lesson-plan' && (
                <DocumentFileInput
                  onFileSelect={(fileList) => {
                    const selectedFiles = Array.from(fileList);
                    setFiles(selectedFiles);
                    setFormData({ ...formData, file: selectedFiles[0] || null });
                  }}
                  acceptedTypes={accept}
                  multiple={multiple}
                  isUploading={isUploading}
                />
              )}

              {type !== 'lesson-plan' && type !== 'record-of-work' && (
                <ul className="space-y-1">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <FiFile className="mr-2 text-gray-500" />
                      <span
                        className="truncate text-blue-600 hover:underline cursor-pointer"
                        onClick={() => {
                          const url = URL.createObjectURL(file);
                          window.open(url, '_blank');
                        }}
                      >
                        {file.name}
                      </span>
                      <span className="ml-auto text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {uploadError && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 flex items-center">
                  <FiAlertCircle className="mr-2" />
                  {uploadError}
                </div>
              )}

              <div className="border-t pt-4 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  disabled={isUploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  disabled={isSubmitDisabled()}
                >
                  {isUploading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FiUpload className="mr-2" />
                      Submit
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadModal;