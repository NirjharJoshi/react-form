import React from "react";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handlerLogin = () => {
    setIsLogin((prevState) => true);
  };

  const handlerSignUp = () => {
    setIsLogin((prevState) => false);
  };

  return (
    <div
      className="container border border-3 border-success p-3"
      style={{ maxWidth: "500px", marginTop: "10px" }}
    >
      <div className="mb-3">
        <button
          type="button"
          className={`btn btn-${
            isLogin ? "secondary" : "primary"
          } border border-3`}
          style={{ width: "50%" }}
          onClick={handlerLogin}
        >
          LOGIN
        </button>
        <button
          type="button"
          className={`btn btn-${
            isLogin ? "primary" : "secondary"
          } border border-3`}
          style={{ width: "50%" }}
          onClick={handlerSignUp}
        >
          SIGNUP
        </button>
      </div>
      {isLogin && <Login />}
      {!isLogin && <SignUp />}
    </div>
  );
};

export default Form;
