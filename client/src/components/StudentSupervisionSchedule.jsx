import { useState, useEffect } from 'react';

export const StudentSupervisionSchedule = ({ studentId, lecturerId, onClose }) => {
  const [supervision, setSupervision] = useState(null);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch supervision by studentId (pseudo-fetch)
    fetch(`/api/supervision/${studentId}`)
      .then(res => res.json())
      .then(data => {
        setSupervision(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [studentId]);

  const handleCreate = () => {
    fetch(`/api/supervision`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId, lecturerId, date, notes }),
    })
      .then(res => res.json())
      .then(newSupervision => {
        setSupervision(newSupervision);
        setDate('');
        setNotes('');
      });
  };

  const handleCancel = () => {
    fetch(`/api/supervision/${supervision.id}`, {
      method: 'DELETE',
    }).then(() => setSupervision(null));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Supervision Schedule</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600 text-lg">&times;</button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : supervision ? (
          <div className="space-y-3 text-sm">
            <p><strong>Date:</strong> {supervision.date}</p>
            <p><strong>Notes:</strong> {supervision.notes}</p>
            <button
              onClick={handleCancel}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Cancel Supervision
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-500">No supervision scheduled yet.</p>
            <div className="space-y-2">
              <input
                type="datetime-local"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full border p-2 rounded"
              />
              <textarea
                placeholder="Add notes"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="w-full border p-2 rounded"
              ></textarea>
              <button
                onClick={handleCreate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Create Supervision
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
