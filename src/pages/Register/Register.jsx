import React from 'react'
import Banner from '../../components/LoginBanner/Banner'
import { NavLink } from 'react-router-dom'
import './register.scss'


const Register = () => {
  return (
    <div className='container'>
      <div className='wrapper1'>
        <Banner />
      </div>
      <div className="wrapper2">
        <h1>Register</h1>
        <div className='textfields'>
          
            <div className="inputContainer">
              <input
                type='text'
                placeholder="Full Name"
                className="inputBox"
              />
              <label className="errorLabel"></label>
            </div>
          <div className='inputContainers'>
          <div className="inputContainer">
            <input
              type="email"
              placeholder="Email"
              className="inputBox"
            />
            <label className="errorLabel"></label>
          </div>
          <div className="inputContainer">
            <input
              type='text'
              placeholder="Username"
              className="inputBox"
            />
            <label className="errorLabel"></label>
          </div>
          <div className="inputContainer">
            <input
              placeholder="Password"
              type="password"
              className="inputBox"
            />
            <label className="errorLabel"></label>
          </div>
          {/* <div className="inputContainer">
            <input
              placeholder="Confirm your password"
              type="password"
              className="inputBox"
            />
            <label className="errorLabel"></label>
          </div> */}
          </div>

        </div>
        <div className="registerContainer">
            <p>
              Already have an account? Login {" "}
              <NavLink to='/login'>here</NavLink>
            </p>
          </div>
          <div className="inputContainer">
            <input
              className="inputButton"
              type="button"
              value="Register"
            />
          </div>
        </div>

        
    </div>
  )
}

export default Register