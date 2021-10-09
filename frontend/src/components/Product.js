import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
    const { product } = props;
    return (
            <div className="card" key={product._id}>
                  {/*  <!-- Card > product-name & product-img & product-rate &product-price--> */}
                    <Link to={`/product/${product._id}`}>
                        <img src={product.image} className="medium" alt={product.name} />
                    </Link>
                    <div className="card-body">
                      <Link to={`/product/${product._id}`}>
                            <h2>{product.name}</h2>
                        </Link>
                       <Rating rating={product.rating} numReviews={product.numReviews}/>
                        <div /* style={{color: 'black'}}  */className="price"> {product.price} &#8364;</div>
                            
                    </div>
            </div>
    )
}

export default Product;
