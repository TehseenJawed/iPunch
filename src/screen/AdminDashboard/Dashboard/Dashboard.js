import React, {useState, useEffect} from 'react'
import AssignTable from './component/AssignOrders'
import ReviewTable from './component/ReviewOrders'
import {useSelector, useDispatch} from 'react-redux';
import {FetchOrders, FetchUsers, FetchAssignOrders, FetchDesignerData, FetchReviewOrders} from '../../../redux/action/AdminAction';
import { ORDER_DATA, USER_DATA, ASSIGN_ORDERS, REVIEW_ORDERS} from '../../../redux/reducer/AdminReducer';
import RevisionPopover from './component/RevisionPopover'

const SalesDashboard = () => {
    const dispatch = useDispatch();
    const OrderData = useSelector(ORDER_DATA)
    const UserData = useSelector(USER_DATA)
    const AssignOrders = useSelector(ASSIGN_ORDERS)
    const ReviewOrders = useSelector(REVIEW_ORDERS)
    const [changesFlag, setChangesFlag] = useState(false)
    const [changesData, setChangesData] = useState(false)
    console.log("It is review order ",ReviewOrders)
    const ordersToAssign ={
        rows:AssignOrders
    }
    const ordersToReview ={
        rows:ReviewOrders,
        setChangesFlag,
        setChangesData
    }

    useEffect(() => {
      dispatch(FetchOrders())
      dispatch(FetchAssignOrders())
      dispatch(FetchDesignerData())
      dispatch(FetchUsers())
      dispatch(FetchReviewOrders())
    },[])

    return (
        <div>
            <RevisionPopover data={[changesFlag, setChangesFlag, changesData]}/>
            <div className="dashboard-tableContainer">
                <div className="admin-table1">
                    <div className="tableHeader">
                        Assign New Orders
                        <button className="table-btn">View</button>
                    </div>
                   <AssignTable data={ordersToAssign} />
                </div> 

                <div className="admin-table1">
                    <div className="tableHeader">
                        Review Orders
                        <button className="table-btn">View</button>
                    </div>
                   <ReviewTable data={ordersToReview} />
                </div> 

            </div>
        </div>
    )
}

export default SalesDashboard
