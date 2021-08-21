const initialState = {
    baseUrl: "http://localhost:3000",
    loginFlag: false,
    loginData: "",
    loading: false,
}


// API Selector
export const BASE_URL = (state) => state.AuthReducer.baseUrl
export const LOGIN_FLAG = (state) => state.AuthReducer.loginFlag
export const LOGIN_DATA = (state) => state.AuthReducer.loginData

export default function AuthReducer(state = initialState, action) {
    // console.log("It is sstate ===> ",state)

    switch (action.type) {
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
                loginFlag: true,
                loginData: action.load
            }
        case "Sales_Logout":
            return {
                ...state,
                loginFlag: false,
                loginData: ""
            }
        case "Designer_Login":
            return {
                ...state,
                loginFlag: true,
                loginData: action.load
            }

    }


    return state;
}