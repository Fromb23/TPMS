// src/components/Table.jsx
import { useTable, useSortBy, usePagination } from 'react-table';

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    {column.render('Header')}
                    {column.isSorted && (
                      <span className="ml-1">
                        {column.isSortedDesc ? '↓' : '↑'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {page.map(row => {
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
      
      {/* Pagination */}
      <div className="px-6 py-3 flex items-center justify-between bg-white border-t border-gray-200">
        <div className="text-sm text-gray-700">
          Page <span className="font-medium">{pageIndex + 1}</span> of{' '}
          <span className="font-medium">{pageOptions.length}</span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`px-3 py-1 rounded-md ${canPreviousPage ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`px-3 py-1 rounded-md ${canNextPage ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};