import React from 'react'
import { Input } from '@chakra-ui/react'
import { styled, TextField } from '@material-ui/core';

import './Signup.css'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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
            <div className="row1" onClick={()=>{navigate('/')}}>
          <img src="/assets/Back.png" alt="" />
        </div>
                <h1>Welcome to our blind dating website! </h1>
                <img src="/assets/signup-illus.svg" alt="" />
                <p>Welcome to our blind dating website! Join now to discover new connections and potentially find love.</p>
            </div>
            <div className="signup-form-section">
                <h1>Create Account</h1>

                <button className="cwg">
                    <img src="/assets/google.svg" alt="" />
                    <p>Continue with Google</p>
                </button>
                <p id='or'>- OR -</p>

                <div className="signup-input-container">
               
         
          <InputField id="standard-basic" label="Full Name" variant="standard" />
          <InputField id="standard-basic" label="Email" variant="standard" />
          <InputField id="standard-basic" label="Password" variant="standard" />

        </div>
        <button className='signup-btn' onClick={()=> navigate('/name')}>Signup</button>
        <div className="login-text">
            <p>Already have an account?</p>
            <a href="" onClick={()=> navigate('/Login')}>Login</a>
        </div>
            </div>
        </div>
    </>
  )
}

export default Signup