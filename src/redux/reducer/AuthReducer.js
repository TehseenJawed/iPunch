const initialState = {
    baseUrl: "http://localhost:3000",
    sales_login:false,
    loginData:false,
    loading: false,
}


// API Selector
export const BASE_URL =  (state) => state.AuthReducer.baseUrl
export const SALES_DATA =  (state) => state.AuthReducer.sales_login
export const LOGIN_DATA =  (state) => state.AuthReducer.login

export default function AuthReducer(state = initialState, action){
    console.log(state.baseUrl)
    switch(action.type){
        case "Loading":
            return {
                ...state,
                loading: action.load
            }
        case "BaseURL":
            return {
                ...state,
                baseUrl: action.load
            }
        case "Sales_Login":
            return {
                ...state,
                sales_login:true,
                login: action.load
            }
        
        }
        
    return state;
}