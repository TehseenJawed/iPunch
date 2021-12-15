import axios from 'axios'
import {} from './AuthAction'

export const UpdateAllClient = (load) => {
  return {
    type: "AllClient",
    load,
  };
};
 
export const UpdateAllOrder = (load) => {
  return {
    type: "AllOrders",
    load,
  };
};
 
export const UpdateUncompleteOrders = (load) => {
  return {
    type: "UncompleteOrders",
    load,
  };
};
 
export const UpdateClientFilter = (load) => {
  return {
    type: "FilterClient",
    load,
  };
};
 
export const UpdateAllCustomer = (load) => {
  return {
    type: "AllCustomer",
    load,
  };
};

export const SetAllCustomer_Filter = (load) => {
  return {
    type: "SetCustomerFilter",
    load,
  };
};

export const UpdateAllFilterCustomer = (load) => {
  return {
    type: "AllFilterCustomer",
    load,
  };
};

export const UpdateCustomerRange = (load) => {
  return {
    type: "SetCustomerRange",
    load,
  };
};

export const SetDeliver_Orders = (load) => {
  return {
    type: "SetDeliverOrders",
    load,
  };
};

export const SetUnpaid_Orders = (load) => {
  return {
    type: "SetUnpaidOrders",
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

export const SetInvoiceData = (load) => {
  return {
    type: "SetInvoiceData",
    load,
  };
};

export const AllOrderSort = (load) => {
  return {
    type: "AllOrdersSort",
    load,
  };
};

export const SetTotalPaidInvoice = (load) => {
  return {
    type: "SetTotalPaidInvoice",
    load,
  };
};

export const OrdersForInvoice = (load) => {
  return {
    type: "OrdersForInvoice",
    load,
  };
};

export const SetExpectedClient = (load) => {
  return {
    type: "SetExpectedClients",
    load,
  };
};

 
export const SetAllClients_Data = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/client-database?agent=${state().AuthReducer.loginData.user.id}`, load)
        dispatch(UpdateAllClient(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const SetExpectedClients = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/client-database?agent=${state().AuthReducer.loginData.user.id}&interest=Contact Later`, load)
        dispatch(SetExpectedClient(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const SetAllInvoice_Data = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/customer-invoice?agent=${state().AuthReducer.loginData.user.id}`, load)
        dispatch(SetInvoiceData(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Invoice Data ===> ",err.response.data.message)
      }
    }
  };

export const UpdateClientData = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.patch(`${state().AuthReducer.baseUrl}api/customer/${load.id}`, load)
        dispatch(SetAllCustomer_Data())
        dispatch(ChangeSnackData({text:"Your Client Information has updated.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const UpdateOrderData = (load, id) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.patch(`${state().AuthReducer.baseUrl}api/order/${id}`, load)
        dispatch(SetAllCustomer_Data())
        dispatch(ChangeSnackData({text:"Order Information has updated.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"success"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const SetMyOrders = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?agent=${state().AuthReducer.loginData.user.id}`)
        dispatch(UpdateAllOrder(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const SetUncompleteOrders = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?agent=${state().AuthReducer.loginData.user.id}`)
        dispatch(UpdateUncompleteOrders(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const UpdateTotalSales = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/customer-invoice?agent=${state().AuthReducer.loginData.user.id}&status=Paid`)
        dispatch(SetTotalPaidInvoice(response.data.results))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const SetUnpaidOrders = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?paymentStatus=Not Paid`)
        dispatch(SetUnpaid_Orders(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const UpdateOrderByID = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?orderNo=${load}`)
        // const newObj={
        //   results:[response.data]
        // }
        console.log(response.data)
        dispatch(AllOrderSort(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const UpdateOrderByCustomer = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?customer=${load}&agent=${state().AuthReducer.loginData.user.id}`)
        
        console.log(response.data)
        dispatch(AllOrderSort(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const UpdateOrderByPaymentStatus = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?paymentStatus=${load}&agent=${state().AuthReducer.loginData.user.id}`)
        
        console.log(response.data)
        dispatch(AllOrderSort(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const UpdateOrderByDate = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?paymentStatus=${load}&agent=${state().AuthReducer.loginData.user.id}`)
        
        console.log(response.data)
        dispatch(AllOrderSort(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const SetAllCustomer_Data = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/customer?agent=${state().AuthReducer.loginData.user.id}&limit=200`)
        dispatch(UpdateAllCustomer(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const SetAllCustomer_FilterData = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/customer?agent=${state().AuthReducer.loginData.user.id}&limit=${state().AgentDataReducer.customer_sort_filter.limit}&page=${state().AgentDataReducer.customer_sort_filter.page+1}`)
        dispatch(UpdateAllFilterCustomer(response.data))
        console.log(state().AuthReducer.loginData.user.id)
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

  export const FetchOrderByDate = (load) => {
    return async (dispatch, state) => {
      try{
        const response =await axios.get(`${state().AuthReducer.baseUrl}api/order/time?agent=${state().AuthReducer.loginData.user.id}&startDate=${load.fFrom}&endDate=${load.fTo}`)
        const newObj = {
          results:response.data
        }
        dispatch(AllOrderSort(newObj))
        console.log(response.data)
      }
      catch(err) {
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const SetDeliverOrders = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?agent=${state().AuthReducer.loginData.user.id}&limit=200000`)
        dispatch(SetDeliver_Orders(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const FilterClientByEmail = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/client-database?email=${load.email}&limit=200`)
        dispatch(UpdateClientFilter(response.data)) 
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };
  
export const FilterClientByInterest = (load) => {
  console.log(load)
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/client-database?interest=${load}`)
        dispatch(UpdateClientFilter(response.data))
      }
      catch(err) {
        console.log(err.response.data.message,"<==== Error while fetching all Client Data")
      }
    }
  };

export const FilterClientByState = (load) => {
  console.log(load)
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/client-database?state=${load}`)
        dispatch(UpdateClientFilter(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };
