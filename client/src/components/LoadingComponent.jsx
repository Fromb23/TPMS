import React, { useEffect, useState } from 'react';

const LoadingComponent = ({
  message = "Loading",
  delay = 1000,
  onCancel = null,
  retry = null
}) => {
  const [delayPassed, setDelayPassed] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayPassed(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!delayPassed) return;

    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, [delayPassed]);

  if (!delayPassed) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center space-y-4">
        <p className="text-lg font-semibold text-blue-700">
          {message}
          {".".repeat(dotCount)}
        </p>
        <div
          className="mx-auto h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          role="status"
          aria-label="Loading"
        />
        {(onCancel || retry) && (
          <div className="space-x-3 mt-4">
            {retry && (
              <button
                onClick={retry}
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Retry
              </button>
            )}
            {onCancel && (
              <button
                onClick={onCancel}
                className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingComponent;