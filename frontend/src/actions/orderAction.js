import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstants";


import { CART_EMPTY } from "../constants/cartConstants";
import Axios from "axios"

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
  try {
      // send ajax request
      const {userSignin:{userData},
    }  = getState();
      const {data} = await Axios.post('/api/order', order, { 
        // we encrypt the info users in requset Header (network => XHR => select item => Headers) in browser 
          headers: {
              Authorization: `Bearer ${userData.token}`,
          },
      });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload:data.order});
    dispatch({type: CART_EMPTY });
    localStorage.removeItem('cartItems');
    
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
  const {
    userSignin: { userData },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/order/${orderId}`, {
      headers: { Authorization: `Bearer ${userData.token}` },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};
