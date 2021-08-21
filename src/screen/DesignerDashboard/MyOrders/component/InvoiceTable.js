import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const columns = [
  { field: 'id', 
    headerName: '#', 
    width: 170,
    align: 'center',
    headerAlign:'center'
  },
  {
    field: 'CustomerName',
    headerName: 'Customer Name',
    headerAlign: 'center',
    align: 'center',
    width: 170,
    editable: false,
  },
  {
    field: 'Amount',
    headerName: 'Amount',
    headerAlign: 'center',
    align: 'center',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
    valueGetter: (params) =>
      ` $${params.getValue(params.id, 'amount') || ''}`,
  },
  {
    // field: 'paymentStatus',
    // headerName: 'Payment Status',
    // headerAlign: 'center',
    // align: 'center',
    // type: 'number',
    // width: 170,
    // editable: false,
    field: 'paymentStatus',
    headerName: 'Payment Status',
    headerAlign: 'center',
    align: 'center',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    type: 'number',
    renderCell: (params) => {
      if (params.row.paymentStatus == 'Paid') {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            <ThumbUpAltIcon /> {` ${params.getValue(params.id, 'paymentStatus') || ''}`}
          </div>
        )
      }
      else if (params.row.paymentStatus == 'Not Paid') {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
             {` ${params.getValue(params.id, 'paymentStatus') || ''}`}  <ThumbDownAltIcon />
          </div>
        )
      }
    },
  },
  {
    field: 'createdDate',
    headerName: 'Created Date',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    width: 170,
    editable: false,
  },
  {
    field: 'paidDate',
    headerName: 'Paid Date',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    width: 170,
    editable: false,
  },
];

const rows = [
  { id: 1, CustomerName: 'Snow', amount: 50, paymentStatus: 'Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 2, CustomerName: 'Lannister', amount: 270, paymentStatus: 'Not Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 3, CustomerName: 'Lannister', amount: 1041, paymentStatus: 'Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 4, CustomerName: 'Stark', amount: 380, paymentStatus: 'Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 5, CustomerName: 'Targaryen', amount: 1550, paymentStatus: 'Not Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 6, CustomerName: 'Melisandre', amount: 2000, paymentStatus: 'Not Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 7, CustomerName: 'Clifford', amount: 100, paymentStatus: 'Not Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 8, CustomerName: 'Frances', amount: 130, paymentStatus: 'Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
  { id: 9, CustomerName: 'Roxie', amount: 1100, paymentStatus: 'Not Paid', createdDate:'5/April/2020', paidDate:'6/April/2020' },
];

export default function DataTable({data}) {
    const [setTableData, setOrderFlag, setOrderData, setInvoiceFlag] = data
  return (
    <div style={{ height: 400, width: '100%', backgroundColor:'white', textAlign: "center" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellDoubleClick={(e) => {
            setOrderData(e.row);
            setInvoiceFlag(true)
        }}
        onSelectionModelChange={(e) => {
            const selectedIDs = new Set(e);
            const selectedRowData = rows.filter((row) =>
              selectedIDs.has(row.id)
            )
            setTableData(selectedRowData);
          }}
        
          getCellClassName={(params) => {
            if (params.field === 'Amount') {
              return 'order-amount';
            }

            if(params.field === 'paymentStatus'){
                switch (params.value){
                    case 'Paid':
                        return 'invoice-paid'
                    case 'Not Paid':
                        return 'invoice-notpaid'
                }
            }
          }}
        checkboxSelection
      />
    </div>
  );
}