import React, {forwardRef} from 'react';

const Input = forwardRef(
  ({ label, type = 'text', name, placeholder, error, leftIcon, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
              {leftIcon}
            </span>
          )}
          <input
            id={name}
            name={name}
            type={type}
            ref={ref}
            placeholder={placeholder}
            className={`w-full ${
              leftIcon ? 'pl-10' : 'px-4'
            } py-2 rounded-lg border text-sm bg-white/5 text-black placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            {...props}
          />
        </div>

        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;