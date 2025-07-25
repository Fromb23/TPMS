import React from 'react';

const Form = ({ onSubmit, className = '', children, ...props }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`w-full flex flex-col gap-4 ${className}`}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
