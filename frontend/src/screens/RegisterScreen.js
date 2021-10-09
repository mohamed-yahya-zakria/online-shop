import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { register } from "../actions/userActions";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // make after sign in redirect to shipping screen
  //props.location.search = it give us query string
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  console.log("this is props location search  (registerScreen)", redirect);

  const userRegister = useSelector((state) => state.userRegister);
  // userData is property from userReducer which catch the data
  const { userData, error, loading } = userRegister;
  // dispatch is the only way to digger state change
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    // we gonna use ajax request not refresh therefore use e.preventDefalut
    e.preventDefault();
    if (password !== confirmPassword) {
      //   alert = we created to prevent moving around the pinner for loading ");
      alert("the confirm Password is wrong ");
    } else {
      dispatch(register(name, email, password));
    }
  };
  // we put useEffect as component did mount cos  ,[userData] ) the first time userInfo the first time will be empty it's means no user in sign in first time therefore use userInfo in dependinces coz it will be changed from no user to get user in sign in part
  useEffect(() => {
    // if(userData)  = if the user successfully sign in then direct him to this var(redirect)
    if (userData) {
      //props.history.push  = to redirect user for is var(redirect)
      props.history.push(redirect);
    }
  }, [props.history, redirect, userData]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>create New account</h1>
        </div>
        {/*    to delete the error message 401 "unauthorized" */}
        {/*  {{loading && <LoadingBox></LoadingBox>}  = if loading the excute LoadingBox} */}
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}

        <div>
          <label htmlFor="nameID"> name</label>
          <input
            type="text"
            id="nameID"
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
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
          <label htmlFor="confirmPassword">password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder=" confirm your password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">confirm your password</label>
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
          <button className="primary" type="submit">
            register
          </button>
        </div>
        {/* new  user */}
        <div>
          {/* the label make empty space under under new Customer  */}
          <label />

          <div>
            {/* {' '} = to make space after ? */}
            {/*  redirect = which in above */}

            {/*  Link to={`/signin?redirect=${redirect}`}> = we need to pass redirect var to signin screen then go to shipping if he has not and create a new one after that he dircet also to shipping after registration also we do this steps in registrationScreen */}

            {/* redirect=${redirect}`}> =  to direct to sign in which who shipping to payment  time 5:41*/}
            Already have an account ? {' '}<Link to={`/signin?redirect=${redirect}`}> Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
