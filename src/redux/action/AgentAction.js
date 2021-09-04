import axios from 'axios'

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
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?agent=${state().AuthReducer.loginData.user.id}&orderStatus!=Completed`)
        dispatch(UpdateUncompleteOrders(response.data))
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

export const SetAllCustomer_Data = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/customer?agent=${state().AuthReducer.loginData.user.id}`)
        dispatch(UpdateAllCustomer(response.data))
      }
      catch(err) {
        console.log(state().AuthReducer.loginData.user.id,"<==== Error while fetching all Client Data ===> ",err.response.data.message)
      }
    }
  };

export const SetDeliverOrders = (load) => {
    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/order?orderStatus=Delivered`)
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
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/client-database?email=${load.email}`)
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
