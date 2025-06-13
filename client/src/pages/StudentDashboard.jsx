import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { StatusCard, QuickAction } from '../components/UI';
import { DocumentSubmissionPhase } from '../components/DocumentSubmissionPhase';
import DocumentUploadModal from '../components/DocumentUploadModal';
import TpTimeline from '../components/TpTimeline';
import ActiveTPTasks from '../components/ActiveTPTasks';
import { fetchSchoolDataByStudentId, getDocumentStatusByUserId } from '../services/schoolServices';
import {
  FiCalendar, FiBook, FiUpload, FiMessageSquare,
  FiCheckCircle, FiClock, FiAlertCircle, FiFileText,
  FiHome, FiMapPin, FiAward, FiUsers, FiFile
} from 'react-icons/fi';

const StudentDashboard = () => {
  // State for different TP phases
  const [currentPhase, setCurrentPhase] = useState(); // 'document-submission', 'pre-tp', 'active-tp', 'assessment', 'post-tp', 'completed'
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [supervisorInfo, setSupervisorInfo] = useState(null);
  const [uploadType, setUploadType] = useState('');

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  const { data: documentStatus, isLoading: isStatusLoading, isError: isStatusError, error: statusError } = useQuery({
    queryKey: ['student-document-status', userId],
    queryFn: async () => {
      if (!userId) throw new Error("User not authenticated");
      return await getDocumentStatusByUserId(userId);
    },
    enabled: !!userId,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: studentSchoolData, isLoading: isSchoolLoading, isError: isSchoolError, error: schoolError } = useQuery({
    queryKey: ['student-school-info', userId],
    queryFn: async () => {
      if (!userId) throw new Error("User not authenticated");
      return await fetchSchoolDataByStudentId(userId);
    },
    enabled: !!userId && documentStatus?.status === "APPROVED",
    refetchOnWindowFocus: false,
    retry: false,
  });



  // Simulate phase changes based on TP timeline
  useEffect(() => {
    const determinePhase = () => {
      if (!documentStatus) return 'document-submission';

      if (documentStatus.status === 'PENDING') return 'pre-tp';
      if (documentStatus.status === 'APPROVED') return 'active-tp';
      if (documentStatus.status === 'REJECTED') return 'document-submission';

      return 'document-submission';
    };

    setCurrentPhase(determinePhase());
  }, [documentStatus]);

  // Handle document upload
  const handleUpload = (type) => {
    setUploadType(type);
    setShowUploadModal(true);
  };


  // Render different content based on current phase
  console.log("Current Phase:", currentPhase);
  const renderPhaseContent = () => {
    switch (currentPhase) {
      case 'document-submission': return <DocumentSubmissionPhase
        handleUpload={handleUpload}
        isError={isStatusError}
        error={statusError}
        isLoading={isStatusLoading}
        documentStatus={documentStatus}
      />;

      case 'pre-tp':
        return (
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg flex items-center mb-2">
              <FiClock className="mr-2 text-yellow-600" />
              Awaiting Verification
            </h3>
            <p>Your documents have been submitted and are under review by the university admin. You'll be notified once verified.</p>
          </div>
        );

      case 'active-tp':
         return <ActiveTPTasks handleUpload={handleUpload} />;

      case 'assessment':
        return (
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg flex items-center mb-2">
              <FiAlertCircle className="mr-2 text-purple-600" />
              Upcoming Assessment
            </h3>
            <p className="mb-2">You have an assessment scheduled for {tpData.upcomingAssessment.date}.</p>
            <p className="mb-3">Assessor: {tpData.upcomingAssessment.assessorName}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
              View Assessment Details
            </button>
          </div>
        );

      case 'post-tp':
        return (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg flex items-center mb-2">
              <FiFile className="mr-2 text-blue-600" />
              Final Submission
            </h3>
            <p className="mb-3">Congratulations on completing your Teaching Practice! Please submit your final documents for review.</p>
            <button
              onClick={() => handleUpload('final-documents')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FiUpload className="mr-2" />
              Submit Final Documents
            </button>
          </div>
        );

      case 'completed':
        return (
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg flex items-center mb-2">
              <FiAward className="mr-2 text-green-600" />
              TP Successfully Completed!
            </h3>
            <p className="mb-2">Congratulations! You've successfully completed your Teaching Practice.</p>
            <p>Your final documents have been approved. Grading will be communicated by your department.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout
      title="Student Teacher Dashboard"
      role="student"
      breadcrumbs={[
        { label: 'Home', href: '/student-dashboard' },
        { label: 'TP Dashboard', href: '/student-dashboard' }
      ]}
    >
      <div className="space-y-6">
        <TpTimeline currentPhase={currentPhase} documentStatus={documentStatus} />


        {/* Phase-specific content */}
        {renderPhaseContent()}

        {/* School Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* School Information – conditionally rendered */}
          {documentStatus?.status === "APPROVED" && (
            <section className="bg-white p-4 rounded-lg shadow w-full md:w-1/2">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <FiHome className="mr-2 text-blue-500" />
                School Information
              </h2>
              <div className="p-3 bg-gray-50 rounded-lg">
                {studentSchoolData?.school ? (
                  <>
                    <h3 className="font-medium mb-1">{studentSchoolData.school.name}</h3>
                    <p>{studentSchoolData.school.address}</p>
                    <p className="text-sm text-gray-600 mt-1">{studentSchoolData.school.contact}</p>
                    <p className="text-sm text-gray-500 mt-1">Zone: {studentSchoolData.school.zone.name}</p>
                  </>
                ) : (
                  <p className="text-gray-500">No current school</p>
                )}
              </div>
            </section>
          )}


          {/* Supervisor Information – always rendered */}
          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiMapPin className="mr-2 text-blue-500" />
              Supervisor Information
            </h2>
            <div className="p-3 bg-gray-50 rounded-lg">
              {supervisorInfo ? (
                <>
                  <h3 className="font-medium mb-1">{supervisorInfo.name}</h3>
                  <p>{supervisorInfo.email}</p>
                  <p className="text-sm text-gray-600 mt-1">{supervisorInfo.phone}</p>
                </>
              ) : (
                <p className="text-gray-500">No supervisor assigned</p>
              )}
            </div>
          </section>
        </div>

        {/* Quick Actions */}
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <QuickAction
              icon={<FiMessageSquare />}
              label="Message Lecturer"
              href="/student/message"
            />
            <QuickAction
              icon={<FiBook />}
              label="TP Guidelines"
              href="/resources/guidelines"
            />
            <QuickAction
              icon={<FiFileText />}
              label="View Submissions"
              href="/student/submissions"
            />
            <QuickAction
              icon={<FiUsers />}
              label="Support Forum"
              href="/support"
            />
          </div>
        </section>
      </div>

      {/* Document Upload Modal */}
      <DocumentUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        type={uploadType}
        onUpload={(files) => {
          // Handle file upload logic here
          console.log(`Uploading ${uploadType}:`, files);
          setShowUploadModal(false);
          // Update state accordingly
        }}
      />
    </Layout>
  );
};

export default StudentDashboard;