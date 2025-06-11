import { useTable } from 'react-table';

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-600 text-white">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th 
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map(cell => (
                  <td 
                    {...cell.getCellProps()} 
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Example usage with dummy data:
export const dummyStudentData = [
  { id: 1, name: 'John Doe', regNo: 'EDU/2021/001', school: 'Amani High', status: 'Active' },
  { id: 2, name: 'Jane Smith', regNo: 'EDU/2021/002', school: 'Mountain View', status: 'Pending' },
];