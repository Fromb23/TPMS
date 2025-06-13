import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useQuery } from '@tanstack/react-query';
import { ProgressSteps, StatusCard, QuickAction } from '../components/UI';
import DocumentSubmissionPhase from '../components/DocumentSubmissionPhase';
import DocumentUploadModal from '../components/DocumentUploadModal';
import { getDocumentStatusByUserId } from '../services/submitSchoolDocuments';
import { 
  FiCalendar, FiBook, FiUpload, FiMessageSquare, 
  FiCheckCircle, FiClock, FiAlertCircle, FiFileText,
  FiHome, FiMapPin, FiAward, FiUsers, FiFile
} from 'react-icons/fi';

const StudentDashboard = () => {
  // State for different TP phases
  const [currentPhase, setCurrentPhase] = useState('active-tp'); // 'document-submission', 'pre-tp', 'active-tp', 'assessment', 'post-tp', 'completed'
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [supervisorInfo, setSupervisorInfo] = useState(null);
  const [uploadType, setUploadType] = useState('');
  
  const [tpData, setTpData] = useState({
    schoolDocuments: {
      submitted: false,
      approved: false,
      files: []
    },
    tpDocuments: {
      schemesOfWork: { submitted: false, approved: false },
      lessonPlans: { lastSubmitted: null, pendingCount: 3 },
      timetable: { submitted: false },
      subjectCombination: { submitted: false }
    },
    upcomingAssessment: null,
    completedAssessments: [],
    finalDocuments: {
      submitted: false,
      approved: false
    }
  });

   const { data: documentStatus, isLoading: isStatusLoading } = useQuery({
    queryKey: ['student-document-status'],
    queryFn: async () => {
      const user = localStorage.getItem("user");
      const userId = user ? JSON.parse(user).id : null;
      if (!userId) throw new Error("User not authenticated");
      return await getDocumentStatusByUserId({ userId });
    },
    // Only needed if you want to conditionally run the query
    // enabled: !!userId,
    refetchOnWindowFocus: false,
    retry: false,
  });

  // Simulate phase changes based on TP timeline
  useEffect(() => {
    const determinePhase = () => {
      if (!tpData.schoolDocuments.submitted) return 'document-submission';
      if (!tpData.schoolDocuments.approved) return 'pre-tp';
      if (tpData.finalDocuments.approved) return 'completed';
      if (tpData.finalDocuments.submitted) return 'post-tp';
      if (tpData.upcomingAssessment) return 'assessment';
      return 'active-tp';
    };
    
    setCurrentPhase(determinePhase());
  }, [tpData]);

  // Handle document upload
  const handleUpload = (type) => {
    setUploadType(type);
    setShowUploadModal(true);
  };

  // TP timeline data
  const tpTimeline = [
    { id: 1, name: 'Document Submission', status: currentPhase === 'document-submission' ? 'current' : 'completed' },
    { id: 2, name: 'Verification', status: currentPhase === 'pre-tp' ? 'current' : (currentPhase === 'document-submission' ? 'pending' : 'completed') },
    { id: 3, name: 'Active TP', status: ['active-tp', 'assessment'].includes(currentPhase) ? 'current' : (['document-submission', 'pre-tp'].includes(currentPhase) ? 'pending' : 'completed') },
    { id: 4, name: 'Assessments', status: currentPhase === 'assessment' ? 'current' : (currentPhase === 'post-tp' || currentPhase === 'completed' ? 'completed' : 'pending') },
    { id: 5, name: 'Final Submission', status: currentPhase === 'post-tp' ? 'current' : (currentPhase === 'completed' ? 'completed' : 'pending') },
    { id: 6, name: 'Completion', status: currentPhase === 'completed' ? 'current' : 'pending' },
  ];

  // Render different content based on current phase
  const renderPhaseContent = () => {
    switch(currentPhase) {
      case 'document-submission': return <DocumentSubmissionPhase handleUpload={handleUpload} documentStatus={documentStatus} />;
      
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
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <StatusCard 
                icon={<FiFileText />}
                title="Scheme of Work"
                value={tpData.tpDocuments.schemesOfWork.submitted ? 'Submitted' : 'Pending'}
                status={tpData.tpDocuments.schemesOfWork.submitted ? 'success' : 'warning'}
                action={!tpData.tpDocuments.schemesOfWork.submitted ? () => handleUpload('scheme-of-work') : null}
              />
              
              <StatusCard 
                icon={<FiBook />}
                title="Lesson Plans"
                value={tpData.tpDocuments.lessonPlans.pendingCount > 0 ? `${tpData.tpDocuments.lessonPlans.pendingCount} pending` : 'Up to date'}
                status={tpData.tpDocuments.lessonPlans.pendingCount > 0 ? 'warning' : 'success'}
                action={() => handleUpload('lesson-plan')}
              />
              
              <StatusCard 
                icon={<FiCalendar />}
                title="Timetable"
                value={tpData.tpDocuments.timetable.submitted ? 'Submitted' : 'Pending'}
                status={tpData.tpDocuments.timetable.submitted ? 'success' : 'warning'}
                action={!tpData.tpDocuments.timetable.submitted ? () => handleUpload('timetable') : null}
              />
              
              <StatusCard 
                icon={<FiUsers />}
                title="Subject Combination"
                value={tpData.tpDocuments.subjectCombination.submitted ? 'Submitted' : 'Pending'}
                status={tpData.tpDocuments.subjectCombination.submitted ? 'success' : 'warning'}
                action={!tpData.tpDocuments.subjectCombination.submitted ? () => handleUpload('subject-combination') : null}
              />
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-semibold text-lg mb-3">Daily Tasks</h3>
              <p className="mb-3">Remember to submit your lesson plans daily and keep your documents updated.</p>
              <button 
                onClick={() => handleUpload('lesson-plan')}
                className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
              >
                <FiUpload className="mr-2" />
                Submit Today's Lesson Plan
              </button>
            </div>
          </>
        );
      
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
        {/* Progress Tracker */}
        <section className="hidden md:block bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FiCalendar className="mr-2 text-blue-500" />
            TP Timeline
          </h2>
          <ProgressSteps 
            stages={tpTimeline} 
            currentStage={tpTimeline.find(stage => stage.status === 'current')?.id} 
          />
        </section>

        {/* Phase-specific content */}
        {renderPhaseContent()}

        {/* School Information */}
        <section className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <FiHome className="mr-2 text-blue-500" />
            School Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              {schoolInfo ? (
                <>
                  <h3 className="font-medium mb-1">{schoolInfo.name}</h3>
                  <p>{schoolInfo.address}</p>
                  <p className="text-sm text-gray-600 mt-1">{schoolInfo.contact}</p>
                </>
              ) : (
                <p className="text-gray-500">No current school </p>
              )}
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              { supervisorInfo ? (
                <>
                  <h3 className="font-medium mb-1">{supervisorInfo.name}</h3>
                  <p>{supervisorInfo.position}</p>
                  <p className="text-sm text-gray-600 mt-1">{supervisorInfo.contact}</p>
                </>
              ) : (
                <p className="text-gray-500">No assigned supervisor</p>
              )}
            </div>
          </div>
        </section>

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