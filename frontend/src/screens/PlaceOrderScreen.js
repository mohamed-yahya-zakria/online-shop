import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderAction";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

const PlaceOrderScreen = (props) => {
  // shipping left side
  const cart = useSelector((state) => state.cart);
  // if user not selected payment method od ignore this steps by url( writer place order without payment screen ) it will be redirected  to paymentScreen
  if (!cart.savePaymentMethod) {
    props.history.push("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  // oder Summary which right side

  // ex 8.11111 thi is num which took in params func then toFixed convert it to string it will be "8.11" then the Number method will be convert it to Number

  // toFixed(2)) = two digit after the decimal point

  const toPrice = (num) => Number(num.toFixed(2));
  // we defind itemsPrice in cart that calculate qty * price by reduce method // time 6:24
  // 0 = is default value for accumulator

  // original price
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.qty * currentItem.price,
      0
    )
  );

  // if the price more than the 100 $ Bugs then 0 shipping if less then 10$
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);

  // calculate tax 15%
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);

  // total amount
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      {/* left side */}
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2> Shipping</h2>

                <p>
                  {/* strong: property jsx we use it for important value*/}
                  <strong>Name : </strong> {cart.shippingAddress.fullName}{" "}
                  <br />
                  <strong>Address : </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postCode},{" "}
                  {cart.shippingAddress.country}
                </p>
              </div>
            </li>
            {/* payment */}

            <li>
              <div className="card card-body">
                <h2> Payment</h2>

                <p>
                  {/* strong: property jsx */}
                  {/* savePaymentMethod it was my bad should be cart.anything like the same in route in backend stuff i was written PaymentMethod instead of savePaymentMethod */}
                  <strong>Method : </strong> {cart.savePaymentMethod}
                </p>
              </div>
            </li>

            {/* order  */}

            <li>
              <div className="card card-body">
                <h2> Order item</h2>

                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          />
                        </div>
                        {/* show the name  */}
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x {item.price}€ = {item.price * item.qty}€
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* right side action part */}
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>order Summary</h2>
              </li>

              <li>
                <div className="row">
                  <div> Item</div>
                  <div> &#8364; {cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              {/* shipping */}
              <li>
                <div className="row">
                  <div> Shipping</div>
                  <div> &#8364; {cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>

              {/* tax */}
              <li>
                <div className="row">
                  <div> tax Price</div>
                  <div> &#8364; {cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>

              {/* order total */}
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total </strong>
                  </div>

                  <div>
                    <strong> &#8364; {cart.totalPrice.toFixed(2)} </strong>
                  </div>
                </div>
              </li>
              <li>
                {/* block className to make full width */}
                {/* disabled={cart.cartItems.length === 0}> = the button will not work if it empty order*/}
                <button
                  type="button"
                  className="primary block"
                  onClick={placeOrderHandler}
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {
                // if loading is true then run loadingBox component
                loading && <LoadingBox></LoadingBox>
              }

              {error && <MessageBox variant="danger">{error} </MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
