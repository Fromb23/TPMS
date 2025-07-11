import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { useUser } from '../context/userContext';
import { StatusCard, QuickAction } from '../components/UI';
import { DocumentSubmissionPhase } from '../components/DocumentSubmissionPhase';
import DocumentUploadModal from '../components/DocumentUploadModal';
import TpTimeline from '../components/TpTimeline';
import StudentSupervisionCard from '../components/StudentSupervisionCard';
import ActiveTPTasks from '../components/ActiveTPTasks';
import { fetchSchoolDataByStudentId, getDocumentStatusByUserId } from '../services/schoolServices';
import { fetchSupervisionSchedule } from '../services/supervisionServices';
import { fetchLessonPlanStatusToday } from '../services/lessonPlanServices';
import { getFinalDocumentStatus } from '../services/documentServices';
import {
  FiCalendar, FiBook, FiUpload, FiMessageSquare,
  FiCheckCircle, FiClock, FiAlertCircle, FiFileText,
  FiHome, FiMapPin, FiAward, FiUsers, FiFile
} from 'react-icons/fi';
import { fetchRecordOfWorkStatusToday } from '../services/recordOfWorkServices';
import { getStudentById } from '../services/studentServices';
import { getCurrentPhase } from '../services/tpPhaseService';
import LoadingComponent from '../components/LoadingComponent';


