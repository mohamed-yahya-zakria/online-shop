import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingaddress } from "../actions/cartActions";

const { default: CheckoutSteps } = require("../components/CheckoutSteps");

const ShippingAddressScreen = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userData } = userSignin;
  const cart = useSelector((state) =>state.cart);
  const {shippingAddress} = cart;
  if (!userData) {
    props.history.push("/signin");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postCode, setPostCode] = useState(shippingAddress.postCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingaddress({ fullName, address, city, postCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        {/* address */}
        <div>
          <label htmlFor="address"> Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="Enter your city name"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        {/* postCode */}
        <div>
          <label htmlFor="postCode">Post Code</label>
          <input
            type="text"
            placeholder="Enter your post code"
            id="postCode"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button type="submit" className="primary">
            {" "}
            go to next{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddressScreen;
