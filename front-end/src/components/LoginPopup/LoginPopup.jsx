import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("sign up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
      <div className="login-popup-titel">
        <h2>{currentState}</h2>
        <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
      </div>
      <div className="from-inputs">
        {currentState === "log in" ? (
          <></>
        ) : (
          <input type="text" placeholder="Name" required />
        )}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="password" required />
      </div>
      <button>{currentState}</button>
      <div className="login-condition">
        <input type="checkbox" />
        <p>Agree to the terms of use & privacy policy </p>
      </div>
      {currentState === "log in" ? (
        <p>
          Create New Account?
          <span onClick={() => setCurrentState("sign up")}>Click Here</span>
        </p>
      ) : (
        <p>
          Aleady Have Account?
          <span onClick={() => setCurrentState("log in")}>Login</span>
        </p>
      )}
      </form>
      
    </div>
  );
};

export default LoginPopup;
