import React from 'react';

const Select = ({ label, name, options = [], value, onChange, error, className = '', fullWidth = true, ...props }) => {
  const selectClasses = [
    fullWidth ? 'w-full' : '',
    'px-4',
    'py-2',
    'rounded-lg',
    'border',
    'text-sm',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-purple-500',
    'transition',
    error ? 'border-red-500' : 'border-gray-300',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={selectClasses}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Select;