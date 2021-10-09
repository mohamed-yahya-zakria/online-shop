import Axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"


export const listProducts = ()=> async(dispatch)=>{
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try{
        /* Ajax request */
   /* we wrote async coz Ajax request work with async */
   /* fetch data from backend */
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

             /* 1- error.response = displayed normal error (Error objects are not valid ) without messageBox compo to use
             
             2- error.response.data.message =  displayed messageBox compo  and received the message which i wrote in backend 

             3-error.message = displayed messageBox compo but received (send status from backend ) and the message will be "request fiald with status 404"  but inside the messageBox component

             */
    }
};


