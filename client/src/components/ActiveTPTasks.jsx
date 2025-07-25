import React from 'react';
import { FiUpload } from 'react-icons/fi';
import Button from '@/components/ui/Button/Button';

const ActiveTPTasks = ({ handleUpload, disabled, recordOfWorkDisabled }) => {
  return (
    <>
      {/* Daily Task: Lesson Plan */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Daily Tasks</h3>
        <p className="mb-3">Submit your lesson plan for today.</p>
        <Button
          fullWidth={false}
          onClick={() => handleUpload('lesson-plan')}
          variant="primary"
          disabled={disabled}
        >
          <FiUpload className="mr-2" />
          {disabled ? "Already Submitted" : "Submit Today's Lesson Plan"}
        </Button>

      </div>

      {/* Weekly Task: Scheme of Work */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Weekly Task: Scheme of Work</h3>
        <p className="mb-3">Ensure your schemes of work are up to date and cover the full term.</p>
        <Button
          fullWidth={false}
          onClick={() => handleUpload('schemes-of-work')}
          variant="submit"
          icon={<FiUpload className="mr-2" />}
        >
          Upload Scheme of Work
        </Button>
      </div>

      {/* Timetable */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Your Timetable</h3>
        <p className="mb-3">Upload your weekly teaching timetable.</p>
        <Button
          fullWidth={false}
          onClick={() => handleUpload('timetable')}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FiUpload className="mr-2" />
          Upload Timetable
        </Button>
      </div>

      {/* Record of Work */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="font-semibold text-lg mb-3">Record of Work</h3>
        <p className="mb-3">Keep track of what you’ve taught each week.</p>
        <Button
          fullWidth={false}
          onClick={() => handleUpload('record-of-work')}
          variant={recordOfWorkDisabled ? "submitDisabled" : "submit"}
          disabled={recordOfWorkDisabled}
          icon={<FiUpload className="mr-2" />}
        >
          {recordOfWorkDisabled ? "Already Submitted" : "Submit Record of Work"}
        </Button>
      </div>
    </>
  );
};

export default ActiveTPTasks;