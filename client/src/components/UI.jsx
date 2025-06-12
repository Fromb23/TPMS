import { FiAlertCircle, FiCheckCircle, FiClock } from 'react-icons/fi';

// Progress Steps Component
export const ProgressSteps = ({ stages, currentStage }) => {
  return (
    <div className="flex items-center justify-between relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
      {stages.map((stage) => (
        <div key={stage.id} className="flex flex-col items-center">
          <div className={`h-8 w-8 rounded-full flex items-center justify-center 
            ${stage.status === 'completed' ? 'bg-green-500 text-white' :
              stage.id === currentStage ? 'bg-blue-500 text-white animate-pulse' :
              'bg-gray-200 text-gray-600'}`}
          >
            {stage.id}
          </div>
          <span className={`text-xs mt-1 text-center ${stage.id === currentStage ? 'font-bold' : ''}`}>
            {stage.name}
          </span>
        </div>
      ))}
    </div>
  );
};

// Status Card Component
export const StatusCard = ({ icon, title, value, subtitle, status = 'normal' }) => {
  const statusColors = {
    normal: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
    alert: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800'
  };

  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-start">
        <div className={`p-2 rounded-lg ${statusColors[status]} mr-3`}>
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-lg font-semibold">{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

// Quick Action Component
export const QuickAction = ({ icon, label, href }) => {
  return (
    <a href={href} className="border rounded-lg p-3 text-center hover:bg-gray-50 transition-colors">
      <div className="flex justify-center text-blue-500 mb-1">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </a>
  );
};