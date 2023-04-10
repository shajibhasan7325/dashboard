import React from 'react';

import DataTable from 'react-data-table-component';
import { BsThreeDotsVertical } from 'react-icons/bs';

const columns = [
  {
    name: 'Members Name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Units',
    selector: (row) => row.room,
    sortable: true,
  },
  {
    name: 'Total Pending Payment',
    selector: (row) => row.pending,
    sortable: true,
  },
  {
    name: 'Member id',
    selector: (row) => row.memberID,
  },
  {
    name: '',
    selector: (row) => row.details,
  },
];

const data = [
  {
    id: 1,
    name: 'Harper Stevens',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 2,
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 3,
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 4,
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 5,
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
];

const CustomPagination = ({ pages, onPageChange, currentPage }) => (
  <div className="custom-pagination">
    <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
      First
    </button>
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Prev
    </button>
    {Array.from({ length: pages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => onPageChange(i + 1)}
        disabled={currentPage === i + 1}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === pages}
    >
      Next
    </button>
    <button
      onClick={() => onPageChange(pages)}
      disabled={currentPage === pages}
    >
      Last
    </button>
  </div>
);

const DashboardDataTable = () => {
  return (
    <div className="bg-white my-4 rounded">
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        pagination
        // paginationComponent={CustomPagination}
        paginationPerPage={4}
        striped
        highlightOnHover
        // dense
      />
    </div>
  );
};

export default DashboardDataTable;
