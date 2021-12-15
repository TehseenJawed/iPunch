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

export const SetInvoices = (load) => {
  return {
    type: "SetInvoices",
    load,
  };
};

export const SetAgents = (load) => {
  return {
    type: "SetAgents",
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

export const SetTotalData = (load) => {
  return {
    type: "TotalData",
    load,
  };
};

export const SetPaidUnpaidOrders = (load) => {
  return {
    type: "PaidUnpaidOrders",
    load,
  };
};

export const SalesAgent = (load) => {
  return {
    type: "SALES_AGENTS",
    load,
  };
};

export const OrderFilter = (load) => {
  return {
    type: "OrderFilter",
    load,
  };
};

export const AllInvoiceFilter = (load) => {
  return {
    type: "AllInvoiceFilter",
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

export const FetchOrdersByPaymentStatus = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const paidResponse =await axios.get(`${state().AuthReducer.baseUrl}api/order?paymentStatus=Paid`, load)
        const unPaidResponse =await axios.get(`${state().AuthReducer.baseUrl}api/order?paymentStatus=Not Paid`, load)
        
        const newObj = {
          paidOrders:paidResponse.data.results,
          unpaidOrders:unPaidResponse.data.results
        }
        dispatch(SetPaidUnpaidOrders(newObj))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };
  
export const FetchOrderByAgent = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order?agent=${load}`)
        dispatch(OrderFilter(response.data))
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };
  
export const FetchOrderByOrderStatus = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order?orderStatus=${load}`)
        dispatch(OrderFilter(response.data))
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };
  
export const FetchOrderByID = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order?orderNo=${load}`)
        dispatch(OrderFilter(response.data))
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };
  
export const FetchOrderByDate = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order/time?startDate=${load.fFrom}&endDate=${load.fTo}`)
        const newObj = {
          results:response.data
        }
        dispatch(OrderFilter(newObj))
        console.log(response.data)
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchInvoices = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/customer-invoice`, load)
        dispatch(SetInvoices(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchInvoicesByAgent = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/customer-invoice?agent=${load}`)
        dispatch(AllInvoiceFilter(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchInvoicesByPayment = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/customer-invoice?status=${load}`)
        dispatch(AllInvoiceFilter(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchInvoicesByID = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/customer-invoice?_id=${load}`)
        dispatch(AllInvoiceFilter(response.data))
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchAgents = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/user`)
        dispatch(SetAgents(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchSalesAgent = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/user?role=Sales`)
        console.log("------->>>>>> ",response.data)
        dispatch(SalesAgent(response.data))
        
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const FetchSalesDataByID = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const orderResponse =await axios.get(`${state().AuthReducer.baseUrl}api/order?agent=${load}`)
        const customerResponse =await axios.get(`${state().AuthReducer.baseUrl}api/customer?agent=${load}`)
        const clientResponse =await axios.get(`${state().AuthReducer.baseUrl}api/client-database?agent=${load}`)
        const newObj = {
          orders:orderResponse.data.totalResults,
          customers:customerResponse.data.totalResults,
          clients:clientResponse.data.totalResults,
        }
        dispatch(SetTotalData(newObj))
        
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

  
  export const UpdateAgentInfo = (load, id) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.patch(`${state().AuthReducer.baseUrl}api/user/${id}`, load)
        dispatch(FetchAgents())
        dispatch(ChangeSnackData({text:"Agent Information has updated.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
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

export const CreateNewService = (load) => {
  return async (dispatch, state) => {
    try{
      await dispatch(Loading(true))
      const response =await axios.post(`${state().AuthReducer.baseUrl}api/service`, load)
      dispatch(ChangeSnackData({text:"New State has created successfully", variant:"success"}))
      dispatch(ChangeSnackFlag(true))
      
    }
    catch(err) {
      dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
      dispatch(ChangeSnackFlag(true))
    }
  }
};