const StudentDashboard = () => {
  const [delayPassed, setDelayPassed] = useState(false);
  // const [currentPhase, setCurrentPhase] = useState(null); // 'document-submission', 'pre-tp', 'active-tp', 'assessment', 'post-tp', 'completed'
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [rejectSessionId, setRejectSessionId] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [uploadType, setUploadType] = useState('');
  const [showSupervisionCard, setShowSupervisionCard] = useState(false);
  const { user, setToken, token } = useUser();
  const userId = user?.id;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayPassed(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const { data: studentDetails, isLoading: loadingStudentDetails } = useQuery({
    queryKey: ['student-details', userId],
    queryFn: () => getStudentById(userId),
    enabled: !!userId,
    refetchOnWindowFocus: false,
    retry: false,
  });
  console.log("Student data fetched in student dashboard", studentDetails);

  const { data: finalDocumentStatus, isLoading: isFinalDocLoading, isError: isFinalDocError, error: finalDocError } = useQuery({
    queryKey: ['final-document-status', userId],
    queryFn: () => getFinalDocumentStatus(userId),
    enabled: !!userId,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: documentStatus, isLoading: isStatusLoading, isError: isStatusError, error: statusError } = useQuery({
    queryKey: ['student-document-status', userId],
    queryFn: () => getDocumentStatusByUserId(userId, token),
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

  const { data: submissionStatus, isLoading: isLessonStatusLoading, isError: isLessonStatusError, error: lessonStatusError
  } = useQuery({
    queryKey: ['lesson-plan-status', userId],
    queryFn: async () => {
      if (!userId) throw new Error("User not authenticated");
      return await fetchLessonPlanStatusToday(userId);
    },
    enabled: !!userId,
    refetchOnWindowFocus: false,
    retry: false,
  });

  // Fetch supervisor information
  const { data: supervisorInfo, isLoading: isSupervisorLoading, isError: isSupervisorError, error: supervisorError } = useQuery({
    queryKey: ['supervisor-info', userId],
    queryFn: () => fetchSupervisionSchedule(userId),
    enabled: !!userId,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleAcceptSupervision = async (supervisionId) => {
    // You can POST to /api/supervision/accept
    console.log(`Accepted supervision ID: ${supervisionId}`);
  };

  const handleRejectSupervision = async (supervisionId) => {
    console.log(`Rejected supervision ID: ${supervisionId} with reason: ${rejectionReason}`);
    setRejectSessionId(null);
    setRejectionReason('');
  };

  // Fetch record of work status
  const { data: recordOfWorkStatus, isLoading: isRecordOfWorkLoading, isError: isRecordOfWorkError, error: recordOfWorkError } = useQuery({
    queryKey: ['record-of-work-status', userId],
    queryFn: async () => {
      if (!userId) throw new Error("User not authenticated");
      return await fetchRecordOfWorkStatusToday(userId);
    },
    enabled: !!userId,
    refetchOnWindowFocus: false,
    retry: false,
  });
  
  
  const {data: currentPhase, isLoadingPhase, isError, error} = useQuery({
    queryKey: ['currentPhase', userId],
    queryFn: () => getCurrentPhase(userId, token),
    enabled: !!userId && !!token,
    retry: 1,
  });
  console.log("Token passed to getCurrentPhase:", token);

  // Simulate phase changes based on TP timeline
 useEffect(() => {
    if (currentPhase) {
      console.log("Current Phase from query:", currentPhase);
    }
  }, [currentPhase]);

  const isLoadingAll =
    !delayPassed ||
    loadingStudentDetails ||
    isFinalDocLoading ||
    isStatusLoading ||
    isSchoolLoading ||
    isLessonStatusLoading ||
    isSupervisorLoading ||
    isRecordOfWorkLoading;

  if (isLoadingAll) {
    return <LoadingComponent />;
  }

  // Handle document upload
  const handleUpload = (type) => {
    setUploadType(type);
    setShowUploadModal(true);
  };  

  // Render different content based on current phase
  const renderPhaseContent = () => {
    if (!currentPhase || isLoadingPhase) {
      return (
        <div className="text-center py-10">
          <p className="text-gray-600">Determining your TP phase...</p>
          <div className="animate-spin mt-3 h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto" />
        </div>
      );
    }
          console.log("Current Phase before switch:", currentPhase);
    switch (currentPhase?.phase) {
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
        return <ActiveTPTasks handleUpload={handleUpload} disabled={submissionStatus?.hasSubmitted || isLessonStatusLoading}
          recordOfWorkDisabled={recordOfWorkStatus?.hasSubmitted || isRecordOfWorkLoading} />;

      case 'assessment':
        return (
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg flex items-center mb-2">
              <FiAlertCircle className="mr-2 text-purple-600" />
              Upcoming Assessment
            </h3>
            <button onClick={() => setShowSupervisionCard(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md"
            >
              View Assessment Details
            </button>
            {showSupervisionCard && supervisorInfo.map((session, index) => (
              <StudentSupervisionCard key={index} schedule={session} />
            ))}
          </div>
        );
      case 'post-tp':
        return (
          <div className="space-y-3">
            {finalDocumentStatus?.status === 'REJECTED' && (
              <div className="text-sm text-red-600 bg-red-100 border border-red-300 rounded p-3">
                Your previous final TP document was <strong>rejected</strong>. Please review it and resubmit.
              </div>
            )}

            <button
              onClick={() => handleUpload('post-tp')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FiUpload className="mr-2" />
              Submit Final TP Document
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
        console.log("studentDetails.hasSeenWelcome:", studentDetails?.hasSeenWelcome);
        return (
          <div className="bg-red-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-lg flex items-center mb-2">
              <FiAlertCircle className="mr-2 text-red-600" />
              Error
            </h3>
            <p>Unable to determine your current phase. Please contact support.</p>
          </div>
        );
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
      <Helmet>
        <title>Student Teacher Dashboard</title>
        <meta name="description" content="Dashboard for student teachers to manage their Teaching Practice." />
      </Helmet>
      <div className="space-y-6">
        <TpTimeline currentPhase={currentPhase} documentStatus={documentStatus} />

        {renderPhaseContent()}


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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


          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FiMapPin className="mr-2 text-blue-500" />
              Supervisor Information
            </h2>
            <div className="space-y-4">
              {supervisorInfo && supervisorInfo.length > 0 ? (
                supervisorInfo.map((session, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border shadow">
                    <h3 className="text-lg font-semibold text-blue-800">
                      <span>Dr. </span>{session.lecturer?.user?.fullName || 'Lecturer Name Not Available'}
                    </h3>
                    <p className="text-sm text-gray-700">Email: {session.lecturer?.user?.email || 'N/A'}</p>
                    <p className="text-sm text-gray-700 mb-2">Phone: {session.lecturer?.user?.phone || 'Not Provided'}</p>

                    <div className="mt-2 space-y-1 text-sm">
                      <p><b>Supervision Date:</b> {new Date(session.startDate).toLocaleDateString()}</p>
                      {session.subjects?.map((subj, i) => (
                        <p key={i}>
                          <b>{subj.name}</b>: {new Date(subj.startTime).toLocaleTimeString()} - {new Date(subj.endTime).toLocaleTimeString()}
                        </p>
                      ))}
                      <p><b>Lecturer Notes:</b> {session.notes || <i>No notes provided.</i>}</p>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        onClick={() => handleAcceptSupervision(session.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => setRejectSessionId(session.id)}
                      >
                        Reject
                      </button>
                    </div>

                    {/* Show reason input if rejection is triggered */}
                    {rejectSessionId === session.id && (
                      <div className="mt-2">
                        <textarea
                          rows={2}
                          className="w-full border p-2 rounded"
                          placeholder="Reason for rejection"
                          value={rejectionReason}
                          onChange={(e) => setRejectionReason(e.target.value)}
                        />
                        <button
                          className="mt-1 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                          onClick={() => handleRejectSupervision(session.id)}
                          disabled={!rejectionReason.trim()}
                        >
                          Submit Rejection
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">No supervisor assigned yet.</p>
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