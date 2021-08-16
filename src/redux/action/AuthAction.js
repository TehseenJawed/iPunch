export const Loading = (load) => {
    // console.log(data)
    return {
      type: "Loading",
      load,
    };
  };

  export const BaseURL = (load) => {
    // console.log(data)
    return {
      type: "BaseURL",
      load,
    };
  };

  export const Sales_Login = (load) => {
    // console.log(data)
    return {
      type: "Sales_Login",
      load,
    };
  };

export const ChangeBaseURL = (load) => {
    // console.log(data)
    return async (dispatch, state) => {

        dispatch(BaseURL("www.google.com"))
    }
  };

export const ChangeSalesLogin = (load) => {
    return async (dispatch, state) => {

        dispatch(Sales_Login(load))
    }
  };