import React from "react";
import { useNavigate } from "react-router-dom";

import { useFormik} from 'formik';
import { signUpSchema } from '../../schemas';

const initialValues = {
  email: "",
  password: "",
  confirmPassword: ""
}


const Login = () => {
  const navigate = useNavigate();
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =  useFormik({
    initialValues:initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action)=>{
      console.log(values)
      action.resetForm();    
      navigate('/name');
    }
  })
  console.log(errors)
  
  return (
    <>
      <div className="signup-page">
        <div className="design">
          <div className="row1" onClick={() => navigate("/")}>
            <img src="/assets/Back.png" alt="" />
          </div>
          <h1>Welcome to our blind dating website! </h1>
          <img className='signup-illus' src="/assets/login-illus1.jpg" alt="" />
          <p>
            Welcome to our blind dating website! Join now to discover new
            connections and potentially find love.
          </p>
        </div>
        <div className="signup-form-section">
          <h1>Login</h1>

          <button className="cwg">
            <img src="/assets/google.svg" alt="" />
            <p>Continue with Google</p>
          </button>
          <p id="or">- OR -</p>

          <form onSubmit={handleSubmit} className="signup-input-container">


            
<div className='input-container'>
<input
  type="email"
  name='email'
  required={true}
  className="input-field"
  placeholder='Email'
  value={values.email} 
  onChange={handleChange}
  onBlur={handleBlur}

/>
{errors.email && touched.email ? (<p>{errors.email}</p>) : null }
</div>

<div className='input-container'>

<input
  type="password"
  name='password'
  className="input-field"
  required={true}
  placeholder='Password'
  value={values.password} 
  onChange={handleChange}
  onBlur={handleBlur}
/>
{errors.password && touched.password ? (<p>{errors.password}</p>) : null }
</div>

<div className='input-container'>

{errors.confirmPassword && touched.confirmPassword ? (<p>{errors.confirmPassword}</p>) : null }
</div>


<input type='submit' placeholder='Signup' className='signup-btn' />

</form>
          <div className="login-text">
            <p>Don't have an account?</p>
            <span onClick={() => navigate("/Signup")}>
              Signup
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
