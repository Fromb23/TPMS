import React, { useState } from 'react';
import { FiFile, FiUpload } from 'react-icons/fi';
import { useMutation } from '@tanstack/react-query';
import { submitFinalTPDocument } from '../services/documentServices';

const FinalTPSubmission = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: submitFinalTPDocument,
    onSuccess: () => {
      alert('Final document submitted successfully!');
      setTitle('');
      setContent('');
      setFile(null);
    },
    onError: (error) => {
      console.error('Error submitting final document:', error);
      alert(error.message || 'Failed to submit final document.');
    },
  });

  const handleSubmit = () => {
    if (!title || !content || !file) {
      alert('Title, content, and file are required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);

    mutate(formData);
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <h3 className="font-semibold text-lg flex items-center mb-2">
        <FiFile className="mr-2 text-blue-600" />
        Final Submission
      </h3>

      <p className="mb-4 text-sm text-gray-600">
        Please submit your final document with a brief description and an attachment.
      </p>

      <input
        type="text"
        placeholder="Document Title"
        className="w-full p-2 mb-3 border border-gray-300 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Document Content / Description"
        className="w-full p-2 mb-3 border border-gray-300 rounded h-24"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 block"
        accept=".pdf,.doc,.docx,.jpg,.png"
      />

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className={`w-full flex items-center justify-center px-4 py-2 text-white rounded-md transition ${
          isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <FiUpload className="mr-2" />
        {isLoading ? 'Submitting...' : 'Submit Final Document'}
      </button>
    </div>
  );
};

export default FinalTPSubmission;