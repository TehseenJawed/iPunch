import axios from 'axios'

export const Loading = (load) => {
    return {
      type: "Loading",
      load,
    };
  };

export const InvoiceID = (load) => {
    return {
      type: "InvoiceID",
      load,
    };
  };

export const SignupFlag = (load) => {
  
    return {
      type: "Signup_Flag",
      load,
    };
  };

  export const BaseURL = (load) => {
    return {
      type: "BaseURL",
      load,
    };
  };

  export const Signup = (load) => {
    return {
      type: "Signup",
      load,
    };
  };

export const AddServices = (load) => {
  return {
    type: "AddServices",
    load,
  };
};

export const AddState = (load) => {
  return {
    type: "AddState",
    load,
  };
};

  // Authentication for Sales Department START
  export const Login = (load) => {
    return {
      type: "Login",
      load,
    };
  };
  
  export const Signout = (load) => {
    return {
      type: "Signout",
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

export const UpdateAllClient = (load) => {
  return {
    type: "AllClient",
    load,
  };
};

 
export const ChangeBaseURL = (load) => {
    return async (dispatch, state) => {
        dispatch(BaseURL("www.google.com"))
    }
  };

export const ChangeSignupFlag = (load) => {
  
    return async (dispatch, state) => {
      try{
        await dispatch(SignupFlag(load))
      }
      catch(err) {
        console.log(err)
      }
    }
  };

export const SignoutFunction = (load) => {
  
    return async (dispatch, state) => {
      try{
        await dispatch(Signout(load))
      }
      catch(err) {
        console.log(err)
      }
    }
  };



export const SignupFunction = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response =await axios.post(`${state().AuthReducer.baseUrl}api/user`, load)
        dispatch(Signup(true))
        dispatch(ChangeSnackData({text:"A New IdealPunch Member has created.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const LoginFunction = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response = await axios.post(`${state().AuthReducer.baseUrl}api/auth/login`, load)
        console.log(response.data)

        // if(response.data.user.password === undefined){
        //   const newPassword = prompt("Your Password is out dated. Kindly give your new password here")
        //   const load = {password:newPassword}
        //   console.log("Chal raha hai ....")
        //   // const response = await axios.patch(`${state().AuthReducer.baseUrl}api/auth/login/${response.data.user.id}`, load)
          
        //   dispatch(ChangeSnackData({text:"Your Password has updated.", variant:"success"}))
        //   dispatch(ChangeSnackFlag(true))
        // }
        dispatch(Login(response.data))
        dispatch(ChangeSnackData({text:"You have Loggedin successfully.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const Order_By_Agent = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        await axios.post(`${state().AuthReducer.baseUrl}api/order`, load)
        await dispatch(Loading(false))
        dispatch(ChangeSnackData({text:"A New Order has placed.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        
      }
      catch(err) {
        dispatch(Loading(false))
        console.log(err.response.data.message)
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const Create_Customer_Account = (load) => {
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response = await axios.post(`${state().AuthReducer.baseUrl}api/customer`, load)
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:"A New Customer Account has created to out database.", variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))

      }
    }
  };

export const Generate_InvoiceBy_Agent = (load) => {
  console.log("Generate Invoice is here ==> ",load)
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response = await axios.post(`${state().AuthReducer.baseUrl}api/customer-invoice`, load)
        dispatch(ChangeSnackData({text:`Invoice Link has generated for client`, variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        dispatch(InvoiceID(response.data.id))
        dispatch(Loading(false))
        
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const Generate_NewClient = (load) => {
  
    return async (dispatch, state) => {
      try{
        await dispatch(Loading(true))
        const response = await axios.post(`${state().AuthReducer.baseUrl}api/client-database`, load)
        dispatch(ChangeSnackData({text:`New Client has registered`, variant:"success"}))
        dispatch(ChangeSnackFlag(true))
        dispatch(Loading(false))
        
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const SetAllClients_Data = (load) => {

    return async (dispatch, state) => {
      try{
        const response = await axios.post(`${state().AuthReducer.baseUrl}api/client-database/agentid/${state().AuthReducer.loginData.user.id}`, load)
        dispatch()
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const SetService_Data = (load) => {

    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/service`, load)
        dispatch(AddServices(response.data))
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };

export const SetState_Data = (load) => {

    return async (dispatch, state) => {
      try{
        const response = await axios.get(`${state().AuthReducer.baseUrl}api/state`, load)
        dispatch(AddState(response.data))
      }
      catch(err) {
        dispatch(Loading(false))
        dispatch(ChangeSnackData({text:err.response.data.message, variant:"error"}))
        dispatch(ChangeSnackFlag(true))
      }
    }
  };
