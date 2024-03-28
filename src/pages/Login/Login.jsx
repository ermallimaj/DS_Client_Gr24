import React from "react";
import "./login.scss";
import { NavLink } from "react-router-dom";
import Banner from "../../components/LoginBanner/Banner";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="wrapper1">
        <Banner />
      </div>
      <form className="wrapper2" onSubmit={handleSubmit}>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="textfieldsLogin">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Username or email"
              className="inputBox"
              required
            />
            <label className="errorLabel"></label>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              placeholder="Password"
              className="inputBox"
              required
            />
            <label className="errorLabel"></label>
            <div className="checkboxContainer">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <p>Remember me</p>
            </div>
          </div>
          <div className="registerContainer">
            <p>
              Don't have an account? Register{" "}
              <NavLink to="/register">here</NavLink>
            </p>
          </div>
          <div className="inputContainer">
            <input className="inputButton" type="submit" value="Log in" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
