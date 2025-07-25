import React, { useMemo } from 'react';
import Button from '@/components/ui/Button/Button';
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
} from 'react-table';

export const Table = ({ columns, data, pageSize = 5 }) => {
  const enhancedColumns = useMemo(() => columns, [columns]);

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
    state: { pageIndex, selectedRowIds },
  } = useTable(
    {
      columns: enhancedColumns,
      data,
      initialState: { pageIndex: 0, pageSize },
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <input type="checkbox" {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <input type="checkbox" {...row.getToggleRowSelectedProps()} />
          ),
        },
        {
          id: 'rowNumber',
          Header: '#',
          Cell: ({ row }) => row.index + 1 + pageIndex * pageSize,
        },
        ...columns,
      ]);
    }
  );

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => {
            const { key: headerKey, ...rest } = headerGroup.getHeaderGroupProps();
            return (
              <tr key={headerKey} {...rest}>
                {headerGroup.headers.map((column) => {
                  const colProps = column.getHeaderProps(column.getSortByToggleProps());
                  const { key: colKey, ...restProps } = colProps;
                  return (
                    <th
                      key={colKey}
                      {...restProps}
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
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {page.map((row) => {
            prepareRow(row);
            const { key: rowKey, ...rowRest } = row.getRowProps();
            return (
              <tr key={rowKey} {...rowRest} className="hover:bg-gray-50">
                {row.cells.map((cell) => {
                  const { key: cellKey, ...cellRest } = cell.getCellProps();
                  return (
                    <td
                      key={cellKey}
                      {...cellRest}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
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
        <div className="flex justify-end space-x-2">
          <Button
            onClick={previousPage}
            disabled={!canPreviousPage}
            fullWidth={false}
            className={`px-3 py-1 text-sm ${canPreviousPage
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
          >
            Previous
          </Button>

          <Button
            onClick={nextPage}
            disabled={!canNextPage}
            fullWidth={false}
            className={`px-3 py-1 text-sm ${canNextPage
                ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};