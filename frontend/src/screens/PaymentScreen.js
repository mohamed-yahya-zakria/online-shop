import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentMethodAction } from "../actions/cartActions";

import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = (props) => {
  // if the user don't fill the form in shipping then return it to shipping screen to fill it and don't stay in payment screen EX: if you just sign in then write in url 3000/payment then you will redirect to shipping screen coz you don't fill the shipping form
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
              //  checked = means by default is checked
              checked
            ></input>
            <label htmlFor="IDPayPal">PayPal</label>
          </div>
        </div>

        {/* stripe  */}

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
