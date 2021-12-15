import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Table from '../../../components/Table/table'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ClientOrderTable from './component/ClientOrderTable'
import MyClients from './component/MyClients';
import UnpaidOrders from './component/UnpaidOrders';
import OrdersPopover from './component/OrdersPopover';
import UnpaidPopover from './component/UnpaidPopover'
import {LOGIN_FLAG, LOGIN_DATA} from '../../../redux/reducer/AuthReducer'
import {SetAllClients_Data, SetAllCustomer_FilterData, SetAllCustomer_Data, SetMyOrders, SetDeliverOrders, SetUncompleteOrders, SetUnpaidOrders, SetAllInvoice_Data, UpdateTotalSales, SetExpectedClients} from '../../../redux/action/AgentAction'
import { SetService_Data, SetState_Data,  } from '../../../redux/action/AuthAction'
import {ALL_CUSTOMER_DATA, CUSTOMER_RANGE, ALL_CUSTOMER_DATA_SORT} from '../../../redux/reducer/AgentDataReducer'

const SalesDashboard = () => {
    const [tableData, setTableData] = useState("")
    const [orderFlag, setOrderFlag] = useState(false)
    const [orderData, setOrderData] = useState("")
    const [unpaidFlag, setUnpaidFlag] = useState(false)
      const LoginData = useSelector(LOGIN_DATA)
      const customerRows = useSelector(ALL_CUSTOMER_DATA_SORT)
    const customerRange = useSelector(CUSTOMER_RANGE)
    console.log("It is here === ",customerRows)
    const dispatch = useDispatch()

    const customerColumn = [
        { id: 'username', label: 'Client Name', align: 'center', minWidth: 100 },
        {
            id: 'company',
            label: 'Company',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'email',
            label: 'Email',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'phone',
            label: 'Phone',
            minWidth: 100,
            align: 'center',
            renderCell: (params) => {
                return (
                  <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
                     {` ${params.getValue(params.cost, 'cost') || ''}`}
                  </div>
                );
              },
        },
        {
            id: 'created_at',
            label: 'Created At',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'website',
            label: 'Website',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'acc_status',
            label: 'Account Status',
            minWidth: 100,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
    ];

    const changeCustomerPage = (e) => {
      console.log("E is here ===> ",e)
      // dispatch(UpdateCustomerRange(e))
    }


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
      rows:customerRows,
      columns:customerColumn,
      range:customerRange,
      changeCustomerPage
    }
    
    const clientData2 ={
        clientOrderRows,
        clientOrderColumn,
        setTableData,
        setOrderFlag,
        setOrderData,
        setUnpaidFlag
    } 

    useEffect(() => {
      dispatch(SetAllClients_Data())
      dispatch(SetAllCustomer_Data())
      dispatch(SetMyOrders())
      dispatch(SetAllCustomer_FilterData())
      dispatch(SetService_Data())
      dispatch(SetState_Data())
      dispatch(SetUncompleteOrders())
      dispatch(SetDeliverOrders())
      dispatch(SetUnpaidOrders())
      dispatch(SetAllInvoice_Data())
      dispatch(UpdateTotalSales())
      dispatch(SetExpectedClients())
    },[])

    return (
        <div>
            <OrdersPopover data={[orderFlag, setOrderFlag, orderData]}/>
            <UnpaidPopover data={[unpaidFlag, setUnpaidFlag, orderData]}/>
            <div className="dashboard-tableContainer">

                <div className="tableContainer1">
                    <div className="tableHeader">
                        Clients New Orders
                        {/* <button className="table-btn">View</button> */}
                    </div>
                   <ClientOrderTable data={clientData2} />
                </div>

                <div className="tableContainer2">
                    
                    <div className="tableHeader">
                        My Clients
                        {/* <button className="table-btn table-btn2">View</button> */}
                    </div>
                   <MyClients data={clientData} />
                </div>

                <div className="tableContainer3-sales">
                    <div className="tableHeader">
                        Unpaid Orders
                        {/* <button className="table-btn table-btn3">View</button> */}
                    </div>
                    
                    <UnpaidOrders data={clientData} />
                </div>


            </div>
        </div>
    )
}

export default SalesDashboard
