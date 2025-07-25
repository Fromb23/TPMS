import React from 'react';
import Input from '@/components/ui/Input/Input';
import { Table } from '@/components/Table';

const LessonPlanTemplate = ({ formData, setFormData }) => {

  const formFields = [
  { name: "school", placeholder: "School" },
  { name: "learningArea", placeholder: "Learning Area" },
  { name: "teacher", placeholder: "Teacher's Name" },
  { name: "subject", placeholder: "Subject" },
];

const columns = [
  { Header: "Date", accessor: "date", type: "date" },
  { Header: "Week", accessor: "week" },
  { Header: "Work Done", accessor: "workDone" },
  { Header: "Reflection", accessor: "reflection" },
  { Header: "Signature", accessor: "signature" },
];

  return (
   <div className="space-y-4">
  <h2 className="text-center text-lg font-bold">Record of Work</h2>

  {formFields.map(({ name, placeholder }) => (
    <Input
      key={name}
      placeholder={placeholder}
      value={formData[name]}
      onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
      className="w-full p-2 border rounded"
    />
  ))}

  <div className="mt-4">
    <table className="w-full text-sm border">
      <thead>
        <tr className="bg-gray-100 text-left">
          {columns.map((col) => (
            <th key={col.accessor} className="p-2 border">{col.Header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {formData.records.map((record, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.accessor} className="border p-2">
                <Input
                  type={col.type || "text"}
                  value={record[col.accessor]}
                  onChange={(e) => handleRecordChange(index, col.accessor, e.target.value)}
                  className="w-full p-1"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
};

export default LessonPlanTemplate;