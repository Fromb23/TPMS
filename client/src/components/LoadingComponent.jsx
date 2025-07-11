import React, { useEffect, useState } from 'react';

const LoadingComponent = ({ message = "Loading...", delay= 2000 }) => {
  const [delayPassed, setDelayPassed] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayPassed(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  if (!delayPassed) return null;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700">{message}</p>
        <div className="mt-4 animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-solid" />
      </div>
    </div>
  );
};

export default LoadingComponent;
