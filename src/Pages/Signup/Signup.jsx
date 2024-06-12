import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import NavbarRegister from '../../Components/NavbarRegister/NavbarRegister'
import LLtutorLogo from '../../assets/lltutor-logo.svg'
import Facebook from '../../assets/facebook.png'
import Google from '../../assets/google.png'
import Microsoft from '../../assets/microsoft.png'
import Egypt from '../../assets/egypt.png'
import './Signup.css'
import { Link } from 'react-router-dom'





const Signup = () => {
  return (
    <>
      <div id='signup-main' className='container-fluid'>

        {/* Header */}
        <div>
          <NavbarRegister />
        </div>

        {/* Body */}
        <div id='signup-body' className='container'>
          
          {/* container */}
          <div className='signup-container col-6'>
            
            {/* Head container */}
            <div className='header-signup'>
              
              <div className='welcome-message'>
                Welcome To <img src={LLtutorLogo} alt="LLtutor_Logo" />
              </div>
              
            </div>

            {/* Signup Form */}
            <from className='signup-form'>
              
              {/* First and last name */}
              <div className='form-row-signup'>

                <div className='form-group-signup pe-2'>
                  <label htmlFor="firstName"> First Name </label>
                  <input type="text" name="First_Name" id="firstName" className='inputName' placeholder='Defualt'/>
                </div>

                <div className='form-group-signup ps-2'>
                  <label htmlFor="lastName"> Last Name </label>
                  <input type="text" name="Last_Name" id="lastName" className='inputName' placeholder='Defualt'/>
                </div>

              </div>

              {/* select country */}
              <div className='form-group-signup'>
                <label htmlFor="selectCountry"> Country </label>
                <div className='input-group'>
                  
                  <span className='input-group-text'> <img src={Egypt} alt="flags" /> </span>
                  
                  <select name="select_country" className='form-select'>

                    <option selected> choose you country </option>
                    <option value="egypt"> Egypt </option>
                    <option value="morocco"> Morocco </option>
                    <option value="tunisia"> Tunisia </option>

                  </select>

                </div>
              </div>

              {/* Phone Number */}
              <div className='form-group-signup'>
                <label htmlFor="phoneNumber"> Phone Number </label>
                <input type="phone" name='Phone_Number' id='phoneNumber' placeholder='+2012344567891' className='input-signup'/>
              </div>
              
              {/* Email */}
              <div className='form-group-signup'>
                <label htmlFor="newEmail"> Email <span className='text-red-1000'> * </span> </label>
                <input type="email" name='New_Email' id='newEmail' className='input-signup' placeholder='example@gmail.com'/>
              </div>

              {/* Password */}
              <div className='form-group-signup'>
                <label htmlFor="password-signup"> Password <span className='text-red-1000'> * </span> </label>
                <input type="password" name='password' id='password-signup' className='input-signup' placeholder='**********'/>
              </div>

              {/* Confirm Password */}
              <div className='form-group-signup'>
                <label htmlFor="confirm-password-signup"> Confirm Password <span className='text-red-1000'> * </span> </label>
                <input type="password" name='confirmPassword' id='confirm-password-signup' className='input-signup' placeholder='**********'/>
              </div>

            </from>

            {/* Footer Container */}
            <div className='footer-signup'>
              
              {/* term policy */}
              <div className='term-policy-container'>
                <label forhtml='accept'>
                  <input type="checkbox" name='remember-me' className='input-checkbox-signup' id='accept'/> I agree to univortal's Terms of Services,Privacy Policy and Cookie Policy
                </label>
              </div>

              {/* Signup button */}
              <div className='signup-btn-contaner'>
                <button> Sign up </button>
              </div>

              {/* OR container */}
              <div className='sign-with-parent'>

                <div className='signup-text'>
                  -- OR --
                  <br />
                  <span> Signup With </span>

                </div>

              </div>

              {/* Sign up with buttons */}
              <div className='signup-btns-container'>

                <button className='signup-with-btn col-3 text-facebook'>
                  <img src={Facebook} alt="facebook_icon" className='me-2' />
                  Facebook
                </button>

                <button className='signup-with-btn col-3 text-google'>
                  <img src={Google} alt="google_icon" className='me-2' />
                  Google
                </button>

                <button className='signup-with-btn col-3 text-microsoft'>
                  <img src={Microsoft} alt="microsoft_icon" className='me-2' />
                  Microsoft
                </button>

              </div>

              {/* Have Account */}
              <div className='old-account mt-4 col text-center fw-bolder'>
                You have an account? <Link to="/login" className='link-go-login-fromSignup'> Login </Link> 
              </div>

            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default Signup