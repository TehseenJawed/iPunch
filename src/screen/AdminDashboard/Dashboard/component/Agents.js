import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { ALL_AGENTS } from '../../../../redux/reducer/AdminReducer';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { BASE_URL } from '../../../../redux/reducer/AuthReducer';
import { PatchOrderbyDesigner, PatchOrdertoDeliver } from '../../../../redux/action/AdminAction';
import { Button } from '@material-ui/core';


export default function DataTable({ data }) {
  const {  setAgentDetails, setAgentDetailsFlag, editAgentDetailsFlag, setEditAgentDetailsFlag } = data
  const rows = useSelector(ALL_AGENTS)
  const dispatch = useDispatch()
  const tablerows = rows.results
  

  const columns = [
    {
      field: 'username',
      headerName: 'Name',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.username}</div>
    },
    {
      field: 'email',
      headerName: 'Email',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.email}</div>
    },
    {
      field: 'phone',
      headerName: 'Phone',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.phone}</div>
    },
    {
      field: 'role',
      headerName: 'Role',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.role}</div>
    },
    {
      field: 'salary',
      headerName: 'Salary',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.salary}</div>
    },
    {
      field: 'experience',
      headerName: 'Experience',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.experience}</div>
    },
    {
      field: 'address',
      headerName: 'Address',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.address}</div>
    },
    {
      field: 'accNumber',
      headerName: 'Acc Number',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.accNumber}</div>
    },
    {
      field: 'details',
      headerName: 'DETAILS',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <Button variant="contained" onClick={() => {setAgentDetails(params.row); setAgentDetailsFlag(true)}} style={{backgroundColor:'#626FE4', color:'white'}}>  DETAILS  </Button>
    },
    {
      field: 'changes',
      headerName: 'CHANGES',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <Button variant="contained" onClick={() => {setAgentDetails(params.row); setEditAgentDetailsFlag(true)}} style={{backgroundColor:'#4a8ee0', color:'white'}}>  CHANGES  </Button>
    },
  ];

  return (
    <div style={{ height: 490, width: '100%', backgroundColor: 'white', textAlign: "center" }}>
      {tablerows !== undefined ? <DataGrid
        rows={tablerows}
        columns={columns}
        pageSize={5}
        // onSelectionModelChange={(e) => {
        //   const selectedIDs = new Set(e);
        //   const selectedRowData = rows.filter((row) =>
        //     selectedIDs.has(row.id)
        //   )
        // }}

        getCellClassName={(params) => {
          if (params.field === 'Amount') {
            return 'order-amount';
          }

          if (params.field === 'createdAt') {
            return 'invoice-paid'
          }
        }}
      // checkboxSelection
      />
        : null}
    </div>
  );
}