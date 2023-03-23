import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action, email, password) => {
        // const response = await axios.post("http://localhost:8005/signup", {
        //   email,
        //   password,
        // });
        // const success = response.status === 201;
        // if (success) {
        // }
        // action.resetForm();
        navigate("/name");
      },
    });

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

          <button className="cwg">
            <img src="/assets/google.svg" alt="" />
            <p>Continue with Google</p>
          </button>
          <p id="or">- OR -</p>

          <form onSubmit={handleSubmit} className="signup-input-container">
            <div className="input-container">
              <input
                type="email"
                name="email"
                required={true}
                className="input-field"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>

            <div className="input-container">
              <input
                type="password"
                name="password"
                className="input-field"
                required={true}
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null}
            </div>

            <div className="input-container">
              <input
                type="password"
                required={true}
                name="confirmPassword"
                className="input-field"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <p>{errors.confirmPassword}</p>
              ) : null}
            </div>

            <input type="submit" placeholder="Signup" className="signup-btn" />
          </form>
          <div className="login-text">
            <p>Already have an account?</p>
            <span onClick={() => navigate("/Login")}>Signin</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
