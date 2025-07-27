import React, { forwardRef } from 'react';

const Textarea = forwardRef(
  (
    {
      name,
      label,
      placeholder = '',
      rows = 4,
      className = '',
      error = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'w-full',
      'px-4',
      'py-3',
      'border',
      'rounded-md',
      'text-sm',
      'text-gray-700',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue-500',
      'transition',
      'duration-150',
    ];

    if (error) {
      baseClasses.push('border-red-500', 'focus:ring-red-500');
    } else {
      baseClasses.push('border-gray-300');
    }

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={name}
            className="text-sm text-gray-800 font-medium"
          >
            {label}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          className={[...baseClasses, className].join(' ')}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;