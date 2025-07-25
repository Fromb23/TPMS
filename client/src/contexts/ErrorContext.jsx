import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const reportError = (err) => {
    console.error("Global Error Caught:", err);
    setError(err);
  };

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, reportError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);