const initialState = {
    baseUrl: "http://localhost:3000",
    loading: false,
}


// API Selector
export const BASE_URL =  (state) => state.AuthReducer.baseUrl

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
        
        }
        
    return state;
}