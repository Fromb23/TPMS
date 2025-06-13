import React from 'react';
import { FiUpload } from 'react-icons/fi';

const ActiveTPTasks = ({ handleUpload }) => {
  return (
    <>
      {/* Daily Task: Lesson Plan */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Daily Tasks</h3>
        <p className="mb-3">Submit your lesson plan for today.</p>
        <button
          onClick={() => handleUpload('lesson-plan')}
          className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FiUpload className="mr-2" />
          Submit Today's Lesson Plan
        </button>
      </div>

      {/* Weekly Task: Scheme of Work */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Weekly Task: Scheme of Work</h3>
        <p className="mb-3">Ensure your schemes of work are up to date and cover the full term.</p>
        <button
          onClick={() => handleUpload('schemes-of-work')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FiUpload className="mr-2" />
          Upload Scheme of Work
        </button>
      </div>

      {/* Timetable */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Your Timetable</h3>
        <p className="mb-3">Upload your weekly teaching timetable.</p>
        <button
          onClick={() => handleUpload('timetable')}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FiUpload className="mr-2" />
          Upload Timetable
        </button>
      </div>

      {/* Record of Work */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Record of Work</h3>
        <p className="mb-3">Keep track of what you’ve taught each week.</p>
        <button
          onClick={() => handleUpload('record-of-work')}
          className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FiUpload className="mr-2" />
          Upload Record of Work
        </button>
      </div>
    </>
  );
};

export default ActiveTPTasks;