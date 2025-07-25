import { useState, useCallback } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { FiUpload, FiX, FiFile, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import DocumentFileInput from '@/components/DocumentFileInput';
import { submitSchoolDocuments } from '@/services/schoolServices';
import { submitLessonPlan } from '@/services/lessonPlanServices';
import { submitFinalTPDocument } from '@/services/documentServices';
import LessonPlanTemplate from '@/components/LessonPlanTemplate';
import RecordOfWorkTemplate from '@/components/RecordOfWorkTemplate';
import { submitRecordOfWork } from '@/services/recordOfWorkServices';
import { fetchSchools } from '@/services/schoolServices';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import Select from '@/components/ui/Select/Select';

const DocumentUploadModal = ({ isOpen, onClose, type, onUpload, documentStatus, token, userId }) => {
  const queryClient = useQueryClient();

  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isCustomSchool, setIsCustomSchool] = useState(false);

  const [formData, setFormData] = useState({
    // school-documents
    schoolName: "",
    schoolAddress: "",
    schoolContact: "",
    schoolCounty: "",
    subjectCombination: "",
    schoolConstituency: "",

    // lesson-plan
    subject: "",
    lessonTitle: "",
    startTime: "",
    endTime: "",
    comments: "",

    // record-of-work
    school: "",
    learningArea: "",
    teacher: "",
    records: [
      { date: '', week: '', workDone: '', reflection: '', signature: '' }
    ],

    // final-tp
    title: "",         // <-- added
    content: "",       // <-- added
  });

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
    onSuccess: () => {
      queryClient.invalidateQueries(['currentPhase', userId]);
      setUploadSuccess(true);
      onUpload(files);
      setTimeout(handleClose, 5000);
    },
    onError: (error) => {
      setUploadError("School document submission failed. Please try again.");
      setIsUploading(false);
    },
  });

  const { data: schools = [], isLoading, isError, error } = useQuery({
    queryKey: ['schools'],
    queryFn: () => fetchSchools(token),
    onError: (err) => {
      console.error("Failed to fetch schools:", err);
      setUploadError("Error fetching schools.");
    },
  });

  const lessonPlanMutation = useMutation({
    mutationFn: (lessonData) => submitLessonPlan(lessonData),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['currentPhase', userId]);
      setUploadSuccess(true);
      onUpload(files);
      setTimeout(handleClose, 5000);
    },
    onError: (error) => {
      setUploadError("Lesson plan submission failed. Please try again.");
      setIsUploading(false);
    },
  });

  const recordMutation = useMutation({
    mutationFn: (recordData) => submitRecordOfWork(recordData),
    onSuccess: (data) => {
      setUploadSuccess(true);
      onUpload(files);
      setTimeout(handleClose, 5000);
    },
    onError: (error) => {
      setUploadError("Record of work submission failed. Please try again.");
      setIsUploading(false);
    },
  });

  const finalTPMutation = useMutation({
    mutationFn: submitFinalTPDocument,
    onSuccess: () => {
      setUploadSuccess(true);
      onUpload(files);
      setTimeout(handleClose, 5000);
    },
    onError: () => {
      setUploadError("Final document submission failed. Please try again.");
      setIsUploading(false);
    },
  });

  const handleSchoolSelect = (e) => {
    const selectedName = e.target.value;
    if (selectedName === "__custom__") {
      setIsCustomSchool(true);
      setFormData((prev) => ({
        ...prev,
        schoolName: "",
        schoolAddress: "",
        schoolContact: "",
        schoolCounty: "",
      }));
    } else {
      setIsCustomSchool(false);
      const selected = schools.find((s) => s.name === selectedName);
      if (selected) {
        setFormData((prev) => ({
          ...prev,
          schoolName: selected.name,
          schoolAddress: selected.address || "",
          schoolContact: selected.contact || "",
          schoolCounty: selected.county || "",
          schoolConstituency: selected.constituency || "",
          subjectCombination: selected.subjectCombination || "",
        }));
      }
    }
  };

  const fields = [
    { name: 'schoolName', label: 'School Name', placeholder: 'School Name' },
    { name: 'schoolAddress', label: 'School Address', placeholder: 'School Address' },
    { name: 'schoolContact', label: 'School Contact', placeholder: 'School Contact' },
    { name: 'schoolCounty', label: 'School County', placeholder: 'School County' },
    { name: 'subjectCombination', label: 'Subject Combination', placeholder: 'Subject Combination' },
  ];

  const handleSubmit = (e) => {
    console.log("Submitting document with formData:", formData);
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
        constituency: formData.schoolConstituency,
        subjectCombination: formData.subjectCombination,
      };

      mutation.mutate({ userId, schoolData, files, token });
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
    } else if (type === 'record-of-work') {
      const recordData = {
        userId,
        school: formData.school,
        learningArea: formData.learningArea,
        teacher: formData.teacher,
        records: formData.records,
        subject: formData.subject,
      };
      recordMutation.mutate(recordData);
    } else if (type === 'post-tp') {
      if (files.length === 0) {
        setUploadError("Please select a file to upload");
        setIsUploading(false);
        return;
      }

      const finalTPData = {
        userId,
        title: formData.title,
        content: formData.content,
        file: files[0],
      };

      console.log("Submitting final TP document with data:", finalTPData);
      finalTPMutation.mutate(finalTPData);

    } else {
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
    if (type === 'post-tp') return !formData.title || !formData.content || files.length === 0;
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
      case 'post-tp':
        return {
          title: 'Final TP Submission',
          description: 'Upload your final confidential report.',
          accept: '.pdf',
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-90 overflow-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button
            fullWidth={false}
            onClick={handleClose}
            variant="ghost"
            className="text-red-500"
            disabled={isUploading}
            icon={<FiX size={20} />}
          />
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
              {type === 'post-tp' && (
                <div className="space-y-4 mb-6">
                  <Input
                    type="text"
                    placeholder="Title"
                    value={formData.title || ""}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <textarea
                    placeholder="Content / Description"
                    value={formData.content || ""}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full p-2 border rounded h-24"
                  />
                </div>
              )}
              {type === "school-documents" && (
                <div className="space-y-4 mb-6">
                  <Select
                    onChange={handleSchoolSelect}
                    value={isCustomSchool ? "__custom__" : formData.schoolName || ""}
                    className="w-full p-2 border rounded"
                    options={[
                      { value: '', label: '-- Select School --' },
                      ...schools.map(s => ({ value: s.name, label: s.name })),
                      { value: '__custom__', label: 'Other (Create New School)' }
                    ]}
                  />
                  {fields.map(({ name, label, placeholder }) => (
                    <Input
                      key={name}
                      name={name}
                      label={label}
                      placeholder={placeholder}
                      value={formData[name]}
                      onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                      disabled={name !== 'subjectCombination' && !isCustomSchool}
                      required={name !== 'subjectCombination'}
                    />
                  ))}
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
                <Button
                  fullWidth={false}
                  onClick={handleClose}
                  variant="danger"
                  disabled={isUploading}
                >
                  Cancel
                </Button>

                <Button
                  fullWidth={false}
                  type="submit"
                  disabled={isSubmitDisabled()}
                  variant="primary"
                  className="flex items-center justify-center gap-2"
                >
                  {isUploading ? (
                    <>
                      <AiOutlineLoading3Quarters className="animate-spin w-4 h-4" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FiUpload className="w-4 h-4" />
                      Submit
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentUploadModal;