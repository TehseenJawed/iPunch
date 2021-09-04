import axios from 'axios'

export const Loading = (load) => {
    return {
      type: "Loading",
      load,
    };
  };


export const ChangeSnackFlag = (load) => {
  return {
    type: "SnackFlag",
    load,
  };
};

export const ChangeSnackData = (load) => {
  return {
    type: "SnackData",
    load,
  };
};

export const SetOrders = (load) => {
  return {
    type: "All_Orders",
    load,
  };
};

export const SetUsers = (load) => {
  return {
    type: "All_Users",
    load,
  };
};

export const SetAssignOrder = (load) => {
  return {
    type: "Assign_Orders",
    load,
  };
};

export const SetReviewOrders = (load) => {
  return {
    type: "ReviewOrders",
    load,
  };
};

export const SetDesignerData = (load) => {
  return {
    type: "Assign_Designer",
    load,
  };
};

export const FetchOrders = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order`, load)
        dispatch(SetOrders(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchAssignOrders = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order?orderStatus=Not Assign`, load)
        dispatch(SetAssignOrder(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchReviewOrders = (load) => {
  return async (dispatch, state) => {
    try{
      await dispatch(Loading(true))
      const response =await axios.get(`${state().AuthReducer.baseUrl}api/order?orderStatus=Review`, load)
      dispatch(SetReviewOrders(response.data))
      
    }
    catch(err) {
      dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
      dispatch(ChangeSnackFlag(true))
    }
  }
};
export const FetchDesignerData = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/user?role=Designer`, load)
        dispatch(SetDesignerData(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const PatchOrderbyDesigner = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.patch(`${state().AuthReducer.baseUrl}api/order/${load.id}`, load.data)
        dispatch(ChangeSnackData({text:"Designer has Assigned for this Order.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        dispatch(FetchAssignOrders())
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const PatchOrdertoDeliver = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.patch(`${state().AuthReducer.baseUrl}api/order/${load.id}`, load.data)
        dispatch(ChangeSnackData({text:"Order has delivered to Agent.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        dispatch(FetchReviewOrders())
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const PatchOrderForChanges = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.patch(`${state().AuthReducer.baseUrl}api/order/${load.id}`, load.data)
        dispatch(ChangeSnackData({text:"Order has resend to the Designer.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        dispatch(FetchReviewOrders())
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchUsers = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/user`, load)
        dispatch(SetUsers(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };
  

export const DeliverOrder = (load) => {
    return async (dispatch, state) => {
      try{
        const response =await axios.patch(`${state().AuthReducer.baseUrl}api/order/${state().DesignerReducer.add_order_to_deliver.id}`, load)
        dispatch(ChangeSnackData({text:"A New IdealPunch Member has created.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

  
export const CreateNewAgent = (load) => {
  
  return async (dispatch, state) => {
    try{
      await dispatch(Loading(true))
      const response =await axios.post(`${state().AuthReducer.baseUrl}api/user`, load)
      dispatch(ChangeSnackData({text:"New Agent created successfully", variant:"success"}))
      dispatch(ChangeSnackFlag(true))
      
    }
    catch(err) {
      dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
      dispatch(ChangeSnackFlag(true))
    }
  }
};

export const CreateNewState = (load) => {
  console.log("===> ",load)
  return async (dispatch, state) => {
    try{
      await dispatch(Loading(true))
      const response =await axios.post(`${state().AuthReducer.baseUrl}api/state`, load)
      dispatch(ChangeSnackData({text:"New State has created successfully", variant:"success"}))
      dispatch(ChangeSnackFlag(true))
      
    }
    catch(err) {
      dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
      dispatch(ChangeSnackFlag(true))
    }
  }
};
