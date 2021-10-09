import React, { useEffect } from 'react';
import Product from '../components/Product';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


const HomeScreen = () => {
 const dispatch = useDispatch();
    /* useSelector is function and instead to fetch data from react-redux take state as a parameter to call the state from store we don't need to fetch data here*/

    // productList is short cut for reducer reducer in store 
 const productList = useSelector((state)=> state.productList);
 const { loading, error, products} = productList;


    useEffect(()=>{
       /* useDispatch is function from react-redux and instead to fetch data.
          dispatch(listProducts())=> listProducts is action function   */
       dispatch(listProducts());
    },[dispatch]);


    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>) : 
            error ? (<MessageBox variant="danger">{error}</MessageBox>):
            (<div className="row center">
            {/* jsx should be in {} */}
                {products.map(product =>(
                    <Product key={product._id} product={product}/>
                    
            ))}
            </div>)}
         
      </div>
    );
};

export default HomeScreen
