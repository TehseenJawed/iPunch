import React, {useState, useEffect} from 'react'
import AssignTable from './component/AssignOrders'
import ReviewTable from './component/Invoices'
import AgentsTable from './component/Agents'
import {useSelector, useDispatch} from 'react-redux';
import {FetchOrders, FetchUsers, FetchInvoices, FetchDesignerData, FetchAgents, FetchOrdersByPaymentStatus, FetchSalesAgent} from '../../../redux/action/AdminAction';
import { ORDER_DATA, USER_DATA, ASSIGN_ORDERS, REVIEW_ORDERS, ORDER_DATAFILTER} from '../../../redux/reducer/AdminReducer';
import RevisionPopover from './component/RevisionPopover'
import DetailsPopover from './component/DetailsPopover'
import AgentDetails from './component/AgentDetails'
import EditAgentPopover from './component/EditAgentPopover';

const SalesDashboard = () => {
    const dispatch = useDispatch();
    const UserData = useSelector(USER_DATA)
    const OrderData = useSelector(ORDER_DATAFILTER)
    const ReviewOrders = useSelector(REVIEW_ORDERS)
    const [changesFlag, setChangesFlag] = useState(false)
    const [changesData, setChangesData] = useState(false)

    const [detailsFlag, setDetailsFlag] = useState(false)
    const [orderDetails, setOrderDetails] = useState(true)

    const [agentDetailsFlag, setAgentDetailsFlag] = useState(false)
    const [editAgentDetailsFlag, setEditAgentDetailsFlag] = useState(false)
    const [agentDetails, setAgentDetails] = useState({})


    

    const ordersToAssign ={
        rows:OrderData,
        setChangesFlag, 
        setChangesData,
        setOrderDetails,
        setDetailsFlag
    }
    const ordersToReview ={
        rows:ReviewOrders,
        editAgentDetailsFlag,
        setEditAgentDetailsFlag,
        setChangesFlag,
        setChangesData,
        setAgentDetails,
        setAgentDetailsFlag
    }

    useEffect(() => {
      dispatch(FetchOrders())
      dispatch(FetchOrdersByPaymentStatus())
      dispatch(FetchInvoices())
      dispatch(FetchDesignerData())
      dispatch(FetchUsers())
      dispatch(FetchAgents())
      dispatch(FetchSalesAgent())
    },[])
    
    return (
        <div>
            {detailsFlag ? <DetailsPopover data={{detailsFlag, setDetailsFlag, orderDetails}} /> : null}
            <RevisionPopover data={[changesFlag, setChangesFlag, changesData]}/>
            {agentDetails !== {} ? <AgentDetails data={{agentDetailsFlag, setAgentDetailsFlag, agentDetails}} /> : null }
            {agentDetails !== {} ? <EditAgentPopover data={{agentDetails, editAgentDetailsFlag, setEditAgentDetailsFlag}} /> : null }
            
            <div className="dashboard-tableContainer">
                <div className="admin-table1">
                    <div className="tableHeader">
                        ORDERS
                        <button className="table-btn">View</button>
                    </div>
                   <AssignTable data={ordersToAssign} />
                </div> 

                <div className="admin-table1">
                    <div className="tableHeader">
                        INVOICES
                        <button className="table-btn">View</button>
                    </div>
                   <ReviewTable data={ordersToReview} />
                </div> 

                <div className="admin-table1">
                    <div className="tableHeader">
                        AGENTS
                        <button className="table-btn">View</button>
                    </div>
                   <AgentsTable data={ordersToReview} />
                </div> 
            
            </div>
        </div>
    )
}

export default SalesDashboard
