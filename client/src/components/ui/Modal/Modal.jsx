import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import Button from '@/components/ui/Button/Button';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
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
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold">{title}</h2>

          <Button
            variant="ghost"
            className="p-1 text-red-500 hover:bg-red-100"
            fullWidth={false}
            onClick={onClose}
            aria-label="Close modal"
            icon={<FiX size={18} />}
          />
        </div>

        {/* Modal Content */}
        <div className="p-4 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;