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

export const ChangeBaseURL = (load) => {
    // console.log(data)
    return async (dispatch, state) => {

        dispatch(BaseURL("www.google.com"))
    }
  };