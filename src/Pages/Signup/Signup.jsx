import React, { useState } from 'react'
import axios from 'axios'
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

  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'phoneNumber') {
      const isValidPhone = /^[0-9]*$/.test(value);
      setPhoneError(isValidPhone ? '' : 'Phone number should only contain digits');
    }

    if (name === 'password' || name === 'confirmPassword') {
      validatePassword({ ...formData, [name]: value });
    }
  };

  const validatePassword = ({ password, confirmPassword }) => {
    const passwordRules = [
      { test: password.length >= 8, message: 'Password must be at least 8 characters long' },
      { test: /[!@#$%^&*(),.?":{}|<>]/.test(password), message: 'Password must contain at least one special character' },
      { test: password === confirmPassword, message: 'Passwords do not match' }
    ];

    const failedRules = passwordRules.filter(rule => !rule.test);
    if (failedRules.length > 0) {
      setPasswordError(failedRules.map(rule => rule.message).join(', '));
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordError) {
      return;
    }

    const data = JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      country: formData.country,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://lltutor.runasp.net/accounts/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };

    try {
      const response = await axios.request(config);
      setMessage('Signup successful! Please check your email to confirm your account.');
      setError('');
    } catch (error) {
      setError('Signup failed. Please try again.');
      setMessage('');
    }
  };




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
            <form className='signup-form' onSubmit={handleSubmit}>
              
              {/* First and last name */}
              <div className='form-row-signup'>

                <div className='form-group-signup pe-2'>
                  <label htmlFor="firstName"> First Name </label>
                  <input 
                    type="text" 
                    name="firstName"
                    id="firstName" 
                    className='inputName' 
                    placeholder='Defualt' 
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className='form-group-signup ps-2'>
                  <label htmlFor="lastName"> Last Name </label>
                  <input 
                    type="text" 
                    name="lastName" 
                    id="lastName" 
                    className='inputName' 
                    placeholder='Defualt'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* select country */}
              <div className='form-group-signup'>
                <label htmlFor="country"> Country </label>
                <div className='input-group'>
                  
                  <span className='input-group-text'> <img src={Egypt} alt="flags" /> </span>
                  
                  <select name="country" className='form-select' value={formData.country} onChange={handleChange}>

                    <option selected> choose your country </option>
                    <option value="egypt"> Egypt </option>
                    <option value="morocco"> Morocco </option>
                    <option value="tunisia"> Tunisia </option>

                  </select>

                </div>
              </div>

              {/* Phone Number */}
              <div className='form-group-signup'>
                <label htmlFor="phoneNumber"> Phone Number </label>
                <input 
                  type="phone" 
                  name='phoneNumber' 
                  id='phoneNumber' 
                  placeholder='+2012344567891' 
                  className='input-signup'
                  value={formData.phoneNumber}
                  pattern="[0-9]*"
                  onChange={handleChange}
                />
                {phoneError && <div className="text-danger bg-red-100">{phoneError}</div>}
              </div>
              
              {/* Email */}
              <div className='form-group-signup'>
                <label htmlFor="email"> Email <span className='text-red-1000'> * </span> </label>
                <input  
                  type="email" 
                  name='email' 
                  id='email' 
                  className='input-signup' 
                  placeholder='example@gmail.com'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className='form-group-signup'>
                <label htmlFor="password-signup"> Password <span className='text-red-1000'> * </span> </label>
                <input 
                  type="password" 
                  name='password' 
                  id='password-signup' 
                  className='input-signup' 
                  placeholder='**********'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Confirm Password */}
              <div className='form-group-signup'>
                <label htmlFor="confirm-password-signup"> Confirm Password <span className='text-red-1000'> * </span> </label>
                <input 
                type="password" 
                name='confirmPassword' 
                id='confirm-password-signup' 
                className='input-signup' 
                placeholder='**********'
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {passwordError && <div className="text-danger bg-red-100">{passwordError}</div>}

              </div>


               {/* term policy */}
              <div className='term-policy-container'>
                <label forhtml='accept'>
                  <input type="checkbox" name='remember-me' className='input-checkbox-signup' id='accept'/> I agree to univortal's Terms of Services,Privacy Policy and Cookie Policy
                </label>
              </div>

              {/* Signup button */}
              <div className='signup-btn-contaner'>
                <button type="submit"> Sign up </button>
              </div>
              
              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
            </form>

            {/* Footer Container */}
            <div className='footer-signup'>
              
            

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