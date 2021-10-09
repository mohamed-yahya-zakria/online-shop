import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


const SigninScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // make after sign in redirect to shipping screen
    //props.location.search = it give us query string
   //props.location is an object which has those property in browser , and this result it was when i in register screen and create a new account it direct me to siginScreen and =       {pathname: "/signin", search: "?redirect=/", hash: "", state: undefined, key: "nbsvo7"} 


    const redirect =  props.location.search? props.location.search.split('=')[1] : '/';

    console.log('this is props location (signinScreen) ',props.location)

    const userSignin = useSelector((state) => state.userSignin);
    // userData is property from userReducer which catch the data
    const { userData , error, loading } = userSignin;
    // dispatch is the only way to digger state change
    const dispatch = useDispatch();

     const submitHandler = (e) => {
    // we gonna use ajax request not refresh therefore use e.preventDefalut
    e.preventDefault();
    dispatch(signin(email, password));
  };
  // we put useEffect as component did mount cos  ,[userData] ) the first time userInfo the first time will be empty it's means no user in sign in first time therefore use userInfo in dependinces coz it will be changed from no user to get user in sign in part
  useEffect(()=>{
    // if(userData)  = if the user successfully sign in then direct him to this var(redirect)
   if(userData){
     //props.history.push  = to redirect user for is var(redirect)
     props.history.push(redirect);
   }
  },[ props.history, redirect, userData]);
  return (
      <div>
    
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Signin</h1>
        </div>
      {/*    to delete the error message 401 "unauthorized" */}
     {/*  {{loading && <LoadingBox></LoadingBox>}  = if loading the excute LoadingBox} */}
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      
        <div>
          {/*htmlFor instead of FOR coz that is rule in react and for refers to id in the input
  
  2- required  input is required: Specifies whether a form field needs to be filled in before the form can be submitted. and it's html validation system */}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        {/* password */}
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
          {/*label it's self closing coz it's have not title (i don't write anything on it)and primary is it will be gold*/}
          <label />
          <button  className="primary" type="submit" >
            Sign in 
          </button>
        </div>
        {/* new  user */}
        <div>
            {/* the label make empty space under under new Customer  */}
          <label />
        
        <div>
            {/* {' '} = to make space after ? */}
            {/* {`/register?redirect=${redirect}`} =  coz after you select item which you want then you press proced chockout the the find sign in screen and register option if new user you will redirect automaticlly to shipping to complete your process */}
          new Customer ? {' '} <Link to={`/register?redirect=${redirect}`}> Create your account</Link>
          { console.log(`this is redirect  in return part in signscreen${redirect}`)}
        </div>
       
      </div>
      </form>
     
      </div>
  );
};

export default SigninScreen;
