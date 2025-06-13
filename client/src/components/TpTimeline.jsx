import { FiCalendar } from 'react-icons/fi';
import { ProgressSteps } from './UI';

const TpTimeline = ({ currentPhase, documentStatus }) => {
  const tpTimeline = [
  {
    id: 1,
    name: 'Document Submission',
    status:
      !documentStatus
        ? 'pending'
        : documentStatus?.status === 'REJECTED'
        ? 'current'
        : 'completed',
  },
  {
    id: 2,
    name: 'Verification',
    status:
      documentStatus?.status === 'PENDING'
        ? 'current'
        : documentStatus?.status === 'REJECTED'
        ? 'pending'
        : documentStatus?.status === 'APPROVED'
        ? 'completed'
        : 'pending',
  },
  {
    id: 3,
    name: 'Active TP',
    status:
      ['active-tp', 'assessment'].includes(currentPhase)
        ? 'current'
        : ['document-submission', 'pre-tp'].includes(currentPhase)
        ? 'pending'
        : 'completed',
  },
  {
    id: 4,
    name: 'Assessments',
    status:
      currentPhase === 'assessment'
        ? 'current'
        : ['post-tp', 'completed'].includes(currentPhase)
        ? 'completed'
        : 'pending',
  },
  {
    id: 5,
    name: 'Final Submission',
    status:
      currentPhase === 'post-tp'
        ? 'current'
        : currentPhase === 'completed'
        ? 'completed'
        : 'pending',
  },
  {
    id: 6,
    name: 'Completion',
    status: currentPhase === 'completed' ? 'current' : 'pending',
  },
];

  const currentStageId = tpTimeline.find(stage => stage.status === 'current')?.id;

  return (
    <section className="hidden md:block bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <FiCalendar className="mr-2 text-blue-500" />
        TP Timeline
      </h2>
      <ProgressSteps stages={tpTimeline} currentStage={currentStageId} />
    </section>
  );
};

export default TpTimeline;
