const initialState = {
    all_client_data: [],
    all_client_filterdata: [],
    customer_range:{limit:10, page:0},
    all_customer_data: [],
    all_orders_data: [],
    allDeliverOrders: [],
    allUncompleteOrders: [],
    allUnpaidOrders: [],
}


// API Selector
export const ALL_CLIENT_DATA = (state) => state.AgentDataReducer.all_client_data
export const ALL_CLIENT_FILTERDATA = (state) => state.AgentDataReducer.all_client_filterdata
export const CUSTOMER_RANGE = (state) => state.AgentDataReducer.customer_range
export const ALL_CUSTOMER_DATA = (state) => state.AgentDataReducer.all_customer_data
export const ALL_ORDER_DATA = (state) => state.AgentDataReducer.all_orders_data
export const ALLDeliverOrders = (state) => state.AgentDataReducer.allDeliverOrders
export const AllUncompleteOrders = (state) => state.AgentDataReducer.allUncompleteOrders
export const AllUnpaidOrders = (state) => state.AgentDataReducer.allUnpaidOrders

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
        case "AllCustomer":
            return {
                ...state,
                all_customer_data: action.load,
            }
        case "AllOrders":
            return {
                ...state,
                all_orders_data: action.load,
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
        case "SetUnpaidOrders":
            return {
                ...state,
                allUnpaidOrders: action.load,
            }

    }


    return state;
}