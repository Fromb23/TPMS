import { FiCalendar, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { ProgressSteps } from './UI';
import { useState } from 'react';

const TpTimeline = ({ currentPhase, documentStatus }) => {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  
 const tpTimeline = [
  {
    id: 1,
    name: 'Document Submission',
    status:
      currentPhase?.phase === 'document-submission' ? 'current' :
      ['pre-tp', 'active-tp', 'assessment', 'post-tp', 'completed'].includes(currentPhase?.phase)
        ? 'completed'
        : 'pending',
  },
  {
    id: 2,
    name: 'Verification',
    status:
      currentPhase?.phase === 'pre-tp' ? 'current' :
      ['active-tp', 'assessment', 'post-tp', 'completed'].includes(currentPhase?.phase)
        ? 'completed'
        : 'pending',
  },
  {
    id: 3,
    name: 'Active TP',
    status:
      currentPhase?.phase === 'active-tp' ? 'current' :
      ['assessment', 'post-tp', 'completed'].includes(currentPhase?.phase)
        ? 'completed'
        : 'pending',
  },
  {
    id: 4,
    name: 'Assessments',
    status:
      currentPhase?.phase === 'assessment' ? 'current' :
      ['post-tp', 'completed'].includes(currentPhase?.phase)
        ? 'completed'
        : 'pending',
  },
  {
    id: 5,
    name: 'Final Submission',
    status:
      currentPhase?.phase === 'post-tp' ? 'current' :
      currentPhase?.phase === 'completed' ? 'completed' : 'pending',
  },
  {
    id: 6,
    name: 'Completion',
    status:
      currentPhase?.phase === 'completed' ? 'current' : 'pending',
  },
];
  const currentStage = tpTimeline.find(stage => stage.status === 'current');

  return (
    <section className="bg-white p-4 rounded-lg shadow">
      {/* Mobile View - Now with expandable timeline */}
      <div className="md:hidden">
        <div 
          className="flex items-center justify-between p-2 border-b cursor-pointer"
          onClick={() => setMobileExpanded(!mobileExpanded)}
        >
          <h2 className="text-lg font-semibold flex items-center text-blue-600">
            <FiCalendar className="mr-2" />
            {currentStage ? `Current: ${currentStage.name}` : 'TP Timeline'}
          </h2>
          {mobileExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>

        {mobileExpanded && (
          <div className="mt-3 space-y-2">
            {tpTimeline.map(stage => (
              <div 
                key={stage.id}
                className={`p-3 rounded text-sm border-l-4 ${
                  stage.status === 'current' 
                    ? 'border-blue-500 bg-blue-50 font-medium' 
                    : stage.status === 'completed' 
                      ? 'border-green-500 text-gray-600' 
                      : 'border-gray-300 text-gray-500'
                }`}
              >
                {stage.name}
                {stage.status === 'current' && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Active
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop View - Unchanged */}
      <div className="hidden md:block">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <FiCalendar className="mr-2 text-blue-500" />
          TP Timeline
        </h2>
        <ProgressSteps stages={tpTimeline} currentStage={currentStage?.id} />
      </div>
    </section>
  );
};

export default TpTimeline;