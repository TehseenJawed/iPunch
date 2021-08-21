export const Loading = (load) => {
    // console.log(data)
    return {
      type: "Loading",
      load,
    };
  };

  export const BaseURL = (load) => {
    return {
      type: "BaseURL",
      load,
    };
  };

  // Authentication for Sales Department START
  export const Sales_Login = (load) => {
    return {
      type: "Sales_Login",
      load,
    };
  };
  
  export const Sales_Logout = (load) => {
    return {
      type: "Sales_Logout",
      load,
    };
  };
  // Authentication for Sales Department END
  
  // Authentication for Designer Department START
  export const Designer_Login = (load) => {
    return {
      type: "Designer_Login",
      load,
    };
  };

  export const Designer_Logout = (load) => {
    return {
      type: "Designer_Logout",
      load,
    };
  };
  // Authentication for Designer Department END

export const ChangeBaseURL = (load) => {
    // console.log(data)
    return async (dispatch, state) => {
        dispatch(BaseURL("www.google.com"))
    }
  };

export const ChangeSalesLogin = (load) => {
    switch(load.userType){
      case 'Sales':
        return async (dispatch, state) => {

          dispatch(Sales_Login(load))
      }
      case 'Designer':
        
        console.log("It is ChangeSalesLogin ==> ",load.userType)
        return async (dispatch, state) => {
          dispatch(Designer_Login(load))
      }
      default:
        return async (dispatch, state) => {

          dispatch(Loading(false))
      }
    }
      
    
  };