/* import axios from 'axios';
import {USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS} from '../constants/userConstants'

export const signin = (email, password)=> async (dispatch)=>{
    dispatch({type: USER_SIGNIN_REQUEST,  payload: {email,password}});
    try{
        const {data} = await axios.post('/api/users/signin', {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        // localStorage.setItem  = we save the user signin even if we close the browser and open again
        localStorage.setItem('userInfo', JSON.stringify(data));
    }
    
 /*    catch(error) {
        dispatch({type: USER_SIGNIN_FAIL, 
            payload:error.response && error.response.data.message
            ? error.response.data.message 
           : error.message });
    } */
//}; //


import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  
} from '../constants/userConstants';
import Axios from 'axios';

// register part

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
     console.log(`this is email ${email}`)
  try {
    // we get all data from user and also as token then send the email and password
    const { data } = await Axios.post('/api/users/register', { name, email, password });
    console.log('is data from userAction which i put in in var called userData in reducer in', data)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    /* to update the redux store based on userSignin coz in App we read userSignin to authoizncate user and to see it directly in sign in part in browser */
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  /*   console.log(`this is data ${data}`) */
    localStorage.setItem("userInfoKey", JSON.stringify(data));
    
    /* if get error will see the msg from backend which will apear in MessageBox component */
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
 // Sign in part
export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
     console.log(`this is email ${email}`)
  try {
    // we get all data from user and also as token then send the email and password
    const { data } = await Axios.post('/api/users/signin', { email, password });
    console.log('is data from userAction which i put in in var called userData in reducer in', data)
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  /*   console.log(`this is data ${data}`) */
    localStorage.setItem("userInfoKey", JSON.stringify(data));
    
    /* if get error will see the msg from backend which will apear in MessageBox component */
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/* const sigtout2 = ()=>{
  return function (dispatch) {

  }
} */

// when user sign out it will be remove those key which have object value
export const signout =()=>(dispatch)=>{
localStorage.removeItem('userInfoKey');
localStorage.removeItem('myKey');
// when the user press sgin out remove the obj shippingAddress from local storage
localStorage.removeItem('shippingKey')
dispatch({type: USER_SIGNOUT});
}