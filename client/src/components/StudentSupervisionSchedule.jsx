import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createSupervisionSchedule, deleteSupervisionSchedule, fetchSupervisionSchedule } from '../services/supervisionServices';

export const StudentSupervisionSchedule = ({ student, onClose }) => {
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectTimes, setSubjectTimes] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const studentId = student.userId;
  const user = JSON.parse(localStorage.getItem('user'));
  const lecturerId = user?.id || null;
  const queryClient = useQueryClient();

  const subjects = Array.isArray(student.subjectCombination?.split(' '))
    ? student.subjectCombination.split(' ') 
    : [];

  const {
    data: supervision,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['supervision', studentId],
    queryFn: fetchSupervisionSchedule,
  });

  const createSupervision = useMutation({
    mutationFn: createSupervisionSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries(['supervision', studentId]);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    },
    onError: () => setError('Failed to create supervision'),
  });

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
    const t1 = subjectTimes[a], t2 = subjectTimes[b];
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

  const handleCancel = () => {
    if (supervision?.id) deleteSupervision.mutate(supervision.id);
  };

  if (!student) return null;
  if (!lecturerId) {
    return <p className="text-red-500">You must be logged in to manage supervisions.</p>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg space-y-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Supervision Schedule</h2>
          <button onClick={onClose} className="text-red-500 text-2xl font-bold">&times;</button>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : supervision ? (
          <div className="space-y-2 text-sm">
            <p><b>Subjects:</b> {supervision.subject}</p>
            <p><b>Date:</b> {new Date(supervision.date).toLocaleString()}</p>
            <p><b>Notes:</b> {supervision.notes}</p>
            <button onClick={handleCancel} className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Cancel Supervision
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Supervision booked successfully!</p>}

            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border p-2 rounded" />

            {subjects.length === 0 ? (
              <p className="text-sm text-gray-600 italic">This student has no subject combination.</p>
            ) : (
              <>
                <div>
                  <p className="text-sm font-medium mb-1">Select up to 2 subjects</p>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => toggleSubject(s)}
                        className={`px-3 py-1 rounded-full border transition text-sm ${
                          selectedSubjects.includes(s)
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
                      <input type="time" value={subjectTimes[s]?.start || ''} onChange={(e) => handleTimeChange(s, 'start', e.target.value)} className="border p-2 rounded" />
                      <input type="time" value={subjectTimes[s]?.end || ''} onChange={(e) => handleTimeChange(s, 'end', e.target.value)} className="border p-2 rounded" />
                    </div>
                  </div>
                ))}
              </>
            )}

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
      </div>
    </div>
  );
};