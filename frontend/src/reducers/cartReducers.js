import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_PAYMENT_METHOD,
  CART_REMOVE_ITEM,
  CART_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      // update item

      //check the item or update the item =>if already in cart or not ? if in it then take the new value (for EX new qty value)form it but not duplicate the item in cart just update the in formation.if not exist return the false value(x) which the pervious one it means change nothing

      //x.product == productId
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //add new item if is not existing in the cart
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      //state.cartItems.filter((x)=> x.product !== action.payload = it means filter out the id  which in action.payload
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SHIPPING_ADDRESS:
      // {...state, =  if i have aleardy data in shippingScreen don't delete it can i update on it ex. if i fill the form and i wrote berlin wrong , then refresh or go back as the both case don't lose th e the data even are wrong , can i update on it}
      return { ...state, shippingAddress: action.payload };

    case CART_PAYMENT_METHOD:
      return { ...state, savePaymentMethod: action.payload };
    case CART_EMPTY:
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
