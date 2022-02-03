import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer, orderDetailsReducer } from "./reducers/orderRuducer";

import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { userRegisterReducer, userSignReducer } from "./reducers/userReducers";

const initialState = {
  cart: {
    cartItems: localStorage.getItem("myKey")
      ? JSON.parse(localStorage.getItem("myKey"))
      : [],

    shippingAddress: localStorage.getItem("shippingKey")
      ? JSON.parse(localStorage.getItem("shippingKey"))
      : {},

    savePaymentMethod: "PayPal",
  },
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
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
