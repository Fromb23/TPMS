// components/ui/ErrorToast.jsx
import { useEffect } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useError } from '@/contexts/ErrorContext';

const ErrorToast = () => {
  const { error, clearError } = useError();

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        clearError();
      }, 3000); // 3 seconds
      return () => clearTimeout(timeout);
    }
  }, [error, clearError]);

  if (!error) return null;

  return (
    <div className="flex items-center gap-2 p-3 mt-2 bg-red-50 border border-red-300 text-red-700 rounded-md shadow-sm">
      <FiAlertCircle className="text-xl" />
      <p className="text-sm">{error}</p>
    </div>
  );
};

export default ErrorToast;