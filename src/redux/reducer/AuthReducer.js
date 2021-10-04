const initialState = {
    baseUrl: "https://sleepy-chamber-98905.herokuapp.com/",
    invoice_id: "",
    services:[],
    state:[],
    signupFlag: false,
    loginFlag: false,
    loginData: {user:{}},
    snackFlag: false,
    snackObj: {},
    loading: false,
    invoiceData:{}
}


// API Selector
export const BASE_URL = (state) => state.AuthReducer.baseUrl
export const INVOICE_ID = (state) => state.AuthReducer.invoice_id
export const SERVICES = (state) => state.AuthReducer.services
export const STATE = (state) => state.AuthReducer.state
export const LOADING = (state) => state.AuthReducer.loading
export const LOGIN_FLAG = (state) => state.AuthReducer.loginFlag
export const SIGNUP_FLAG = (state) => state.AuthReducer.signupFlag
export const LOGIN_DATA = (state) => state.AuthReducer.loginData
export const SNACK_TEXT = (state) => state.AuthReducer.snackObj
export const SNACK_FLAG = (state) => state.AuthReducer.snackFlag
export const UPDATE_INVOICE_DATA = (state) => state.AuthReducer.invoiceData

export default function AuthReducer(state = initialState, action) {
    // console.log("It is sstate ===> ",state)
    switch (action.type) {
        case "Loading":
            return {
                ...state,
                // signupFlag: action.load,
                loading:action.load
            }
        case "InvoiceID":
            return {
                ...state,
                invoice_id: action.load,
            }
        case "UpdateInvoiceData":
            return {
                ...state,
                invoiceData: action.load,
            }
        case "AddServices":
            return {
                ...state,
                services: action.load,
            }
        case "AddState":
            return {
                ...state,
                state: action.load,
            }
        case "SnackFlag":
            return {
                ...state,
                snackFlag:action.load,
            }
        case "SnackData":
            return {
                ...state,
                snackObj:action.load,
            }
        case "Signup":
            return {
                ...state,
                signupFlag: action.load,
                loading: false
            }
        case "Signup_Flag":
            return {
                ...state,
                signupFlag: action.load,
                loading: false
            }
        case "BaseURL":
            return {
                ...state,
                baseUrl: action.load
            }
        case "Login":
            return {
                ...state,
                loading:   false,
                loginFlag: true,
                loginData: action.load
            }
        case "Signout":
            return {
                ...state,
                loginFlag: false,
                signupFlag: false,
                loginData: {user:{}}
            }

    }


    return state;
}