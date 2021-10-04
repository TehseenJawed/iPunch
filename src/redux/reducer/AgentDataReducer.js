const initialState = {
    all_client_data: [],
    all_client_filterdata: [],
    customer_range:{limit:10, page:0},
    all_customer_data: [],
    all_customer_data_sort: [],
    customer_sort_filter:{limit:10, page:0},
    all_orders_data: [],
    allDeliverOrders: [],
    allOrderSort: [],
    allUncompleteOrders: [],
    allUnpaidOrders: [],
    allInvoiceData:{},
    totalPaidInvoice:[],
    ordersForInvoice:[],
    setExpectedClients:[]
}


// API Selector
export const ALL_CLIENT_DATA = (state) => state.AgentDataReducer.all_client_data
export const ALL_CLIENT_FILTERDATA = (state) => state.AgentDataReducer.all_client_filterdata
export const CUSTOMER_RANGE = (state) => state.AgentDataReducer.customer_range
export const ALL_CUSTOMER_DATA = (state) => state.AgentDataReducer.all_customer_data

export const ALL_CUSTOMER_DATA_SORT = (state) => state.AgentDataReducer.all_customer_data_sort
export const CUSTOMER_SORT_FILTER = (state) => state.AgentDataReducer.customer_sort_filter

export const ALL_ORDER_DATA = (state) => state.AgentDataReducer.all_orders_data
export const ALLDeliverOrders = (state) => state.AgentDataReducer.allDeliverOrders
export const ALL_ORDER_SORT = (state) => state.AgentDataReducer.allOrderSort
export const AllUncompleteOrders = (state) => state.AgentDataReducer.allUncompleteOrders
export const AllUnpaidOrders = (state) => state.AgentDataReducer.allUnpaidOrders
export const AllInvoiceData = (state) => state.AgentDataReducer.allInvoiceData
export const TOTAL_PAID_INVOICE = (state) => state.AgentDataReducer.totalPaidInvoice
export const SELECTED_ORDER_FOR_INVOICE = (state) => state.AgentDataReducer.ordersForInvoice
export const SET_EXPECTED_CLIENTS = (state) => state.AgentDataReducer.setExpectedClients

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case "AllClient":
            return {
                ...state,
                all_client_data: action.load,
                all_client_filterdata: action.load,
            }
        case "FilterClient":
            return {
                ...state,
                all_client_filterdata: action.load,
            }
        case "SetExpectedClients":
            return {
                ...state,
                setExpectedClients: action.load,
            }
        case "OrdersForInvoice":
            return {
                ...state,
                ordersForInvoice: action.load,
            }
        case "SetInvoiceData":
            return {
                ...state,
                allInvoiceData: action.load,
            }
        case "AllCustomer":
            return {
                ...state,
                all_customer_data: action.load,
            }
        case "AllFilterCustomer":
            return {
                ...state,
                all_customer_data_sort: action.load,
            }
        case "SetCustomerFilter":
            return {
                ...state,
                customer_sort_filter: action.load,
            }
        case "AllOrders":
            return {
                ...state,
                all_orders_data: action.load,
                allOrderSort: action.load,
            }
        case "AllOrdersSort":
            return {
                ...state,
                allOrderSort: action.load,
            }
        case "SetDeliverOrders":
            return {
                ...state,
                allDeliverOrders: action.load,
            }
        case "UncompleteOrders":
            return {
                ...state,
                allUncompleteOrders: action.load,
            }
        case "SetTotalPaidInvoice":
            return {
                ...state,
                totalPaidInvoice: action.load,
            }
        case "SetUnpaidOrders":
            return {
                ...state,
                allUnpaidOrders: action.load,
            }

    }


    return state;
}