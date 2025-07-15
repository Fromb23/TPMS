import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createSupervisionSchedule,
  deleteSupervisionSchedule,
  enableStudentFinalDocumentSubmission,
  fetchSupervisionSchedule,
} from '../services/supervisionServices';
import { useUser } from '../context/userContext';

export const StudentSupervisionSchedule = ({ student, onClose }) => {
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectTimes, setSubjectTimes] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { user, token } = useUser();

  const studentId = student?.userId;

  const lecturerId = user?.id || null;
  const queryClient = useQueryClient();

  const subjects = Array.isArray(student?.subjectCombination?.split(' '))
    ? student.subjectCombination.split(' ')
    : [];
 
  const { data: supervision, isLoading, refetch } = useQuery({
    queryKey: ['supervision', studentId],
    queryFn: () => fetchSupervisionSchedule(studentId, token),
    enabled: !!studentId && !!token,
  });

  const handleEnableFinalDocs = (studentId) => {
    enableFinalDocumentSubmission.mutate({studentId, status: true });
  };
  const enableFinalDocumentSubmission = useMutation({
    mutationFn: enableStudentFinalDocumentSubmission,
    onSuccess: () => {
      alert('Final document submission enabled for this student.');
      queryClient.invalidateQueries(['student', studentId]);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    },
    onError: () => setError('Failed to enable final document submission'),
  });


  const createSupervision = useMutation({
    mutationFn: createSupervisionSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries(['supervision', studentId]);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setShowForm(false);
    },
    onError: () => setError('Failed to create supervision'),
  });

  useEffect(() => {
    if (studentId) {
      refetch();
    }
  }, [studentId, refetch]);

  const deleteSupervision = useMutation({
    mutationFn: deleteSupervisionSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries(['supervision', studentId]);
    },
    onError: () => setError('Failed to cancel supervision'),
  });

  const toggleSubject = (subj) => {
    setError('');
    setSubjectTimes((prev) => {
      const updated = { ...prev };
      if (selectedSubjects.includes(subj)) delete updated[subj];
      else updated[subj] = { start: '', end: '' };
      return updated;
    });

    setSelectedSubjects((prev) =>
      prev.includes(subj)
        ? prev.filter((s) => s !== subj)
        : prev.length < 2
          ? [...prev, subj]
          : prev
    );
  };

  const handleTimeChange = (subj, field, value) => {
    setSubjectTimes((prev) => ({
      ...prev,
      [subj]: { ...prev[subj], [field]: value },
    }));
  };

  const timesOverlap = () => {
    if (selectedSubjects.length < 2) return false;
    const [a, b] = selectedSubjects;
    const t1 = subjectTimes[a],
      t2 = subjectTimes[b];
    return !(t1.end <= t2.start || t2.end <= t1.start);
  };

  const handleCreate = () => {
    setError('');
    if (!date || selectedSubjects.length === 0)
      return setError('Pick a date and at least one subject.');
    for (const subj of selectedSubjects) {
      const t = subjectTimes[subj] || {};
      if (!t.start || !t.end) return setError(`Set time for ${subj}`);
    }
    if (selectedSubjects.length === 2 && timesOverlap())
      return setError('Subject times cannot overlap.');

    const payload = selectedSubjects.map((subj) => ({
      studentId,
      lecturerId,
      subject: subj,
      date,
      startTime: subjectTimes[subj].start,
      endTime: subjectTimes[subj].end,
      notes,
    }));

    createSupervision.mutate(payload);
  };

  if (!student) return null;
  if (!lecturerId)
    return <p className="text-red-500">You must be logged in to manage supervisions.</p>;

  const supervisionCount = student?.supervisionCount || 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center overflow-y-auto p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg space-y-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Supervision Schedule</h2>
          <button onClick={onClose} className="text-red-500 text-2xl font-bold">
            &times;
          </button>
        </div>

        {supervisionCount >= 3 && (
          <button
            onClick={() => handleEnableFinalDocs(student.id)}
            disabled={student?.canSubmitFinalDocs}
            className={`w-full py-2 rounded mt-4 ${student?.canSubmitFinalDocs
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
          >
            {student?.canSubmitFinalDocs
              ? 'Final Document Submission Allowed'
              : 'Allow Final Document Submission'}
          </button>
        )}

        {/* Show dropdown to create new supervision */}
        {Array.isArray(supervision) && supervision.length > 0 && (
          <div className="border p-2 rounded bg-gray-100">
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
            >
              {showForm ? 'Hide Form' : 'Create New Supervision'}
            </button>
          </div>
        )}

        {/* Form Area */}
        {(supervision?.length < 1 || showForm) && (
          <div className="space-y-3 border border-blue-200 rounded p-4 mt-3">
            <h3 className="font-semibold text-blue-600">New Supervision</h3>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Supervision booked successfully!</p>}

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border p-2 rounded"
            />

            <div>
              <p className="text-sm font-medium mb-1">Select up to 2 subjects</p>
              <div className="flex flex-wrap gap-2">
                {subjects.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => toggleSubject(s)}
                    className={`px-3 py-1 rounded-full border transition text-sm ${selectedSubjects.includes(s)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {selectedSubjects.map((s, i) => (
              <div key={i} className="border p-3 rounded space-y-2">
                <p className="text-sm font-semibold">{s} Timing</p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="time"
                    value={subjectTimes[s]?.start || ''}
                    onChange={(e) => handleTimeChange(s, 'start', e.target.value)}
                    className="border p-2 rounded"
                  />
                  <input
                    type="time"
                    value={subjectTimes[s]?.end || ''}
                    onChange={(e) => handleTimeChange(s, 'end', e.target.value)}
                    className="border p-2 rounded"
                  />
                </div>
              </div>
            ))}

            <textarea
              placeholder="Notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border p-2 rounded"
              rows={3}
            />

            <button
              onClick={handleCreate}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              disabled={subjects.length === 0}
            >
              Create Supervision
            </button>
          </div>
        )}

        {/* Existing Supervisions */}
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          supervision?.map((entry) => (
            <div
              key={entry.id}
              className="border p-4 rounded shadow space-y-2 text-sm mt-4 bg-gray-50"
            >
              <p>
                <b>Student:</b> {student?.user?.fullName || 'Unknown Student'}
              </p>
              <p>
                <b>Date:</b> {new Date(entry.startDate).toLocaleDateString()}
              </p>
              <p>
                <b>Time:</b>{' '}
                {`${new Date(entry.startDate).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })} - ${new Date(entry.endDate).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}`}
              </p>
              <p>
                <b>Subjects:</b>
              </p>
              <ul className="pl-4 list-disc">
                {entry.subjects.map((subj) => (
                  <li key={subj.id}>
                    {subj.name} (
                    {new Date(subj.startTime).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}{' '}
                    -{' '}
                    {new Date(subj.endTime).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    )
                  </li>
                ))}
              </ul>

              {entry.isSupervised ? (
                <p className="text-green-700 text-sm font-semibold">
                  Supervision Completed ✅
                </p>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => deleteSupervision.mutate(entry.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleEdit(entry)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
