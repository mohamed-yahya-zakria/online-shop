import Axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"


export const listProducts = ()=> async(dispatch)=>{
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try{
      const {data} = await Axios.get('/api/products');
      dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
};
  // cart details parts
export const detailsProduct = (productId)=>  async (dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST , payload: productId});
    try{
        //because Axios is async function therefore should be use await
        const {data} =  await Axios.get(`/api/products/${productId}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data});
         /* if get error will see the msg from backend which will apear in MessageBox component */
    } catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: 
            error.response && error.response.data.message
              ? error.response.data.message 
             : error.message}); 
    }
};


