import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const Modal = ({ isOpen, onClose, title, children }) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-4 overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;