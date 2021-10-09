import Axios from "axios"
import { CART_ADD_ITEM, CART_PAYMENT_METHOD, CART_REMOVE_ITEM, CART_SHIPPING_ADDRESS } from "../constants/cartConstants";

 //(getState() is method from redux-thunk which get state from state in store reducer in local storage that you show the update,add or delete the item. and.cart= cartReducer, i declared it in store. and cartItems = is an array in state in cartReducer

export const addToCart = (productId, qty)=> async(dispatch, getState)=>{
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });
    /*to save in localStorage coz when i refresh i lose the pervious data in cart. it means user can't put many products in cart*/
    //setItem take to params key and value i creat the key which i use in initialState in store after it, the second param is should be string therefore i used  JSON.stringify to convert it to string. 
    
   

    // to delete the localStorage change the values in action part and in the store
    
    localStorage.setItem('myKey', JSON.stringify(getState().cart.cartItems));
};

// delete item from cart
export const removeFromCart = (productId)=>(dispatch ,getState)=>{
    dispatch({type: CART_REMOVE_ITEM , payload: productId});
    localStorage.setItem("myKey", JSON.stringify(getState().cart.cartItems));
}

/// this function return other func which take dispatch
export const saveShippingaddress =(data)=>
(dispatch)=>{
    dispatch({type:CART_SHIPPING_ADDRESS, payload:data});
    localStorage.setItem('shippingKey', JSON.stringify(data));
}

export const paymentMethodAction = (data) => (dispatch)=>{
    dispatch({type: CART_PAYMENT_METHOD, payload:data});
}