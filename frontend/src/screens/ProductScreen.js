import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating';
import { Link}from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

const ProductScreen = (props) => {
    const dispatch = useDispatch();
    // to get id from url
    const productId = props.match.params.id;
    /* the default value for qty is "1"  */
    const [qty, setQty] = useState(1)
   //const product = data.products.find((x)=> x._id === props.match.params.id);
    const productDetails = useSelector((state)=> state.productDetails);
    //loading, product, error = returning part in reducer
    const { loading, product, error } = productDetails;

    useEffect(() => {
        //detailsProduct in productAction
        dispatch(detailsProduct(productId))
    }, [dispatch, productId]);

    
    const addToCartHandler =()=>{
        /*to direct user to cartScreen component when submit it and this func it will be change the root in react application */
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <>
            {loading ? (<LoadingBox></LoadingBox>) : 
            // error from action and i import it in the top
            error ? (<MessageBox variant="danger">{error}</MessageBox>
            ):(
                <div>
                <Link to="/">  back to Home Page </Link>
                      <div className="row top">
                          <div className="col-2">
                               {/* image */}
                               <img className="large" src={product.image} alt={product.name} />
           
                          </div>
           
                          <div className="col-1">
                               {/* description */}
                               <ul>
                                   <li>
                                       <h1>{product.name}</h1>
                                   </li>
                                   <li>
                                       <Rating 
                                        rating={product.rating} numReviews={product.numReviews}>
                                       </Rating>
                                   </li>
                                   <li>
                                       Price &#8364; {product.price}
                                   </li>
                                   <li>
                                       Description
                                       <p>{product.description}</p>
                                   </li>
                               </ul>
                          </div>
                            {/* cart in right side */}
                          <div className="col-1">
                               {/* action part */}
                               <div className="card card-body">
                                   <ul>
                                       <li>
                                           <div className="row">
                                               <div>price</div>
                                               <div className="price">&#8364; {product.price}</div>
                                           </div>
                                       </li>
                                       <li>
                                           <div className="row">
                                               <div>Status</div>
                                               <div>
                                                   {/* conditionL rendering */}
                                                   {product.countInStock>0? (<span className="success"> In Stock</span> ) : (<span className="danger"> Unavailable </span>)}
                                               </div>
                                           </div>
                                       </li>
                                        {/* Quantity part */}
                                       {
                                           product.countInStock > 0 && (
                                               // empty container = <> </>
                                            <>
                                            <li>
                                                <div className="row">
                                                    <div>Quantity:</div>
                                                    <div>
                                    <select
                                        value={qty}
                                        onChange={(e)=> setQty(e.target.value)} >
                                        {/* to get numbers from 0 to countInStock numbers, EX asume countInStock is 5 this func ([...Array(product.countInStock).keys()]) it will be [0,1,2,3,4] */}
                                        {[...Array.from({length:product.countInStock},(v, k)=>k+1)].map(
                                            (x)=>(<option key={x} value={x}> {x}</option>))
                                        
                                            //x+1 = to start the map from 1 not 0
                            
                                        }
                                    </select>
                                   
                                </div>

                            </div>
                        </li>
                            <li>
                                <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                            </li>
                        </>
                        )
                    }
                    
                                   </ul>
                                  
                               </div>
                          </div>
                      </div>
               </div>
            )}
                
        </>
    );
}

export default ProductScreen;
