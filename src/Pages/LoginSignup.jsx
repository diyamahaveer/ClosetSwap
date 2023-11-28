import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className = 'loginsignup'>
      <div className = 'loginsignup-container'>
        <h1>Sign Up</h1>
        <h3>Start your shopping journey with ClosetSwap!</h3>
        <div className="loginsignup-fields">
          <input type = "text" placeholder = 'Name' />
          <input type = "email" placeholder = 'Email Address' />
          <input type = "password" placeholder = 'Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className = "loginsignup-agree">
          <input type = "checkbox" name= '' id= '' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div> 
      </div>
    </div>
  )
}

export default LoginSignup
