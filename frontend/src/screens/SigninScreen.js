import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


const SigninScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect =  props.location.search? props.location.search.split('=')[1] : '/';

    console.log('this is props location (signinScreen) ',props.location)

    const userSignin = useSelector((state) => state.userSignin);
    const { userData , error, loading } = userSignin;
    const dispatch = useDispatch();

     const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(()=>{
   if(userData){
     props.history.push(redirect);
   }
  },[ props.history, redirect, userData]);
  return (
      <div>
    
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Signin</h1>
        </div>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label />
          <button  className="primary" type="submit" >
            Sign in 
          </button>
        </div>
        
        <div>
          <label />
        
        <div>
          new Customer ? {' '} <Link to={`/register?redirect=${redirect}`}> Create your account</Link>
          { console.log(`this is redirect  in return part in signscreen${redirect}`)}
        </div>
       
      </div>
      </form>
     
      </div>
  );
};

export default SigninScreen;
