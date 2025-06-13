// DocumentFileInput.jsx
import { FiUpload } from 'react-icons/fi';

const DocumentFileInput = ({ onFileSelect, acceptedTypes, multiple, isUploading }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
      <label className="cursor-pointer">
        <div className="flex flex-col items-center justify-center">
          <FiUpload className="text-blue-500 text-2xl mb-2" />
          <p className="text-sm text-gray-600 mb-1">Click to browse or drag and drop files</p>
          <p className="text-xs text-gray-500">
            Accepted formats: {acceptedTypes.replace(/\./g, '').replace(/,/g, ', ')}
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          onChange={(e) => onFileSelect(e.target.files)}
          accept={acceptedTypes}
          multiple={multiple}
          disabled={isUploading}
        />
      </label>
    </div>
  );
};

export default DocumentFileInput;
