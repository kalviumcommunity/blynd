import React from 'react'
import { styled, TextField } from '@material-ui/core';

import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const InputField = styled(TextField) ({
    '& label.Mui-focused' : {
      color: '#E7ACAC'
    }
  })

  return (
    <>
        <div className="signup-page">
            <div className="design">
                <h1>Welcome to our blind dating website! </h1>
                <img src="/assets/signup-illus.svg" alt="" />
                <p>Welcome to our blind dating website! Join now to discover new connections and potentially find love.</p>
            </div>
            <div className="signup-form-section">
                <h1>Login</h1>

                <button className="cwg">
                    <img src="/assets/google.svg" alt="" />
                    <p>Continue with Google</p>
                </button>
                <p id='or'>- OR -</p>

                <div className="signup-input-container">
                {/* <Input
          className="fullName"
          variant="flushed"
          placeholder="Full Name"
        /> */}
          {/* <Input variant='flushed' placeholder='Flushed' /> */}
          {/* <TextField id="standard-basic" label="Full Name" variant="standard" /> */}
          <InputField id="standard-basic" label="Email" variant="standard" />
          <InputField id="standard-basic" label="Password" variant="standard" />
        {/* <Input className="email" variant="flushed" placeholder="Email" />
        <Input
          className="password"
          variant="flushed"
          placeholder="Password"
        /> */}
        </div>
        <button className='signup-btn' onClick={()=> navigate('/name')}>Login</button>
        <div className="login-text">
            <p>Don't have an account?</p>
            <a href="" onClick={()=> navigate('/Signup')}>Signup</a>
        </div>
            </div>
        </div>
    </>
  )
}

export default Login