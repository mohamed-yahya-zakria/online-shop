import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentMethodAction } from "../actions/cartActions";

import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = (props) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(paymentMethodAction(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Payment Method</h1>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="IDPayPal"
              value="Paypal"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
              checked
            ></input>
            <label htmlFor="IDPayPal">PayPal</label>
          </div>
        </div>

        <div>
          <div>
            <input
              type="radio"
              id="IDStripe"
              value="Stripe"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            ></input>
            <label htmlFor="IDStripe">Stripe</label>
          </div>
        </div>

        <div>
          <button type="submit" className="primary">
            {" "}
            go to next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentScreen;
