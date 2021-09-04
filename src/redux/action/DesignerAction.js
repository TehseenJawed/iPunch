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

export const SetNewOrders = (load) => {
  return {
    type: "Add_New_Orders",
    load,
  };
};

export const SetToDeliver = (load) => {
  return {
    type: "Add_Order_To_Deliver",
    load,
  };
};

export const FetchNewOrders = (load) => {
  console.log("===> fdf",load)
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order?designer=${state().AuthReducer.loginData.user.id}&orderStatus=Assigned`, load)
        dispatch(SetNewOrders(response.data))
        // dispatch(ChangeSnackData({text:"A New IdealPunch Member has created.", variant:"success"}))
        // dispatch(ChangeSnackFlag(true))
        
      }
      catch(err) {
        // dispatch(Loading(false))
        // dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        // dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const SetOrderToDeliver = (load) => {
  console.log("===> fdf",load)
    return async (dispatch, state) => {
      try{
        await dispatch(SetToDeliver(load))
      }
      catch(err) {
      }
    }
  };

export const DeliverOrder = (load) => {
  console.log("===> fdf",load)
    return async (dispatch, state) => {
      try{
        const response =await axios.patch(`${state().AuthReducer.baseUrl}api/order/${state().DesignerReducer.add_order_to_deliver.id}`, load)
        dispatch(ChangeSnackData({text:"Your Order has sent to Admin for reviews.", variant:"success"}))
        
        dispatch(FetchNewOrders())
        dispatch(ChangeSnackFlag(true))
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };