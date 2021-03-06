import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating';
import { Link}from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

const ProductScreen = (props) => {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1)
    const productDetails = useSelector((state)=> state.productDetails);
    const { loading, product, error } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId]);

    
    const addToCartHandler =()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <>
            {loading ? (<LoadingBox></LoadingBox>) : 
            error ? (<MessageBox variant="danger">{error}</MessageBox>
            ):(
                <div>
                <Link to="/">  back to Home Page </Link>
                      <div className="row top">
                          <div className="col-2">
                               <img className="large" src={product.image} alt={product.name} />
           
                          </div>
           
                          <div className="col-1">
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
                          <div className="col-1">
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
                                                   {product.countInStock>0? (<span className="success"> In Stock</span> ) : (<span className="danger"> Unavailable </span>)}
                                               </div>
                                           </div>
                                       </li>
                                        {/* Quantity part */}
                                       {
                                           product.countInStock > 0 && (
                                            <>
                                            <li>
                                                <div className="row">
                                                    <div>Quantity:</div>
                                                    <div>
                                    <select
                                        value={qty}
                                        onChange={(e)=> setQty(e.target.value)} >
                                        {[...Array.from({length:product.countInStock},(v, k)=>k+1)].map(
                                            (x)=>(<option key={x} value={x}> {x}</option>))
                            
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
