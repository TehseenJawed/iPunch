const initialState = {
    all_orders: [],
    add_order_to_deliver:[]
}


// API Selector
export const ALL_ORDERS = (state) => state.DesignerReducer.all_orders
export const ADD_ORDER_TO_DELIVER = (state) => state.DesignerReducer.add_order_to_deliver

export default function AuthReducer(state = initialState, action) {
    
    switch (action.type) {
        case "Add_Orders":
            return {
                ...state,
                all_orders: action.load,
            }
        case "Add_Order_To_Deliver":
            console.log("Reducer is here ===> ",action.load)
            return {
                ...state,
                add_order_to_deliver: action.load,
            }
    }


    return state;
}