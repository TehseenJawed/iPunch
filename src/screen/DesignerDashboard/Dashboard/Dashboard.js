import React, {useState} from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import OrderTable from './component/OrderTable'
import DeliverPopover from './component/DeliverPopover'

const SalesDashboard = () => {
    const [tableData, setTableData] = useState("")
    const [orderFlag, setOrderFlag] = useState(false)
    const [orderData, setOrderData] = useState("")
    const [unpaidFlag, setUnpaidFlag] = useState(false)

    const columns = [
        { id: 'name', label: 'Client Name', align: 'center', minWidth: 40 },
        {
            id: 'state',
            label: 'State',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'email',
            label: 'Email',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'cost',
            label: 'Charges',
            minWidth: 170,
            align: 'center',
            renderCell: (params) => {
                return (
                  <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
                     {` ${params.getValue(params.cost, 'cost') || ''}`}
                  </div>
                );
              },
            // format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'phone',
            label: 'Phone',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'interest',
            label: 'Interest',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'date',
            label: 'Created Date',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
    ];

    function createData(name, state, email, cost, phone, interest, date) {
        return { name, state, email, cost, phone, interest, date};
    }

    const rows = [
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 1, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
        createData('Tehseen Jawed', 'Ohio', 'tehseenjawed1@gmail.com', 51, '(785)-814-0146', 'Interested', '05/04/2021'),
    ];

    const clientOrderColumn = [
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
      
      const clientOrderRows = [
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

    const clientData ={
        rows,
        columns,
        setUnpaidFlag
}
    const clientData2 ={
        clientOrderRows,
        clientOrderColumn,
        setTableData,
        setOrderFlag,
        setOrderData,
        setUnpaidFlag
    }

    return (
        <div>
            <DeliverPopover data={[unpaidFlag, setUnpaidFlag, orderData]}/>
            <div className="dashboard-tableContainer">

                <div className="designerContainer1">
                    <div className="tableHeader">
                        New Designs
                        <button className="designertable-btn">View</button>
                    </div>
                   <OrderTable data={clientData} />
                </div>

                <div className="designerContainer2">
                    <div className="tableHeader">
                        Paid Designs
                        <button className="designertable-btn">View</button>
                    </div>
                   <OrderTable data={clientData} />
                </div>

                <div className="designerContainer2">
                    <div className="tableHeader">
                        Unpaid Designs
                        <button className="designertable-btn">View</button>
                    </div>
                   <OrderTable data={clientData} />
                </div>

                <div className="designerContainer2">
                    <div className="tableHeader">
                        Invoices
                        <button className="designertable-btn">View</button>
                    </div>
                   <OrderTable data={clientData} />
                </div>

            </div>
        </div>
    )
}

export default SalesDashboard
