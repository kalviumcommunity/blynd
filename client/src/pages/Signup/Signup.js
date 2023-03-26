import React from "react";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

  const handelClick = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  const passwordError =
    password === confirmPassword ? "" : "Password must match";

  return (
    <>
      <div className="signup-page">
        <div className="design">
          <div
            className="row1"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/assets/Back.png" alt="" />
          </div>
          <h1>Welcome to our blind dating website! </h1>
          <img className="signup-illus" src="/assets/signup-illus.jpg" alt="" />
          <p>
            Welcome to our blind dating website! Join now to discover new
            connections and potentially find love.
          </p>
        </div>
        <div className="signup-form-section">
          <h1>Create Account</h1>

          <button className="cwg" onClick={googleAuth}>
            <img src="/assets/google.svg" alt="" />
            <p>Continue with Google</p>
          </button>
          <p id="or">- OR -</p>

          <form onSubmit={handelClick} className="signup-input-container">
            <div className="input-container">
              <input
                type="email"
                name="email"
                required={true}
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {/* {errors.email && touched.email ? <p>{errors.email}</p> : null} */}
            </div>

            <div className="input-container">
              <input
                type="password"
                name="password"
                className="input-field"
                required={true}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null} */}
            </div>

            <div className="input-container">
              <input
                type="password"
                required={true}
                name="confirmPassword"
                className="input-field"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              {passwordError ? <p>{passwordError}</p> : null}
            </div>

            <input
              type="submit"
              placeholder="Signup"
              disabled={isLoading && !passwordError}
              className="signup-btn"
            />
          </form>
          <div className="login-text">
            <p>Already have an account?</p>
            <span onClick={() => navigate("/Login")}>Signin</span>
          </div>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Signup;
