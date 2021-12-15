const initialState = {
    orderData: [],
    orderDataFilter: [],
    assignOrdersData: [],
    userData:[],
    designerData:[],
    reviewOrders:[],
    allInvoices:[],
    allInvoicesFilter:[],
    allAgents:[],
    salesAgent:[],
    totalData:{orders:0, customers:0, clients:0,},
    paidUnpaidOrders:{paidOrders:[], unpaidOrders:[]}
}


// API Selector
export const ORDER_DATA = (state) => state.AdminReducer.orderData
export const REVIEW_ORDERS = (state) => state.AdminReducer.reviewOrders
export const ORDER_DATAFILTER = (state) => state.AdminReducer.orderDataFilter
export const ASSIGN_ORDERS = (state) => state.AdminReducer.assignOrdersData
export const USER_DATA = (state) => state.AdminReducer.userData
export const DESIGNER_DATA = (state) => state.AdminReducer.designerData
export const ALL_INVOICES_FILTER = (state) => state.AdminReducer.allInvoicesFilter
export const ALL_INVOICES = (state) => state.AdminReducer.allInvoices
export const ALL_AGENTS = (state) => state.AdminReducer.allAgents
export const SALES_AGENTS = (state) => state.AdminReducer.salesAgent
export const TOTAL_DATA = (state) => state.AdminReducer.totalData
export const PAID_UNPAID_ORDERS = (state) => state.AdminReducer.paidUnpaidOrders

export default function AuthReducer(state = initialState, action) {
    
    switch (action.type) {
        case "All_Orders":
            return {
                ...state,
                orderData: action.load,
                orderDataFilter:action.load
            }
        case "All_Users":  
            return {
                ...state,
                userData: action.load,
            }
        case "OrderFilter":  
            return {
                ...state,
                orderDataFilter: action.load,
            }
        case "SALES_AGENTS":  
            return {
                ...state,
                salesAgent: action.load,
            }
        case "PaidUnpaidOrders":  
            return {
                ...state,
                paidUnpaidOrders: action.load,
            }
        case "TotalData":  
            return {
                ...state,
                totalData: action.load,
            }
        case "SetInvoices":  
            return {
                ...state,
                allInvoices: action.load,
                allInvoicesFilter: action.load,
            }
        case "AllInvoiceFilter":  
            return {
                ...state,
                allInvoicesFilter: action.load,
            }
        case "SetAgents":  
            return {
                ...state,
                allAgents: action.load,
            }
        case "Assign_Orders":  
            return {
                ...state,
                assignOrdersData: action.load,
            }
        case "ReviewOrders":  
            return {
                ...state,
                reviewOrders: action.load,
            }
        case "Assign_Designer":  
            return {
                ...state,
                designerData: action.load,
            }
    }


    return state;
}