
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
    const { data } = await Axios.post('/api/users/register', { name, email, password });
    console.log('is data from userAction which i put in in var called userData in reducer in', data)
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  /*   console.log(`this is data ${data}`) */
    localStorage.setItem("userInfoKey", JSON.stringify(data));
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
    const { data } = await Axios.post('/api/users/signin', { email, password });
    console.log('is data from userAction which i put in in var called userData in reducer in', data)
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
  /*   console.log(`this is data ${data}`) */
    localStorage.setItem("userInfoKey", JSON.stringify(data));
    
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

export const signout =()=>(dispatch)=>{
localStorage.removeItem('userInfoKey');
localStorage.removeItem('myKey');
localStorage.removeItem('shippingKey')
dispatch({type: USER_SIGNOUT});
}