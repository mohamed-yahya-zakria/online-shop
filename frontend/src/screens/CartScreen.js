import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

function CartScreen(props) {
 const productId = props.match.params.id;
 //1- props.location.search = it will return the value after ? (?qty=${qty}) it will be qty=${qty}in productScreen just get qty=${qty}
 // 2- (props.location.search.split('=')[1]) = qty${qty} without (=) coz i used split and we use [1] to get second value which it is ( ${qty} ) individul

 //3- if Number (props.location.search.split('=')[1]) is not excist then the qty is gonna be 1 (props.location.search.split('=')[1] : 1) . it will be in url (props.location.search )

 const qty = props.location.search ? Number
 (props.location.search.split("=")[1]) : 1; 
 
 // fetch data from reducer store
 const cart = useSelector((state)=>state.cart);
 const {cartItems} = cart



 const dispatch = useDispatch();
 useEffect(()=> {
     if(productId){
         dispatch(addToCart(productId,qty));
     }
 },[dispatch, productId, qty]);

 
 // delete Function
 const removeFromCartHandler = (id)=>{
       dispatch(removeFromCart(id));
 };
 // direct to shipping screen
 const checkoutHandler=()=>{
     props.history.push('/signin?redirect=shipping')
 };

    return (
        // the parent div has two columns 
        <div className="row top">
            {/* the second div to give us padding */}
            <div className="col-2">
                <h1>Shopping Basket</h1>
                {cartItems.length === 0 ? (<MessageBox>
                    Cart is empty <Link to="/"> Go to Home Page</Link>
                    </MessageBox>)
                : (
                    <ul>
                        {cartItems.map((item)=>(
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img src={item.image} alt={item.name} className="small"/>
                                    </div>
                                    {/* show the name  */}
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    {/* send the two params to cartAction function */}
                                    <div>
                                        <select value={item.qty} onChange={(e)=> dispatch(addToCart(item.product , Number(e.target.value)) )}>
                                        {[...Array.from({length: item.countInStock}, (v, k)=>k+1)].map(
                                            //x+1 = to start the map from 1 not 0
                                        (x)=>(<option key={x} value={x}> {x}</option>)
                                       // {console.log(`thsi is (x) ${x}`)}
                                        )}

                                        </select>
                                    </div>
                                    <div>{item.price} €</div>
                                    {/* button  */}
                                    <button type="button" onClick={()=>removeFromCartHandler(item.product)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
         <div className="col-1">
             <div className="card card-body"> 
             <ul>
                 <li>
                     {/*  to get how many item then multiplied item.price for each items */}
                     <h3>Subtotal ({cartItems.reduce((accumulator, value)=> {console.log("acc", value, accumulator); return accumulator + value.qty}, 0)} items) : €
                     {cartItems.reduce(( accumulator ,value )=> accumulator + value.price * value.qty, 0) } </h3>
                 </li>
                 <li>
                     {/* disabled={cartItems.length ===0} that you disabled the button as(off) and get the msg (Cart is empty Go to Home Page) which i write in ternay operator*/}
                     <button className="primary block" type="button" onClick={checkoutHandler} disabled={cartItems.length ===0}> Proced to chackout  </button>
                 </li>
             </ul>

             </div>

        </div>
        </div>
    );
};

export default CartScreen;

