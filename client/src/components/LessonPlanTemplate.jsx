const LessonPlanTemplate = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-center text-lg font-bold">Lesson Plan</h2>
      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Lesson Title"
        value={formData.lessonTitle}
        onChange={(e) => setFormData({ ...formData, lessonTitle: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <div className="flex space-x-4">
        <input
          type="time"
          placeholder="Start Time"
          value={formData.startTime}
          onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="time"
          placeholder="End Time"
          value={formData.endTime}
          onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <table className="w-full text-sm border mt-4">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Time Interval</th>
            <th className="p-2 border">Activity</th>
            <th className="p-2 border">Resources</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2"><input className="w-full" type="text" /></td>
            <td className="border p-2"><input className="w-full" type="text" /></td>
            <td className="border p-2"><input className="w-full" type="text" /></td>
          </tr>
        </tbody>
      </table>
      <textarea
        placeholder="Comments / Notes"
        value={formData.comments}
        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
        className="w-full p-2 border rounded mt-4"
        rows={3}
      />
    </div>
  );
};

export default LessonPlanTemplate;
