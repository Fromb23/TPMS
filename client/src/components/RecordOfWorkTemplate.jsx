const RecordOfWorkTemplate = ({ formData, setFormData }) => {
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
          {/* Later: map through dynamic rows if needed */}
          <tr>
            <td className="border p-2"><input className="w-full" type="date" /></td>
            <td className="border p-2"><input className="w-full" type="text" /></td>
            <td className="border p-2"><input className="w-full" type="text" /></td>
            <td className="border p-2"><input className="w-full" type="text" /></td>
            <td className="border p-2"><input className="w-full" type="text" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecordOfWorkTemplate;