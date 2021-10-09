import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { signout } from "./actions/userActions";

import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";

const App = () => {
  // to show the number of items in the cart in the screen
  // useSelector = bring redux store and access on the cart
  const cart = useSelector((state) => state.cart);
  //cartItems =  is an array in cartReducer which i store the data
  // iam gonna get cartItems from cart object
  const { cartItems } = cart;
  // to show the users in sign in part in browser we should firstly get the data
  const userSignin = useSelector((state) => state.userSignin);
  // userData is property from userReducer which catch the data
  const { userData } = userSignin;
  console.log(userSignin)

  const dispatch = useDispatch();

  const signoutHandler =()=>{
    dispatch(signout())
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              YourMarket
            </Link>
          </div>

          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
                {/*  fa = font awosen */}
            {/* if userInfo in exist render name of user */}
             {/* if userInfo in not exist render sign in page*/}
            {userData ? (
              <div className='dropdown'> 
              <Link to="#">{userData.name} <i class="fa fa-caret-down"></i> {' '}</Link>

              <ul className="dropdown-content">
                <Link to="#signout" onClick={signoutHandler}> Sign out</Link>
              </ul>
              </div> ) : (
              
            
              <Link to="/signin">Signin</Link>
            )}
          </div>
        </header>
        <main>
          {/* /cart/:id?" here in optional if id after ? it will be go CartScreen */}
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path='/shipping' component={ShippingAddressScreen}></Route>
          <Route path='/payment' component={PaymentScreen}></Route>
          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          {/*exact means if url exactly (/) then run home component */}
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center"> All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
