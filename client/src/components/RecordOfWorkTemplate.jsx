const RecordOfWorkTemplate = ({ formData, setFormData }) => {

  const handleRecordChange = (index, field, value) => {
  const updatedRecords = [...formData.records];
  updatedRecords[index][field] = value;
  setFormData({ ...formData, records: updatedRecords });
};

  return (
    <div className="space-y-4">
      <h2 className="text-center text-lg font-bold">Record of Work</h2>
      <input
        type="text"
        placeholder="School"
        value={formData.school}
        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Learning Area"
        value={formData.learningArea}
        onChange={(e) => setFormData({ ...formData, learningArea: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Teacher's Name"
        value={formData.teacher}
        onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <table className="w-full text-sm border mt-4">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Week</th>
            <th className="p-2 border">Work Done</th>
            <th className="p-2 border">Reflection</th>
            <th className="p-2 border">Signature</th>
          </tr>
        </thead>
        <tbody>
  {formData.records.map((record, index) => (
    <tr key={index}>
      <td className="border p-2">
        <input
          type="date"
          className="w-full"
          value={record.date}
          onChange={(e) => handleRecordChange(index, 'date', e.target.value)}
        />
      </td>
      <td className="border p-2">
        <input
          type="text"
          className="w-full"
          value={record.week}
          onChange={(e) => handleRecordChange(index, 'week', e.target.value)}
        />
      </td>
      <td className="border p-2">
        <input
          type="text"
          className="w-full"
          value={record.workDone}
          onChange={(e) => handleRecordChange(index, 'workDone', e.target.value)}
        />
      </td>
      <td className="border p-2">
        <input
          type="text"
          className="w-full"
          value={record.reflection}
          onChange={(e) => handleRecordChange(index, 'reflection', e.target.value)}
        />
      </td>
      <td className="border p-2">
        <input
          type="text"
          className="w-full"
          value={record.signature}
          onChange={(e) => handleRecordChange(index, 'signature', e.target.value)}
        />
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default RecordOfWorkTemplate;