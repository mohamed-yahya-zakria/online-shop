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
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  console.log("this is props location search  (registerScreen)", redirect);

  const userRegister = useSelector((state) => state.userRegister);
  const { userData, error, loading } = userRegister;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("the confirm Password is wrong ");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userData) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userData]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>create New account</h1>
        </div>
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
          <label />
          <button className="primary" type="submit">
            register
          </button>
        </div>
        {/* new  user */}
        <div>
          <label />

          <div>
            Already have an account ? {' '}<Link to={`/signin?redirect=${redirect}`}> Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
