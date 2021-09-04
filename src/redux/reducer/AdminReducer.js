const initialState = {
    orderData: [],
    orderDataFilter: [],
    assignOrdersData: [],
    userData:[],
    designerData:[],
    reviewOrders:[]
}


// API Selector
export const ORDER_DATA = (state) => state.AdminReducer.orderData
export const REVIEW_ORDERS = (state) => state.AdminReducer.reviewOrders
export const ORDER_DATAFILTER = (state) => state.AdminReducer.orderDataFilter
export const ASSIGN_ORDERS = (state) => state.AdminReducer.assignOrdersData
export const USER_DATA = (state) => state.AdminReducer.userData
export const DESIGNER_DATA = (state) => state.AdminReducer.designerData

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