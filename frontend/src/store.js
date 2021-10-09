import { applyMiddleware, createStore, compose, combineReducers } from "redux";
/*thunk= to send Ajax request to redux action */
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer, orderDetailsReducer } from "./reducers/orderRuducer";

import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { userRegisterReducer, userSignReducer } from "./reducers/userReducers";

const initialState = {
  /*to save in in cart coz when i refresh i lose the pervious data in cart part in navbar. it means user can't put many products in cart .myKey which i created in cartAction and cart,cartItems which i took from reducer to displayed in redux dev tools on the window . JSON.parse(localStorage.getItem('myKey')) = to convert cartItems to Json object coz it was string */

  // shippingAddress = which i created in reducer to catch all data from shipping form in shippingAddress screen ,  we do this steps coz if we refresh the page or get back to the home page then don't lose the user's information

  //JSON.parse(localStorage.getItem("shippingKey") = to parse json format

  cart: {
    cartItems: localStorage.getItem("myKey")
      ? JSON.parse(localStorage.getItem("myKey"))
      : [],

    shippingAddress: localStorage.getItem("shippingKey")
      ? JSON.parse(localStorage.getItem("shippingKey"))
      : {},

    savePaymentMethod: "PayPal",
  },
  //iam gonna check in local storage if user is same key then set user in navbar in user sign in part of not then false
  userSignin: {
    userData: localStorage.getItem("userInfoKey")
      ? JSON.parse(localStorage.getItem("userInfoKey"))
      : null,
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSignReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  
});
/*composeEnhancer to show state redux in window in redux Dev tools*/
/*compose from redux  */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* creat redux store */
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
