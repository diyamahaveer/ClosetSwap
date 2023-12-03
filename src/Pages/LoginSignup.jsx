import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <div className = 'loginsignup-toptext'>
        <h1>Sign Up</h1>
        <h3>Start your shopping journey with ClosetSwap!</h3>
        </div>
        <div className="loginsignup-fields">
          <h4> Name </h4>
          <input type="text" placeholder='Enter your name' />
          <h4> Email Address </h4>
          <input type="email" placeholder='Enter your email' />
          <h4> UM-ID </h4>
          <input type="id" placeholder='Enter your UM-ID' />
          <h4> Password </h4>
          <input type="password" placeholder='Enter your password' />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the terms and policy</p>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
      </div>
    </div>
  )
}

export default LoginSignup
